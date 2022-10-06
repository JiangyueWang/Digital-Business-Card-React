import React from 'react';

const Interests = (props) => {
    return ( 
        <div className='about-interests'>
            <h2>Interests</h2>
            <p>{props.interests}</p>
        </div>
    );
}
 
export default Interests;