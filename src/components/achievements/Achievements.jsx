import React, { useState } from 'react';
import './achievements.css';
import performanceAwardImage from '../../assets/images/nikhil_miranda_award_unbxd.jpeg';
import presentationImage from '../../assets/images/mule_hack_presentation_large.png';
import tmcHackathonImage from '../../assets/images/tmc_hack_group_0.jpg';

const Achievements = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="achievements section" id="achievements">
            <h2 className="section__title">Achievements</h2>
            <span className="section__subtitle">My personal achievements</span>

            <div className="achievements__container container grid">
                <div className="achievements__content">
                    <div>
                        <i class="uil uil-trophy achievements__icon"></i>
                        <h3 className="achievements__title">
                            Best Performer <br /> Award - Unbxd
                        </h3>
                    </div>

                    <span className="achievements__button" onClick={() => toggleTab(1)}>
                        View More{""}
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "achievements__modal active-modal" : "achievements__modal"}>
                        <div className="achievements__modal-content">
                            <i onClick={() => toggleTab(0)} class="uil uil-times achievements__modal-close"></i>
                            <h3 className="achievements__modal-title">
                                Best Performer Award at <br /> Unbxd Inc - 2023
                            </h3>
                            <div className="achievements__modal-image">
                                <img src={performanceAwardImage} className="achievements__modal-image" alt="award" />
                            </div>
                            <p className="achievements__modal-description">
                                This award was given for recognising the Best Performing Employee, for the first quarter of 2023 at Unbxd by Netcore Cloud.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="achievements__content">
                    <div>
                        <i class="uil uil-cloud-check achievements__icon"></i>
                        <h3 className="achievements__title">
                            Mulesoft DTO <br />Hackathon Winner
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="achievements__button">
                        View More
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "achievements__modal active-modal" : "achievements__modal"}>
                        <div className="achievements__modal-content">
                            <i onClick={() => toggleTab(0)} class="uil uil-times achievements__modal-close"></i>
                            <h3 className="achievements__modal-title">
                                Mulesoft DTO Maker Session <br /> Hackathon Winner - 2018
                            </h3>
                            <div className="achievements__modal-image">
                                <img src={presentationImage} className="achievements__modal-image" alt="award" />
                            </div>
                            <p className="achievements__modal-description">
                                This was an “All Age Group” hackathon and was conducted at Cognizant Technology Solutions, Manyata Embassy Business Park, Bangalore.
                            </p>
                            {/* <ul className="achievements__modal-achievements grid">
                                <li className="achievements__modal-achievement">
                                    <i class="uil uil-check-circle achievements__modal-icon"></i>
                                    <p className="achievements__modal-info">
                                        Award 1
                                    </p>
                                </li>

                                <li className="achievements__modal-achievement">
                                    <i class="uil uil-check-circle achievements__modal-icon"></i>
                                    <p className="achievements__modal-info">
                                        Award 2
                                    </p>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>

                <div className="achievements__content">
                    <div>
                        <i class="uil uil-arrow achievements__icon"></i>
                        <h3 className="achievements__title">
                            TheMathCompany <br /> Hackathon Winner
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="achievements__button">
                        View More
                        <i class="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "achievements__modal active-modal" : "achievements__modal"}>
                        <div className="achievements__modal-content">
                            <i onClick={() => toggleTab(0)} class="uil uil-times achievements__modal-close"></i>
                            <h3 className="achievements__modal-title">
                                TheMathCompany Hybrid <br /> Hackathon Winner - 2019
                            </h3>
                            <div className="achievements__modal-image">
                                <img src={tmcHackathonImage} className="achievements__modal-image" alt="award" />
                            </div>
                            <p className="achievements__modal-description">
                                This Hackathon was conducted by TheMathCompany across 21 colleges across India.
                            </p>
                            {/* <ul className="achievements__modal-achievements grid">
                                <li className="achievements__modal-achievement">
                                    <i class="uil uil-check-circle achievements__modal-icon"></i>
                                    <p className="achievements__modal-info">
                                        Award 1
                                    </p>
                                </li>

                                <li className="achievements__modal-achievement">
                                    <i class="uil uil-check-circle achievements__modal-icon"></i>
                                    <p className="achievements__modal-info">
                                        Award 2
                                    </p>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;