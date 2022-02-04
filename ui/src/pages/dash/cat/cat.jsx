import { useState } from "react";
import {Button, Col, Container, Row,Modal} from "react-bootstrap";
import "./category.css"
const Cat = () => {
    const [sacat,setSacat] = useState(false);
    const [ssub,setSsub] = useState(false);
    const [stype,setStype] = useState(false);
    const [sb,setSb] = useState(false);
    return ( 
        <>
            <section className="category-tab">
            <Modal show={sacat} className="cat-modal" size="lg" onHide={()=>{setSacat(!sacat)}}>
                <Modal.Header closeButton>
                <Modal.Title>Add category</Modal.Title>
                </Modal.Header>
                <Modal.Body>



                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setSacat(!sacat)}}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={ssub} className="cat-modal" size="lg" nHide={()=>{setSsub(!ssub)}}>
                <Modal.Header closeButton>
                <Modal.Title>Add Sub-category</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setSsub(!ssub)}}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={stype} className="cat-modal" size="lg" onHide={()=>{setStype(!stype)}}>
                <Modal.Header closeButton>
                <Modal.Title>Add Product type</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setStype(!stype)}}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={sb} onHclassName="cat-modal" size="lg" ide={()=>{setSb(!sb)}}>
                <Modal.Header closeButton>
                <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setSb(!sb)}}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 style={{textAlign:"center"}}>Category</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} xs={12}>
                        <Button variant="danger" onClick={()=>{setSacat(!sacat)}}>Add Category</Button>
                    </Col>
                    <Col lg={3} xs={12}>
                        <Button variant="danger" onClick={()=>{setSsub(!ssub)}}>Add Sub-Category</Button>
                    </Col>
                    <Col lg={3} xs={12}>
                        <Button variant="danger" onClick={()=>setStype(!stype)}>Add Product Type</Button>
                    </Col>
                    <Col lg={3} xs={12}>
                        <Button variant="danger" onClick={()=>{setSb(!sb)}}>Add Brand</Button>
                    </Col>
                </Row>
            </Container>
            </section>
        </>
     );
}
 
export default Cat;