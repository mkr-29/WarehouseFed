import React from "react";
import Header from "../Homepage/Components/Header/Header";
import "./Notifications.css";
import Asset1 from "./Assets/asset1.svg";
import Copyrights from "../Homepage/Components/Footer/Copyrights";
import { Link } from "react-router-dom";

export default function Notifications() {
  return (
    <div className="notifications-page-full">
      <Header />
      <section id="notifications-page">
      <img src={Asset1} alt="" className='asset-1-noti' />
        <div className="noti-upd">
          <h1>Notifications and Updates</h1>
          <ul>
            <li>
              Delegation of financial powers to HoD in MSDE in respect of
              hospitality
            </li>
            <li>Additional charge of Administrative officer, NIESBUD</li>
            <li>Ban on Single Use Plastic</li>
            <li>
              Revised Ceilings for reimbursement of hospitality expenditure
            </li>
          </ul>
        </div>
        <div className="updates-noti">
          <h3>Updates</h3>
          <ul>
            <li><Link to="">Update 1</Link></li>
            <li><Link to="">Update 2</Link></li>
            <li><Link to="">Update 3</Link></li>
            <li><Link to="">Update 4</Link></li>
          </ul>
        </div>
      </section>
      <Copyrights/>
    </div>
  );
}
