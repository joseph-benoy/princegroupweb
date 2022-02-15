import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-elastic-carousel';
import "./reviews.css";
import video from "../../../images/review/video.jpg";
import ReactPlayer from 'react-player';
import { PlayCircleFill } from "react-bootstrap-icons";
import oimg12 from "../../../images/offer/offer12.jpg";
import oimg13 from "../../../images/offer/offer13.jpg";
import oimg14 from "../../../images/offer/offer14.jpg"

const Review = () => {
    return ( 
        <Container className="review-wrapper">
                        <Row id="pt">
            <div className="offer-area pb-75">
            <div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-offer-box">
                            <a href="shop-grid.html" className="d-block">

                                <img  src={oimg12} alt="offer-image" />

                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-offer-box">
                            <a href="shop-grid.html" className="d-block">
                            <img src={oimg13} alt="offer-image" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-offer-box">
                            <a href="shop-grid.html" className="d-block">
                            <img src={oimg14} alt="offer-image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </Row>
            <Row>
                <Col>
                    <h2>What Our Client Says</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={6} className="review-car">
                <Carousel id="car-usel" focusOnSelect enableSwipe={true}>
                    <div className="car-item">
                    <blockquote>
                        <p></p>They are keeping the quality in pet foods,add variety of
                            food flavours,like our loved pets
                                                <br/><br/><p>-Hussain Mahood</p>
                    </blockquote>   
                    </div>
                    <div className="car-item">
                    <blockquote>
                        <p>
                            The bird feeds are superb, they are maintaining the quality of products and services
                            </p>
                        <br/><br/><p>-Leo Daniel</p>
                    </blockquote> 
                    </div>
                    <div className="car-item">
                    <blockquote>
                        <p>
                            Great services and variety of products, keeps your pet happy
                            </p>                        <br/><br/><p>-Salam Ali</p>
                    </blockquote> 
                    </div>
                </Carousel>
                </Col>
                <Col lg={6} id="player">
                <ReactPlayer
                    url="https://vimeo.com/243556536"
                    width="100%"
                    height="25rem"
                    playing
                    playIcon={<PlayCircleFill style={{fontSize:"5rem",color:"var(--btnColor)",backgroundColor:"white",borderRadius:"100px"}}/>}
                    light={video}
                    />
                </Col>
            </Row>

                            {/* Changed */}

        </Container>
     );
}
 
export default Review;