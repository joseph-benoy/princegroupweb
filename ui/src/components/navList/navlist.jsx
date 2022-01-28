import { useState } from "react";
import { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import axios from 'axios';
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
const NavList = () => {
    const [menu,setMenu] = useState([]);
    useEffect(async()=>{
        let res = await axios.get("/api/product/menu");
        setMenu(res.data);
    },[]);
    return ( 
        <NavDropdownMenu title="Products" id="navbarScrollingDropdown">
            {
                menu.map((cat)=>(
                    <DropdownSubmenu title={cat.main} id="collasible-nav-dropdown" alignRight={true}>
                        {
                            cat.sub.map((subCat)=>(
                                <DropdownSubmenu title={subCat.sub}>
                                    {
                                        subCat.types.map((type)=>(
                                            <NavDropdown.Item href={"/product/"+type}>{type}</NavDropdown.Item>
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