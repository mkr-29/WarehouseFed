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
            <Link to="/about">About HSWC</Link>
            <span className="hdspan" />
          </li>
          <li>
            <Link to="/photo-gallery">Photo Gallery</Link>
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
