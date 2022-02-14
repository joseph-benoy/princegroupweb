import { Container,Row,Col } from "react-bootstrap";
import i1 from "../../../images/icon/icon1.png"
import i2 from "../../../images/icon/icon2.png"
import i3 from "../../../images/icon/icon3.png"
import i4 from "../../../images/icon/icon4.png"
import "./services.css"
import { StarFill,Lightbulb,GearFill,HandThumbsUpFill } from "react-bootstrap-icons";

const Services = () => {
    return ( 
        <Container className="services-wrapper">
            <Row  className="service-row">
                <Col lg={3}>
                    <Container fluid className={"sbox"}>
                        <Row>
                            <Col lg={6} xs={6}>
                                <StarFill className="sicon"/>
                            </Col>
                            <Col lg={6} xs={6}>
                                <h3>Quality</h3>
                            </Col>
                        </Row>
                        <Row>
                                <p>We srive to provide products of resolute quality -on time , every time
                                </p>
                        </Row>
                    </Container>
                </Col>
                <Col lg={3} >
                <Container fluid  className={"sbox"}>
                        <Row>
                            <Col lg={6}  xs={6}>
                                <Lightbulb  className="sicon"/>
                            </Col>
                            <Col lg={6}  xs={6}>
                                <h3>Innovaton</h3>
                            </Col>
                        </Row>
                        <Row>
                                <p>
                                    We include innovation in our range of services
                                </p>
                        </Row>
                    </Container>
                </Col>
                <Col lg={3}>
                <Container fluid  className={"sbox"}>
                        <Row>
                            <Col lg={6}  xs={6}>
                                <GearFill className="sicon"/>
                            </Col>
                            <Col lg={6}  xs={6}>
                                <h3>Integrity</h3>
                            </Col>
                        </Row>
                        <Row>
                                <p>
All of our processes,decisions and action ultimately are driven by integrity
                                </p>
                        </Row>
                    </Container>
                </Col>
                <Col lg={3}>
                <Container fluid  className={"sbox"} id="lastsbox">
                        <Row>
                            <Col lg={6} xs={6}>
                                <HandThumbsUpFill className="sicon"/>
                            </Col>
                            <Col lg={6} xs={6}>
                                <h3>Accountability</h3>
                            </Col>
                        </Row>
                        <Row>
                                <p>
                                    Reliable and adherence to discipline are keys to our excellence
                                </p>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Services;