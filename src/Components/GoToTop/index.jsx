import React, {useState} from 'react';
import "./index.css";

function GoToTop(props){

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if(!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if(showScroll && window.pageYOffset <= 400){
            setShowScroll(false);
        }
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', checkScrollTop)

    return(
        <div className = {`scrollTop ${showScroll ? "show-scroll" : "hide-scroll"}`} onClick = {scrollTop}  >
                <i className = "fa fa-arrow-up"></i>
        </div>
    )
}

export default GoToTop