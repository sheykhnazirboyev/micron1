import React, {useState} from 'react';
import Container from '../Container/Container';
import "./TopBar.css";
import SideBarSign from '../SideBarSign';
import SlidingWindow from '../SlidingWindow';


function TopBar(){
	const [showSign, setShowSign] = useState(false);
	return(
		<div className = "topBar-row">
		<SideBarSign  toggle = {showSign} setToggle = {setShowSign} />
		<SlidingWindow toggle = {showSign} setToggleSidebar = {setShowSign} />
			<Container>
				<div className = "top-bar">
					<div className = "top-left">
						<p>Welcome to Worldwide Electronics Store</p>
					</div>
					<div className = "top-right">
						<p><i className = "fa fa-map-marker"></i> Store Locator</p>
						<p className = "delivery"><img src="/reuck1.png" alt="trueck" width = "17" /><span>Track yout order</span> </p>
						<p><i className = "fa fa-dollar"></i> Dollar (US)</p>
						<p className = "sign-icon" onClick = {() => setShowSign(!showSign)} >
							<i className = "fa fa-user"></i> Register or Sign in
						</p>
					</div>
				</div>
			</Container>
		</div>
		)
}

export default TopBar;