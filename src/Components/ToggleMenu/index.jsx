import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./index.css";

function ToggleMenu(props){
	
	const [toggleMenu, setToggleMenu] = useState(props.showMenus ? true : false);

	return(
		<div>
			<div className = {`big-menu ${props.noColor && "noColor"}`}>
				<p onClick = {() => setToggleMenu(!toggleMenu)}>
					{props.listIcon && <i className = "fa fa-list-ul"  ></i> }
					{props.listHeader}
					{props.chevron && <i className = "fa fa-chevron-down"></i>}
				</p>
				<div className = {`${toggleMenu && "show"}  `} >
					<div className = "drop-down">
						<ul className = {`${props.yellowBordered && "yellowBordered"}`} >
							<li>
								<Link to = "/shop" style = {{ textDecoration: "none", color: "inherit" }}>
									Value of day1
								</Link> 
							</li>
							<li>
								<Link to = "/shop" style = {{ textDecoration: "none", color: "inherit" }}>
									Top 10 offers
								</Link> 
							</li>
							<li>
								<Link to = "/shop" style = {{ textDecoration: "none", color: "inherit" }}>
									Computers & Accessories
								</Link> 
							</li>
							<li>
								<Link to = "/shop" style = {{ textDecoration: "none", color: "inherit" }}>
									Cameras, Audio & Video
								</Link> 
							</li>
							<li>
								<Link to = "/shop" style = {{ textDecoration: "none", color: "inherit" }}>
									Mobile & tablets
								</Link> 
							</li>
							<li>
								<Link to = "/shop" style = {{ textDecoration: "none", color: "inherit" }}>
									Movie Music
								</Link> 
							</li>
							<li>
								<Link to = "/shop" style = {{ textDecoration: "none", color: "inherit" }}>
									TV & Audio
								</Link> 
							</li>
							<li>
								<Link to = "/shop" style = {{ textDecoration: "none", color: "inherit" }}>
									WAtches & Earwear
								</Link> 
							</li>
							<li className = "last-li">
								<Link to = "/shop" style = {{ textDecoration: "none", color: "inherit" }}>
									Accessories
								</Link> 
							</li>
						</ul>	
					</div>
				</div>
			</div>
		</div>
	)
}

export default ToggleMenu;