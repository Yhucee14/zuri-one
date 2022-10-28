import React from 'react'
import './Logo.css';
import Office from '../assets/Office.jpg'

const Logo = () => {
  return (
    <div className='Logo'>
       <img src={Office} alt='any' id='logo-img' />
       <img src={Office} alt='any' id='logo-img' />
    </div>
  )
}

export default Logo