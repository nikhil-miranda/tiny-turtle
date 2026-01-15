import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console for debugging
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "2rem",
            textAlign: "center",
            backgroundColor: "var(--body-color)",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--title-color)" }}>
            Oops! Something went wrong
          </h1>
          <p style={{ marginBottom: "2rem", color: "var(--text-color)" }}>
            We're sorry for the inconvenience. Please try refreshing the page.
          </p>
          <button
            className="button button--flex"
            onClick={() => window.location.reload()}
            style={{ cursor: "pointer" }}
          >
            Refresh Page
          </button>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <details
              style={{
                marginTop: "2rem",
                padding: "1rem",
                backgroundColor: "#f5f5f5",
                borderRadius: "0.5rem",
                maxWidth: "800px",
                textAlign: "left",
              }}
            >
              <summary style={{ cursor: "pointer", marginBottom: "1rem" }}>
                Error Details (Development Only)
              </summary>
              <pre style={{ fontSize: "0.875rem", overflow: "auto" }}>
                {this.state.error.toString()}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
