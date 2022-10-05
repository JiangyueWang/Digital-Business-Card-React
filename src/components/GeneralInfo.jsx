import ProfilePicture from '../components/profile pictures/profile_picture.png';
import EmailIcon from '../components/icons/EmailIcon.svg';
import LinkedinIcon from '../components/icons/LinkedinIcon.svg';
const GeneralInfo = (props) => {
    return (
    <div>
        <img src={ProfilePicture} alt='headshot'></img>
        <h1>{props.name}</h1>
        <a href='#'>{props.web}</a>
        <div>
            <a href={props.email}>
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