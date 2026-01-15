import React from "react";
import PropTypes from "prop-types";
import "./webpimage.css";

/**
 * WebP Image Component with fallback support
 * Automatically uses WebP format with fallback to original format for older browsers
 */
const WebPImage = ({
    src,
    webpSrc,
    alt,
    className = "",
    loading = "lazy"
}) => {
    // If webpSrc is not provided, try to auto-generate it
    const webpPath = webpSrc || src.replace(/\.(png|jpg|jpeg)$/i, '.webp').replace('/images/', '/images/webp/');

    return (
        <picture className={`webp-image ${className}`}>
            {/* WebP source for modern browsers */}
            <source srcSet={webpPath} type="image/webp" />

            {/* Fallback to original format for older browsers */}
            <img
                src={src}
                alt={alt}
                loading={loading}
                className="webp-image__img"
            />
        </picture>
    );
};

WebPImage.propTypes = {
    src: PropTypes.string.isRequired,
    webpSrc: PropTypes.string,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    loading: PropTypes.oneOf(["lazy", "eager"]),
};

export default WebPImage;
