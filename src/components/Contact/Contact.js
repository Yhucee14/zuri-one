import React from 'react'
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className='form-wrap'> 
    <form className='form-cover'>
      <div className='name'>
        <div className='first'>
        <label for="name">First name </label> <br></br>
          <input type="text" name="name" id="first-input1" placeholder="First name" /><br></br>
        </div>

        <div className='last'>
          <label for="name">Last name </label> <br></br>
            <input type="text" name="name" id="first-input2" placeholder="last name" />
        </div>
      </div> <br></br>


    <label for="Email">Email</label> <br></br>
    <input type="Email" name="" id="email-input" placeholder="Email@email.com" /> <br></br>

    <p>Message</p>
    <textarea name="" id="msg" cols="20" rows="8"></textarea>
    <br/><br></br>

    <input type="checkbox" value="check" name="check" id="check"/> You Agree to providing your data to (name) who may contact you. <br></br> <br></br>

    <div className='send-cont'>
        <a href='#' id='send' title="Click here to to Send Message."> Send Message</a>
    </div>
    
      
    </form>

    <Footer />

    </div>
  )
}

export default Contact