import React from 'react'
import "./Footer.css"
import { Container, Row, Col } from 'react-bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function Footer() {
    return (
        <div className='footer-container'>
      <div className='footer-row'>
        <div className='footer-col'>
            <div className='footer-col1'>Company Info</div>
            <div className='footer-col11'>FAQs</div>
            
        </div>
        <div className='footer-col'>
        <div className='footer-col2'>Get Started</div>
            <div className='footer-col21'>
                Contact Us</div>
            
        </div>
        <div className='footer-col'>
        <div className='footer-col3'>Connect</div>
            <div className='footer-col31'>
            <i class="fa-brands fa-square-instagram" style={{cursor: "pointer", color: "#bc2a8d"}}></i></div>
                <div className='footer-col31'>
                <i class="fa-brands fa-facebook" style={{cursor: "pointer", color: "skyblue"}}></i></div>
              
        </div>
      </div>
        </div>
    )
}

export default Footer
