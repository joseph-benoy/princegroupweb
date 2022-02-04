import "./dash.css"
import {Container,Navbar,Nav,Tabs,Tab,Row,Col} from 'react-bootstrap';
import Product from "./product/product";
import Cat from "./cat/cat";
const Dash = () => {
    return ( 
        <>
            <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Pet Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#link">Log out</Nav.Link>
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