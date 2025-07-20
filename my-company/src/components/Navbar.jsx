import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "20px",
          color: "Blue",
          cursor: "pointer",
          backgroundColor: "lightGrey",
          padding: "20px",
        }}
      >
        <li style={{}}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li>
          <Link to={"/services"} style={{ textDecoration: "none" }}>
            Services
          </Link>
        </li>
        <li>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
