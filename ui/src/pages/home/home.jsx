import { Container,Row,Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import SideNav from "../../components/sideNav/sidenav";

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

                    </Col>
                </Row>
            </Container>
        </>
     );
}
 
export default Home;