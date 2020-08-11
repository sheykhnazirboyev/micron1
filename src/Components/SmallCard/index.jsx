import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function SmallCard(props) {

    return (
        <div className="small-card">
            <Link to = "/single-product/1" style = {{ textDecoration: "none", color: "inherit" }}>
                <div className="small-card-img">
                    <img src={props.img} alt={props.img} />
                </div>
            </Link>

            <div className="small-card-content">
                <p className="sm-card-title">
                <Link to = "/single-product/1" style = {{ textDecoration: "none", color: "inherit" }}>
                    {props.title}
                </Link>    
                </p>
                
                <div className="sm-card-stars">
                    {props.stars && props.stars.map((s, i) => <i className="fa fa-star" key={i}></i>)}
                </div>
                <div className="sm-card-cost">
                    <span className="sm-card-new-cost">{props.newCost}</span>
                    <span className="sm-card-old-cost">{props.oldCost}</span>
                </div>
            </div>
        </div>
    )
}

export default SmallCard;