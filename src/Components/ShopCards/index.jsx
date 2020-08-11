import React from 'react';
import Container from '../Container/Container';
import Card from '../ShopListCard';
import "./index.css";

const cards = [
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/addsCard1.jpg",
        newCost: "$ 685",
        oldCost: "$755",
        stars: new Array(5).fill(1),
        extraInfo: [
        	"Brand new and high quality", 
        	"Made of supreme quality, durable EVA crush resistant, anti-shock...",
        	"20 MP Electro and 28 megapixel CMOS rear camera"
        ]
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/img3.jpg",
        newCost: "$ 685",
        oldCost: "$755",
        stars: new Array(5).fill(1),
        extraInfo: [
        	"Brand new and high quality", 
        	"Made of supreme quality, durable EVA crush resistant, anti-shock...",
        	"20 MP Electro and 28 megapixel CMOS rear camera"
        ]
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/bigAd.jpg",
        newCost: "$ 685",
        oldCost: "$755",
        stars: new Array(5).fill(1),
        extraInfo: [
        	"Brand new and high quality", 
        	"Made of supreme quality, durable EVA crush resistant, anti-shock...",
        	"20 MP Electro and 28 megapixel CMOS rear camera"
        ]
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/img5.jpg",
        newCost: "$ 685",
        oldCost: "$755",
        stars: new Array(5).fill(1),
        extraInfo: [
        	"Brand new and high quality", 
        	"Made of supreme quality, durable EVA crush resistant, anti-shock...",
        	"20 MP Electro and 28 megapixel CMOS rear camera"
        ]
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/img6.jpg",
        newCost: "$ 685",
        oldCost: "$755",
        stars: new Array(5).fill(1),
        extraInfo: [
        	"Brand new and high quality", 
        	"Made of supreme quality, durable EVA crush resistant, anti-shock...",
        	"20 MP Electro and 28 megapixel CMOS rear camera"
        ]
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "/img6.jpg",
        newCost: "$ 685",
        oldCost: "$755",
        stars: new Array(5).fill(1),
        extraInfo: [
        	"Brand new and high quality", 
        	"Made of supreme quality, durable EVA crush resistant, anti-shock...",
        	"20 MP Electro and 28 megapixel CMOS rear camera"
        ]
    }
];

function ShopCards(props){
	return(
		<div>
			<Container>
				<div className = "shop-cards">
					{cards.map((c, i) => <Card key = {i} {...c}  />)}
				</div>
                <div className = "pagination">
                    <p className = "active-page">1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
			</Container>
		</div>
	)
}

export default ShopCards;