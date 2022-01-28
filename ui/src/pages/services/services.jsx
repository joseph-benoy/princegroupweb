import { Container, Row,Col } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";

const Services = () => {
    return ( 
        <>
            <header>
                <Header/>
            </header>
            <Container fluid>
            <Row>
                <Col>
                    <h1 style={{textAlign:"center"}}>Services</h1>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
     );
}
 
export default Services;