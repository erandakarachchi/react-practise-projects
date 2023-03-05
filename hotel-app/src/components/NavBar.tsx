import React from "react";
import logo from "../assets/logo.png";
import { NavBarItem } from "./index";

const NavBar = () => {
  return (
    <div className="h-16 bg-primaryBlue px-8 flex items-center justify-between">
      <div className="">
        <img className="h-5" src={logo} />
      </div>
      <div className="flex items-center ">
        <NavBarItem name={"Home"} handler={"/#"} />
        <NavBarItem name={"Rooms"} handler={"/#"} />
        <NavBarItem name={"Offers"} handler={"/#"} />
        <NavBarItem name={"Gallery"} handler={"/#"} />
      </div>
    </div>
  );
};

export default NavBar;
