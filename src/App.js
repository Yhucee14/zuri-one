import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cover from './components/Cover';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route path="/contact" element={<Contact />} />
    
    </Routes>
  </BrowserRouter>

  
  );
}

export default App;
