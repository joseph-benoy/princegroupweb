import { useState } from "react";
import { Col, Container,Row } from "react-bootstrap";
import {Facebook, Twitter, Youtube, Instagram,Search} from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
    const nav = useNavigate()
    const changePage = (path)=>{
        nav(path)
    }
    const [term,setTerm] = useState("")
    return ( 
        <Container fluid className="top-main">
            <Row>
                <Col xs={12} lg={3}>
                    <p>FREE 5 days shipping over $99</p>
                </Col>
                <Col xs={12} lg={5}>
                <form class="example">
                    <input onChange={(e)=>{setTerm(e.target.value)}} type="text" placeholder="Search.." name="search"/>
                    <button type="button" onClick={()=>{changePage("/search/"+term)}}><Search/></button>
                    </form>
                </Col>
                <Col xs={12} lg={4}>
                    <span id="top-social">
                    <a className="social-top" href="https://facebook.com"><Facebook/></a>
                    <a className="social-top" href="https://twitter.com"><Twitter/></a>
                    <a className="social-top" href="https://youtube.com"><Youtube/></a>
                    <a className="social-top" href="https://instagram.com"><Instagram/></a>
                    </span>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Topbar;