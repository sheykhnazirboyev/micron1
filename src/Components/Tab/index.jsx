import React from 'react';
import "./index.css";

function Tab({tabs, size}){
	return(
		<div className = {`ads-top-had `} >
			{tabs.map((t, i) => 
				<div 
					key = {i} 
					className = {`ads-tabs-item ${i === 0 && "active"} ${size === "small" && "small"}`}>
					{t}
				</div> 
			)}
      	</div>
		)
}

export default Tab;