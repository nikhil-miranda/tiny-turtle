import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bxs-castle about__icon"></i>
                <h3 className="about__title">Camping</h3>
                <span className="about__subtitle">13 Places</span>
            </div>

            <div className="about__box">
                <i className="bx bxs-joystick about__icon"></i>
                <h3 className="about__title">Gaming</h3>
                <span className="about__subtitle">3000+ Hrs</span>
            </div>
        
            <div className="about__box">
                <i className="bx bxs-book about__icon"></i>
                <h3 className="about__title">Reading</h3>
                <span className="about__subtitle">5 Books</span>
            </div>
        
        </div>
    );
};

export default Info;