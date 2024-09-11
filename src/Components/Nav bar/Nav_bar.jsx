import React from "react";
import './nav_bar.css';
import headerPetImage from './Nav bar Images/Header_pet_image-removebg-preview.png';

const Navbar = ()=>{
    return(
        <nav className="navBar">
            
            <div class="shop-name-container">
                <div><img src={headerPetImage} alt="Header Pet" className="header-pet-image" /></div>
                <div class="header-shop-name">Paw Island</div>
            </div>

            <ul>
                <li><button>Home</button></li>
                <li><button>Adoption</button></li>
                <li><button>Pet Shop</button></li>
                <li><button>Success Stories</button></li>
                <li><button>Volunteer and Donations</button></li>
                <li><button>About us</button></li>
            </ul>
        </nav>
    )
}







export default Navbar;