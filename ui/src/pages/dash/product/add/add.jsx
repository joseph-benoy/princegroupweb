import { useState } from "react";
import { Modal,Button ,Form} from "react-bootstrap";
import "./add.css"
import axios from 'axios'
import qs from 'qs'
const Add = ({show,handleClose}) => {
    const [name,setName] = useState()
    const [price,setPrice] = useState()
    const [image,setImage] = useState()
    const [desc,setDesc] = useState()
    const [type,setType] = useState()
    const [brand,setBrand] = useState()
    const [cat,setCat] = useState()
    const [sub,setSub] = useState()
    const [catList,setCatList] = useState([])
    const [subList,setSubList] = useState([])
    const [brandList,setBrandList] = useState([])
    const [typesList,setTypeList] = useState([])
    const [error,setError] = useState()
    const [atype,setAtype] = useState("light")
    const [status,setStatus] = useState("");
    useState(()=>{
        (async()=>{
            let res = await axios.get("/api/category/all");
            setCatList(res.data);
            let res1 = await axios.get("/api/category/allbrands");
            setBrandList(res1.data);
        })()
    },[])
    const loadSub = (e)=>{
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
    const submitProduct = ()=>{
        const data = new FormData();
        data.append("name",name)
        data.append("price",price)
        data.append("bid",brand)
        data.append("pid",type)
        data.append("description",desc)
        data.append("image",image)
        setStatus("Uploading product....")
        axios({
            method: 'post',
            url: '/api/product/item/new',
            data: data,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                setAtype("success")
                setError("New category created!")
                handleClose()
                alert("success")
                window.location.reload()
                setStatus("")
            })
            .catch(function (response) {
                //handle error
                setAtype("danger")
                setStatus("")
                setError("failed to create category")
                handleClose()
                alert("failed")
            });
    }
    return ( 
        <Modal show={show} onHide={handleClose} size="lg" id="add">
        <Modal.Header closeButton>
          <Modal.Title>Add product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product title</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="tel" placeholder="Price"  onChange={(e)=>{setPrice(e.target.value)}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" accept="image/*" placeholder="choose image"  onChange={(e)=>{setImage(e.target.files[0])}} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Description"  onChange={(e)=>{setDesc(e.target.value)}} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select onChange={(e)=>{loadSub(e)}}>
                <option disabled selected="selected">choose</option>
                {
                    catList.map((item)=>(
                        <option value={item.ID}>{item.NAME}</option>
                    ))
                }
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sub Category</Form.Label>
                <Form.Select onChange={(e)=>{loadTypes(e)}}>
                <option disabled selected="selected">choose</option>
                {
                    subList.map((item)=>(
                        <option value={item.ID}>{item.NAME}</option>
                    ))
                }
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Product type</Form.Label>
                <Form.Select  onChange={(e)=>{setType(e.target.value)}} >
                <option disabled selected="selected">choose</option>
                {
                    typesList.map((item)=>(
                        <option value={item.ID}>{item.NAME}</option>
                    ))
                }
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Select  onChange={(e)=>{setBrand(e.target.value)}} >
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
            <h5>{status}</h5>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitProduct}>
            Save product
          </Button>
        </Modal.Footer>
      </Modal>
     );
}
 
export default Add;