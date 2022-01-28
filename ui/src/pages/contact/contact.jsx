import { Container, Row,Col } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";

const Contact = () => {
    return ( 
        <>
        <header>
            <Header/>
        </header>
                    <Container fluid>
            <Row>
                <Col>
                    <h1 style={{textAlign:"center"}}>Contact</h1>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
     );
}
 
export default Contact;