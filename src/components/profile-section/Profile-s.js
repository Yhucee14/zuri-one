import React from 'react';
import './Profile.css';
import Office from '../assets/Office.jpg'


const Profile = () => {
  return (
    <div className='profile-container'>
        <img src={Office} alt='any' id='profile_img' size={25} />
        <h4 id='twitter'>
        Ucee_14
        </h4>
        {/* <h4 id='slack'>
        Ucee_14
        </h4> */}
    </div>
  )
}

export default Profile