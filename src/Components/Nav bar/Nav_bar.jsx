import React from "react";
import './nav_bar.css';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import headerPetImage from './Nav bar Images/Header_pet_image-removebg-preview.png';

const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="shop-name-container">
                <div><img src={headerPetImage} alt="Header Pet" className="header-pet-image" /></div>
                <div className="header-shop-name">Paw Island</div>
            </div>

            <ul>
                <li className="buttonNavigator">Home</li>  {/* Link for Home */}                
                <li className="buttonNavigator"><Link to="/">Adoption</Link></li>
                <li className="buttonNavigator">Pet Shop</li>
                <li className="buttonNavigator">Success Stories</li>
                <li className="buttonNavigator">Volunteer and Donations</li>
                <li className="buttonNavigator"><Link to="/about">About Us</Link></li> {/* Link for About Us */}
            </ul>
        </nav>
    );
};

export default Navbar;
