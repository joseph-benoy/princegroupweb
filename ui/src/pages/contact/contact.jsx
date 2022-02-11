import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import SideNav from "../../components/sideNav/sidenav";
import { Container,Row,Col, Form, Button } from "react-bootstrap";
import "./contact.css"
import { Send } from "react-bootstrap-icons";

const Contact = () => {
    return ( 
        <>
            <header>
                <Header/>
            </header>
            <Container fluid>
                <Row>
                    <Col lg={2} className="sidenav-col">
                        <SideNav/>
                    </Col>
                    <Col lg={10} className="contact-wrapper">
                        <Container fluid>
                            <Row>
                            <div class="contact-area pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="contact-form">
                            <h3>Get In Touch</h3>
                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group mb-3">
                                            <label>Your Name</label>
                                            <input type="text" name="name" class="form-control" id="name" required data-error="Please enter your name"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group mb-3">
                                            <label>Email Address</label>
                                            <input type="email" name="email" class="form-control" id="email" required data-error="Please enter your email"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group mb-3">
                                            <label>Phone Number</label>
                                            <input type="text" name="phone_number" class="form-control" id="phone_number" required data-error="Please enter your phone number"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group mb-3">
                                            <label>Subject</label>
                                            <input type="text" name="msg_subject" class="form-control" id="msg_subject" required data-error="Please enter your subject"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group mb-3">
                                            <label>Message...</label>
                                            <textarea name="message" id="message" class="form-control" cols="30" rows="4" required data-error="Please enter your message"></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-check mb-3">
                                            <input type="checkbox" class="form-check-input" id="checkme"/>
                                            <label class="form-check-label" for="checkme">
                                                Accept <a href="terms-conditions.html">Terms of Services</a> and <a href="privacy-policy.html">Privacy Policy</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <Button>send&nbsp;&nbsp;<Send/></Button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
     );
}
 
export default Contact;