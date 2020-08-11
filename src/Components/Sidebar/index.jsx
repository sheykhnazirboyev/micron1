import React from 'react';
import {Link} from 'react-router-dom';
import "./index.css";

function Sidebar({toggle, setToggleSidebar}){
    const menus = [
        "Value of day 1",
        "Top 10 offers",
        "Computers & Accessories",
        "Cameras, Audio & Video",
        "Mobile & tablets",
        "Movie Music",
        "TV & Audio",
        "WAtches & Earwear",
        "Accessories"
    ]    
    return(
        <div className = {`sidebar ${toggle ? "show-sidebar" : "hide-sidebar"}`}>
            <div className="sidebar-content">
                <div className = "sidebar-header">
                    <div className = "sidebar-logo">
                        <span>micron<span className = "yellow">.</span> </span>
                        <span className = "close-sidebar" onClick = {() => setToggleSidebar(false)}><i className = "fa fa-times"></i></span>
                    </div>
                </div>
                <div className = "sidebar-menus">
                    <ul>
                        {menus.map((m, i) => 
                            <Link key = {i} to = "/shop"  style = {{  color: "inherit", textDecoration: "none" }}>
                                <li >
                                    {m}
                                </li>
                                
                            </Link> )}
                    </ul>
                </div>
            </div>
            
            <div className = "sidebar-footer">
                <img src="/sFooter4.webp" alt="sidebarFooter"/>
            </div>
        </div>
    )
}

export default Sidebar;