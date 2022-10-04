import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
    <div>
        <FontAwesomeIcon icon={faSquareTwitter} />
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faSquareInstagram} />
        <FontAwesomeIcon icon={faSquareGithub} />
    </div>);
}
 
export default Footer;

