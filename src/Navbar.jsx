import Link from "./Link";
import PropTypes from 'prop-types';
import { useState } from "react";

import { CiMenuFries } from 'react-icons/ci';
import {IoClose } from 'react-icons/io5';


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "NotFound", path: "*" }
      ];
      
    return (
        <nav>
           <div className="md:hidden" onClick={()=> setOpen(!open)}>
            {
                open === true ?<IoClose className="text-2xl"></IoClose>  : <CiMenuFries className="text-2xl "></CiMenuFries> 
            }
           
           
           </div>
          <ul className={`md:flex absolute md:static duration-1000 p-6 ${open? 'top-4' : '-top-60'}`}>
          {
            routes.map(route => <Link key={route.id} route={route}></Link>)
           } 
          </ul>
        </nav>
    );
};

Link.propTypes ={
    route: PropTypes.object.isRequired
}
export default Navbar;