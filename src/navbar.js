import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <div className="w-full bg-gray-800 h-16 z-50">
            <div className="w-10/12 flex justify-between mx-auto">
                <Link to={"/"}>
                    <h1 className="m-4 font-bold text-white text-xl">
                        Logo
                    </h1>
                </Link>
                <nav className="overflow-hidden sm:block hidden">
                    <ul className="text-white flex px-12">
                        <Link to={"/"}>
                            <li className="m-5 hover:scale-105 hover:opacity-85">Home</li>
                        </Link>
                        <Link to={"/about"}>
                            <li className="m-5 hover:scale-105 hover:opacity-85">About</li>
                        </Link>
                        <Link to={"/contact"}>
                            <li className="m-5 hover:scale-105 hover:opacity-85">Contact</li>
                        </Link>
                        <Link to={"/service"}>
                            <li className="m-5 hover:scale-105 hover:opacity-85">Services</li>
                        </Link>
                    </ul>
                </nav>
                <i class="ri-menu-2-fill text-white m-4 text-2xl sm:hidden block cursor-pointer hover:opacity-80"></i>
            </div>
        </div>
    );
}
export default NavBar;