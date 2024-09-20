import React from "react";
import './VolunteerandDonate.css'
import { useState } from "react";

const VolunteerandDonate = () =>{

    const [isLoginFormOpen, setIsLoginFormOpen]=useState(false);
    const [isSignupFormOpen, setSignupFormOpen]=useState(false);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hasTypedConfirmPassword, setHasTypedConfirmPassword] = useState(false);

    const openLoginForm = () =>{
        setIsLoginFormOpen(true);
    };

    const closeLoginForm = () =>{
        setIsLoginFormOpen(false)
    };

    const openSignupForm = () =>{
        setSignupFormOpen(true);
    };

    const closeSignupForm = () =>{
        setSignupFormOpen(false)
    };


    return (
        <div className={`main-container`}>
            <div className="heading-container">
                <div className="heading">Volunteer & Donate</div>
                <div className="heading-description">Join us in making a difference in the lives of our furry friends. Your time and contributions help provide better care and loving homes for pets in need.</div>
            </div>

            <div className="donate-volunteer-box-container">

                <div className="volunteer-box">
                    <div className="voulnteer-box-heading">Donate</div>
                    <div className="volunteer-box-description">Your donations directly support the care of our animals. From food to medical care, every contribution makes a difference.</div>
                    <div><button onClick={openLoginForm}>Donate Now</button></div>
                </div>


                <div className="donate-box">
                    <div className="donate-box-heading">Volunteer</div>
                    <div className="donate-box-description">Volunteering with us is a rewarding way to make a positive impact. Help with daily care, events, or outreach, and make a difference.</div>
                    <div><button className="donate-now-button" onClick={openLoginForm} >Join</button></div>
                </div>

            </div>

            {isSignupFormOpen && (
                <div className="modal-overlay">

                    <div className="modal">

                        <form onSubmit={(e) =>{
                            e.preventDefault();

                            if(password!=confirmPassword){
                                alert("Passwords do not match!");
                                 return
                            }

                            alert("Sign Up Successful!")
                            closeSignupForm();
                            openLoginForm();
                        }}>
                            <h2>Sign Up</h2>

                            <label>First Name</label>
                            <input type="text" placeholder="First Name" required />

                            <label>Second Name</label>
                            <input type="text" placeholder="Second Name" required />

                            <label>Permanent Address</label>
                            <input type="text" placeholder="Permanent Address" required />

                            <label>Email Address </label>
                            <input type="text" placeholder="Email Address" required />

                            <label>Mobile Number</label>
                            <input type="text" placeholder="Mobile Number" required />

                            <label>Password</label>
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />

                            <label>Confirm Password</label>
                            <input type="password" placeholder="Confirm Password" onChange={(e) => {setConfirmPassword(e.target.value); setHasTypedConfirmPassword(true);}} required />

                            {hasTypedConfirmPassword && confirmPassword && (password !== confirmPassword) && (
                                <p style={{ color: 'red', fontSize: '14px' }}>Passwords do not match!</p>
                            )}

                            <button className="click-button" type="submit">Signup</button>

                            <button className="click-button" onClick={closeSignupForm}>Cancel</button>

                        </form>
                    </div>
                </div>
            ) }

            {isLoginFormOpen && (
                <div className="modal-overlay">

                    <div className="modal">

                        <form onSubmit={(e) =>{
                            e.preventDefault();
                            alert("Login Successful!")
                            closeLoginForm();
                        }}>
                            <h2>Login</h2>

                            <label>Username</label>
                            <input type="email" placeholder="Enter Your Email Address" required/>

                            <label>Password</label>
                            <input type="password" placeholder="Enter Your Password" required/>

                            <button className="click-button" type="submit">
                                Login
                            </button>

                            <button className="click-button" onClick={closeLoginForm}>
                                Cancel
                            </button>
                        </form>

                        <div className="link-to-signup" onClick={()=>{ closeLoginForm() ;openSignupForm()}} >Don't have an account ?</div>

                    </div>
                </div>
            )}


        </div>
    )
    


};

export default VolunteerandDonate ;