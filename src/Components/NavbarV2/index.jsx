import React from 'react';
import Container from '../Container/Container';
import Logo from '../Logo';
import "./index.css";

function NavbarV2(props){
	return(
		<div>
		<Container>
			<div className = "navbar-v2">
				<Logo />
				<div className = "navbar-v2-menus">
					<ul>
						<li>Home</li>
						<li>Pages</li>
						<li>Blog</li>
						<li>About Us</li>
						<li>FAQs</li>
						<li>Contact Us</li>
					</ul>
				</div>
				<div className = "navbar-v2-support">
					<div className = "support-earphone">
						<i className = "fa fa-headphones"></i>
					</div>
					<div className = "support-text">
						<span><b>Support</b> (+800) 856 800 604</span><br/>
						<span>E-mail:info@electro.com</span>
					</div>
				</div>
			</div>
		</Container>	
		</div>
	)
}

export default NavbarV2;