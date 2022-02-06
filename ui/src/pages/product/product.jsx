import { Container,Row,Col } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import SideNav from "../../components/sideNav/sidenav";
import Header from "../../components/Header/Header";
const Product = () => {
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

                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
     );
}
 
export default Product;