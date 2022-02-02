import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-elastic-carousel';
import "./reviews.css";
import video from "../../../images/review/video.jpg";
import ReactPlayer from 'react-player';
import { PlayCircleFill } from "react-bootstrap-icons";
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
                <Carousel focusOnSelect enableSwipe={true}>
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
                <Col lg={6}>
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
        </Container>
     );
}
 
export default Review;