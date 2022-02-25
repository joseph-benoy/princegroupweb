import { Carousel } from "react-bootstrap";
import "./slider.css"

const Slider1 = () => {
  const images = ["/static/slider1.jpg","/static/slider2.jpg","/static/slider3.jpg"]
    return ( 
        <Carousel fade className="slider">
          {
            images.map((item)=>(
              <Carousel.Item>
              <img
                className="d-block w-100 slider-img"
                src={item}
                alt="First slide"
              />
            </Carousel.Item>
            ))
          }
        </Carousel>
     );
}
 
export default Slider1;