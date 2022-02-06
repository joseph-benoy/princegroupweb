import { useState } from "react";
import { Row,Container,Col,Navbar,Nav,Form,Button, Alert } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import "./admin.css"
import axios from 'axios';
import qs from 'qs';
const Admin = () => {
    const nav = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("light");
    const [error,setError] = useState("");
    const [aType,setA] = useState("");
    const submitForm = async()=>{
        if(email!==""){
            if(password!==""){
                const data = qs.stringify({
                    'email': email,
                    'password': password 
                  });
                const config = {
                    method: 'post',
                    url: '/api/admin/login',
                    headers: { 
                      'Content-Type': 'application/x-www-form-urlencoded', 
                    },
                    data : data
                  };
                try{
                    axios(config)
                    .then(function (response) {
                      nav("/admin/dashboard")
                    })
                    .catch(function (error) {
                        setA("danger")
                        setError("Username or password is wrong!")
                    });
                }
                catch(e){
                    console.log(e)
                }
            }
            else{
                setError("Password can't be empty!")
                setA("danger")
            }
        }
        else{
            setError("Email can't be empty!")
            setA("danger")
        }
    }
    return ( 
        <>

        <Container fluid>
        <header>
            <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Pet shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link onClick={()=>nav("/home")} id="home-link-admin">Home</Nav.Link>
                </Nav>

                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
            <Row>
                <Col>
                <Form className="login-form">
                    <h2 style={{textAlign:"center",marginBottom:"2rem !important"}}>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </Form.Group>
                    <Button variant="danger" onClick={submitForm}>
                        Sign In
                    </Button>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Alert  variant={aType} id="login-alert">{error}</Alert>
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default Admin;