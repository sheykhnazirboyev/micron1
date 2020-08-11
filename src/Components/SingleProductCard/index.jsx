import React, {useState} from 'react';
import Container from '../Container/Container';
import CardImgSlider from '../CardImgSlider';
import "./index.css";
import Counter from '../Counter';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const product = {
	category: "Headphones",
	name: "Ultra Wireless S50 Headphones S50 with Bluetooth",
	stars: 4,
	reviews: 3,
	sponsorImg: "/sponsors1.png",
	count: 26,
	info: [
			"4.5 inch HD Touch Screen (1280 x 720)",
			"Android 4.4 KitKat OS",
			"1.4 GHz Quad Core™ Processor",
			"20 MP Electro and 28 megapixel CMOS rear camera",
	],
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
	id: "FW511948218",
	newCost: "$ 1,999.00",
	oldCost: "$ 2,299.00",
	colors: ["White with Gold", "Red", "Green", "Blue"],
	imgs: ["1", "2", "3", "4", "5"],
	baseUrl: "/",
	imgName: "cardSlider"
}


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function SingleProductCard(props){

	const classes = useStyles();
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState(1);

	const handleColor = (event) => {
		setColor(event.target.value);
	};

	const hanldeQuantity = (count) => {
		setQuantity( quantity + count < 0  ? 0 : quantity + count);
	}

	return(
		<div>
			<Container>
			<div className = "single-product-card">
				<div className = "single-product-card-img" >
					<CardImgSlider 
						imgs = {product.imgs} 
						baseUrl = {product.baseUrl} 
						imgName = {product.imgName} />
				</div>
				<div className = "single-product-card-content">
					<span className = "card-category">{product.category}</span>
					<h2 className = "product-name">{product.name}</h2>
					<p className = "stars-reviews">
						<span className = "product-stars">
							<i className = "fa fa-star"></i>
							<i className = "fa fa-star"></i>
							<i className = "fa fa-star"></i>
							<i className = "fa fa-star"></i>
							<i className = "fa fa-star-o"></i>
						</span>	
						<span>{`(${product.reviews ? product.reviews : 0 } customer reviews)`}</span>
					</p>
					<div className = "sponsor-count">
						<img src= {product.sponsorImg} alt= {product.sponsorImg} />
						<span className = "product-aviability">Availability: <span>{product.count}</span></span>
					</div>
					<div className = "wishlist-compare">
						<div><i className = "fa fa-heart-o"></i> Wishlist</div>
						<div><i className = "fa fa-refresh"></i> Compare</div>
					</div>
					<div className = "product-info">
						<ul>
							{product.info && product.info.map((info, i) => <li key = {i} >{info}</li>)}
						</ul>
					</div>
					<p>{product.description}</p>
					<p className = "product-id"><b>SKU</b>: {product.id}</p>
					<div className = "product-cost">
						<span className = "product-new-cost">{product.oldCost} </span>
						<span className = "product-old-cost">{product.newCost}</span>
					</div>
					<div className = "product-colors">
						<FormControl className={classes.formControl}>
					        <InputLabel id="demo-simple-select-label">Color</InputLabel>
					        <Select
					          labelId="demo-simple-select-label"
					          id="demo-simple-select"
					          value={color}
					          onChange={handleColor}>
					        	{product.colors.map((c, i) => <MenuItem  key = {i} value={c}>{c}</MenuItem> )}
					        </Select>
					      </FormControl>
					</div>
					<div className = "product-quantity">
						<Counter quantity = {quantity} hanldeQuantity = {hanldeQuantity} />
						<div className = "add-card-btn">
							<i className = "fa fa-shopping-basket"></i>	
							<span>Add to Cart</span>
						</div>
					</div>
				</div>
			</div>
			</Container>
		</div>
	)
}

export default SingleProductCard;