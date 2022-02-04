import {Button, Col, Container, Row} from "react-bootstrap"
const Cat = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col>
                    <h1 style={{textAlign:"center"}}>Category</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={3} xs={12}>
                    <Button variant="danger">Add Category</Button>
                </Col>
                <Col lg={3} xs={12}>
                    <Button variant="danger">Add Sub-Category</Button>
                </Col>
                <Col lg={3} xs={12}>
                    <Button variant="danger">Add Product Type</Button>
                </Col>
                <Col lg={3} xs={12}>
                    <Button variant="danger">Add Brand</Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Cat;