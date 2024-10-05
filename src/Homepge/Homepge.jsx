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

        <div>

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
                                    At Paws, we are dedicated to providing compassionate core and
                                    comprehensive services for pets. From grooming to boarding, we
                                    ensure that gour furrg friends are hoppg and well token core of.
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

            <div className="section pb-0 bg-light-color">
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
                                <span className="font-1 accent-color-2 fs-3">About Us</span>
                                <div className="mb-4">
                                    <h3 className="font-2 fw-semibold">Experience the Best Pet
                                        Care Services
                                    </h3>
                                </div>
                                    <p className="text-gray">
                                    Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sem et tortor
                                    consequat id porta nibh venenatis cras. Tincidunt praesent semper. Arcu dui
                                    vivamus arcu felis bibendum ut tempus imperd.
                                    </p>
                                    <div className="row row-cols-lg-2 row-cols-1 mt-2">
                                <div className="col">
                                    <div>
                                        <div className="d-flex flex-row align-items-center gap-2 mb-3">
                                            <img src={accnt} alt="" className="img-fluid" width="40" height="40"/>
                                            <h5 className="font-2 fw-semibold m-0">Expert Care</h5>
                                        </div>
                                        <p className="text-gray">
                                            Etiam lobortis turpis tellus, eu faucibus
                                            nulla porttitor et. Morbi sit amet
                                            gravida ex. Fusce eu placerat sapien.
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
                                            Etiam lobortis turpis tellus, eu faucibus
                                            nulla porttitor et. Morbi sit amet
                                            gravida ex. Fusce eu placerat sapien.
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
                                Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sem et tortor
                                consequat id porta nibh venenatis cras. Tincidunt praesent semper. Arcu dui vivamus arcu
                                felis
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusm tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <div>
                                    <img src={testom1} alt="image" className="img-fluid rounded-circle"
                                        width="70" height="70"/>
                                </div>
                                <div className="d-flex flex-column">
                                    <h6 className="m-0 fw-semibold lh-1 font-2">Miguela Andrean</h6>
                                    <span className="text-gray">Designation</span>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusm tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <div>
                                    <img src={testom2} alt="image" className="img-fluid rounded-circle"
                                        width="70" height="70"/>
                                </div>
                                <div className="d-flex flex-column">
                                    <h6 className="m-0 fw-semibold lh-1 font-2">Miguela Andrean</h6>
                                    <span className="text-gray">Designation</span>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusm tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <div>
                                    <img src={testom3} alt="image" className="img-fluid rounded-circle"
                                        width="70" height="70"/>
                                </div>
                                <div className="d-flex flex-column">
                                    <h6 className="m-0 fw-semibold lh-1 font-2">Miguela Andrean</h6>
                                    <span className="text-gray">Designation</span>
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
                        Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sem et tortor consequat id
                        porta nibh
                        venenatis cras. Tincidunt praesent semper. Arcu dui vivamus arcu felis
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