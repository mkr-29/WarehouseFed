import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import {Link} from "react-router-dom";
import "../WarehouseNetwork.css";

export default function Circle() {
  return (
    <div>
      <Header />
      <section className="profile p-overview">
        <h6>Warehouse Network</h6>
        <h1>Circle Wise</h1>
        <div className="ppdf-links w-netw-links">
            <Link to="">Ambala Circle</Link>
            <Link to="">Kurukshetra Circle</Link>
            <Link to="">Kaithal Circle</Link>
            <Link to="">Panipat Circle</Link>
            <Link to="">Sirsa Circle</Link>
            <Link to="">Fatehbad Circle</Link>
            <Link to="">Rohtak Circle</Link>
            <Link to="">Rewari Circle</Link>
            <Link to="">Palwal Circle</Link>
        </div>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
