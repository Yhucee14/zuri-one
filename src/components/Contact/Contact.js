import React from 'react'
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className='form-wrap'> 
    <form className='form-cover'>
    <h1><b>Contact Me.</b></h1>
    Hi there, contact me to ask me about anything you have in mind. <br></br><br></br>
      <div className='name'>
        <div className='first'>
        <label for="name">First name </label> <br></br>
          <input type="text" name="name" id="first_name" placeholder="First Name" /><br></br>
        </div>

        <div className='last'>
          <label for="name">Last Name </label> <br></br>
            <input type="text" name="name" id="last_name" placeholder="last Name" />
        </div>
      </div> <br></br>


    <label for="Email">Email</label> <br></br>
    <input type="Email" name="" id="email" placeholder="Email@email.com" /> <br></br>

    <p>Message</p>
    <textarea name="" id="message" cols="20" rows="8" placeholder="Send me a message and I'll reply you as soon as possible."></textarea>
    <br/><br></br>

    <input type="checkbox" value="check" name="check" id="check"/> You Agree to providing your data to Ucee_14 who may contact you. <br></br> <br></br>

    <div className='send-cont'>
        <button href='#' id='btn_submit' title="Click here to to Send Message."> Send Message</button>
    </div>
    
      
    </form>

    <Footer />

    </div>
  )
}

export default Contact