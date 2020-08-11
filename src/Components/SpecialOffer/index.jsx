import React from 'react';
import Container from '../Container/Container';
import SpecialBigAd from '../SpecialBigAd';
import SpecialSmallAds from '../SpecialSmallAds';
import "./index.css";

function SpecialOffer(){
    return(
        <Container>
            <div className = "SpecialOffer"  >
                <SpecialBigAd />
                <SpecialSmallAds />
            </div>
        </Container>   
    );
}

export default SpecialOffer;