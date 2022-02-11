import { useState } from "react";
import { Col, Container,Row } from "react-bootstrap";
import {Facebook, Twitter, Youtube, Instagram,Search} from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
    const nav = useNavigate()
    const changePage = (path)=>{
        if(term.length!==0)
        {
            nav(path)
        }   
        else{
            document.getElementById('searchbar').style.borderColor='red';
        }     
    }
    const [term,setTerm] = useState("")
    return ( 
        <Container fluid className="top-main">
            <Row>
                <Col xs={12} lg={3}>
                </Col>
                <Col xs={12} lg={6}>
                <form class="example">
                    <input id="searchbar" onChange={(e)=>{setTerm(e.target.value)}} type="text" placeholder="Search.." name="search"/>
                    <button type="button" onClick={()=>{changePage("/search/"+term)}}><Search/></button>
                    </form>
                </Col>
                <Col xs={12} lg={3}>
                    <span id="top-social">
                    <a style={{color:"#4267B2"}}  className="social-top" href="https://facebook.com"><Facebook/></a>
                    <a style={{color:"#FF0000"}} className="social-top" href="https://youtube.com"><Youtube/></a>
                    <a style={{color:"#bc2a8d"}}  className="social-top" href="https://instagram.com"><Instagram/></a>
                    </span>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Topbar;