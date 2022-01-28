import { Container, Row,Col } from "react-bootstrap";
import {GeoAltFill,TelephoneFill,Facebook, Twitter, Youtube, Instagram, EnvelopeOpenFill} from 'react-bootstrap-icons'
import "./footer.css"

const Footer = () => {
    return ( 
        <footer>
            <Container fluid className="footer"> 
                <Row>
                    <Col lg={4} xs={12} className="footer-head">
                        <h6>Pet shop</h6>
                        <p>Delivers the best</p>
                    </Col>
                    <Col lg={4} xs={12} className="footer-contact">
                        <h6>Contact us</h6>
                        <p><GeoAltFill/>&nbsp;&nbsp;&nbsp;Banglore India</p>
                        <p><TelephoneFill/>&nbsp;&nbsp;&nbsp;+915678965320</p>
                        <p><EnvelopeOpenFill/>&nbsp;&nbsp;&nbsp;info@pets.com</p>
                    </Col>
                    <Col lg={4} xs={12} className="footer-social">
                        <h6>Follow us</h6>
                        <a href="facebook.com" id="fb"><Facebook/></a>
                        <a href="twitter.com" id="tw"><Twitter/></a>
                        <a href="youtube.com" id="ytb"><Youtube/></a>
                        <a href="instagram.com" id="insta"><Instagram/></a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div id="footer-divider">

                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p id="copyright">Copyright © 2022 Pets world. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;