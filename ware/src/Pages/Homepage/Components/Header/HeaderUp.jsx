import React, { useState } from "react";
import "./Header.css";
import Logo1 from "./Assets/logo1.png";
import Logo2 from "./Assets/logo2.png";
import { Link } from "react-router-dom";
import Drop from "./Assets/drop.svg";
import Hamburger from "hamburger-react";

export default function HeaderUp() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div id="header">
      <div className="h-logos">
        <img src={Logo1} alt="logo1" />
        <img src={Logo2} alt="logo2" />
      </div>
      <div className="hammenu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <div className={`h-links ${isOpen ? "hamopen" : "hamclose"}`}>
        <ul>
          {/* Home */}
          <li>
            <Link to="/">Home</Link>
            <p>
              One Stop solution
              <br />
              for everything
            </p>
          </li>

          {/* Gallery */}
          <li>
            <Link to="/">
              Gallery
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Glimpse of our
              <br />
              heritage and pride
            </p>
            <div className="dropdown-menu">
              <ul>
                <li><Link to=''>Hello</Link></li>
                <li><Link to=''>Hello</Link></li>
              </ul>
            </div>
          </li>

          {/* Administration */}
          <li>
            <Link to="/administration">
              Administration
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Our office bearers for
              <br />
              you
            </p>
            <div className="dropdown-menu">{/* Dropdown menu content */}</div>
          </li>

          {/* MIS Dashboard */}
          <li>
            <Link to="/mis-dashboard">
              MIS Dashboard
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Recent Procurement
              <br />
              information
            </p>
            <div className="dropdown-menu">{/* Dropdown menu content */}</div>
          </li>

          {/* Finance */}
          <li>
            <Link to="/finance">
              Finance
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Collaboration and
              <br />
              business opportunities
            </p>
            <div className="dropdown-menu">{/* Dropdown menu content */}</div>
          </li>

          {/* Procurement */}
          <li>
            <Link to="/procurement">
              Procurement
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Collaboration and
              <br />
              business opportunities
            </p>
            <div className="dropdown-menu">{/* Dropdown menu content */}</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
