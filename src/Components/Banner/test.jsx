import React from 'react';
import Slider from 'react-slick';
import "./Banner.css";
import Container from '../Container/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner(){

	let settings = {
	  dots: false,
	  arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
	}
	const slides = [
		{ title: "The new standart", subTitle: "Under favorable smartwatches", from : "from", 
			cost: "749", supCost: "99", img: "/banner1.png", button: "Start Buying", currency: "$"},
		{ title: "TimePieces That make a statement", 
			 img: "/banner2.png", button: "Start Buying", imgWidth: "350"},
		{ title: "The new standart", subTitle: "Under favorable smartwatches", from : "from", 
			cost: "749", supCost: "99",currency: "$",  img: "/banner3.png", button: "Start Buying"},
	]
	return(

		<div className = "Banner" style = {{ backgroundImage: "url(/banner.jpg)" }} >
		<Container>
		<div className = "Slide-container">
			<div className = "carousel">
				<Slider {...settings} >
				{slides.map((slide, i) => 
					<div key = "i" className = "item-root">
						<div className = "item">
							<div className = "item-text">
								<p className = "big-txt">{slide.title}</p>
								<h4>{slide.subTitle}</h4>
								<p>{slide.from}</p>
								<p className = "cost">
								<sup>{slide.currency}</sup>{slide.cost}<sup>{slide.supCost}</sup>		
								</p>
								<button className = "button yellow big">{slide.button}</button>
							</div>
							
								<img src= {slide.img} alt= {slide.img} width = {slide.imgWidth} />
							
						</div>
					</div>
				)}
				
				</Slider>
			</div>	
		</div>
		</Container>
		</div>
		)
}

export default Banner;