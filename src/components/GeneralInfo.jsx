import ProfilePicture from '../components/profile pictures/profile_picture.png';
import EmailIcon from '../components/icons/EmailIcon.svg';
import LinkedinIcon from '../components/icons/LinkedinIcon.svg';
const GeneralInfo = (props) => {
    return (
        <div>
            <img src={ProfilePicture} alt='headshot'></img>
            <h1>{props.name}</h1>
            <div className='center-text'>
                <a href='#' >{props.web}</a>
            </div>
        
  
            <div className='flex email-linkedin-flex'>
                <div className='link-style email-link'>
                    <a href={props.email} className='flex'>
                        <img src={EmailIcon} alt='email icon'></img>
                        <h3>Email</h3>
                    </a>
                </div>
                <div className='link-style linkedin-link'>
                    <a href='#' className='flex'>
                    <img src={LinkedinIcon} alt='linkedin icon'></img>
                    <h3>LinkedIn</h3>
                </a>
                </div>
            </div>

    </div>
    );
}
 
export default GeneralInfo;