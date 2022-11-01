import React from 'react'
import './Footer.css';
import map from '../assets/map.jpg'

const Footer = () => {
  return (
    <div className='footer'>
         <h4 id='left'>
        <a href='hngi9.zuriboard.com'>Zuri<b className='col'>.</b>Internship</a>
        </h4>

        <h6 id='center'>
        <a href='https://hng9.notion.site/Front-End-Stage-1-Task-cdaf503a796b4a5a85c5883a0a6163db'><b className='light'>HNG Internship 9 Frontend Task</b></a>
        </h6>

        <h5 id='right'> 
        <img src={map} alt='any' id='logo-img' />
        <a href='hngi9.zuriboard.com'>INGRESSIVE <br />FOR GOOD</a>
        </h5>

    </div>
  )
}

export default Footer