import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'

const NavbarComponent = () => {

 


  return (
    <div style={{marginLeft: 0}}>

    <div style={{backgroundColor: ' rgb(83, 88, 94)', marginLeft: 0, paddingBelow: '25px'}}>

    <Navbar expand="lg">
      <Container>

        <Navbar.Brand style={{color: 'white'}} href="/">
        <img  src="exhibition_transparent.png" height="75" className="d-inline-block align-top" />

        
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color: 'white', fontSize: '25px', paddingRight: '20px' }} href="/">Home </Nav.Link>
            <Nav.Link style={{color: 'white' , fontSize: '25px', paddingRight: '20px'}} href="/museum_page">Main Musuem</Nav.Link>
            <Nav.Link style={{color: 'white', fontSize: '25px', paddingRight: '20px'}} href="/paul_stoller">Paul Stoller</Nav.Link>
            <Nav.Link style={{color: 'white', fontSize: '25px', paddingRight: '20px'}} href="/all_vidoes">All Videos</Nav.Link>
            <Nav.Link style={{color: 'white', fontSize: '25px'}} href="/about">About</Nav.Link>



            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
  )
}

export default NavbarComponent

