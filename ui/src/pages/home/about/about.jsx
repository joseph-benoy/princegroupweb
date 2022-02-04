import {Button, Col, Container, Row} from 'react-bootstrap';
import img1 from '../../../images/about/about1.jpg';
import img2 from '../../../images/about/about2.jpg';
import "./about.css"
const About = () => {
    return ( 
        <Container fluid className="about-wrapper">
            <Row>
                <Col lg={2} className="about-col">
                    <img src={img1} alt="prince pets" className="about-img"/>
                </Col>
                <Col lg={7} className="about-text">
                    <h3>About Prince</h3>
                    <p>We offer quality products at low prices every day. We have been in this business for almost 20 years. We have been doing online shopping very confidently. Our customers like and trust us so much because of the quality of our site's products.
                    </p>
                    <Button id="about-btn" variant='primary'>Show now</Button>
                </Col>
                <Col lg={2}>
                    <img src={img2} alt="prince pets" className="about-img"/>
                </Col>
            </Row>
        </Container>
     );
}
 
export default About;