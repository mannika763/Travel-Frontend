import React, { useState,useEffect } from 'react'
import NavBar from '../LandingPage/NavBar'
import Login from './Login'
import Dashboard from './Dashboard';
import Footer from '../LandingPage/Footer';
import BelowBar from '../LandingPage/BelowBar';

function Admin() {
const[isLoggedIn, setIsLoggedIn] = useState(false);
    
const handleLoginSuccess = () => {
    setIsLoggedIn(true);
};

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
     
      setIsLoggedIn(true);
  }
}, []); 


  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
{isLoggedIn?(<Dashboard/>):(<Login onLoginSuccess={handleLoginSuccess}/>)}

      <Footer/>
    </div>
  )
}

export default Admin
