import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Databases from './Databases';
import Miscellaneous from './Miscellaneous';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical levels</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Databases />
                <Miscellaneous />
            </div> 
        </section>
    );
};

export default Skills;