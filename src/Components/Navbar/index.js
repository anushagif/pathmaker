import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Navitems } from "./Navitems";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "../icon";

const Navbar = () => {
  const [Drawer, setDrawer] = useState(false);
  const [SideMenu, setSideMenu] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 950) {
      setDrawer(true);
    }
  }, []);
  useEffect(() => {
    const Resizer = () => {
      if (window.innerWidth < 950) {
        setDrawer(true);
      } else {
        setDrawer(false);
        setSideMenu(false);
      }
    };
    window.addEventListener("resize", Resizer);
    return () => {
      window.removeEventListener("resize", Resizer);
    };
  }, []);
  return (
    <>
      <nav className="NavBar">
        <Link to="./">
          {" "}
          <img className="logo" src={logo} alt="Looperacademy" />
        </Link>
        {!Drawer && (
          <ul className="nav-items">
            {Navitems.map((item) => {
              return (
                <li key={item.id} className="nav-item">
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {!Drawer && <Button />}

        {Drawer && (
          <div className="sidebar-toggle">
            {SideMenu ? (
              <CloseIcon
                className="menuIcon-toggle"
                onClick={() => setSideMenu(!SideMenu)}
              />
            ) : (
              <MenuIcon
                className="menuIcon-toggle"
                onClick={() => setSideMenu(!SideMenu)}
              />
            )}
          </div>
        )}
      </nav>
      <div className={SideMenu ? "sideBar-active" : "sideBar"}>
        <ul className="side-items">
          {Navitems.map((item) => {
            return (
              <li key={item.id} className="nav-itemside">
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <Button />
      </div>
    </>
  );
};

export default Navbar;
