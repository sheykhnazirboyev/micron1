import React, {useState} from 'react';
import "./index.css";

import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';
import SlidingWindow from '../SlidingWindow';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const inCart = [
	{
		id: 1,
		img: "/cardSlider1.jpg",
		title: "Ultra Wireless S50 Headphones S50 with Bluetooth",
		cost: "$1,100.00",
		count: "1",
	},
	{
		id: 2,
		img: "/ad-camera.png",
		title: "Widescreen NX Mini F1 SMART NX",
		cost: "$685.00",
		count: "1",
	}
]
	


function SearchBarIcons(props){
	
	const classes = useStyles();
	const [showList, setShowList] = useState(false);

	const handleDrop = id => {
		
	}
	
	return(
		<div className = "search-icons">
		<SlidingWindow toggle = {showList} setToggleSidebar = {setShowList} transparent />
			<div className = "search-icons-body">
				<i className = "fa fa-refresh"></i>
				<i className = "fa fa-heart-o"></i>
				<div className = "cart-cost">
				<Badge badgeContent={ inCart.length } color="error"  overlap="circle" onClick = {() => setShowList(!showList) } >
					<i className = "fa fa-shopping-bag cart-icon"></i>
				</Badge>
					<b>{props.cost}</b>
				</div>
			</div>
			<div className = {` ${showList && "show-cart-list" } cart-list `}>
				{inCart.length > 0 ?
					<ul>
						{inCart.map((c, i) => 
							<li key = {i} >
								<i className = "card-close fa fa-times" onClick = {() => handleDrop(c.id) } ></i>
								<div className = "in-cart">
									<div><img src= {c.img} alt= {c.img} /></div>
									<div>

										<p className = "in-cart-title">{c.title}</p>
										<span>{c.count}x{c.cost}</span>
									</div>
								</div>
						</li>)}
						
					<div className = "cart-list-footer">
						<div>
							<button className = "cart-list-btn">
								<Link to = "/cart" className = "link">View Cart</Link>
							</button>
						</div>
						<div>
							<button className = "cart-list-checkout">
								<Link to = "/cart" style = {{ textDecoration: "none", color: "inherit" }}>
									Checkout
								</Link>
							</button>
						</div>
					</div>
					</ul>
				: <div className = "empty-cart">
					<img src="/empty-cart.png" alt="empty"/>
				</div>
				}
			</div>
		</div>
	)
}

export default SearchBarIcons;