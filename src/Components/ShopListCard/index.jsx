import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

function ShopListCard(props) {
	return (
		<div className="shop-list-card">
			<div className="shop-list-media">
				<Link to="/single-product/1" style={{ textDecoration: "none", color: " inherit" }}>
					<div className="lis-card-img">
						<img src={props.img} alt={props.img} />
					</div>
				</Link>
			</div>

			<div className="list-card-content">
				<div className="adds-card-top">
					<span>{props.type}</span>
					<p className="card-title">
						<Link to="/single-product/1" style={{ textDecoration: "none", color: " inherit" }}>
							{props.title}
						</Link>
					</p>
				</div>
				<div className="sm-card-stars">
					{props.stars && props.stars.map((s, i) => <i className="fa fa-star" key={i}></i>)}
				</div>
				<div className="list-extra-info">
					{props.extraInfo &&
						<ul>
							{props.extraInfo.map((info, i) =>
								<li key={i} >{info}</li>
							)}
						</ul>
					}
				</div>
			</div>
			<div className="list-card-right-panel">
				<h3 className="cost">{props.newCost}</h3>
				<div className="lis-card-btn">
					<button>Add to cart</button>
				</div>
				<div className="compare-wishlist">
					<p><i className="fa fa-refresh"></i> Compare</p>
					<p><i className="fa fa-heart-o"></i> Wishlist</p>
				</div>
			</div>
		</div>
	)
}

export default ShopListCard;