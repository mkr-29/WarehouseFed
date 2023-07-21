import React from "react";
import "./Footer.css";
import Notification from "./Assets/notification.svg";
import IndianFlag from "./Assets/indian-flag.svg";
import { Link } from "react-router-dom";
import FootAsset from "./Assets/foot-asset.png";

export default function Footer() {
  return (
    <div id="footer">
      <div className="infoot">
        <div className="foot-1">
          <div>
            <img src={Notification} alt="notification" />
            <span>Notifications and Updates</span>
          </div>
          <span className="noti-1">3+ New announcements</span>
          <span />
          <Link className="noti-1" to="/notifications">Tap to view all</Link>
          <Link to="">
            <img src={IndianFlag} alt="" />
            Eng
          </Link>
        </div>
        <div className="foot-2">
          <Link to="/press-release">Press Release</Link>
          <Link to="/tenders-auctions">E-Tender & E-Auction</Link>
          <Link to="/gst">GST</Link>
          <Link to="/rti">RTI</Link>
          <Link to="//hrmshry.nic.in">HRMS</Link>
        </div>
        <span className="foot-dash" />
        <div className="foot-2">
          <Link to="/news">News</Link>
          <Link to="/warehouse-network">Warehouse Network</Link>
          <Link to="">Grievance Redressal</Link>
          <Link to="/directory">Directory</Link>
          <Link to="/idc/rewari">IDC Rewari</Link>
        </div>
        <img src={FootAsset} alt="Footer Asset" />
      </div>
    </div>
  );
}
