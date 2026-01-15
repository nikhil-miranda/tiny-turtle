import React from "react";
import "./notfound.css";

const NotFound = () => {
    return (
        <section className="notfound section">
            <div className="notfound__container container">
                <div className="notfound__content">
                    <h1 className="notfound__title">404</h1>
                    <h2 className="notfound__subtitle">Page Not Found</h2>
                    <p className="notfound__description">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                    <a href="/" className="button button--flex notfound__button">
                        <i className="uil uil-estate"></i>
                        Back to Home
                    </a>
                </div>
                <div className="notfound__illustration">
                    <i className="uil uil-exclamation-triangle"></i>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
