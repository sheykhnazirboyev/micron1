import React from 'react';
import Container from '../Container/Container';
import "./index.css";
import AddsCard from '../AddsCard';

const cards = [
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "addsCard1.jpg",
        newCost: "$ 685",
        oldCost: "$755"
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "img3.jpg",
        newCost: "$ 685",
        oldCost: "$755"
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "bigAd.jpg",
        newCost: "$ 685",
        oldCost: "$755"
        
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "img5.jpg",
        newCost: "$ 685",
        oldCost: "$755"
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "img6.jpg",
        newCost: "$ 685",
        oldCost: "$755"
    },
    {
        type: "Speakers",
        title: "Wireless Audio System Multiroom 360 degree Full base audio", 
        img: "img6.jpg",
        newCost: "$ 685",
        oldCost: "$755"
    }
];

function BestSellers(){
    return(
        <div className = "bestSellers-root">
            <Container>
                <div className = "bestSellers">
                    <div className = "bestsellers-header">
                        <h3>Best Sellers</h3>
                        <div className = "bestsellers-header-right">
                            <ul>
                                <li className = "bordered">Top 20</li>
                                <li>Smart Phones & Tablets</li>
                                <li>Laptops & Computers</li>
                                <li>Video Cameras</li>
                            </ul>
                        </div>
                    </div>
                    <div className = "bestsellers-cards">
                        {cards.map((c, i) => <AddsCard {...c} imgLeft key = {i} />)}
                    </div>
                </div>
                <div className = "bestSellers-special-add">
                    <img src="/specialAdd.png" alt=""/>
                </div>
            </Container>   
        </div>
    )
}

export default BestSellers;