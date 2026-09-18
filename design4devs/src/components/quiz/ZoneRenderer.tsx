/**
 * Zone Renderer
 * 
 * Renders UI with dynamic zone transformations based on config.
 * Uses data-zone attributes to identify clickable areas.
 * Captures zone screenshots using html2canvas for the answer picker.
 */

import html2canvas from "html2canvas-pro";
import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useRef,
  useState,
  ReactNode,
  CSSProperties,
} from "react";
import { ConfigZone, ZoneTransform, ChildrenTransform } from "./config-types";

// ============================================================================
// Context for zone state
// ============================================================================

interface ZoneContextValue {
  fixedZones: Set<string>;
  highlightedZone: string | null;
  pendingZone: string | null;
  onZoneClick: (zoneId: string, screenshot: string | null) => void;
  getZoneConfig: (zoneId: string) => ConfigZone | undefined;
  captureZone: (zoneId: string) => Promise<string | null>;
  zoneCaptures: Map<string, string>;
}

const ZoneContext = createContext<ZoneContextValue | null>(null);

export function useZoneContext() {
  const ctx = useContext(ZoneContext);
  if (!ctx) throw new Error("useZoneContext must be used within ZoneProvider");
  return ctx;
}

interface ZoneProviderProps {
  children: ReactNode;
  zones: ConfigZone[];
  fixedZones: Set<string>;
  highlightedZone: string | null;
  pendingZone: string | null;
  /** Click handler that receives zoneId and screenshot */
  onZoneClick: (zoneId: string, screenshot: string | null) => void;
}

export function ZoneProvider({
  children,
  zones,
  fixedZones,
  highlightedZone,
  pendingZone,
  onZoneClick,
}: ZoneProviderProps) {
  const [zoneCaptures, setZoneCaptures] = useState<Map<string, string>>(new Map());

  const getZoneConfig = useCallback(
    (zoneId: string) => zones.find((z) => z.id === zoneId),
    [zones]
  );

  const captureZone = useCallback(async (zoneId: string): Promise<string | null> => {
    // Check cache first
    if (zoneCaptures.has(zoneId)) {
      return zoneCaptures.get(zoneId) || null;
    }

    // Check if html2canvas is available
    if (typeof html2canvas === 'undefined') {
      console.error('html2canvas is not loaded!');
      return null;
    }

    // Find the zone element - try data-zone first, then data-zone-id
    let element = document.querySelector(`[data-zone="${zoneId}"]`) as HTMLElement;
    if (!element) {
      element = document.querySelector(`[data-zone-id="${zoneId}"]`) as HTMLElement;
    }
    if (!element) {
      console.error(`Zone element not found for: ${zoneId}`);
      return null;
    }

    try {
      // Store original styles
      const originalStyle = element.style.cssText;
      const originalClasses = element.className;
      
      // Remove interaction styles temporarily
      element.className = element.className
        .replace(/ring-\S+/g, '')
        .replace(/scale-\S+/g, '')
        .replace(/bg-amber-\S+/g, '')
        .replace(/hover:\S+/g, '');
      
      // Ensure element is visible and has dimensions
      const rect = element.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        console.warn(`Zone element has no dimensions: ${zoneId}`);
        element.className = originalClasses;
        return null;
      }

      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: Math.min(2, 800 / Math.max(rect.width, rect.height)), // Scale down large elements
        logging: false,
        useCORS: true,
        allowTaint: true,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        x: 0,
        y: 0,
        width: rect.width,
        height: rect.height,
      });

      // Restore original styles
      element.className = originalClasses;
      element.style.cssText = originalStyle;

      const dataUrl = canvas.toDataURL('image/png');

      // Cache the capture
      setZoneCaptures(prev => new Map(prev).set(zoneId, dataUrl));
      
      return dataUrl;
    } catch (error) {
      console.error('Failed to capture zone:', zoneId, error);
      return null;
    }
  }, [zoneCaptures]);

  return (
    <ZoneContext.Provider
      value={{ 
        fixedZones, 
        highlightedZone, 
        pendingZone, 
        onZoneClick, 
        getZoneConfig,
        captureZone,
        zoneCaptures,
      }}
    >
      {children}
    </ZoneContext.Provider>
  );
}

// ============================================================================
// Zone Component - Wraps content and applies transforms
// ============================================================================

interface ZoneProps {
  id: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: React.ElementType;
}

/**
 * Zone wrapper component that applies transforms based on fixed state
 */
export function Zone({ id, children, className = "", style = {}, as: Tag = "div" }: ZoneProps) {
  const { fixedZones, highlightedZone, pendingZone, onZoneClick, getZoneConfig, captureZone } = useZoneContext();
  const isFixed = fixedZones.has(id);
  const isHighlighted = highlightedZone === id;
  const isPending = pendingZone === id;
  const zone = getZoneConfig(id);

  // Calculate classes and styles from transforms
  let computedClasses = className;
  let computedStyles: CSSProperties = { ...style };
  let computedChildren = children;

  if (zone) {
    for (const transform of zone.transforms) {
      switch (transform.type) {
        case "class":
          computedClasses += ` ${isFixed ? transform.fixed : transform.broken}`;
          break;
        case "style":
          Object.assign(computedStyles, isFixed ? transform.fixed : transform.broken);
          break;
        case "children":
          computedChildren = isFixed ? transform.fixed : transform.broken;
          break;
        case "visibility":
          const visibility = isFixed ? transform.fixed : transform.broken;
          if (visibility === "hidden") {
            computedStyles.display = "none";
          }
          break;
      }
    }
  }

  // Add interaction classes
  const interactionClasses = `
    cursor-pointer transition-all duration-300 rounded-lg
    ${isHighlighted ? "ring-2 ring-green-400 ring-offset-2 scale-[1.02]" : ""}
    ${isPending ? "ring-2 ring-amber-500 ring-offset-2 bg-amber-100/30 scale-[1.01]" : ""}
    ${!isFixed && !isHighlighted && !isPending ? "hover:ring-2 hover:ring-amber-400/50 hover:ring-offset-1" : ""}
  `.trim();

  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFixed) return;
    
    // Small delay to ensure DOM is ready
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Capture the zone screenshot before triggering the click handler
    const screenshot = await captureZone(id);
    onZoneClick(id, screenshot);
  };

  return (
    <Tag
      data-zone={id}
      data-fixed={isFixed}
      className={`${computedClasses} ${interactionClasses}`}
      style={computedStyles}
      onClick={handleClick}
    >
      {computedChildren}
    </Tag>
  );
}

