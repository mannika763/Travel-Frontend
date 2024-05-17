import React from 'react'
import {Navbar,Nav, Container, Image, NavDropdown} from 'react-bootstrap';
import './BelowBar.css'

function BelowBar() {
  return (
    <>
       <div className="nav-container2">
  <div className="belowbar-row row " style={{ display: "flex" }}>
    <div className="belowbar-col col-3 ">
     Destinations
      
    </div>
   
    
    <div className="belowbar-col col-3 ">
     Travel Themes
    </div>
    <div className="belowbar-col col-3 ">
     Trip Search
    </div>
    <div className="belowbar-col col-3 ">
    About Us
    </div>
  </div>
</div>
    </>
  )
}

export default BelowBar
