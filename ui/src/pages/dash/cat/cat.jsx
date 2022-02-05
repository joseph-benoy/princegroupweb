import { useState } from "react";
import {Button, Col, Container, Row,Modal,Form, Alert} from "react-bootstrap";
import "./category.css"
import axios from 'axios'
import { useEffect } from "react";
import qs from 'qs';

const Cat = () => {
    const [sacat,setSacat] = useState(false);
    const [ssub,setSsub] = useState(false);
    const [stype,setStype] = useState(false);
    const [sb,setSb] = useState(false);
    const [ atype,setAtype] = useState("light");
    const [error,setError] = useState("")
    const [catName,setCatName] = useState();
    const [catIcon,setCatIcon] = useState();
    const [catList,setCatList] = useState([]);
    const [scat,setScat] = useState()
    const [cid,setCid] = useState()
    const [ptype,setPtype] = useState()
    const [sid,setSid] = useState()
    const [ctemp,setCtemp] = useState()
    const [sublist,setSubList] = useState([])
    const submitCat = ()=>{
        const dataF = new FormData();
        dataF.append("name",catName);
        dataF.append("icon",catIcon);
        axios({
            method: 'post',
            url: '/api/category/new',
            data: dataF,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                setAtype("success")
                setError("New category created!")
                setSacat(false)
            })
            .catch(function (response) {
                //handle error
                setAtype("danger")
                setError("failed to create category")
                setSacat(false)
            });
    }
    const submitScat = ()=>{
        const data = qs.stringify({
            'name': scat,
            'cid': cid 
          });
        const config = {
            method: 'post',
            url: '/api/category/newsub',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded', 
            },
            data : data
          };
        axios(config)
        .then((data)=>{
            setAtype("success")
            setError("Created subcategory")
            setSsub(false)
        })
            .catch(function (response) {
                //handle error
                setAtype("danger")
                setError("failed to create subcategory")
                setSsub(false)
            });
    }
    const loadSub =(e)=>{
        setCtemp(e.target.value)
        const data = qs.stringify({
            'cid':e.target.value
          });
        const config = {
            method: 'post',
            url: '/api/category/getsub',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded', 
            },
            data : data
          };
        axios(config)
        .then((res)=>{
            setSubList(res.data);
        })
    }
    useEffect(()=>{
        (async()=>{
            let res = await axios.get("/api/category/all");
            setCatList(res.data);
        })()
    },[])
    const submitType = ()=>{
        const data = qs.stringify({
            'name': ptype,
            'sid': sid 
          });
          console.log(sid)
        const config = {
            method: 'post',
            url: '/api/category/newtype',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded', 
            },
            data : data
          };
        axios(config)
        .then((data)=>{
            setAtype("success")
            setError("Created new product type")
            setStype(false)
        })
            .catch(function (response) {
                //handle error
                setAtype("danger")
                setError("failed to product type")
                setStype(false)
            });
    }
    const [brand,setBrand]  =useState("");
    const submitBrand = ()=>{
        const data = qs.stringify({
            'name': brand,
          });
        const config = {
            method: 'post',
            url: '/api/category/newbrand',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded', 
            },
            data : data
          };
        axios(config)
        .then((data)=>{
            setAtype("success")
            setError("Created new brand")
            setSb(false)
        })
            .catch(function (response) {
                //handle error
                setAtype("danger")
                setError("failed to add brand")
                setSb(false)
            }
            )
    }
    return ( 
        <>
            <section className="category-tab">
            <Modal show={sacat} size={"lg"} className="cat-modal" onHide={()=>{setSacat(!sacat)}}>
                <Modal.Header closeButton>
                <Modal.Title>Add category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categry name</Form.Label>
                        <Form.Control onChange={(e)=>{setCatName(e.target.value)}} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categry Icon</Form.Label>
                        <Form.Control onChange={(e)=>{setCatIcon(e.target.files[0])}} type="file" accept="image/*" placeholder="Enter icon" />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setSacat(!sacat)}}>
                    Close
                </Button>
                <Button variant="primary" onClick={submitCat}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={ssub} className="cat-modal" size="lg" nHide={()=>{setSsub(!ssub)}}>
                <Modal.Header closeButton>
                <Modal.Title>Add Sub-category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e)=>{setScat(e.target.value)}} type="text" placeholder="enter name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select onChange={(e)=>{setCid(e.target.value)}} >
                    {
                        catList.map((item)=>(
                            <option value={item.ID}>{item.NAME}</option>
                        ))
                    }
                    </Form.Select>
                </Form.Group>














                </Form>

                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setSsub(!ssub)}}>
                    Close
                </Button>
                <Button variant="primary" onClick={submitScat}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={stype} className="cat-modal" size="lg" onHide={()=>{setStype(!stype)}}>
                <Modal.Header closeButton>
                <Modal.Title>Add Product type</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e)=>{setPtype(e.target.value)}}  type="text" placeholder="enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select onChange={(e)=>{loadSub(e);}} >
                        {
                            catList.map((item)=>(
                                <option value={item.ID}>{item.NAME}</option>
                            ))
                        }
                        </Form.Select>
                    </Form.Group>


                    <Form.Group className="mb-3">
                    <Form.Label>Sub category</Form.Label>
                    <Form.Select  onChange={(e)=>{setSid(e.target.value)}} >
                    {
                        sublist.map((item)=>(
                            <option value={item.ID}>{item.NAME}</option>
                        ))
                    }
                    </Form.Select>
                </Form.Group>
                    </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setStype(!stype)}}>
                    Close
                </Button>
                <Button variant="primary" onClick={submitType}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={sb} onHclassName="cat-modal" size="lg" ide={()=>{setSb(!sb)}}>
                <Modal.Header closeButton>
                <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e)=>{setBrand(e.target.value)}} type="text" placeholder="enter name" />
                </Form.Group>
                </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setSb(!sb)}}>
                    Close
                </Button>
                <Button variant="primary" onClick={submitBrand}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Container fluid>
                <Row>
                    <Col>
                        <h1  className="cat-h" style={{textAlign:"center"}}>Category</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} xs={12}>
                        <Button className="catBtn" variant="danger" onClick={()=>{setSacat(!sacat)}}>Add Category</Button>
                    </Col>
                    <Col lg={12} xs={12}>
                        <Button className="catBtn"  variant="danger" onClick={()=>{setSsub(!ssub)}}>Add Sub-Category</Button>
                    </Col>
                    <Col lg={12} xs={12}>
                        <Button className="catBtn"  variant="danger" onClick={()=>setStype(!stype)}>Add Product Type</Button>
                    </Col>
                    <Col lg={12} xs={12}>
                        <Button className="catBtn"  variant="danger" onClick={()=>{setSb(!sb)}}>Add Brand</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert id="catAlert" variant={atype}>{error}</Alert>
                    </Col>
                </Row>
            </Container>
            </section>
        </>
     );
}
 
export default Cat;