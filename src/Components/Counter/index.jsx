import React, {useState} from 'react';
import "./index.css";

function Counter(props){

	return(
		<div className = "quantity">
			<span>{props.quantity}</span>
			<span>
				<i className="fa fa-plus" onClick =  { () => props.hanldeQuantity(1)} ></i>
				<i className="fa fa-minus" onClick =  { () => props.hanldeQuantity(-1)} ></i>
			</span>
		</div>
	)
}

export default Counter;