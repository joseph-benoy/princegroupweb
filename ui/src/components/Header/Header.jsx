import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import NavList from '../navList/navlist';
import "./header.css"
import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
const Header = () => {
  const nav = useNavigate();
  const changePage = useCallback((path)=>{
    nav(path);
  },[])
    return ( 
        <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">Pet shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link onClick={()=>{changePage("/home")}}>Home</Nav.Link>
        <Nav.Link onClick={()=>{changePage("/about")}}>About</Nav.Link>
        <NavList/>
        <Nav.Link onClick={()=>{changePage("/services")}}>Services</Nav.Link>
        <Nav.Link onClick={()=>{changePage("/contact")}}>Contact</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="danger">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
     );
}
 
export default Header;