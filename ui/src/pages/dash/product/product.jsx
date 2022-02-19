import { useState } from "react";
import { Container ,Row,Col, Button,Modal,Form} from "react-bootstrap";
import {Archive, FileEarmarkPlus, Journal, PencilFill, PencilSquare} from 'react-bootstrap-icons';
import Add from "./add/add";
import "./product.css"
import Select from 'react-select'
import { useEffect } from "react";
import axios from "axios";
import qs from 'qs'
const Product = () => {
    const [addShow,setAdd] = useState(false);
    const [delShow,setDel] = useState(false);
    const [catShow,setCat] = useState(false);
    const [productList,setProd] = useState([])
    const [did,setDid] = useState();
    const [edit,setEdit] = useState(false)
    const [eid,setEid] = useState()
    const [catlog,setCatlog] = useState();
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
    const [item,setItem] = useState({})
    const updateCatlog = ()=>{
        const dataF = new FormData();
        dataF.append("catlog",catlog);
        console.log(catlog)
        axios({
            method: 'post',
            url: '/api/admin/catlog/new',
            data: dataF,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                setCat(false)
                alert("Updated catlog");
            })
            .catch(function (response) {
                //handle error
                setCat(false)
                alert("Filed to upload catlog")
            });
    }
    const [d,setD] = useState(true)
    const [ua,setUa]  = useState();
    const [ub,setUb] = useState();
    const [uc,setUc] = useState();
    const [ud,setUd] = useState('')
    const loadItem = async(e)=>{
        setEid(e.value);
        try{
            const data = qs.stringify({
                'id':e.value
              });
            let res=  await axios.post("/api/product/item/id",data);
            setItem(res.data[0]);
            setUa(res.data[0].NAME)
            setUb(res.data[0].PRICE)
            setUc(res.data[0].DESCRIPTION)
            setUd('')
            setD(false);
        }
        catch(e){
            alert("retry!")
        }

    }
    const updateItem = async()=>{
        if(ud!==''){
            try{
                const data = new FormData();
                data.append("id",eid);
                data.append("title",ua);
                data.append("price",ub)
                data.append("description",uc);
                data.append("image",ud)
                await axios.post("/api/product/edit",data,{
                    headers: {'Content-Type': 'multipart/form-data' }
                });
                alert("Updated the product")
                setEdit(false)
                window.location.reload()
            }
            catch(e){
                alert("Retry! Failed to edit!")
            }
        }
        else{
            try{
                const data1 = qs.stringify({
                    'id':eid,
                    "title":ua,
                    "price":ub,
                    "description":uc
                  });
                let ress = await axios.post("/api/product/edit1",data1);
                alert("Updated the product")
                setEdit(false)
                window.location.reload()
            }
            catch(e){
                alert("Failed to edit!")
            }
        }
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
                <Modal show={catShow} size='lg' onHide={()=>setCat(false)} id="del">
                    <Modal.Header closeButton>
                    <Modal.Title>Update catlog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Catlog</Form.Label>
                        <Form.Control onChange={(e)=>{setCatlog(e.target.files[0])}} type="file" placeholder="catlog" accept = "application/pdf"/>
                    </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setCat(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateCatlog}>
                        Update
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={edit} size='lg' onHide={()=>setEdit(false)} id="del">
                    <Modal.Header closeButton>
                    <Modal.Title>Edit product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product</Form.Label>
                            <Select options={productList}  onChange={(e)=>loadItem(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control onChange={(e)=>setUa(e.target.value)} disabled={d} defaultValue={item.NAME} placeholder="title" type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={(e)=>setUb(e.target.value)} disabled={d} defaultValue={item.PRICE} placeholder="price" type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={(e)=>setUc(e.target.value)} disabled={d}   defaultValue={item.DESCRIPTION} placeholder="decription" as="textarea" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control onChange={(e)=>setUd(e.target.files[0])} disabled={d}  placeholder="image" type="file" accept="images/*" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setEdit(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateItem}>
                        Update
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
                    <Button variant="danger" onClick={()=>setEdit(true)}><PencilFill/>&nbsp;&nbsp;Edit product</Button>
                </Col>
                <Col xs={12} lg={12}>
                    <Button variant="danger" onClick={()=>setDel(!delShow)}><Archive/>&nbsp;&nbsp;Delete product</Button>
                </Col>
                <Col xs={12} lg={12}>
                    <Button variant="danger" onClick={()=>setCat(true)}><Journal/>&nbsp;&nbsp;Update catlog</Button>
                </Col>
            </Row>
        </Container>
            </section>
        </>
     );
}
 
export default Product;