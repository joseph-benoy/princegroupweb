import { useState } from "react";
import { Container ,Row,Col, Button,Modal} from "react-bootstrap";
import {Archive, FileEarmarkPlus, PencilSquare} from 'react-bootstrap-icons';
import Add from "./add/add";
import "./product.css"
import Select from 'react-select'
import { useEffect } from "react";
import axios from "axios";
import qs from 'qs'
const Product = () => {
    const [addShow,setAdd] = useState(false);
    const [delShow,setDel] = useState(false);
    const [productList,setProd] = useState([])
    const [did,setDid] = useState();
    const handleClose = ()=>{
        setDel(!delShow);
    }
    useEffect(()=>{
        (async()=>{
            axios.get("/api/product/item/all")
            .then((res)=>{
                const items = res.data;
                let temp = items.map((p)=>(
                    {value:p.ID,label:p.NAME}
                ))
                setProd(temp);
                console.log(temp)
            })
        })()
    },[delShow])
    const deleteItem = ()=>{
        console.log(did)
        const data = qs.stringify({
            'id':did
          });
        const config = {
            method: 'post',
            url: '/api/product/item/delete',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded', 
            },
            data : data
          };
        axios(config)
        .then((res)=>{
            alert("success")
        })
        .catch((res)=>{
            alert("failed")
        })
    }
    return ( 
        <>
            <section  className="category-tab">
            <Modal show={delShow} size='lg' onHide={handleClose} id="del">
                    <Modal.Header closeButton>
                    <Modal.Title>Remove Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Select options={productList}  onChange={(e)=>{setDid(e.value)}}/>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={deleteItem}>
                        Delete
                    </Button>
                    </Modal.Footer>
                </Modal>
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
                    <Button variant="danger" onClick={()=>setDel(!delShow)}><Archive/>&nbsp;&nbsp;Delete product</Button>
                </Col>
            </Row>
        </Container>
            </section>
        </>
     );
}
 
export default Product;