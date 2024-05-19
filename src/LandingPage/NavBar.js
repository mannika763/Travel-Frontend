import React from 'react'
import './NavBar.css'
import {Navbar,Nav, Container,Row, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Lottie from 'lottie-react';
import Logo from '../Images/travel logo.json';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS


function NavBar({isLoggedIn}) {
  const handleLogout = () => {{
    // console.log("clikc")
    console.log(localStorage)
        localStorage.removeItem("currentUser")
        localStorage.removeItem("token")
        window.location.href = "/";
  }}

  return (
   
<Container className='nav-container'>
  <Row className='nav-row'>
    <Col className='nav-col1 '> <LinkContainer to="/">
        <Nav.Link className='home'> <div className='lottie-logo'><Lottie animationData={Logo} style={{ width: '200px', height: '126px' }}/></div></Nav.Link>
      </LinkContainer>  </Col>
    <Col className='nav-col2 '></Col>
    <Col className='nav-col3 '>
    {!isLoggedIn?(  <LinkContainer to="/admin">
        <Nav.Link className="admin-btn"><div style={{fontSize: "large"}}>Admin Pannel</div></Nav.Link>
      </LinkContainer>):(<div className='admin'><i className="fas fa-user"></i>&nbsp;Welcome, Admin&nbsp; <i class="fa-solid fa-power-off"style={{cursor: "pointer", ":hover": { color: "orange" } }} onClick={handleLogout}></i></div>)}
      </Col>
     
  </Row>

</Container>
  )
}

export default NavBar
