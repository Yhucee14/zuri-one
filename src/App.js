import React from 'react'
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {RiShareForwardLine} from "react-icons/ri";
import Profile from './components/profile-section/Profile-s';
import './App.css';
import Button from './components/Button-links/Button';
import Logo from './components/logo-cont/Logo';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/Contact';

function App() {
  return (
    <main className='container'>
      <div className='inner-cont' >
        
      <Profile />
      <Button />
      <Logo />
      <Footer />
      <Contact />

      <div className='menu-icons' >
                <BiDotsHorizontalRounded  size={20} color='grey' id='dot'/>
      </div>

     <div className='menu'>
      <RiShareForwardLine size={20} color='grey'/>
     </div>
      </div>
      
      <BrowserRouter>
    <Routes>
      <Route path="/Contact" element={<Contact />} />
    
    </Routes>
  </BrowserRouter>

    </main>
  );
}

export default App;
