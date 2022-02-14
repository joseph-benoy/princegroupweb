import { Container, Row,Col } from "react-bootstrap";
import {GeoAltFill,TelephoneFill,Facebook, Twitter, Youtube, Instagram, EnvelopeFill, PhoneFill, Mailbox} from 'react-bootstrap-icons';
import img from '../../images/bg2.jpg';
import logo from '../../images/logo1.png'
import "./footer.css";
import {Search} from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const nav = useNavigate();
    return ( 
        <footer className="footer-area">
            <Container fluid>
                <Row className="footer-row">
                    <Col lg={4}>
                        <img src={logo} alt="logo" id="footer-logo"/>
                        <h4>Prince Group of Companies</h4>
                        <h5>Offices</h5>
                        <Container fluid className="address_wrap">
                            <Row>
                                <Col lg={6}  className="address_inner">
                                    <p>
                                    Bank Street, Rolla,
                                    Burj Avenue Building
                                    Sharjah –U.A. E
                                    </p>
                                </Col>
                                <Col lg={6}  className="address_inner">
                                    <p>
                                    P.O. Box: 10111
                                    Industrial Area - 13
                                    Sharjah –U.A. E
                                    </p>
                                </Col>
                            </Row>

                        </Container>
                        
                    </Col>
                    <Col lg={2} className="footer-links">
                        <h4>Quick links</h4>
                        <a href="/#about" style={{color:"white",textDecoration:"none"}}>About Us</a><br/>
                        <a onClick={()=>{nav("/admin")}}>Login</a><br/>
                        <a onClick={()=>{nav("/contact")}}>Contact Us</a>
                    </Col>
                    <Col lg={5} className="footer-contact">
                        <h4>Contact us</h4>
                            <Row>
                                <Col lg={5}>
                                    <p><TelephoneFill/>&nbsp;&nbsp;&nbsp;&nbsp;+971 –67048192</p>
                                </Col>
                                <Col lg={5}>
                                    <p><PhoneFill/>&nbsp;&nbsp;&nbsp;&nbsp;+971 - 521307547</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="footer-mail" style={{ wordBreak: "break-all"}}><EnvelopeFill/>&nbsp;&nbsp;&nbsp;&nbsp;marketing@princegroupofcomapny.com</p>
                                </Col>
                            </Row>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Container className="copyright">
                            <p>Copyright @2022 Prince Group.All rights reserved.</p>
                        </Container>
                    </Col>
                </Row>
            </Container>


        </footer>
     );
}
 
export default Footer;