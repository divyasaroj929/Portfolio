import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ navItem }) => {
  const [click, setClick] = useState(false);

  const [color, setColor] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div className={color ? "header bg-header" : "header"}>
        <div>
          <a href="/Protfolio">
            <h1>Portfolio</h1>
          </a>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {navItem.map((item, index) => {
            return (
              <>
                <li className="nav-menu-li">
                  <NavLink className="a" to={item.path}>
                    {item.name}
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
