import { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
const Slider2 = () => {
  const [images,setImages] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get("/api/slider/2/all")
      setImages(res.data)
      console.log(res.data)
    }
    fetchData()
  },[])
    return ( 
        <Carousel fade className="slider">
          {
            images.map((item)=>(
              <Carousel.Item>
              <img
                className="d-block w-100 slider-img"
                src={"/static/slider2/"+item.IMG_PATH}
                alt="First slide"
              />
            </Carousel.Item>
            ))
          }
        </Carousel>
     );
}
 
export default Slider2;