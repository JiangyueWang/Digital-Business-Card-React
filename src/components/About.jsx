import React from 'react';

const About = (props) => {
    return ( 
        <div className='about-interests'>
            <h2>About</h2>
            <p>{props.about}</p>
        </div>
    );
}
 
export default About;