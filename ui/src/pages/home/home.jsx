import { Container,Row,Col } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import SideNav from "../../components/sideNav/sidenav";
import Slider1 from "../../components/slider1/slider1";
import Header from "../../components/Header/Header";
import "./home.css"
const Home = () => {
    return ( 
        <>
      <header>
        <Header/>
      </header>
            <Container fluid className="home-content">
                <Row>
                    <Col lg={2} className="sidenav-col">
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