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
    const [sda,setSda] = useState(false)
    const [sdb,setSdb] = useState(false)
    const [sdc,setSdc] = useState(false)
    const [sdd,setSdd] = useState(false)
    const [dda,setDa] = useState()
    const [ddb,setDb] = useState()
    const [ddc,setDc] = useState()
    const [ddd,setDd] = useState()

    const [brandList,setBrandList] = useState([])
    const [typesList,setTypeList] = useState([])
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
    const loadTypes = (e)=>{
        const data = qs.stringify({
            'sid':e.target.value
          });
        const config = {
            method: 'post',
            url: '/api/category/gettype',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded', 
            },
            data : data
          };
        axios(config)
        .then((res)=>{
            setTypeList(res.data);
        })
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
            let res1 = await axios.get("/api/category/allbrands");
            setBrandList(res1.data);
        })()
    },[])
    const submitType = ()=>{
        const data = qs.stringify({
            'name': ptype,
            'sid': sid 
          });
          console.log(ptype)
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
    const t = (e)=>{
        setSid(e.target.value)
    }
    const deleteCat = async()=>{
            const data = qs.stringify({
                'id': dda,
              });
            const config = {
                method: 'post',
                url: '/api/category/delete/cat',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded', 
                },
                data : data
              };
            axios(config)
            .then((data)=>{
                setAtype("success")
                setError("deleted category")
                setSda(false)
            })
                .catch(function (response) {
                    //handle error
                    setAtype("danger")
                    setError("failed to delete category")
                    setSda(false)
                }
                )
    }
    const deleteSub = async()=>{
            const data = qs.stringify({
                'id': ddb,
              });
            const config = {
                method: 'post',
                url: '/api/category/delete/sub',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded', 
                },
                data : data
              };
            axios(config)
            .then((data)=>{
                setAtype("success")
                setError("deleted sub category")
                setSdb(false)
            })
                .catch(function (response) {
                    //handle error
                    setAtype("danger")
                    setError("failed to delete sub category")
                    setSdb(false)
                }
                )
    }
    const deleteType = async()=>{
            const data = qs.stringify({
                'id': ddc,
              });
            const config = {
                method: 'post',
                url: '/api/category/delete/type',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded', 
                },
                data : data
              };
            axios(config)
            .then((data)=>{
                setAtype("success")
                setError("deleted type")
                setSdc(false)
            })
                .catch(function (response) {
                    //handle error
                    setAtype("danger")
                    setError("failed to delete type")
                    setSdc(false)
                }
                )
    }
    const deleteBrand= async()=>{
            const data = qs.stringify({
                'id': ddd,
              });
            const config = {
                method: 'post',
                url: '/api/category/delete/brand',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded', 
                },
                data : data
              };
            axios(config)
            .then((data)=>{
                setAtype("success")
                setError("deleted brand")
                setSdd(false)
            })
                .catch(function (response) {
                    //handle error
                    setAtype("danger")
                    setError("failed to brand")
                    setSdd(false)
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
                    <option disabled selected="selected">choose</option>
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
                        <option disabled selected="selected">choose</option>
                        {
                            catList.map((item)=>(
                                <option value={item.ID}>{item.NAME}</option>
                            ))
                        }
                        </Form.Select>
                    </Form.Group>


                    <Form.Group className="mb-3">
                    <Form.Label>Sub category</Form.Label>
                    <Form.Select  onChange={t} >
                    <option disabled selected="selected">choose</option>
                    {
                        sublist.map((item)=>(
                            <option value={item.ID}  onChange={(e)=>{console.log(e);}}>{item.NAME}</option>
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
            <Modal show={sb} className="cat-modal" size="lg" onHide={()=>{setSb(!sb)}}>
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



            <Modal show={sda} className="cat-modal" size="lg" onHide={()=>{setSda(!sda)}}>
                <Modal.Header closeButton>
                <Modal.Title>Delete category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>

                <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>setDa(e.target.value)}>
                    <Form.Label>Category</Form.Label>
                    <Form.Select>
                    <option disabled selected="selected">choose</option>
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
                <Button variant="secondary" onClick={()=>{setSda(!sda)}}>
                    Close
                </Button>
                <Button variant="primary" onClick={deleteCat}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={sdb} className="cat-modal" size="lg" onHide={()=>{setSdb(!sdb)}}>
                <Modal.Header closeButton>
                <Modal.Title>Delete sub-category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>

                <Form.Group className="mb-3" controlId="formBasicPassword"  onChange={(e)=>{loadSub(e);}}>
                    <Form.Label>Category</Form.Label>
                    <Form.Select>
                    <option disabled selected="selected">choose</option>
                        {
                            catList.map((item)=>(
                                <option value={item.ID}>{item.NAME}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>setDb(e.target.value)}>
                    <Form.Label>Sub-Category</Form.Label>
                    <Form.Select>
                    <option disabled selected="selected">choose</option>
                    {
                        sublist.map((item)=>(
                            <option value={item.ID}  onChange={(e)=>{console.log(e);}}>{item.NAME}</option>
                        ))
                    }
                    </Form.Select>
                </Form.Group>
                </Form>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setSdb(false)}}>
                    Close
                </Button>
                <Button variant="primary" onClick={deleteSub}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={sdc} className="cat-modal" size="lg" onHide={()=>{setSdc(!sdc)}}>
                <Modal.Header closeButton>
                <Modal.Title>Delete product type</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>

                <Form.Group className="mb-3" controlId="formBasicPassword"   onChange={(e)=>{loadSub(e);}}>
                    <Form.Label>Category</Form.Label>
                    <Form.Select>
                    <option disabled selected="selected">choose</option>
                        {
                            catList.map((item)=>(
                                <option value={item.ID}>{item.NAME}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Sub-Category</Form.Label>
                    <Form.Select  onChange={(e)=>{loadTypes(e)}}>
                    <option disabled selected="selected">choose</option>
                    {
                        sublist.map((item)=>(
                            <option value={item.ID}>{item.NAME}</option>
                        ))
                    }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword"  onChange={(e)=>setDc(e.target.value)}>
                    <Form.Label>Product type</Form.Label>
                    <Form.Select>
                    <option disabled selected="selected">choose</option>
                    {
                        typesList.map((item)=>(
                            <option value={item.ID}>{item.NAME}</option>
                        ))
                    }
                    </Form.Select>
                </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setSdc(false)}}>
                    Close
                </Button>
                <Button variant="primary" onClick={deleteType}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={sdd} className="cat-modal" size="lg" onHide={()=>{setSdd(!sdd)}}>
                <Modal.Header closeButton>
                <Modal.Title>Delete brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>

                <Form.Group className="mb-3" controlId="formBasicPassword"  onChange={(e)=>setDd(e.target.value)}>
                    <Form.Label>Brand</Form.Label>
                    <Form.Select>
                        <option disabled selected="selected">choose</option>
                        {
                            brandList.map((item)=>(
                                <option value={item.ID}>{item.NAME}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setSdd(!sdd)}}>
                    Close
                </Button>
                <Button variant="primary" onClick={deleteBrand}>
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
                    <Col lg={6} xs={4}>
                        <Button className="catBtn" variant="danger" onClick={()=>{setSacat(!sacat)}}>Add Category</Button>
                        <Button className="catBtn"  variant="danger" onClick={()=>{setSsub(!ssub)}}>Add Sub-Category</Button>
                        <Button className="catBtn"  variant="danger" onClick={()=>setStype(!stype)}>Add Product Type</Button>
                        <Button className="catBtn"  variant="danger" onClick={()=>{setSb(!sb)}}>Add Brand</Button>
                    </Col>
                    <Col lg={6} xs={4}>
                    <Button className="catBtn" variant="danger" onClick={()=>{setSda(true)}}>Delete Category</Button>
                        <Button className="catBtn"  variant="danger" onClick={()=>{setSdb(true)}}>Delete Sub-Category</Button>
                        <Button className="catBtn"  variant="danger" onClick={()=>setSdc(true)}>Delete Product Type</Button>
                        <Button className="catBtn"  variant="danger" onClick={()=>{setSdd(true)}}>Delete Brand</Button>
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