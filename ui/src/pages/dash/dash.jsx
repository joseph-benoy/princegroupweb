import "./dash.css"
import {Container,Navbar,Nav,Tabs,Tab,Row,Col,Modal,Button,Form} from 'react-bootstrap';
import Product from "./product/product";
import Cat from "./cat/cat";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./dash.css"
const Dash = () => {
    const nav = useNavigate();
    const [u,setU] = useState(false);
    return ( 
        <>

            <header>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand onClick={()=>{nav("/home")}}>Prince</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={()=>setU(true)}>Profile</Nav.Link>
                        <Nav.Link onClick={()=>{nav("/home")}}>Log out</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </header>
            <main>
 
                <Container fluid>
                <Modal show={u} onHide={()=>setU(false)} size="lg" id="pmodal">
                        <Modal.Header closeButton>
                        <Modal.Title>Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>New email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>







                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={()=>setU(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={()=>setU(false)}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    <Row>
                        <Col>
                        <Tabs defaultActiveKey="product" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="product" title="Product">
                                <Product/>
                            </Tab>
                            <Tab eventKey="category" title="Category">
                                <Cat/>
                            </Tab>
                        </Tabs>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
     );
}
 
export default Dash;