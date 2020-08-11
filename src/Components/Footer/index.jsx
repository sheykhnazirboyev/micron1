import React, {useState} from 'react';
import Container from '../Container/Container';
import "./index.css"

const socials = [,
    "fa fa-facebook-square",
    "fa fa-whatsapp",
    "fa fa-pinterest-p",
    "fa fa-linkedin-square",
    "fa fa-instagram",
    "fa fa-youtube-play",
    "fa fa-rss"
];

const column1 = [
    "Laptops & Computers",
    "Cameras & Photography",
    "Smart Phones & Tablets",
    "Video Games & Consoles",
    "TV & Audio",
    "Gadgets",
    "Waterproof Headphones"
];

const column2 = [
    "About",
    "Contact",
    "Wishlist",
    "Compare",
    "FAQ",
    "Store Directory"
];

const column3 = [
    "My Account",
    "Track your Order",
    "Customer Service",
    "Returns/Exchange",
    "FAQs",
    "Product Support"
]



function Footer(){
    
    const [col2, setCol2] = useState(false);
    const [col3, setCol3] = useState(false);
    const [col4, setCol4] = useState(false);
    
    return(
        <div className = "footer-root">
        <Container>
            <div className = "footer">
                <div className = "column1">
                    <div className = "footer-logo">
						<span>micron<span className = "yellow">.</span> </span>
					</div>
                    <div className = "footer-text">
                        <div className = "earphone">
                            <i className = "fa fa-headphones"></i>
                        </div>
                        <div className = "footer-contact">
                            <span>Got Question ? Call us 27/7 !</span>
                            <br/>
                            <span className = "call-num">
                            (800) 8001-8588, (0600) 874 548
                            </span>
                        </div>
                    </div>
                    <div className = "contact-info">
                        <p><b>Contact Info</b></p>
                        <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
                    </div>
                    <div className = "footer-socials">
                        {socials.map((s, i) => 
                            <div className = "socials-div" key = {i}>
                                <i className = {s}></i>
                            </div>
                        )}
                    </div>
                </div>
                <div className = {`column2 ${col2 && "col"}`}  >
                    <p onClick = { () => setCol2(!col2) } ><b>Find It Fast</b><i className = "fa fa-chevron-down"></i></p>
                    <ul>
                        {column1.map((c, i) => <li key = {i} >{c}</li>)}
                    </ul>
                </div>
                <div className = {`column3 ${col3 && "col"}`} >
                    <p onClick = { () => setCol3(!col3) }><b>Info</b> <i className = "fa fa-chevron-down"></i></p>
                    <ul>
                        {column2.map((c, i) => <li key = {i} >{c}</li>)}
                    </ul>
                </div>
                <div className = {`column4 ${col4 && "col"}`} >
                    <p onClick = { () => setCol4(!col4) }><b>Customer Care</b> <i className = "fa fa-chevron-down"></i></p>
                    <ul>
                        {column3.map((c, i) => <li key = {i} >{c}</li>)}
                    </ul>
                </div>
            </div>
        </Container>
        
        <div className = "capyright-root">
            <Container>
                <div className = "capyright">
                    <p className = "capyright-icon">&copy; <b> Micron</b> - All rights Reserved</p>
                    <div className = "payment">
                        <img src="/payment.png" alt="payment"/>
                    </div>    
                </div>
            </Container>
        </div>
        </div>
    )
}

export default Footer;