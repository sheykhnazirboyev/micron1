import React from 'react';
import AddsCard from '../AddsCard';
import Tab from '../Tab';
import "./index.css";

let cards = [
  {
    type: "Speakers",
    title: "Wireless Audio System Multiroom 360 degree Full ...",
    img: "addsCard1.jpg",
    oldCost: "$685",
		newCost: "$755"
  },
  {
    type: "Speakers",
    title: "Wireless Audio System Multiroom 360 degree Full ...",
    img: "img3.jpg",
    oldCost: "$685",
		newCost: "$755"
  },
  {
    type: "Speakers",
    title: "Wireless Audio System Multiroom 360 degree Full ...",
    img: "img4.jpg",
    oldCost: "$685",
		newCost: "$755"
  },
  {
    type: "Speakers",
    title: "Wireless Audio System Multiroom 360 degree Full ...",
    img: "img5.jpg",
    oldCost: "$685",
		newCost: "$755"
  },
  {
    type: "Speakers",
    title: "Wireless Audio System Multiroom 360 degree Full ...",
    img: "img6.jpg",
    oldCost: "$685",
		newCost: "$755"
  },
  {
    type: "Speakers",
    title: "Wireless Audio System Multiroom 360 degree Full ...",
    img: "img7.jpg",
    oldCost: "$685",
		newCost: "$755"
  }
]

let tabs = ["Fetured", "On Sale", "Top Rated"];

function SpecialSmallAdds(){
  
  return(
    <div className = "Special-small-ads">
      <Tab  tabs = {tabs} size ="normal" />
      <div className = "ads-cards-section">
        {cards.map((c, i) => <AddsCard key = {i} {...c} />)}
      </div>
    </div>
    )
}

export default SpecialSmallAdds;