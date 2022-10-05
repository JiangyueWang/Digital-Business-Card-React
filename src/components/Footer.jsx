import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
    <div className='flex footer'>
        <FontAwesomeIcon icon={faSquareTwitter} className='footer-icon footer-flex-item1 fa-2x'/>
        <FontAwesomeIcon icon={faSquareFacebook} className='footer-icon fa-2x'/>
        <FontAwesomeIcon icon={faSquareInstagram} className='footer-icon fa-2x'/>
        <FontAwesomeIcon icon={faSquareGithub} className='footer-icon footer-flex-item4 fa-2x'/>
    </div>);
}
 
export default Footer;

