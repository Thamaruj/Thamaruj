import React from "react";
import './Body middle.css'
import pawIcon from '../Body middle/Images/Icons/pets_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'
import petImage1 from '../Body middle/Images/german shepherd 3.png'
import petImage2 from '../Body middle/Images/pomeranian 1.png'
import petImage3 from '../Body middle/Images/german shepherd 2.png'
import petImage4 from '../Body middle/Images/55c1db97-a9ec-40ac-8e25-438b4c9d5a3d.jpeg.jpg'
import petImage5 from '../Body middle/Images/3bb3a4d4-7af0-4459-8bf5-d8c9c40b2e28.jpeg.jpg'
import petImage6 from '../Body middle/Images/855769e1-b65d-4883-bc93-418d0f2549a6.jpeg.jpg'
import petImage7 from '../Body middle/Images/Sam Border Collie puppy.jpg'
import petImage8 from '../Body middle/Images/WhatsApp Image 2024-09-10 at 10.57.58_9f6c5772.jpg'
import petImage9 from '../Body middle/Images/1d54307c-a0c4-450e-8a88-99e3fc5d37f8.jpeg.jpg'



const BodyMiddle =()=>{
    return (
        <div className="ContentContainer">
            <div className="phrase">
                <p>Let’s sniff out your purrfect pal!</p>
            </div>
            <div className="PetDetailsContainer">
                
                <div className="PetBox">
                    <div className="PetImages">
                        <img className="pet1" src={petImage1} alt="" />
                    </div>

                    <div class="PetInformation">
                        <div>Mando</div>

                    </div>

                    <div className="adoptMeSection">
                        <div className="adoptMeButton1">Adopt me</div>
                        <div><img className="pawIcon" src={pawIcon} alt="" /></div>
                    </div>


                </div>

                <div className="PetBox">
                    <div className="PetImages">
                        <img className="pet1" src={petImage2} alt="" />
                    </div>

                    <div class="PetInformation">
                        <div>Luna</div>

                    </div>


                    <div className="adoptMeSection">
                        <div className="adoptMeButton1">Adopt me</div>
                        <div><img className="pawIcon" src={pawIcon} alt="" /></div>
                    </div>
                </div>

                <div className="PetBox">
                    <div className="PetImages">
                        <img className="pet1" src={petImage3} alt="" />
                    </div>

                    <div class="PetInformation">
                        <div>Ollie</div>

                    </div>


                    <div className="adoptMeSection">
                        <div className="adoptMeButton1">Adopt me</div>
                        <div><img className="pawIcon" src={pawIcon} alt="" /></div>
                    </div>

                </div>

                <div className="PetBox">
                    <div className="PetImages">
                        <img className="pet1" src={petImage4} alt="" />
                    </div>

                    <div class="PetInformation">
                        <div>Sam</div>

                    </div>

                    <div className="adoptMeSection">
                        <div className="adoptMeButton1">Adopt me</div>
                        <div><img className="pawIcon" src={pawIcon} alt="" /></div>
                    </div>
                </div>

                <div className="PetBox">
                <div className="PetImages">
                        <img className="pet1" src={petImage5} alt="" />
                    </div>

                    <div class="PetInformation">
                        <div>Sherill</div>

                    </div>


                    <div className="adoptMeSection">
                        <div className="adoptMeButton1">Adopt me</div>
                        <div><img className="pawIcon" src={pawIcon} alt="" /></div>
                    </div>
                </div>

                <div className="PetBox">
                <div className="PetImages">
                        <img className="pet1" src={petImage6} alt="" />
                    </div>

                    <div class="PetInformation">
                        <div>Tucker</div>

                    </div>


                    <div className="adoptMeSection">
                        <div className="adoptMeButton1">Adopt me</div>
                        <div><img className="pawIcon" src={pawIcon} alt="" /></div>
                    </div>
                </div>

                <div className="PetBox">
                <div className="PetImages">
                        <img className="pet1" src={petImage7} alt="" />
                    </div>

                    <div class="PetInformation">
                        <div>Buldo</div>

                    </div>


                    <div className="adoptMeSection">
                        <div className="adoptMeButton1">Adopt me</div>
                        <div><img className="pawIcon" src={pawIcon} alt="" /></div>
                    </div>
                </div>

                <div className="PetBox">
                <div className="PetImages">
                        <img className="pet1" src={petImage8} alt="" />
                    </div>

                    <div class="PetInformation">
                        <div>Rocky</div>

                    </div>


                    <div className="adoptMeSection">
                        <div className="adoptMeButton1">Adopt me</div>
                        <div><img className="pawIcon" src={pawIcon} alt="" /></div>
                    </div>
                </div>

                <div className="PetBox">
                <div className="PetImages">
                        <img className="pet1" src={petImage9} alt="" />
                    </div>

                    <div class="PetInformation">
                        <div>Oliver</div>

                    </div>


                    <div className="adoptMeSection">
                        <div className="adoptMeButton1">Adopt me</div>
                        <div><img className="pawIcon" src={pawIcon} alt="" /></div>
                    </div>
                </div>

                <div className="PetBox">
                    This is box four
                </div>

                <div className="PetBox">
                    This is box five
                </div>

                <div className="PetBox">
                    This is box six
                </div>
                
            </div>
        </div>
    )
} 

export default BodyMiddle