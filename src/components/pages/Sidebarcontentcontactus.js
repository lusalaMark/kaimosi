import React from "react";
import { Link } from "react-router-dom";
import "./Sidebarcontentcontactus.css";

function Sidebarcontentcontactus() {
  return (
    <div className="sidebarcontent">
      <div className="subpages">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Subpages</h3>
        </Link>
      </div>
      <div className="subpages">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Welcome</h3>
        </Link>
      </div>
    </div>
  );
}

export default Sidebarcontentcontactus;
