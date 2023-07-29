import React from 'react';
import './recommendations.css';
import { Data } from './Data';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";


const Recommendations = () => {
    return (
        <section className="recommendations container section" id="recommendations">

            <h2 className="section__title">Recommendations</h2>
            <span className="section__subtitle">What my colleagues say about me</span>

            <Swiper className="recommendations__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    "clickable": true
                }}
                breakpoints={{
                    576: {
                        "slidesPerView": 2,
                    },
                    768: {
                        "slidesPerView": 2,
                        "spaceBetween": 48
                    }
                }}
                // modules={[Pagination]}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="recommendation__card" key={id}>
                            <img src={image} alt="" className="recommendation__img" />

                            <h3 className="recommendation__name">{title}</h3>
                            <p className="recommendation__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default Recommendations;