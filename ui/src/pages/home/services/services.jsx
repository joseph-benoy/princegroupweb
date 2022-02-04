import { Container,Row,Col } from "react-bootstrap";
import i1 from "../../../images/icon/icon1.png"
import i2 from "../../../images/icon/icon2.png"
import i3 from "../../../images/icon/icon3.png"
import i4 from "../../../images/icon/icon4.png"
import "./services.css"

const Services = () => {
    return ( 
        <Container className="services-wrapper">
            <Row  className="service-row">
                <Col lg={3}>
                    <div className="service-box" style={{backgroundColor:"#bfebff"}}>
                        <img src={i1}/>
                            <p>Best collection</p>
                    </div>
                </Col>
                <Col lg={3} >
                    <div className="service-box"  style={{backgroundColor:"#fed3d1"}}>
                    <img src={i2}/>
                            <p>Fast delivery</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="service-box" style={{backgroundColor:"#a9d4d9"}}>
                    <img src={i3}/>
                            <p>24/7 customer support</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="service-box" style={{backgroundColor:"#fef2d1"}}>
                    <img src={i4}/>
                            <p>Secured payment</p>
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Services;