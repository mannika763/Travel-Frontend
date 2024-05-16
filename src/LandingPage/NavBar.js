import React from 'react'
import './NavBar.css'
import {Navbar,Nav, Container,Row, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



function NavBar() {
  return (
   
<Container className='nav-container'>
  <Row className='nav-row'>
    <Col className='nav-col1'> <LinkContainer to="/">
        <Nav.Link className='home'>Home</Nav.Link>
      </LinkContainer>  </Col>
    <Col className='nav-col2'></Col>
    <Col className='nav-col3'> 
    <LinkContainer to="/admin">
        <Nav.Link className="admin-btn">Admin Pannel</Nav.Link>
      </LinkContainer></Col>
  </Row>
</Container>
  )
}

export default NavBar
