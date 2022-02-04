import { useState,useEffect } from "react";
import { Nav } from "react-bootstrap";
import axios from "axios";
import "./sidenav.css"
const SideNav = () => {
    const [menu,setMenu] = useState([]);
    useEffect(async()=>{
        let res = await axios.get("/api/product/menu");
        setMenu(res.data);
    },[]);
    return ( 
        <Nav defaultActiveKey="/home" className="flex-column sidebar">
            <h4>Menu</h4>
            {
                menu.map((cat)=>(
                    <Nav.Link href={cat.main}><img className="drop-icon" src={"static/category_icons/"+cat.icon}/>&nbsp;&nbsp;&nbsp;{cat.main}</Nav.Link>
                ))
            }
            <Nav.Link href="" className="nav-text"><img className="drop-icon" src={"https://img.icons8.com/fluency/344/fish.png"}/>&nbsp;&nbsp;&nbsp;Fish & Aquarium</Nav.Link>
            <Nav.Link href="" className="nav-text"><img className="drop-icon" src={"https://img.icons8.com/fluency/344/bird.png"}/>&nbsp;&nbsp;&nbsp;Bird & Poultry</Nav.Link>
            <Nav.Link href="" className="nav-text"><img className="drop-icon" src={"https://img.icons8.com/fluency/344/rabbit.png"}/>&nbsp;&nbsp;&nbsp;Rabbit & Small pets</Nav.Link>
            <Nav.Link href="" className="nav-text"><img className="drop-icon" src={"https://img.icons8.com/fluency/344/lizard.png"}/>&nbsp;&nbsp;&nbsp;Reptiles</Nav.Link>
            <Nav.Link href="" className="nav-text"><img className="drop-icon" src={"https://img.icons8.com/cotton/344/cactus.png"}/>&nbsp;&nbsp;&nbsp;Cactus & Tiny garden</Nav.Link>
        </Nav>
     );
}
 
export default SideNav;