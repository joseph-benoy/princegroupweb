import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import NavList from '../navList/navlist';
import "./header.css"
import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import img from "../../images/logo1.png"
import Topbar from '../topbar/topbar';
const Header = () => {
  const nav = useNavigate();
  const changePage = useCallback((path)=>{
    nav(path);
  },[])
    return ( 
      <>
      <Topbar/>
        <Navbar bg="light"  expand="lg" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#"><img src={img}/><p  id="logo">&nbsp;&nbsp;Prince</p></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100vh' }}
                navbarScroll
              >
                <Nav.Link onClick={()=>{changePage("/home")}}>Home</Nav.Link>
                <Nav.Link onClick={()=>{changePage("/#about")}}>About</Nav.Link>
                <NavList/>
                <Nav.Link onClick={()=>{changePage("/#services")}}>Services</Nav.Link>
                <Nav.Link onClick={()=>{changePage("/contact")}}>Contact</Nav.Link>
              </Nav>
              <Button id="catlogBtn">Catlog</Button>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
     );
}
 
export default Header;