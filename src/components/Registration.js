import React from 'react';
import { GoChevronDown, GoEye } from "react-icons/go";

const Registration = () => {
    return (
        <>
            <div className='stepContainer'>
                Step 1 of 3 &nbsp;
                <span className="step active"></span>
                <span className="step"></span>
                <span className="step"></span>
            </div>
            <div className='registrationContainer'>
                <h1>Let's set up your account</h1>
                <div className='signIn'>Already have an account? <a href='#'>Sign in</a></div>
                <div className='formContainer'>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Your name"
                    />
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email address"
                    />
                    <GoChevronDown className="icon"/>
                    <select name="userType" id="userType" className="iconContainer">
                        <option value="">I would describe my user type as</option>
                        <option value="Designer">Designer</option>
                        <option value="Developer">Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="Other">Other</option>
                    </select>
                    <GoEye className="icon"/>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="iconContainer"
                    />
                    <div className='helpText'>Minimum 8 characters</div>
                    <button type="button">Next</button>

                    <div className='termsContainer'>
                        By clicking the "Next" button, you are agree to creating a free account, and to <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration;