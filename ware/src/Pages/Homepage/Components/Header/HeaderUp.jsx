import React, { useState } from "react";
import "./Header.css";
import Logo1 from "./Assets/logo1.png";
import Logo2 from "./Assets/logo2.png";
import { Link } from "react-router-dom";
import Drop from "./Assets/drop.svg";
import Hamburger from "hamburger-react";
import AdminWorkDistrubution from "../../../Administration/Assets/workDistribution.pdf";
import BranchSop from "../../../Administration/Assets/branchSop.pdf";
import Manpower from "../../../Administration/Assets/manpower.pdf";

export default function HeaderUp() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div id="header">
      <Link to="/" className="h-logos">
        <img src={Logo1} alt="logo1" />
        <img src={Logo2} alt="logo2" />
      </Link>
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
          <li className="header-about-link">
            <Link to="#">
              About Us
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Glimpse of our
              <br />
              heritage and pride
            </p>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/about">About HSWC</Link>
                </li>
                <li>
                  <Link to="/photo-gallery">Photo Gallery</Link>
                </li>
                <li>
                  <Link to="/video-gallery">Video Gallery</Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Administration */}
          <li className="header-admin">
            <Link to="#">
              Administration
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Our office bearers for
              <br />
              you
            </p>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <a href={AdminWorkDistrubution} target="_blank">Work Distribution</a>
                </li>
                <li>
                  <a href={BranchSop} target="_blank">Branch Sop</a>
                </li>
                <li>
                  <a href={Manpower} target="_blank">Manpower</a>
                </li>
              </ul>
            </div>
          </li>

          {/* MIS Dashboard */}
          <li>
            <Link to="#">
              MIS Dashboard
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Recent Procurement
              <br />
              information
            </p>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="">Procurement</Link>
                </li>
                <li>
                  <Link to="">Storage</Link>
                </li>
                <li>
                  <Link to="">Quality Control</Link>
                </li>
                <li>
                  <Link to="">Stock Physical Verification</Link>
                </li>
                <li>
                  <Link to="">Recovery</Link>
                </li>
              </ul>  
            </div>
          </li>

          {/* Finance */}
          <li className="header-links-finance">
            <Link to="#">
              Finance
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Collaboration and
              <br />
              business opportunities
            </p>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/finance-overview">Overview</Link>
                </li>
                <li>
                  <Link to="/finance-paidup-turnover">Paidup Cap. & Turnover</Link>
                </li>
                <li>
                  <Link to="/finance-annual-reports">Annual Reports</Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Procurement */}
          <li className="header-links-procurement">
            <Link to="#">
              Procurement
              <img src={Drop} alt="dropdown" />
            </Link>
            <p>
              Collaboration and
              <br />
              business opportunities
            </p>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/procurement-overview">Overview</Link>
                </li>
                <li>
                  <Link to="/procurement-data">Procurement Data</Link>
                </li>
                <li>
                  <Link to="/technical-reports">Technical Reports</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}