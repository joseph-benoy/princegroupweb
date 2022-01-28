import { Row,Container,Col,Navbar,Nav } from "react-bootstrap";
import {useNavigate} from "react-router-dom"

const Admin = () => {
    const nav = useNavigate();
    return ( 
        <>
                    <header>
            <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Pet shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link onClick={()=>nav("/home")}>Home</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
        <Container fluid>
            <Row>
                <Col>
                    
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default Admin;