import React from 'react';
import UseWindowHook from '../Sidebar/SearchBarHook';
import "./index.css";

function Sign(props){
	
	return(
		<div className = {`sign ${props.toggle && "show-sign-window"}`}>
		<i className = "fa fa-times close-sign" 
		   onClick = {() => props.setToggle(!props.toggle)} ></i>
		<div className = "sign-body">
			<h1>Welcome Back!</h1>
			<p className = "sign-sub-title">Login to manage your account</p>
			<form action="">
				<div>
					<i className = "fa fa-user"></i>
					<input type="email" placeholder = "Email" required />
				</div>
				<div>
					<i className = "fa fa-lock"></i>
					<input type="password" placeholder = "password" required />
				</div>
				<p className = "forgot-psw">Forgot Password?</p>
				<div className = "login-div">
					<button className = "effective-btn login-btn" type = "submit">Login</button>	
				</div>
			</form>
			<span className = "no-account">Don't have account yet? <span className = "lighter">Sign up</span></span>
			<p className = "or">
				<span>-</span><span>-</span><span>-</span> OR <span>-</span><span>-</span><span>-</span>
			</p>
			<div className = "sign-sicials">
				<div className = "login-div">
					<button  type = "submit" className = "effective-btn fb">
					 <i className = "fa fa-facebook"></i> facebook
					</button>	
				</div>
				<div className = "login-div">
					<button type = "submit" className = "effective-btn gg">
						<i className = "fa fa-google"></i> google
					</button>	
				</div>
			</div>
		</div>
		</div>
	)
}

export default Sign;