import React from 'react';
import Container from '../Container/Container';
import Tab from '../Tab';
import AddsCard from  "../AddsCard";
import "./index.css";

function MoreTabs(){
	const tabs = ["Best Deals", "TV & Video", "Cameras", "Audio", "Smartphones", 
				"GPS and Navi", "Computers", "Portable Audio", "Acessors"];

	const cards = [
		{
			type: "Speakers",
			title: "Wireless Audio System Multiroom 360 degree Full base audio", 
			img: "addsCard1.jpg",
			oldCost: "$685",
			newCost: "$755"
		},
		{
			type: "Speakers",
			title: "Wireless Audio System Multiroom 360 degree Full base audio", 
			img: "img3.jpg",
			oldCost: "$685",
			newCost: "$755"
		},
		{
			type: "Speakers",
			title: "Wireless Audio System Multiroom 360 degree Full base audio", 
			img: "bigAd.jpg",
			oldCost: "$685",
			newCost: "$755",
			additionlaImg: ["addImg1.jpg", "addImg2.jpg", "addImg3.jpg"]
		},
		{
			type: "Speakers",
			title: "Wireless Audio System Multiroom 360 degree Full base audio", 
			img: "img5.jpg",
			oldCost: "$685",
			newCost: "$755"
		},
		{
			type: "Speakers",
			title: "Wireless Audio System Multiroom 360 degree Full base audio", 
			img: "img6.jpg",
			oldCost: "$685",
			newCost: "$755"
		}
	];

	return(
		<div className = "more-tabs">
			<Container>
				<Tab tabs = {tabs} size = "small" />
				<div className = "more-tabs-cards">
					<div className = "more-tabs-left-panel">
						<AddsCard {...cards[0]} bg = "White" />
						<AddsCard {...cards[1]} bg = "White" />
					</div>
					<div className = "more-tabs-center">
						<AddsCard {...cards[2]} 
							bg = "White" 
							big  />
					</div>
					<div className = "more-tabs-right-panel">
						<AddsCard {...cards[3]} bg = "White" />
						<AddsCard {...cards[4]} bg = "White" />
					</div>
				</div>
			</Container>
		</div>
	)
}

export default MoreTabs;