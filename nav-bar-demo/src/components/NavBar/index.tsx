import React from "react";
import "./index.scss";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="container">
        <div className="upper-section">
          <img className="logo" src={logo}></img>
          <div className="search-container">
            <input placeholder="Search" type="text" />
          </div>
          <div className="menu">
            <a href="/#">Categories</a>
            <a href="/#">EN</a>
            <div>
              <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faCartShopping} />
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <a>
            <FontAwesomeIcon className="icon" icon={faBars} />
            <span>All</span>
          </a>
          <a>Home</a>
          <a>Women</a>
          <a>Men</a>
          <a>Boys</a>
          <a>Girls</a>
          <a>Sports</a>
          <a>Brands</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
