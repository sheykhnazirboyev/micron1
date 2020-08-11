import React, {useState} from 'react';
import Container from '../Container/Container';
import Counter from '../Counter';
import "./index.css";

const inCart = [
	{
		img: "/cardSlider1.jpg",
		title:"Ultra Wireless S50 Headphones S50 with Bluetooth",
		cost: "$ 1,100.00",
		quantity: "1",
	},
	{
		img: "/cardSlider2.jpg",
		title:"Widescreen NX Mini F1 SMART NX",
		cost: "$ 685.00",
		quantity: "1",
	}
]

function Cart(props){

	const [quantity, setQuantity] = useState(1);

	const hanldeQuantity = (count) => {
		setQuantity( quantity + count < 0  ? 0 : quantity + count);
	}

	return(
			<Container>
			<div className = "cart">
				<h1>Cart</h1>
				<div className = "cart-header">
					<p>Product</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
				</div>
				<div className = "cart-lists">
					{inCart.map((c, i) => 
						<div className = "cart-content" key = {i}>
							<div className = "cart-product">
								<div className = "cart-img">
									<i className = "fa fa-times"></i>
									<img src= {c.img} alt= {c.img}/>
								</div>
								<p>{c.title}</p>
							</div>
							<div className = "cart-price">
								<p>{c.cost}</p>
							</div>
							<div className = "cart-quantity">
								<Counter quantity ={quantity} hanldeQuantity = {hanldeQuantity} />
							</div>
							<div className = "cart-total">
								{c.cost}
							</div>
						</div>

					)}
					<div>
					</div>
				</div>
				<div className = "buttons">
					<div>
						<button>Update cart</button>
						<button className = "cech-yellow">Cehckout</button>
					</div>
				</div>
			</div>
			</Container>
	)
}

export default Cart;