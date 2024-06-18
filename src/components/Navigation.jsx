import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation(){
  return(
    <Navbar expand="lg" className="navigation">
    <Container className = "navigation">
      <Navbar.Brand className = "text-white" href="#home"><h1>NC News</h1></Navbar.Brand>
      <Navbar.Toggle className = "text-white"aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className = "text-white" id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className = "text-white" href="/">Home</Nav.Link>
          <Nav.Link className = "text-white"href="/users">Users</Nav.Link>
          <NavDropdown  title={<span className = "text-white">Topics</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="/topics/Football">Football</NavDropdown.Item>
            <NavDropdown.Item href="/topics/Technology">Technology </NavDropdown.Item>
            <NavDropdown.Item href="/topics/Sports">Sports</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="/topics/International">International</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )

    // <nav>
    //     <ul>
    //         <li>
    //             <Link to = "/"> Home </Link>
    //         </li>
    //         {/* <li>
    //             <Link to = "/users"> Topics </Link>
    //         </li> */}
    //         <li>
    //             <Link to = "/users"> View Users </Link>
    //         </li>
    //     </ul>
    // </nav>
}

export default Navigation;