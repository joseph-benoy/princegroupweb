import "./dash.css"
import {Container,Navbar,Nav,Tabs,Tab,Row,Col} from 'react-bootstrap';
import Product from "./product/product";
import Cat from "./cat/cat";
import { useNavigate } from "react-router-dom";
const Dash = () => {
    const nav = useNavigate();
    return ( 
        <>
            <header>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand onClick={()=>{nav("/home")}}>Prince</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={()=>{nav("/home")}}>Log out</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </header>
            <main>
                <Container fluid>
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