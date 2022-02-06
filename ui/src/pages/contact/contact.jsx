import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import SideNav from "../../components/sideNav/sidenav";
import { Container,Row,Col } from "react-bootstrap";

const Contact = () => {
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
        </>
     );
}
 
export default Contact;