import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./lazyimage.css";

const LazyImage = ({ src, alt, className, placeholder }) => {
    const [imageSrc, setImageSrc] = useState(placeholder || "");
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            setImageSrc(src);
            setImageLoaded(true);
        };

        img.onerror = () => {
            setImageError(true);
        };
    }, [src]);

    if (imageError) {
        return (
            <div className={`lazy-image-error ${className || ""}`}>
                <i className="uil uil-image-slash"></i>
                <span>Image failed to load</span>
            </div>
        );
    }

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={`lazy-image ${imageLoaded ? "lazy-image--loaded" : ""} ${className || ""}`}
            loading="lazy"
        />
    );
};

LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
};

export default LazyImage;
