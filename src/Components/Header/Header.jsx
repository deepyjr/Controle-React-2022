import React from "react";
import "./Header.css";
import {Name} from "../../Environnement";
function Header() {
  return (
    <div className="header">
      <h1>{Name}</h1>
    </div>
  );
}

export default Header;
