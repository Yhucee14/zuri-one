import React from 'react'
import './Logo.css';
import slack from '../assets/slack.jpg';
import github from '../assets/github.png'

const Logo = () => {
  return (
    <div className='Logo'>
       <img src={slack} alt='any' id='logo-img' />
       <img src={github} alt='any' id='logo-img' />
    </div>
  )
}

export default Logo