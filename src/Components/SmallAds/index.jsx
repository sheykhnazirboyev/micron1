import React from 'react';
import Container from '../Container/Container';
import {Link} from 'react-router-dom';
import "./index.css";

const ads = [
    {
        img: "/ad-camera.png",
        title: "Catch big deals on the cameras"
    },
    {
        img: "/ad-comp.jpg",
        title: "Catch big deals on the cameras"
    },
    {
        img: "/ad-leptop.jpg",
        title: "Catch big deals on the cameras"
    },
    {
        img: "/ad-smth.png",
        title: "Catch big deals on the cameras"
    },
    
];

function SmallAds(){
    return(
        <Container>
        <div className = "SmallAds">
            {ads.map((add, i) => 
                <div className = "ad-card" key = {i} >
                    <div className = "ad-card-img">
                        <img src= {add.img} alt= {add.img}/>
                    </div>
                    <div className = "ad-card-text">
                        <p className = "ad-card-title">{add.title}</p>
                        <p className = "small-adds-show-more-btn">
                            <Link className = "link" to = "/shop">
                                Show now 
                                <span className = "show-more-arrow">
                                    <i className = "fa fa-chevron-circle-right"></i>
                                </span>
                            </Link>
                            
                        </p>
                    </div>
                </div>    
            )}
            
        </div>
        </Container>
    );
}

export default SmallAds;