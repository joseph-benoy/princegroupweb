import { Col } from "react-bootstrap";
const Pcard = ({img,title,price}) => {
    return ( 
        <Col lg={6}>
            <img src={img} alt="product card"/>
            <h3>{title}</h3>
            <p>{price}</p>
        </Col>
     );
}
 
export default Pcard;