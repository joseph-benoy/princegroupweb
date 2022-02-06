import { useState } from "react";
import { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import axios from 'axios';
import "./navlist.css"
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import {useNavigate} from "react-router-dom"
const NavList = () => {
    const [menu,setMenu] = useState([]);
    useEffect(async()=>{
        let res = await axios.get("/api/product/menu");
        setMenu(res.data);
    },[]);
    const nav = useNavigate();
    const changePage = (link)=>{
        nav(link);
    }
    return ( 
        <NavDropdownMenu title="Products" id="navbarScrollingDropdown">
            {
                menu.map((cat)=>(
                    <DropdownSubmenu className="dm" title={<span><img className="drop-icon" src={"/static/category_icons/"+cat.icon}/>&nbsp;&nbsp;{cat.main}</span>} id="collasible-nav-dropdown" alignRight={true}>
                        {
                            cat.sub.map((subCat)=>(
                                <DropdownSubmenu title={subCat.sub} className="dm">
                                    {
                                        subCat.types.map((type)=>(
                                            <NavDropdown.Item className="dm" onClick={()=>{changePage("/type/"+cat.main+"/"+type)}}>{type}</NavDropdown.Item>
                                        ))
                                    }
                                </DropdownSubmenu>
                            ))
                        }
                    </DropdownSubmenu>
                ))
            }
        </NavDropdownMenu>
     );
}
 
export default NavList;