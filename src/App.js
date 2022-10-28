import React from 'react'
import {BiDotsHorizontalRounded} from "react-icons/bi";
// import {BiDotsHorizontalRounded} from "react-icons/bi";
import Profile from './components/profile-section/Profile-s';
import './App.css';
import Button from './components/Button-links/Button';
import Logo from './components/logo-cont/Logo';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <main className='container'>
      <div className='inner-cont' >
        
      <Profile />
      <Button />
      <Logo />
      <Footer />

      <div className='menu-icons'>
        <BiDotsHorizontalRounded  size={20} color='grey' id='dot'/>
      </div>
      </div>
      

    </main>
  );
}

export default App;
