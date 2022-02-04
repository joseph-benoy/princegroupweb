import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-elastic-carousel';
import "./reviews.css";
import video from "../../../images/review/video.jpg";
import ReactPlayer from 'react-player';
import { PlayCircleFill } from "react-bootstrap-icons";
import oimg12 from "../../../images/offer/offer12.jpg";
import oimg13 from "../../../images/offer/offer13.jpg";


const Review = () => {
    return ( 
        <Container className="review-wrapper">
            <Row>
                <Col>
                    <h2>What Our Client Says</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                <Carousel id="car-usel" focusOnSelect enableSwipe={true}>
                    <div className="car-item">
                    <blockquote>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially .</p>
                        <br/><br/><p>-James Andy</p>
                    </blockquote>   
                    </div>
                    <div className="car-item">
                    <blockquote>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially .</p>
                        <br/><br/><p>-Sarah Taylor</p>
                    </blockquote> 
                    </div>
                    <div className="car-item">
                    <blockquote>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially .</p>
                        <br/><br/><p>-Mark Tex</p>
                    </blockquote> 
                    </div>
                </Carousel>
                </Col>
                <Col lg={6} id="player">
                <ReactPlayer
                    url="https://vimeo.com/243556536"
                    width="100%"
                    height="20rem"
                    playing
                    playIcon={<PlayCircleFill style={{fontSize:"5rem",color:"var(--btnColor)",backgroundColor:"white",borderRadius:"100px"}}/>}
                    light={video}
                    />
                </Col>
            </Row>

                            {/* Changed */}
            <Row id="pt">
            <div className="offer-area pb-75">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-offer-box">
                            <a href="shop-grid.html" className="d-block">

                                <img  src={oimg12} alt="offer-image" />

                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single-offer-box">
                            <a href="shop-grid.html" className="d-block">
                            <img src={oimg13} alt="offer-image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </Row>
        </Container>
     );
}
 
export default Review;