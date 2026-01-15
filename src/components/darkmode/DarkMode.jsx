import React, { useState, useEffect } from "react";
import "./darkmode.css";

const DarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    // Check for saved theme preference or default to light mode
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.body.classList.add("dark-theme");
        }
    }, []);

    // Toggle theme
    const toggleTheme = () => {
        setIsDark(!isDark);

        if (!isDark) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            className="dark-mode-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <i className={isDark ? "uil uil-sun" : "uil uil-moon"}></i>
        </button>
    );
};

export default DarkMode;
