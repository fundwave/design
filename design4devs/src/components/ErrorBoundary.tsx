import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[50vh] flex items-center justify-center p-8">
          <div className="max-w-md text-center">
            <div className="text-6xl mb-4">😵</div>
            <h2 className="text-2xl font-bold text-primary mb-2">Something went wrong</h2>
            <p className="text-secondary mb-6">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="btn btn-primary"
              >
                Refresh Page
              </button>
              <Link to="/" className="btn btn-secondary">
                Go Home
              </Link>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-tertiary hover:text-secondary">
                  Error details (dev only)
                </summary>
                <pre className="mt-2 p-4 bg-bg-tertiary rounded-lg text-xs overflow-auto text-error-text">
                  {this.state.error.message}
                  {"\n\n"}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * A simpler error fallback for smaller components
 */
interface ErrorFallbackProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorFallback({ message = "Failed to load content", onRetry }: ErrorFallbackProps) {
  return (
    <div className="p-6 rounded-xl bg-error-bg border border-error-border text-center">
      <p className="text-error-text mb-3">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn btn-sm btn-secondary">
          Try Again
        </button>
      )}
    </div>
  );
}
