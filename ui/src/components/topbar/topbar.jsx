import { Col, Container,Row } from "react-bootstrap";
import {Facebook, Twitter, Youtube, Instagram,Search} from 'react-bootstrap-icons'
import "./topbar.css"

const Topbar = () => {
    return ( 
        <Container fluid className="top-main">
            <Row>
                <Col xs={12} lg={4}>
                    <p>FREE 5 days shipping over $99</p>
                </Col>
                <Col xs={12} lg={4}>
                <form class="example">
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><Search/></button>
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