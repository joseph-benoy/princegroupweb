import { useState } from "react";
import { Container ,Row,Col, Button} from "react-bootstrap";
import {Archive, FileEarmarkPlus, PencilSquare} from 'react-bootstrap-icons';
import Add from "./add/add";
import "./product.css"
const Product = () => {
    const [addShow,setAdd] = useState(false);
    return ( 
        <>
        <Add show={addShow} handleClose={()=>{setAdd(!addShow)}}/>
        <Container fluid>
            <Row>
                <Col>
                    <h1 style={{textAlign:"center"}}>Products</h1>
                </Col>
            </Row>
            <Row className="product-btn-row">
                <Col xs={12} lg={12}>
                    <Button variant="danger" onClick={()=>{setAdd(true)}}><FileEarmarkPlus/>&nbsp;&nbsp;Add new product</Button>
                </Col>
                <Col xs={12} lg={12}>
                    <Button variant="danger"><Archive/>&nbsp;&nbsp;Delete product</Button>
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default Product;