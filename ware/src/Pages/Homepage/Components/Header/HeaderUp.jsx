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
            <Link to="/administration">
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
            <Link to="/mis-dashboard">
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
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/procurement-overview">Overview</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

{
  /* <video preload="none" controls="" style="width:480px;height:480px;">
      <source src="http://hafed.gov.in/sites/default/files/video-thumbnails/2018-02/Rice-advt_0.mp4">
  </video> */
}
