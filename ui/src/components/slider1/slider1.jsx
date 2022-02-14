import { useEffect } from "react";
import { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import axios from "axios";
import "./slider.css"
import img1 from "../../images/hero/banner9.jpg"
import img2 from "../../images/hero/banner10.jpg"
import img3 from "../../images/hero/banner11.jpg"
const Slider1 = () => {
  const images = [img1,img2,img3]
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