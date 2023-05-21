
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar1 () {  
    
 
    return(
      <Navbar style={{backgroundColor: 'rgb(198, 102, 72)'}}>
        <Container>
          <Navbar.Brand href="/" style={{fontSize: '50px', color: 'white'}}>
            <img
              alt=""
              src="logo.png"
              width="100"
              height="75"
              className="d-inline-block align-top"
              style={{paddingRight: '10px'}}
            />
            
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color: 'white', fontSize: '25px'}} href="/">Home</Nav.Link>
            <Nav.Link style={{color: 'white' , fontSize: '25px'}} href="/museum_page">Main Musuem</Nav.Link>
            <Nav.Link style={{color: 'white', fontSize: '25px'}} href="/paul_stoller">Paul Stoller</Nav.Link>
            <Nav.Link style={{color: 'white', fontSize: '25px'}} href="/all_vidoes">All Videos</Nav.Link>
            <Nav.Link style={{color: 'white', fontSize: '25px'}} href="/about">About</Nav.Link>

            



            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
      )
}

export default NavBar1
