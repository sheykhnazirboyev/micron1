import React, {useState} from 'react';
import Container from '../Container/Container';
import "./index.css";

function SignUp(){
    const [value, setValue] = useState("");
    const handleChange = e => setValue(e.target.value)
    return(
        <div className = "sign-up-root">
            <Container>
            <div className = "sign-up">
                <div className = "sign-up-content">
                    <p className = "sign-up-title">
                        <i className = "fa fa-paper-plane-o"></i>
                        Sign up to Newsletter
                    </p>
                    <p className = "sign-up-text">
                    ...and receive <b>$20 coupon for first shopping</b>
                    </p>
                </div>
                <div className = "sign-up-form">
                    <form action="">
                        <input type="text" 
                                placeholder = "Enter your emaill adress" 
                                onChange = {handleChange}
                                value = {value} />
                        <button>SignUp</button>
                    </form>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default SignUp;