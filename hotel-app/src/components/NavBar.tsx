import React from "react";
import logo from "../assets/logo.png";
import { NavBarItem } from "./index";

const NavBar = () => {
  return (
    <nav className="h-24 bg-white flex items-center justify-between">
      <div className="">
        <span className="font-montserrat text-slate-600 text-3xl font-bold">
          Costal
        </span>
        <span className="font-montserrat text-primaryBlue text-3xl ">
          Retreat
        </span>
        <span className="font-montserrat text-primaryBlue text-3xl text-red-400">
          .
        </span>
      </div>
      <div className="flex items-center ">
        <NavBarItem name={"Home"} handler={"/#"} />
        <NavBarItem name={"Rooms"} handler={"/#"} />
        <NavBarItem name={"Offers"} handler={"/#"} />
        <NavBarItem name={"Gallery"} handler={"/#"} />
      </div>
      <div className="bg-primaryBlue border px-4 py-2 text-accentBlue rounded-xl border-primaryBlue hover:bg-accentBlue hover:text-primaryBlue">
        <div className="font-montserrat font-bold">
          Make a Reservation
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
