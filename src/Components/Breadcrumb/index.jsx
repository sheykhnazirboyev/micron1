import React from 'react';
import Container from '../Container/Container';
import "./index.css";

function Breadcrumb(props){
	return(
		<div>
			<Container>
			<div className = "breadcrumb" >
				<ul>
					<li><span>Home</span> <i className = "fa fa-chevron-right"></i></li>
					{props.category && 
						<li><span className = "category">{props.category}
						</span><i className = "fa fa-chevron-right"></i></li>}
					{props.subCategory && 
						<li> 
							<span className = "subCategory">{props.subCategory}</span>  
							<i className = "fa fa-chevron-right"></i>
						</li>}
					<li><span>{props.product}</span> </li>
				</ul>
			</div>
			</Container>
		</div>
	)
}

export default Breadcrumb;