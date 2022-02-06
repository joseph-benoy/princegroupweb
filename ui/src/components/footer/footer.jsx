import { Container, Row,Col } from "react-bootstrap";
import {GeoAltFill,TelephoneFill,Facebook, Twitter, Youtube, Instagram, EnvelopeOpenFill} from 'react-bootstrap-icons';
import img from '../../images/bg2.jpg';
import logo from '../../images/logo1.png'
import "./footer.css";
import {Search} from 'react-bootstrap-icons';

const Footer = () => {
    return ( 
        <footer className="footer-area">

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="index.html" className="logo">
                                <img src={logo} alt="logo" />
                            </a>
                            <ul className="footer-contact-info">
                                <li><span>Tech support:</span> <a href="tel:+91 5678965320">+91 5678965320</a></li>
                                <li><span>Email:</span>&nbsp;info@pets.com</li>
                                <li><span>Address:</span>  Banglore India</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-4">
                            <h3>Information</h3>
                            <ul className="custom-links">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="privacy-policy.html">Refund Policy</a></li>
                                <li><a href="terms-conditions.html">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Customer service</h3>
                            <ul className="custom-links">
                                <li><a href="faq.html">FAQ's</a></li>
                                <li><a href="terms-conditions.html">Delivery Information</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Subscribe to our newsletter!</h3>
                            <p>Sign up for our mailing list to get the latest updates news & offers.</p>
                            <form className="newsletter-form" data-toggle="validator">
                                <input type="email" className="input-newsletter" placeholder="Your email address" name="EMAIL" required autoComplete="off" />
                                <button type="submit"><Search /></button>
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <p>Copyright @2021 Pets world.All rights reserved.</p>
                </div>
            </div>


        </footer>
     );
}
 
export default Footer;