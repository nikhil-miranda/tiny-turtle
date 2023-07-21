import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Miranda</a>

                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close"></i>

                    <div className="nav_-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header;