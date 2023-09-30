import React, { useState } from 'react';
import './qualification.css';


const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section" id='qualifications'>
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                </div>

                <div className="qualification__sections">
                
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder__dark"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title__dark">
                                    Senior Software Engineer
                                </h3>
                                <span className="qualification__subtitle">
                                    Unbxd by Netcore Cloud
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                                    2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Software Development Engineer
                                </h3>
                                <span className="qualification__subtitle">
                                    Unbxd by Netcore Cloud
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                                    2020 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Research Fellowship
                                </h3>
                                <span className="qualification__subtitle">
                                    Samsung Research Institute, Bangalore
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                                    2019 - 2020
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title__dark">
                                    Bachelor of Engineering
                                </h3>
                                <div className="qualification__subtitle">
                                    Electronics & Communication <br /> BMSIT, Bangalore
                                </div>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                                    2015 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder__dark"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Pre-University | PCM C++
                                </h3>
                                <span className="qualification__subtitle">
                                    AECS 3, Mumbai
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                                    2012 - 2014
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    High School | CBSE
                                </h3>
                                <span className="qualification__subtitle">
                                    AECS 3, Mumbai
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                                    2002 - 2012
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Qualification;