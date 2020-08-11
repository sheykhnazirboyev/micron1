import React from 'react';
import "./index.css";

function SlidingWondow({toggle, setToggleSidebar, transparent}){
    
    return(
        <div className = {`sliding-window ${toggle ? "window-show" : "window-hide"} 
        					${transparent && "transparent"}`} 
             onClick = {() => setToggleSidebar(!toggle)}  >
        </div>
    )
}

export default SlidingWondow;