import { Col } from "react-bootstrap";
import "./pcard.css"
const Pcard = ({img,title,price}) => {
    return ( 
        <Col lg={4} className="pcard-container">
            <img src={img} alt="product card"/>
            <h3>{title}</h3>
            <h6>${price}</h6>
        </Col>
     );
}
 
export default Pcard;