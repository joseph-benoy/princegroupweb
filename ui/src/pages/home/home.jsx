import { Container,Row,Col } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import SideNav from "../../components/sideNav/sidenav";
import Slider1 from "../../components/slider1/slider1";
import Header from "../../components/Header/Header";
const Home = () => {
    return ( 
        <>
      <header>
        <Header/>
      </header>
            <Container fluid>
                <Row>
                    <Col lg={2}>
                        <SideNav/>
                    </Col>
                    <Col lg={10}>
                        <Slider1/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
     );
}
 
export default Home;