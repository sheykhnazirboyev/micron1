import React from 'react';
import Container from '../Container/Container';
import "./index.css";

function Breadcrumb(props){
	return(
		<div className = "breadcrumb-root">
			<Container>
			<div className = "breadcrumb" >
				<ul>
					<li><span>Home</span> <i className = "fa fa-chevron-right"></i></li>
					{props.category && 
						<li className = "category-li"><span className = "category">{props.category}
						</span><i className = "fa fa-chevron-right"></i></li>}
					{props.subCategory && 
						<li className = "subcategory-li" > 
							<span className = "subCategory">{props.subCategory}</span>  
							<i className = "fa fa-chevron-right"></i>
						</li>}
					<li className = "product-li"><span>{props.product}</span> </li>
				</ul>
			</div>
			</Container>
		</div>
	)
}

export default Breadcrumb;