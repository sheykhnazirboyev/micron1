import React from 'react';
import "./index.css";

function SpecialBigaAd(){
    return(
        <div className = "special-big-ad">
            <div className = "special-big-ad-top">
                <p>Special <br/> Offer</p>
                <div className = "round-cost">
                    <div>
                        <span>Save</span>
                        <p>$120</p>
                    </div>
                </div>
            </div>
            <div className = "special-big-ad-img">
                <img src="/specialOffer1.jpg" alt="SpecailOffer"/>
            </div>
            <div className = "special-big-ad-bottom">
                <p className = "game-console">Game Console Controller <br/>
                    + USB 3.0 Cable
                </p>
                <p className = "game-console-cost">
                    <span className = "old-cost">$99,00</span>
                    <span className = "new-cost">$79,00</span>
                </p>   
                <div className = "availavle-count">
                    <p>Availavle: <b>6</b></p>
                    <p>Already Sold: <b>28</b></p>
                </div>
                <p className = "hurry">Hurry up! Offer ends on in:</p>
                <div className = "timer">
                    <div className = "timer-item">
                        <p className = "times-up">05</p>
                        <p>HOURS</p>
                    </div>
                    <div className = "timer-item">
                        <p className = "times-up">18</p>
                        <p>MINS</p>
                    </div>
                    <div className = "timer-item">
                        <p className = "times-up">05</p>
                        <p>SEC</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialBigaAd;