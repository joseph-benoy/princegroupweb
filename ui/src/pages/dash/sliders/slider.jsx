import axios from "axios";
import { useState } from "react";
import { Col, Container, Row,Form,Button } from "react-bootstrap";

const Sliders = () => {
    const [a,setA]  =useState('');
    const [b,setB] = useState('');
    const [c,setC] = useState('');
    const submitSlider = async()=>{
        if(a!==''){
            try{
                const data = new FormData();
                data.append("image",a);
                await axios.post("/api/admin/slider1",data);
                alert("slider1 updated!");
            }
            catch(e){
                alert("Failed to update slider1");
            }
        }
        if(b!==''){
            try{
                const data = new FormData();
                data.append("image",b);
                await axios.post("/api/admin/slider2",data);
                alert("slider2 updated!");
            }
            catch(e){
                alert("Failed to update slider2");
            }
        }
        if(c!==''){
            try{
                const data = new FormData();
                data.append("image",c);
                await axios.post("/api/admin/slider3",data);
                alert("slider3 updated!");
            }
            catch(e){
                alert("Failed to update slider3");
            }
        }
    }
    return ( <>
        <Container fluid>
            <Row>
                <Col><h1 style={{textAlign:"center"}}>Sliders</h1></Col>
            </Row>
            <Row>
                <Form.Group className="mb-3">
                    <Form.Label>Slider 1</Form.Label>
                    <Form.Control onChange={(e)=>setA(e.target.files[0])} placeholder="image" type="file" accept=".jpg" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Slider 2</Form.Label>
                    <Form.Control onChange={(e)=>setB(e.target.files[0])} placeholder="image" type="file" accept=".jpg" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Slider 3</Form.Label>
                    <Form.Control onChange={(e)=>setC(e.target.files[0])} placeholder="image" type="file" accept=".jpg" />
                </Form.Group>
                <Button variant="danger" onClick={submitSlider}>Save changes</Button>
            </Row>
        </Container>
    </> );
}
 
export default Sliders;