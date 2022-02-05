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
    useState(()=>{
        (async()=>{
            let res = await axios.get("/api/category/all");
            setCatList(res.data);
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
    return ( 
        <Modal show={show} onHide={handleClose} size="lg" id="add">
        <Modal.Header closeButton>
          <Modal.Title>Add product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product title</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="tel" placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" accept="image/*" placeholder="choose image" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select onChange={(e)=>{loadSub(e)}}>
                {
                    catList.map((item)=>(
                        <option value={item.ID}>{item.NAME}</option>
                    ))
                }
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sub Category</Form.Label>
                <Form.Select>
                {
                    subList.map((item)=>(
                        <option value={item.ID}>{item.NAME}</option>
                    ))
                }
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Product type</Form.Label>
                <Form.Select>
                <option></option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Select>
                <option></option>
                </Form.Select>
            </Form.Group>
            </Form>















        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save product
          </Button>
        </Modal.Footer>
      </Modal>
     );
}
 
export default Add;