import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Fb from "./Assets/fb.svg";
import In from "./Assets/in.svg";
import Tw from "./Assets/tw.svg";
import Yt from "./Assets/yt.svg";
import Notification from "./Assets/notification.svg";
import Search from "./Assets/search.svg";
import VS from "../../../ScientificStorage/Assets/vs.pdf"
import ST from "../../../ScientificStorage/Assets/st.pdf"
import ESOG from "../../../Engineering/Assets/esog.pdf"
import EMTF from "../../../Engineering/Assets/emtf.pdf"
import DOP from "../../../EmployeeCorner/Assets/dop.pdf"
import EIL from "../../../EmployeeCorner/Assets/eil.pdf"
import SP from "../../../EmployeeCorner/Assets/sp.pdf"

export default function HeaderDown() {
  return (
    <div className="head-down">
      <div className="search-ar">
        <input
          className="search-box"
          type="text"
          placeholder="Search here..."
        />
        <button className="srbtn">
          <img src={Search} alt="" />
        </button>
      </div>

      <div className="hd-links">
        <ul>
          <li>
            <Link to="#">Scientific Storage</Link>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/storage-capacity-and-utilization">Storage Capacity & Utilization</Link>
                </li>
                <li>
                  <a href={VS} target="_blank">Vacant Space</a>
                </li>
                <li>
                  <a href={ST} target="_blank">Storage Tariff</a>
                </li>
                <li>
                  <Link to="/extension-services">Extension Services</Link>
                </li>
                <li>
                  <Link to="/business-report">Business Report</Link>
                </li>
              </ul>
            </div>
            <span className="hdspan" />
          </li>
          <li className="header-down-links-engineering">
            <Link to="#">Engineering</Link>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/engineering-overview">Overview</Link>
                </li>
                <li>
                  <a href={ESOG} target="_blank">Enineering Spec. of Godowns</a>
                </li>
                <li>
                  <Link to="/capacity-construted-during-the-years">Capacity Constructed During The Years</Link>
                </li>
                <li>
                  <Link to="/layout-plans">Layout Plans</Link>
                </li>
                <li>
                  <Link to={EMTF} target="_blank">Engineering Model Tender Form</Link>
                </li>
              </ul>
            </div>
            <span className="hdspan" />
          </li>
          <li className="header-down-links-employee-corner">
            <Link to="#">Employee Corner</Link>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="#">Cashless Medical Facility</Link>
                </li>
                <li>
                  <a href={DOP} target="_blank">Delegation of Powers</a>
                </li>
                <li>
                  <a href={EIL} target="_blank">Employee Id. List</a>
                </li>
                <li>
                  <Link to="/hswc-rules-regulations">HSWC Rule & Regulations</Link>
                </li>
                <li>
                  <Link to={SP} target="_blank">Staff Position</Link>
                </li>
                <li>
                  <Link to="/seniority-list">Seniority List</Link>
                </li>
                <li>
                  <Link to="/gpf-statements">GPF Statements</Link>
                </li>
                <li>
                  <Link to="/circulars-office-order-instructions">Circulars/Office Order/Instructions</Link>
                </li>
                <li>
                  <Link to="/employee-corner-downloads">Downloads</Link>
                </li>
              </ul>
            </div>
            <span className="hdspan" />
          </li>
          <li>
            <Link to="">File RTI</Link>
            <span className="hdspan" />
          </li>
          <li>
            <Link to="">Contact Us</Link>
            <span className="hdspan" />
          </li>
          <li className="h-socials">
            <Link to="">
              <img src={Fb} alt="facebook" />
            </Link>
            <Link to="">
              <img src={In} alt="instagram" />
            </Link>
            <Link to="">
              <img src={Tw} alt="twitter" />
            </Link>
            <Link to="">
              <img src={Yt} alt="youtube" />
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/notifications" className="hd-notification">
        Notifications
        <img src={Notification} alt="notification" />
      </Link>
    </div>
  );
}
