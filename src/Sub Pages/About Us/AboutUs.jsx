import React from 'react';
import './AboutUs.css';
import missionImage from '../About Us/01.png' // Adjust the path to where your image is located

const AboutUs = () => {
    return (
        <div>

            <div className="container-about-us">
                <img className='backgroundImage' src={missionImage} alt="" />

                <div className='title'>A Little About Us!</div>
                <div className='SubContainer'>
                    <div className='textbox'>
                        <div className='textboxHeading'>Our Mission</div>
                        <div className='textboxDescription'>
                            To connect loving families with their perfect furry companions by providing a compassionate, transparent, and supportive adoption process. We are dedicated to improving the lives of pets and people through education, community engagement, and exceptional care
                        </div>
                    </div>
                    <div className='textbox'>
                        <div className='textboxHeading'>Our History</div>
                        <div className='textboxDescription'>
                            Since opening our doors in 2023, we’ve been on a heartfelt mission to bring pets and people together. In just a year, our passionate team has found loving homes for over 250 furry friends. But our commitment goes beyond the initial adoption. We stay connected with each family to ensure a smooth transition and offer support long after the adoption is complete. We also continue our work with stray animals, always striving to make a difference in their lives. Our journey is driven by love and the joy of seeing every pet find their perfect family
                        </div>
                    </div>
                    <div className='textbox'>
                        <div className='textboxHeading'>Our Vision</div>
                        <div className='textboxDescription'>
                            To create a world where every pet finds a loving home and every family experiences the joy and fulfillment of a pet's unconditional love. We envision a future where all pets are valued, well-cared for, and cherished members of our communities.
                        </div>
                    </div>
                    <div className='ourTeam'>
                        <div className='ourTeamHeading'>Our Team</div>
                        <div className='Members'>
                            <div className='names'>22CIS0242</div>
                            <div className='names'>22CIS0247</div>
                            <div className='names'>22CIS0254</div>
                            <div className='names'>22CIS0305</div>
                            <div className='names'>22CIS0307</div>
                            <div className='names'>22CIS0340</div>
                            <div className='names'>22CIS0343</div>
                            <div className='names'>22FIS0464</div>
                            <div className='names'>22FIS0497</div>
                            <div className='names'>22FIS0524</div>
                            <div className='names'>22FIS0531</div>
                            <div className='names'>22FIS0554</div>
                            <div className='names'>22FIS0584</div>
                        </div>
                    </div>
                </div>

            </div>
        


        </div>
    );
};

export default AboutUs;
