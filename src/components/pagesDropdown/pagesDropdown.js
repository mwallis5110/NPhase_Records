import React, { useState } from "react";

import NavLogo from "../../assets/logo/logoCircle.png";
import { menuItems } from "./menuItems";
import { IoMenuOutline } from "react-icons/io5";

import "./pagesDropdown.css";

export default function PagesDropdown() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className="pagesDropdown"
      onClick={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      <button
        className={`${dropdown ? "expandedDropdownButton" : "dropdownButton"}`}
        href="/"
        aria-expanded={dropdown ? "true" : "false"}
      >
        <img
          id="navLogo"
          src={NavLogo}
          alt="Nav bar logo, takes user to top of page"
        />
        <IoMenuOutline className={`${dropdown ? "noshow " : "menuIcon"}`} />
      </button>
      <ul
        className={`dropdown ${dropdown ? "links" : "noshow"}`}
        dropdown={dropdown}
      >
        {menuItems.map((menu, index) => {
          return (
            <li
              className="menuItems"
              key={index}
              onClick={() => {
                const anchor = document.querySelector(menu.anchor);
                anchor.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {menu.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
