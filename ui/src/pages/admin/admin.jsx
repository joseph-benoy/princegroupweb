import { useState } from "react";
import { Row,Container,Col,Navbar,Nav,Form,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import "./admin.css"
const Admin = () => {
    const nav = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    return ( 
        <>
                    <header>
            <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Pet shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={()=>nav("/home")} id="home-link-admin">Home</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
        <Container fluid>
            <Row>
                <Col>
                <Form className="login-form">
                    <h2>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Sign In
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default Admin;