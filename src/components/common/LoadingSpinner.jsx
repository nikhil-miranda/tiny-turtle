import React from "react";
import "./loadingspinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container" role="status" aria-live="polite">
      <div className="loading-spinner"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
