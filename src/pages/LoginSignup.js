import React from "react";
import './LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="your password"/>

                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>I agree with terms & conditions</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;