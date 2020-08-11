import React from 'react';
import "./index.css";

function LongInput(props){
	return(
		<div className = "serch">
			<form className="example" action="/action_page.php" >
				  <input type="text" placeholder= {props.placeholder} name="search2"  />
				  <button 
				  	  className = {`${props.rageColor ? "rangeColor" : "normColor"}`}  type="submit">
					  {props.txt ? props.txt : <i className ="fa fa-search"></i> }
				  </button>
			</form>
		</div>	
	)
}

export default LongInput;