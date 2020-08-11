import React from 'react';
import Slider from "react-slick";
import "./index.css";


function Carousel(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return(
        <div className = "Carousel">
            <Slider  {...settings} >
                div
            </Slider>
        </div>
    )
}

export default Carousel;