import React from 'react';
import './Profile.css';
import Pic from '../assets/pic.png';
import {BsTwitter} from "react-icons/bs";


const Profile = () => {
  return (
    <div className='profile-container'>
        <img src={Pic} alt='any' id='profile_img' />
        <h4 className='name'>Uchenna Chukwu</h4>
        <h4 id='twitter'>
        <a href='https://twitter.com/Ucee_14'> <BsTwitter /> Ucee_14</a>
        </h4>
        <h4 id='slack'>
        Ucee
        </h4>
    </div>
  )
}

export default Profile