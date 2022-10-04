import React from 'react';
import ProfilePicture from '../profile pictures/profile_picture.png';
import EmailIcon from '../icons/EmailIcon.svg';
import LinkedinIcon from '../icons/LinkedinIcon.svg';
const GeneralInfo = (props) => {
    return (
    <div>
        <img src={ProfilePicture} alt='headshot'></img>
        <h1> Laura Smith</h1>
        <a href='#'>laurasmith.website</a>

        <div>
            <a href='#'>
                <img src={EmailIcon} alt='email icon'></img>
                <span>Email</span>
            </a>
            <a href='#'>
                <img src={LinkedinIcon} alt='linkedin icon'></img>
                <span>LinkedIn</span>
            </a>

            
        </div>
    </div>
    );
}
 
export default GeneralInfo;