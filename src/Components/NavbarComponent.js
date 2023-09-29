import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../assest/exhibition_transparent.png'
const NavbarComponent = () => {
  return (
    <div style={{ marginLeft: 0 }}>
      <div style={{ backgroundColor: ' rgb(83, 88, 94)', marginLeft: 0, paddingBelow: '25px' }}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand style={{ color: 'white' }} as={Link} to="/SurroundedByTheSpirits">
              <img src={logo} alt="Paul Stoller" height="75" className="d-inline-block align-top" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <CustomLink to="/SurroundedByTheSpirits">Home</CustomLink>
{/* Main Museum Tab with Redirect Logo */}
<li className="nav-item">
<a
  href="https://www.wcupa.edu/sciences-mathematics/anthropologySociology/museum/surrounded-by-the-spirits.aspx"
  target="_blank"
  className="nav-link"
  style={{ position: 'relative', paddingRight: '30px' }} // Adjust the padding as needed
>
  Main Museum
  <img
    src="redirect-logo.png" // Replace with the URL or path to your redirect logo image
    alt="Redirect"
    style={{
      position: 'absolute',
      top: '50%',
      right: '0',
      transform: 'translateY(-50%)',
      width: '20px', // Adjust the width of the logo as needed
      height: '20px', // Adjust the height of the logo as needed
    }}
  />
</a>
</li>                <CustomLink to="/paul_stoller">Paul Stoller</CustomLink>
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
    <Nav.Link  className={`custom-link ${isActive ? 'active' : ''}`}
style={{ color: 'white', fontSize: '25px' }} as={Link} to={to} {...props}>
      {children}
    </Nav.Link>
  );
}

export default NavbarComponent;
