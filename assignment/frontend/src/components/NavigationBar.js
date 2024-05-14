// NavigationBar.js
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Style.css';

function NavigationBar() {
  const [open, setOpen] =useState(false);
  return (
    <div>
      <nav> 
      <div className='logo'>
        LOGO
      </div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/send-mail">Apply</Link></li>
        <li onClick={()=>setOpen(!open)}><Link to="#">Profile</Link></li>
      </ul>
    </nav>
    {
      open && <div className='profile'>
      <ul onClick={()=>setOpen(false)}>
        <li><Link to="/edit">Edit Profile</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </div>
    }
    
    </div>
     
     
  );
}

export default NavigationBar;
