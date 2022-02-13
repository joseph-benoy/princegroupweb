import {Button, Col, Container, Row} from 'react-bootstrap';
import img2 from '../../../images/about/about2.jpg';
import "./about.css"
const About = () => {
    /*
                        <Button id="about-btn" variant='primary'>Show now</Button>
*/
    return ( 
        <Container fluid className="about-wrapper">
            <Row>
                <Col lg={2} className="about-col">
                    <img src={img2} alt="prince pets" className="about-img"/>
                </Col>
                <Col lg={10} className="about-text">
                    <h3>About Prince</h3>
                    <p>
                    Prince Group, we are with great commitment and
                    passion we strive to make tasty animal feeds of the very
                    best quality, without unnecessarily burdening nature.
                    The health of your animal is our top priority. And with it
                    the high quality of our recipes, ingredients and
                    sustainable products.
                    Our range of private label pet food is made entirely in-
                    house at the highest possible quality. Together with our
                    dedicated team, we are committed to making your pet
                    food product a real success!
                    We run our business focusing on the highest quality
                    standards and with great personal commitment. Our
                    customers are essential to us and we believe in long-term
                    commitments.
                    Quality, service, product innovation and sustainability;
                    these are our essential focuses for our successful
                    operations and co-operation with our customers.<br/>
                    “We make a positive difference on your loved Pets”
                    </p>
                </Col>

            </Row>
        </Container>
     );
}
 
export default About;