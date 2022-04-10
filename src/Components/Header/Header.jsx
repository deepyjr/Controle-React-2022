import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="titre"to="/PageCSS">
        <h1 >Controle React 2022</h1>
      </Link>
      <ul>
        <li>
          <Link to="/PageCSS">
            <p>Page CSS</p>
          </Link>
        </li>
        <li>
          <Link to="/PageCSSClass">
            <p>Page CSS Class</p>
          </Link>
        </li>
        <li>
          <Link to="/PageLibReact">
            <p>Page Library React</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
