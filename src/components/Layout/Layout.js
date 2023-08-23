import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { BsLayoutSidebarInsetReverse, BsLayoutSidebarInset } from "react-icons/bs";
import "./Layout.css";
import Menus from "./menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <BsLayoutSidebarInsetReverse title=" Click to hide Side Bar" size={35} />    //  if toggle is true so left icon 
              ) : (
                <BsLayoutSidebarInset title="Click to Show Side Bar " size={35} />   // if toggle is true so Right icon 

              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>

    </>
  );
};

export default Layout;
