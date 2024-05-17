import React from 'react'
import './NavBar.css'
import {Navbar,Nav, Container,Row, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Lottie from 'lottie-react';
import Logo from '../Images/travel logo.json';


function NavBar({isLoggedIn}) {
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
      </LinkContainer>):(<div>Welcome Admin</div>)}
      </Col>
     
  </Row>

</Container>
  )
}

export default NavBar
