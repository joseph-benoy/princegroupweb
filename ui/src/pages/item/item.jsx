import { useState } from "react";
import { useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import qs from 'qs'
import axios from "axios";
import "./item.css"
import Share from "../../components/share/share";

const Item = () => {
    const {pid} = useParams();
    const [pdata,setPdata] = useState({})
    useEffect(       
        ()=>{
            console.log(pid)
       const data = qs.stringify({
           'id':pid
         });
       const config = {
           method: 'post',
           url: '/api/product/item/id',
           headers: { 
             'Content-Type': 'application/x-www-form-urlencoded', 
           },
           data : data
         };
       axios(config)
       .then((res)=>{
           setPdata(res.data[0])
       })},[pid])
    return ( 
        <>
        <header>
          <Header/>
        </header>
        <Container fluid>
            <Row>
                <Col>
                    <h4 className="item-title"> {pdata.CATEGORY+" > "+pdata.SUB+" > "+pdata.TYPE}</h4>
                    <Container fluid>
                      <Row>
                        <Col lg={6}>
                          <img className="item-image" src={"/static/item/"+pdata.IMAGE_PATH} alt="product image"/>
                        </Col> 
                        <Col lg={6} className="item-wrap">
                          <h4  className="item-name">{pdata.NAME}</h4>  
                          <p className="item-price">$ {pdata.PRICE}</p>
                          <h6 className="item-brand">Brand - {pdata.BRAND}</h6>
                          <p className="item-desc">{pdata.DESCRIPTION}</p>
                          <Share url={window.location.href} text={pdata.DESCRIPTION} title={pdata.NAME}/>
                        </Col> 
                      </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
     );
}
 
export default Item;