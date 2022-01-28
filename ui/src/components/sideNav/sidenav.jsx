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
                    <Nav.Link href={cat.main}>{cat.main}</Nav.Link>
                ))
            }
        </Nav>
     );
}
 
export default SideNav;