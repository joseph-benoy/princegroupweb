import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import NavList from '../navList/navlist';
import "./header.css"
import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import img from "../../images/logo.png"
import Topbar from '../topbar/topbar';
const Header = () => {
  const nav = useNavigate();
  const changePage = useCallback((path)=>{
    nav(path);
  },[])
    return ( 
      <>
      <Topbar/>
                <Navbar bg="light" expand="lg" sticky="top" className='topNav'>
          <Container fluid>
            <Navbar.Brand href="#"><img src={img}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link onClick={()=>{changePage("/home")}}>Home</Nav.Link>
                <Nav.Link onClick={()=>{changePage("/about")}}>About</Nav.Link>
                <NavList/>
                <Nav.Link onClick={()=>{changePage("/services")}}>Services</Nav.Link>
                <Nav.Link onClick={()=>{changePage("/contact")}}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
     );
}
 
export default Header;