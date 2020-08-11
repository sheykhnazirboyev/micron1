import React from 'react';
import {Link} from 'react-router-dom';
import "./index.css";

function AddsCard(props){
    
    let extraImgs = props.additionlaImg && 
    <div className = "additional-imgs">
        {props.additionlaImg.map((img, i) => 
            <img src = {img} key = {i} alt = {img} /> 
        )}
    </div>
    
    return(
        <div className = {`adds-card ${props.imgLeft && "imgLeft"} ${props.big && "big" } `} >
            
            <div className = "adds-card-top">
                <span>{props.type}</span>
                <p className = "card-title">
                <Link to = "/single-product/1" style = {{ textDecoration: "none", color:" inherit" }}>
                    {props.title}
                </Link>
                </p>
            </div>
            <Link to = "/single-product/1" style = {{ textDecoration: "none", color:" inherit" }}>
            <div className = "adds-card-img">
                <img src={`${props.img}`} alt="AddsCard1"/>
            </div>
            </Link>
            {extraImgs}
            <div className = "adds-card-cost">
                    <p className = "new-cost">
                        {props.newCost}
                        <span className = "old-cost">{props.oldCost}</span>
                    </p>
                <div>
                    <img src= "/cart4.webp" alt="Cart"/>
                </div>
            </div>
                
            <div className = "adds-card-bottom">
                <div>
                    <p><i className = "fa fa-refresh"></i> Compare</p>
                    <p><i className = "fa fa-heart-o"></i> Add Wishlist</p>
                </div>
            </div>
            
        </div>
    )
}

export default AddsCard;