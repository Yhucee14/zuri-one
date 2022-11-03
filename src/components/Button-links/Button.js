import React from 'react'
import './Button.css';

const Button = () => {
  return (

    <div className='btn-cont'>
        <a href='https://twitter.com/Ucee_14'>Twitter Link</a>
        <a href='https://training.zuri.team/' id='btn_zuri' >Zuri Team</a>
        <a href='http://books.zuri.team/' id='books' title="This is where you find books about design and coding">Zuri Books </a>
        <a href='https://books.zuri.team/python-for-beginners?ref_id=<Ucee>' id='book_python' title="The HNG basic coding 1.0 gives you the best fundamental knowledge in demand.With a fair price of $4.99, starting your tech journey with this book certainly gives you an advantage.">Python Books</a>
        <a href='https://background.zuri.team/' id='pitch' title="This gives you access to the best potential employees by conducting a thorough and intricate background check on their past endeavours.">Background Check for Coders</a>
        <a href='https://books.zuri.team/design-rules' id='book_design' title="The free design book offers you the best design knowledge in demand for absolutely no cost.">Design Books </a>
        <a href='https://books.zuri.team/design-rules' id='contact' title="Click here to Contact Me.">Contact Me </a>

        <div>
          
        </div>
         
    </div>

    
  )
}

export default Button