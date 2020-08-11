import React from 'react';
import Container from '../Container/Container';
import Card from '../AddsCard';
import Slider from 'react-slick';
import "./index.css";

const cards = [
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/addsCard1.jpg",
        newCost: "$ 685",
        oldCost: "$755"
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/img3.jpg",
        newCost: "$ 685",
        oldCost: "$755"
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/bigAd.jpg",
        newCost: "$ 685",
        oldCost: "$755"
        
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/img5.jpg",
        newCost: "$ 685",
        oldCost: "$755"
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/img6.jpg",
        newCost: "$ 685",
        oldCost: "$755"
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/img6.jpg",
        newCost: "$ 685",
        oldCost: "$755"
    }
];




function RecentlyAdded(){
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
            slidesToShow: 2,
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
        <div className = "recently-added">
            <Container>
                <div className = "recently-added-header">
                    <h1>Recently Added</h1>
                </div>
                <div className = "recently-added-cards">
                <Slider   {...settings}>
                            {cards.map((c, i) => <div className = "recently-car-item" key = {i} ><Card {...c}  /></div> )}
                    </Slider> 
                </div>
            </Container>
        </div>
    )
}

export default RecentlyAdded;