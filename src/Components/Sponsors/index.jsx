import React from 'react';
import Container from '../Container/Container'
import Slider from 'react-slick';
import "./index.css";


const sponsorsImg  = [
    "/sponsors1.png",
    "/sponsors2.png",
    "/sponsors3.png",
    "/sponsors4.png",
    "/sponsors5.png",
    "/sponsors6.png",
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      />
    );
  }
  


function Sponsors(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
    return(
        <div>
            <Container>
                <div className = "sponsors">
                    <Slider {...settings}>
                        {sponsorsImg.map((s, i) => <img src = {s} key = {i} alt = {s} />)}
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default Sponsors;