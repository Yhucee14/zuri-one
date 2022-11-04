import React from 'react'
import Profile from './profile-section/Profile-s';
import Button from './../components/Button-links/Button';
import Logo from './../components/logo-cont/Logo';
import Footer from './../components/Footer/Footer';
import {BiDotsHorizontalRounded} from "react-icons/bi";
 import {RiShareForwardLine} from "react-icons/ri";

const Cover = () => {
  return (

    <main className='container'>
    <div className='inner-cont'>
        <Profile />
        <Button />
        <Logo />
        <Footer />
        
        <div className='menu-icons' >
                <BiDotsHorizontalRounded  size={20} color='grey' id='dot'/>
      </div>

     <div className='menu'>
      <RiShareForwardLine size={20} color='grey'/>
     </div>
             
    </div>

    </main>
 
  )
}

export default Cover