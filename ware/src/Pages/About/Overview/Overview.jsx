import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import GodownMap from "../Assets/godownmap.png";
import "./Overview.css";

export default function Overview() {
  return (
    <div>
      <Header />
      <div>
        <section className="overview">
          <h1>Overview</h1>
          <img src={GodownMap} alt="" />
          <p>
            Haryana State Warehousing Corporation(HSWC) came into existence on
            1/11/1967. It was carved out from the erstwhile Punjab Warehousing
            Corporation. It is a statutory body created under an Act of
            Parliament with the twin objective of providing scientific storage
            facilities for a wide range of agricultural produce and notified
            commodities to the farmers, Govt. agencies, Public Enterprises,
            traders, etc. and to make available credit against goods deposited
            in the warehouses. At the time of its inception, HSWC had only 16
            godowns of 7000 MTs total capacity and has grown manifold with the
            present number of warehouses rising to 115 and storage capacity to
            18.80 lakhs Metric Tons (as on 28.02.2023).
          </p>
        </section>
      </div>
      <Footer />
      <Copyrights />
    </div>
  );
}
