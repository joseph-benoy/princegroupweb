import { useState,useEffect } from "react";
import { Nav } from "react-bootstrap";
import axios from "axios";
import "./sidenav.css"
import {useNavigate} from "react-router-dom"
const SideNav = () => {
    const [menu,setMenu] = useState([]);
    useEffect(async()=>{
        let res = await axios.get("/api/category/all");
        setMenu(res.data);
    },[]);
    const nav = useNavigate();
    const changePage = (link)=>{
        nav(link);
    }
    return ( 
        <Nav defaultActiveKey="/home" className="flex-column sidebar">
            <h4>Category</h4>
            {
                menu.map((cat)=>(
                    <Nav.Link onClick={()=>{changePage("/category/"+cat.NAME)}}><img className="drop-icon" src={"/static/category_icons/"+cat.ICON_PATH}/>&nbsp;&nbsp;&nbsp;{cat.NAME}</Nav.Link>
                ))
            }
        </Nav>
     );
}
 
export default SideNav;