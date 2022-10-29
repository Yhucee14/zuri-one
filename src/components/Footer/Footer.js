import React from 'react'
import './Footer.css';
import map from '../assets/map.jpg'

const Footer = () => {
  return (
    <div className='footer'>
         <h4 id='left'>
        <a href='#'>Zuri<b className='col'>.</b>Internship</a>
        </h4>

        <h6 id='center'>
        <a href='#'><b className='light'>HNG Internship 9 Frontend Task</b></a>
        </h6>

        <h5 id='right'> 
        <img src={map} alt='any' id='logo-img' />
        <a href='#'>INGRESSIVE FOR GOOD</a>
        </h5>

    </div>
  )
}

export default Footer