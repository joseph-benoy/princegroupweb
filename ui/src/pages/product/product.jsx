import { Container,Row,Col } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import SideNav from "../../components/sideNav/sidenav";
import Header from "../../components/Header/Header";
import { useParams } from 'react-router-dom'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import qs from 'qs'
import Pcard from "../../components/pcard/pcard";
const Product = () => {
    const {category} = useParams();
    const [productList,setProductList] = useState([])
    useEffect(
        ()=>{
            console.log(category)
            const data = qs.stringify({
                'name':category
              });
            const config = {
                method: 'post',
                url: '/api/product/item/category',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded', 
                },
                data : data
              };
            axios(config)
            .then((res)=>{
                setProductList(res.data)
                console.log(res.data)
            })
        },[category])
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
                    <Col lg={10}>
                        <h2>Category {">"} {category}</h2>
                        <Container fluid>
                            <Row>
                                {
                                    productList.map((item)=>(
                                        <Pcard title={item.NAME} img={"/static/item/"+item.IMAGE_PATH} price={item.PRICE}/>
                                    ))
                                }
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
     );
}
 
export default Product;