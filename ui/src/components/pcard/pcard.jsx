import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./pcard.css"
const Pcard = ({img,title,price,pid}) => {
    const nav = useNavigate()
    const changePage = (path)=>{
        nav(path)
    }
    return ( 
        <Col lg={4} className="pcard-container" onClick={()=>{changePage("/item/"+pid)}}>
            <img src={img} alt="product card"/>
            <h3>{title}</h3>
            <h6>${price}</h6>
        </Col>
     );
}
 
export default Pcard;