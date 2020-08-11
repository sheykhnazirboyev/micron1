import React from 'react';
import Slider from 'react-slick';
import "./index.css";



function CardImgSlider({baseUrl, imgs, imgName}){
	const settings = {
		 customPaging: function(i) {
	        return (
	          <a className = "dots-slide" href = "asdsa">
	            <img src={`${baseUrl}${imgName}${i + 1}.jpg`}  alt = "img"  />
	          </a>
	        );
	      },
		  dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
	}
	return(
		<div className = "card-img-slider">
			<Slider {...settings} >
				{imgs.map((img, i) => 
					<div className = "img-div" key = {i}>
						<img 
							src= {`${baseUrl}${imgName}${img}.jpg`}
							alt= {`${baseUrl}${imgName}${img}.jpg`} />
					</div>)}
			</Slider>
		</div>
	)
}

export default CardImgSlider;