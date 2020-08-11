import React, {useState} from 'react';
import Container from '../Container/Container';
import ToggleMenu from '../ToggleMenu';
import "./Navbar.css";

function Navbar(props)
{
	const [toggleMenu, setToggleMenu] = useState(props.hideMenu ? false : true);

	return(
		<div className = "navbar-root">
			<Container>
				<div className = "menus">
					<ToggleMenu showMenus  listHeader = "All Deparments" listIcon />
					<div className = "norm-menus">
						<p className = "active-menu">Super Deals</p>
						<p>Featured Brands</p>
						<p>Trending Styles</p>
						<p>Gift Cards</p>
					</div>
					<div className = "free-delivery">
						<p>Free Shipping on Orders $50+</p>
					</div>
				</div>
			</Container>
		</div>
		)
}

export default Navbar;