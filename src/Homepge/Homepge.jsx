import React from 'react';
import './Homepge.css';
import accnt from '../Homepge/Imgs/accnt.png'
import lcnt from '../Homepge/Imgs/lctn.png'
import dogondog from '../Homepge/Imgs/dogondog.png'
import pawprint from '../Homepge/Imgs/pawprint.png'
import hero from './Imgs/hero.jpg'
import testom1 from './Imgs/testom1.jpg'
import testom2 from './Imgs/testom2.jpg'
import testom3 from './Imgs/testom3.jpg'
import strrr from './Imgs/strrr.png'

const HomePage = () => {
    return (

        <div className='home-page-container'>

            <div className="section pt-lg-0">
                <div className="r-container">
                    <div className="row row-cols-lg-2 row-cols-1">
                        <div className="col mb-3">
                            <div className="d-flex flex-column justify-content-center h-100 pe-lg-5 pe-0">
                                <span className="font-1 accent-color-2 fs-3">Welcome to Paw Island</span>
                                <div className="mb-4">
                                    <h3 className="font-2 fw-semibold">Providing Compassionate Care and Comprehensive Services
                                        for
                                        Pets
                                    </h3>
                                </div>
                                <p className="text-gray">
                                At Paw Island, we are committed to offering compassionate care and comprehensive services for pets. From grooming to boarding, we ensure your furry friends are happy and well taken care of.
                                </p>
                                <div className="d-flex flex-row gap-3 mt-3">
                                    <a href="#" className="btn btn-accent px-5 py-3 fw-semibold">Learn More</a>
                                    <a href="#" className="btn btn-accent-outline px-5 py-3 fw-semibold new-buton">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ps-lg-5 ps-0 position-relative ">
                                <img src={hero} alt="image"  className="img-fluid heroimg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section pb-0 bg-light-color, homepage-varient-1">
                <div className="r-container">
                    <div className="row row-cols-lg-2 row-cols-1">
                        <div className="col mb-lg-0 mb-3">
                            <div className="position-relative">
                                <div className="ps-lg-5 ps-0">
                                    <img src={dogondog} />
                                </div>
                            <div className="position-absolute start-0 top-0">
                                <div
                                    className="bg-accent-color rounded-3 d-flex align-items-center gap-3 px-5 py-3 text-white">
                                    <div>
                                        <img src={pawprint} height="55px"/>
                                    </div>
                                    <div>
                                        <h3 className="m-0 fw-semibold">5K</h3>
                                        <span>Pet Rescue</span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="d-flex flex-column justify-content-center h-100 pe-lg-5 pe-0">
                                <span className="font-1 accent-color-2 fs-3"></span>
                                <div className="mb-4">
                                    <h3 className="font-2 fw-semibold">Experience the Best Pet
                                        Care Services
                                    </h3>
                                </div>
                                    <p className="text-gray">
                                    We provide exceptional care for your beloved pets, ensuring their health, happiness, and well-being. From grooming to medical checkups, our experienced team offers comprehensive services tailored to your pet's needs. Let us be your trusted partner in keeping your furry friends safe and loved.
                                    </p>
                                    <div className="row row-cols-lg-2 row-cols-1 mt-2">
                                <div className="col">
                                    <div>
                                        <div className="d-flex flex-row align-items-center gap-2 mb-3">
                                            <img src={accnt} alt="" className="img-fluid" width="40" height="40"/>
                                            <h5 className="font-2 fw-semibold m-0">Expert Care</h5>
                                        </div>
                                        <p className="text-gray">
                                            
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <div className="d-flex flex-row align-items-center gap-2 mb-3">
                                            <img src={lcnt} alt="" className="img-fluid" width="40" height="40"/>
                                            <h5 className="font-2 fw-semibold m-0">Convenient Location</h5>
                                        </div>
                                        <p className="text-gray">
                                           
                                        </p>
                                    </div>
                                </div>
                                </div>
                            <div className="d-flex flex-row gap-3 mt-3">
                                <a href="#" className="btn btn-accent-outline px-5 py-3 fw-semibold">Read More</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
            <div className="r-container">
                <div className="row row-cols-lg-2 row-cols-1 w-100 mb-5">
                    <div className="col pe-lg-5">
                        <div className="d-flex flex-column pe-lg-5">
                            <span className="font-1 accent-color-2 fs-3">Testimonials</span>
                            <div className="mb-4">
                                <h3 className="font-2 fw-semibold">See Opinion Of Our Beloved Customers
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center pe-lg-5 h-100">
                            <p className="text-gray">
                            At our pet care center, nothing brings us more joy than knowing we've made a positive impact on both pets and their owners. We take pride in offering top-notch services that meet the highest standards of care, and our customers are always at the heart of everything we do. Here's what some of our happy pet owners have to say about their experiences with us
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-1 w-100">
                    <div className="col mb-3 px-3">
                        <div className="d-flex flex-column justify-content-center gap-4 px-3">
                            <ul className="rating">
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                            </ul>
                            <p className="text-gray fst-italic">
                            "The staff here is amazing! They treated my dog, Bella, like family. I never have to worry when I leave her in their care because I know she’s being pampered and well-looked after"
                            </p>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <div>
                                    <img src={testom1} alt="image" className="img-fluid rounded-circle"
                                        width="70" height="70"/>
                                </div>
                                <div className="d-flex flex-column">
                                    <h6 className="m-0 fw-semibold lh-1 font-2">Miguela Andrean</h6>
                                    <span className="text-gray">IT Professional</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3 px-3">
                        <div className="d-flex flex-column justify-content-center gap-4 px-3">
                            <ul className="rating">
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                            </ul>
                            <p className="text-gray fst-italic">
                            "I've tried many pet care services, but this is the best! My cat, Luna, always comes back happy and relaxed. I'm so grateful for their love and attention"
                            </p>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <div>
                                    <img src={testom2} alt="image" className="img-fluid rounded-circle"
                                        width="70" height="70"/>
                                </div>
                                <div className="d-flex flex-column">
                                    <h6 className="m-0 fw-semibold lh-1 font-2">Miguela Andrean</h6>
                                    <span className="text-gray">Executive Manager </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3 px-3">
                        <div className="d-flex flex-column justify-content-center gap-4 px-3">
                            <ul className="rating">
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                                <li><img src={strrr} height="25px"/></li>
                            </ul>
                            <p className="text-gray fst-italic">
                            "I'm impressed by the care and professionalism. When my dog, Max, had a medical issue, they responded quickly and provided excellent support"
                            </p>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <div>
                                    <img src={testom3} alt="image" className="img-fluid rounded-circle"
                                        width="70" height="70"/>
                                </div>
                                <div className="d-flex flex-column">
                                    <h6 className="m-0 fw-semibold lh-1 font-2">Miguela Andrean</h6>
                                    <span className="text-gray">Interior Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="section position-relative orvlydimg">
            <div className="image-overlay"></div>
            <div className="r-container">
                <div className="mx-auto text-white text-center position-relative d-flex flex-column gap-3 orvlydimg2">
                    <div className="">
                        <h3 className="font-2 fw-semibold">Make Reservation Now to
                            Book Quality Pet Care
                        </h3>
                    </div>
                    <p className="">
                        
                    </p>
                    <div className="d-flex flex-row gap-3 justify-content-center">
                        <a href="#" className="btn btn-accent px-5 py-3 fw-semibold text-white">Book Now</a>
                        <a href="#" className="btn btn-accent-outline px-5 py-3 fw-semibold text-white">Contact Us</a>
                    </div>
                </div>
            </div>
            </div>
            
        </div>

    );
};

export default HomePage;