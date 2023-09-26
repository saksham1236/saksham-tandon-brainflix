import userProfilePic from '../../assets/Images/Mohan-muruge.jpg';
import './userProfile.scss';

function UserProfile() {
    return(
    <div className="userProfile">
        <img className='userProfile__image' src = {userProfilePic} alt = "Your Profile" />
    </div>
    )
}

export default UserProfile;