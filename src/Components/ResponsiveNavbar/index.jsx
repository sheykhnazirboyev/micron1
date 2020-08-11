import React, {useState} from 'react';
import Container from '../Container/Container';
import Logo from '../Logo';
import "./index.css";

import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';
import SlidingWindow from '../SlidingWindow';
import LongInput from '../LongInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ResponsiveNavbar(){

	const classes = useStyles();

	const [search, setSearch] = useState(false)

	return(
		<div className = "responsive-navbar">
			<SlidingWindow toggle = {search} setToggleSidebar = {setSearch} />
			<Container>
			<div className = "responsive-navbar-content">
				<Logo sm />
				<div className = "responsive-navbar-icons">
					<i className = "fa fa-search" onClick = {() => setSearch(!search)} ></i>
					<i className = "fa fa-user"></i>
					<Badge badgeContent= "2" color="error"  overlap="circle">
						<i className = "fa fa-shopping-bag cart-icon"></i>
					</Badge>
				</div>
			</div>
			{search && 
				<div className = "responsive-navbar-search-input">
					<LongInput placeholder = "Search Product"  />
				</div>
			}
			</Container>
		</div>
	)
}

export default ResponsiveNavbar;