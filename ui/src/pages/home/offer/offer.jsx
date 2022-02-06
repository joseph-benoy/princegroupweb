import { Col, Container, Row } from "react-bootstrap";
import "./offer.css";
const Offer = ({img}) => {
    return ( 
        <Container>
            <Row>
                <Col className="offer">
                    <img src={img} alt="offer" className="offer-img"/>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Offer;