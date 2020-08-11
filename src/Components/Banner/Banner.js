import React from 'react';
import Slider from 'react-slick';
import "./Banner.css";
import {Link} from 'react-router-dom';
import Container from '../Container/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner(){

	let settings = {
	  dots: true,
	  arrows: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
	}

	const slides = [
		{ id: "1", title: "The new standart", subTitle: "Under favorable smartwatches", from : "from", 
			cost: "749", supCost: "99", img: "/banner1.png", button: "Start Buying",  currency: "$"},
		{ id: "2", title: "TimePieces That make a statement", 
			 img: "/banner2.png", button: "Start Buying", imgWidth: "350"},
		{ id: "3", title: "The new standart", subTitle: "Under favorable smartwatches", from : "from", 
			cost: "749", supCost: "99",currency: "$",  img: "/banner3.png", button: "Start Buying"},
	]

	return(

		<div className = "Banner" style = {{ backgroundImage: "url(/banner.jpg)" }} >
		<Container>
		<div className = "Slide-container">
			<div className = "carousel">
				<Slider {...settings} >
					{slides.map((slide, i) => 
					<div className = "item-root" key = {i}>
						<div className = "item">
							<div className = "item-text">
								<p className = "big-txt">{slide.title}</p>
								<h4>{slide.subTitle}</h4>
								<p className = "from">{slide.from}</p>
								<p className = "cost">
								<sup>{slide.currency}</sup>{slide.cost}<sup>{slide.supCost}</sup>		
								</p>
								<button className = "button yellow big-btn">
									<Link className = "link" to = {`/single-product/${slide.id}`}>{slide.button}</Link>
								</button>
							</div>
							<div className = "item-slide">
								<img src={slide.img} alt= {slide.img} width = {slide.imgWidth} />
							</div>
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