// ============================================================================
// Zone Content - For swapping content based on state
// ============================================================================

interface ZoneContentProps {
  zoneId: string;
  broken: ReactNode;
  fixed: ReactNode;
}

/**
 * Renders different content based on zone fixed state
 */
export function ZoneContent({ zoneId, broken, fixed }: ZoneContentProps) {
  const { fixedZones } = useZoneContext();
  const isFixed = fixedZones.has(zoneId);
  return <>{isFixed ? fixed : broken}</>;
}

// ============================================================================
// Zone Highlight Overlay - Canvas-based highlighting
// ============================================================================

interface ZoneOverlayProps {
  containerRef: React.RefObject<HTMLElement>;
  zones: ConfigZone[];
  fixedZones: Set<string>;
  highlightedZone: string | null;
  pendingZone: string | null;
}

/**
 * Canvas overlay for zone highlights (optional, for more visual feedback)
 */
export function ZoneOverlay({
  containerRef,
  zones,
  fixedZones,
  highlightedZone,
  pendingZone,
}: ZoneOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Match canvas size to container
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw highlights for zones with bounds
    zones.forEach((zone) => {
      if (!zone.bounds) return;

      const x = (zone.bounds.x / 100) * canvas.width;
      const y = (zone.bounds.y / 100) * canvas.height;
      const w = (zone.bounds.width / 100) * canvas.width;
      const h = (zone.bounds.height / 100) * canvas.height;

      const isFixed = fixedZones.has(zone.id);
      const isHighlighted = highlightedZone === zone.id;
      const isPending = pendingZone === zone.id;

      if (isHighlighted) {
        ctx.strokeStyle = "#4ade80";
        ctx.lineWidth = 3;
        ctx.setLineDash([]);
        ctx.strokeRect(x, y, w, h);
      } else if (isPending) {
        ctx.strokeStyle = "#f59e0b";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.strokeRect(x, y, w, h);
        ctx.fillStyle = "rgba(245, 158, 11, 0.1)";
        ctx.fillRect(x, y, w, h);
      } else if (!isFixed) {
        // Subtle indicator for unfixed zones
        ctx.strokeStyle = "rgba(245, 158, 11, 0.3)";
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.strokeRect(x, y, w, h);
      }
    });
  }, [containerRef, zones, fixedZones, highlightedZone, pendingZone]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  );
}

// ============================================================================
// Auto Zone Detector - Finds elements by selector and attaches handlers
// ============================================================================

interface AutoZoneDetectorProps {
  containerRef: React.RefObject<HTMLElement>;
  zones: ConfigZone[];
  fixedZones: Set<string>;
  onZoneClick: (zoneId: string) => void;
}

/**
 * Automatically detects zones by selector and applies transforms
 * Use this when you have plain HTML/JSX without Zone wrappers
 */
export function useAutoZoneDetector({
  containerRef,
  zones,
  fixedZones,
  onZoneClick,
}: AutoZoneDetectorProps) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cleanupFns: (() => void)[] = [];

    zones.forEach((zone) => {
      // Find element by selector or data-zone attribute
      const selector = zone.selector.startsWith("[")
        ? zone.selector
        : `[data-zone="${zone.selector}"]`;
      
      const element = container.querySelector(selector) as HTMLElement;
      if (!element) return;

      const isFixed = fixedZones.has(zone.id);

      // Apply transforms
      zone.transforms.forEach((transform) => {
        switch (transform.type) {
          case "class":
            // Remove both classes first, then add the correct one
            transform.broken.split(" ").forEach((c) => c && element.classList.remove(c));
            transform.fixed.split(" ").forEach((c) => c && element.classList.remove(c));
            const classesToAdd = isFixed ? transform.fixed : transform.broken;
            classesToAdd.split(" ").forEach((c) => c && element.classList.add(c));
            break;
          case "style":
            const styles = isFixed ? transform.fixed : transform.broken;
            Object.assign(element.style, styles);
            break;
          case "content":
            element.innerHTML = isFixed ? transform.fixed : transform.broken;
            break;
          case "attribute":
            element.setAttribute(transform.attr, isFixed ? transform.fixed : transform.broken);
            break;
          case "visibility":
            element.style.display = (isFixed ? transform.fixed : transform.broken) === "hidden" ? "none" : "";
            break;
        }
      });

      // Add click handler
      const handleClick = (e: Event) => {
        e.stopPropagation();
        if (!isFixed) onZoneClick(zone.id);
      };
      element.addEventListener("click", handleClick);
      cleanupFns.push(() => element.removeEventListener("click", handleClick));

      // Add visual indicators
      element.style.cursor = isFixed ? "default" : "pointer";
      element.setAttribute("data-zone-id", zone.id);
      element.setAttribute("data-zone-fixed", String(isFixed));
    });

    return () => cleanupFns.forEach((fn) => fn());
  }, [containerRef, zones, fixedZones, onZoneClick]);
}
