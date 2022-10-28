import React from 'react'
import './Footer.css';
import Office from '../assets/Office.jpg'

const Footer = () => {
  return (
    <div className='footer'>
         <div id='left'>
        <a href='#'>Zuri.Internship</a>
        </div>

        <div id='center'>
        <a href='#'>HNG Internship 9 Frontend Task</a>
        </div>

        <div id='right'> 
        <img src={Office} alt='any' id='logo-img' />
        <a href='#'>INGRESSIVE FOR GOOD</a>
        </div>

    </div>
  )
}

export default Footer