import { Container,Row,Col } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import SideNav from "../../components/sideNav/sidenav";
import Slider1 from "../../components/slider1/slider1";
import Header from "../../components/Header/Header";
import "./home.css"
import About from "./about/about";
import Offer from "./offer/offer";
import oimg1 from "../../images/offer/offer8.jpg"
import Services from "./services/services";
import Review from "./review/review";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {


    return ( 
        <>
      <header>
        <Header/>
      </header>
        <section className="slider-col-mob">
            <Slider1/>
        </section>
            <Container fluid className="home-content">
                <Row className="grey">
                    <Col lg={2} className="sidenav-col">
                        <SideNav/>
                    </Col>
                    <Col lg={10} className="slider-col-desktop">
                    <Slider1/>
                    </Col>
                </Row>
                <Row>
                    <Col id="about">
                        <About/>
                    </Col>
                </Row>
                {/* <Row>
                    <Product />
                </Row> */}
                <Row>
                    <Services/>
                </Row>
                <Row>
                    <Offer img={oimg1}/>
                </Row>
                <Row>
                    <Review/>
                </Row>
            </Container>
            <Footer/>
        </>
     );
}
 
export default Home;