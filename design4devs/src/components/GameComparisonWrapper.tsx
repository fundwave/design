import { Check, Copy, Gamepad2, Image } from "lucide-react";
import { ReactNode, useRef, useState } from "react";

import html2canvas from "html2canvas-pro";

interface GameComparisonWrapperProps {
  gameContent: ReactNode;
  badTitle: string;
  badContent: ReactNode;
  goodTitle: string;
  goodContent: ReactNode;
}

export function GameComparisonWrapper({ gameContent, badTitle, badContent, goodTitle, goodContent }: GameComparisonWrapperProps) {
  const [showComparison, setShowComparison] = useState(false);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyScreenshot = async () => {
    if (!comparisonRef.current) return;

    try {
      const canvas = await html2canvas(comparisonRef.current, {
        backgroundColor: "#ffffff",
        scale: 2
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const item = new ClipboardItem({ "image/png": blob });
          navigator.clipboard.write([item]).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          });
        }
      });
    } catch (error) {
      console.error("Failed to copy screenshot:", error);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-bg-secondary p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-primary">Try It Out</h2>
        <div className="flex items-center gap-2">
          {showComparison && (
            <button onClick={handleCopyScreenshot} className="btn btn-secondary btn-sm flex items-center gap-2" disabled={copied}>
              {copied ? (
                <span className="flex items-center gap-1 text-success-text">
                  <Check className="w-4 h-4" /> Copied!
                </span>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy
                </>
              )}
            </button>
          )}
          <div className="flex rounded-lg border border-border overflow-hidden">
            <button 
              onClick={() => setShowComparison(false)} 
              className={`p-2 transition-colors cursor-pointer ${showComparison ? "text-primary hover:text-ocean-950" : "bg-ocean-50 text-ocean-600"}`}
            >
              <Gamepad2 className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setShowComparison(true)} 
              className={`p-2 transition-colors cursor-pointer ${!showComparison ? "text-primary hover:text-ocean-950" : "bg-ocean-50 text-ocean-600"}`}
            >
              <Image className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {!showComparison ? (
        gameContent
      ) : (
        <div>
          <div ref={comparisonRef} className="bg-bg-secondary rounded-xl border border-border p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-xl border border-error-border overflow-hidden">
                <div className="bg-error-bg px-4 py-2.5 text-error-text text-sm font-medium">✗ {badTitle}</div>
                <div className="p-5 bg-bg-primary">{badContent}</div>
              </div>
              <div className="rounded-xl border border-success-border overflow-hidden">
                <div className="bg-success-bg px-4 py-2.5 text-success-text text-sm font-medium">✓ {goodTitle}</div>
                <div className="p-5 bg-bg-primary">{goodContent}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
