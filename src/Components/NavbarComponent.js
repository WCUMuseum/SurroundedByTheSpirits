import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <div style={{ marginLeft: 0 }}>
      <div style={{ backgroundColor: ' rgb(83, 88, 94)', marginLeft: 0, paddingBelow: '25px' }}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand style={{ color: 'white' }} as={Link} to="/">
              <img src="exhibition_transparent.png" height="75" className="d-inline-block align-top" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/museum_page">Main Musuem</CustomLink>
                <CustomLink to="/paul_stoller">Paul Stoller</CustomLink>
                <CustomLink to="/all_vidoes">All Videos</CustomLink>
                <CustomLink to="/about">About</CustomLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true })

  return (
    <Nav.Link className={isActive ? 'active' : ''} style={{ color: 'white', fontSize: '25px' }} as={Link} to={to} {...props}>
      {children}
    </Nav.Link>
  );
}

export default NavbarComponent;
