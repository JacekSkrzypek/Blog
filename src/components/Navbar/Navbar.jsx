import React from "react";
import "../modules.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className="link" to="/"> My blog </Link>
        </li>
        <li>
          <Link className="link" to="/newpost"> New post </Link>
        </li>
        <li>Log out</li>
      </ul>
    </nav>
  );
};

export default Navbar;
