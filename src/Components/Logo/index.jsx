import React, {useState} from 'react';
import Sidebar from '../Sidebar';
import SlidingWindow from '../SlidingWindow';
import {Link} from 'react-router-dom';
import "./index.css";

function Logo(props){

	const [toggleSidebar, setToggleSidebar] = useState(false)

	return(
		<div>
			<Sidebar toggle = {toggleSidebar} setToggleSidebar = {setToggleSidebar} />
			<SlidingWindow  toggle = {toggleSidebar} setToggleSidebar = {setToggleSidebar} />
			<div className = {`logo ${props.sm && "sm-logo"}`} >
				<Link to = "/" className = "logo-link">
					<span>micron<span className = "yellow">.</span> </span>
				</Link>
				<i className = "fa fa-bars" onClick = {() => setToggleSidebar(!toggleSidebar)} ></i>	
			</div>
		</div>
	)
}

export default Logo;