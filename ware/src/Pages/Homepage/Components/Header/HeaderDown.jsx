import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Fb from "./Assets/fb.svg";
import In from "./Assets/in.svg";
import Tw from "./Assets/tw.svg";
import Yt from "./Assets/yt.svg";
import Notification from "./Assets/notification.svg";
import Search from "./Assets/search.svg";

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
                  <Link to="storage-capacity-and-utilization">Storage Capacity & Utilization</Link>
                </li>
                <li>
                  <Link to="vacant-spaces">Vacant Space</Link>
                </li>
                <li>
                  <Link to="storage-tariff">Storage Tariff</Link>
                </li>
                <li>
                  <Link to="extension-services">Extension Services</Link>
                </li>
                <li>
                  <Link to="business-report">Business Report</Link>
                </li>
              </ul>
            </div>
            <span className="hdspan" />
          </li>
          <li>
            <Link to="#">Engineering</Link>
            <span className="hdspan" />
          </li>
          <li>
            <Link to="#">Employee Corner</Link>
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
