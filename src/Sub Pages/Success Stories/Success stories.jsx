import React from "react";
import './Success stories.css';
import { useState } from "react";
import successStoriesHeaderImage from '../Success Stories/Images/headImage.png'
import Egbert from '../Success Stories/Images/Egbert.webp'
import Marley from '../Success Stories/Images/marley.webp'
import Mary from '../Success Stories/Images/mary.webp'
import Adalee from '../Success Stories/Images/Adalee.webp'
import Hermia from '../Success Stories/Images/Hermia.webp'
import Octavia from '../Success Stories/Images/Octavia.webp'
import Ohelia from '../Success Stories/Images/Ophelia.webp'
import Humphrey from '../Success Stories/Images/Humphrey.webp'


const SuccessStories = () =>{

    const[isOpenPetDescription,setIsOpenPetDescription] = useState(false);
    const [currentDescription, setCurrentDescription] = useState("");

    const openPetDescription =(descriptionId) => {
        setCurrentDescription(description[descriptionId]);
        setIsOpenPetDescription(true);

    }

    const closePetDescription=() =>{
        setIsOpenPetDescription(false);
    }

    const description= [
    "Egbert was brought to Brooklyn ACC found a stray in a parking lot abandoned in the pouring rain, underweight with severe dental issues and was brought to Animal Haven so he could get more specialized care. While initially I only planned to foster Egbert it quickly became clear we were the perfect fit for each other. While there’s been repeated health scares in our time together, Egbert has proven what resilient little guy he is. On your average day Egbert can now be found lounging in his bed, demanding tummy rubs, and often romping in Prospect Park. We hope to have many more years together and are grateful for Animal Haven bringing us together",

    "Marley was adopted about 10 years ago. He was a very anxious little guy . When he first came to us, he was a runner. We had to be extremely careful coming and going because he would bolt out the door. He was always on edge. Well what a wonderful dog he is now. With a lot of patience and trust building, he is the best little guy ever. He is very smart and will even try to talk to us. He makes us laugh and brings us joy everyday. He will check on his elderly blind sister and then steal her food at any opportunity. He loves to make a pillow fort.  He is the most lovable and loyal dog. He stays by my side everywhere I go, whether I like it or not. He truly is a part of our family in every way",

    "Happy to report that Mary is living her best life after being rehomed! She now has a big sister, Abbey (13 and also a rescue pup) to help look after her and has learned the difference between what's ok to chew and what's not. Mary is such a unique dog with a huge personality and full of energy. She's not afraid to let her opinions known and she gives the best side-eye.  We love Mary dearly and couldn't imagine our lives without her",

    "After losing our dog of 15+ years, we decided to adopt and visited Animal Haven in July 2023. The staff was amazing, and while we met several dogs, it was a puppy named Adalee, now Stevie Nicks, who stole our hearts. She’s a street dog from Antigua, full of energy yet calm and confident. Stevie quickly adapted to our home and later our move to the suburbs. She loves long walks, meeting new friends, and making everyone smile with her pink nose. We can't thank Animal Haven enough for their care and dedication. Adalee has brought us so much joy, and we’re forever grateful.",

    "Hermia is one of 6 cats that came to Animal Haven last year all the way from Saudi Arabia. These lucky felines got a one-way ticket to NYC after their former shelter had to shut down—leaving these cats with uncertain futures. At Animal Haven, Hermia quickly established herself as the queen of our cattery, and the nickname has stuck! Hermia was adopted back in March, and has continued to reign over her new kingdom since. Hermia even got a little update to her name too!",

    "Violet (formerly Octavia) is doing amazing and we love her so much! She is such a happy, sweet, super energetic, and bright girl. Violet graduated from Puppy Kindergarten as well as Basic Manners class, and will be starting Agility class in the Fall! She loves playing with dogs of all sizes, cuddling on the couch, and going on adventures. We went on our first road trip together and she loved sniff walks in the countryside! She's a bit fearful of strangers and city noises right now but she's making excellent progress with our dog trainer to build up her confidence! Here are some photos. We love her too much!",

    "Ophelia came to Animal Haven with her kitten, and quickly stole the hearts of our cattery team. This friendly lady didn't have to wait long before winning over her adopter! They shared, Ophelia is doing great in her new home. Thank you for your assistance with the adoption process. I greatly appreciate it!",

    "Humphrey is finally home after 1,048 days! He came to Animal Haven in 2021 from a shelter in Kentucky, quickly charming the staff with his floppy ears and sweet nature. Though he managed city life, we knew he'd thrive outside the city due to his coonhound instincts. Through our CampUnderdog program, we gave him outdoor adventures and comfort while he waited. Humphrey even inspired us to create enrichment programs for other long-stay dogs. Now, he's found his perfect match, with a loving mom and a new brother, Nunzio. His adopter says, “He’s sweet as sugar and sleeps beside me every night. I’m grateful every day that I found him.”"
    ]


    const successPetStroyBox = (petName,petImage,index) =>{

        return(
            <div className="success-pet-story-box" key={index}>

                <div>{<img className="success-pet-image" src={petImage}/>}</div>    
                <div className="success-pet-name">{petName}</div>
                <button className="hear-more-button" onClick={()=>openPetDescription(index)} >Hear more!</button>
            </div>
        )

    }

    return (
        <div>

            <div className="head-image-container">
                <img className="head-image" src={successStoriesHeaderImage} alt="" />
                <div class="overlay-var1"></div>
                <div className="success-story-heading">OUR SUCCESS STORIES!</div>
            </div>

            <div className="background-box-for-Success-story-pet-container">

                <div className="Success-story-pet-container">
                
                    {successPetStroyBox('Egbert', Egbert, 0)}
                    {successPetStroyBox('Marley',Marley, 1)}
                    {successPetStroyBox('Mary',Mary,2)}
                    {successPetStroyBox('Adalee',Adalee,3)}
                    {successPetStroyBox('Hermia',Hermia,4)}
                    {successPetStroyBox('Octavia',Octavia,5)}
                    {successPetStroyBox('Ohelia',Ohelia,6)}
                    {successPetStroyBox('Humphrey',Humphrey,7)}

                </div>

            </div>

            {isOpenPetDescription && (
                <div className="pet-description-modal-overlay">
                    <div className="pet-description-modal">
                        <div >{currentDescription}</div>
                        <button className="pet-description-close-button" onClick={closePetDescription}>Close</button>
                    </div>
                </div>

            )}

        </div>
    )
    
};
export default SuccessStories;