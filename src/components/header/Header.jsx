import React, { useState } from 'react';
import './header.css';

const Header = () => {
    /* Toggle Menu */
    const [Toggle, showMenu] = useState(false);

    return (
        <header className='header'>
            <nav className="nav container">
                <a href="#home" className="nav__logo">Nikhil Miranda</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#achievements" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Achievements
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualifications" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Qualifications
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#recommendations" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Recommendations
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#Blog" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Blog
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;