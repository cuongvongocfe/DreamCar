import React, { useState } from "react";
import "./Navbar.css";

// Image
import logo from "../../assets/car-logo.png";
// Icons
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  //Statement to hold the navbar state
  const [navbar, setNavbar] = useState("navbar");
  // function to show navbar on smaller width screens
  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };
  // function to remove navbar on smaller width screens
  const removeNavbar = () => {
    setNavbar("navbar");
  };
  // function to add a background to the Navbar when we scroll a certain height on the window
  const [header, setHeader] = useState('header')
  const addBg= () =>{
    if(window.screenY >=20)(
      setHeader('header addbg')
    )
  }


  window.addEventListener('scroll', addBg)

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li className="listItem" onClick={removeNavbar}>
            <a href="/" className="link">
              Used Cars
            </a>
          </li>
          <li className="listItem" onClick={removeNavbar}>
            <a href="/" className="link">
              New Cars
            </a>
          </li>
          <li className="listItem" onClick={removeNavbar}>
            <a href="/" className="link">
              Auctions
            </a>
          </li>
          <li className="listItem" onClick={removeNavbar}>
            <a href="/" className="link">
              Sellers
            </a>
          </li>
        </ul>
        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>
      <div className="signUp flex">
        <div className="text">Sign Up</div>
        <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
      </div>
    </div>
  );
}

export default Navbar;
