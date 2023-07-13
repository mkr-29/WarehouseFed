import React from "react";
import "../Engineering.css";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import Eoverv from "../Assets/overview.png";

export default function EOverview() {
  return (
    <div>
      <Header />
      <section className="profile p-overview e-overview">
        <h6>Engineering</h6>
        <h1>Overview</h1>
        <img src={Eoverv} alt="" />
        <p>
          Haryana state warehousing corporation was setup on 1st November 1967
          with 16 No. of warehouses and total capacity of 7000 MT.The
          Engineering Wing also looks after the repair and maintenance of huge
          existing capacity. In addition to construction of its own godowns; the
          construction Branch executes deposit works for Food & Civil Supplies
          Department, Haryana Agro industries Corporation Ltd; Transport
          Department, Sarswati Vikas Board.
        </p>
        <p className="mt-1">Engineering Wing of HSWC is responsible for following activities</p>
        <ul>
          <li>
            Construction and maintenance of covered godowns, Plinths and
            ancillary structures like office block, weigh bridge, , isolation
            shed, cycle stand, toilets, roads, drains, etc.
          </li>
          <li>
            Construction of Cement concrete roads in view of heavy vehicles
            plying in the godowns.
          </li>
          <li>
            Maintenance of HSWC flats, Guest Houses spread throughout the State.
          </li>
          <li>
            Implementation of CSR activities in HSWC complexes by providing
            Female Lav Block, Labour Shed,Safe drinking water facilities.
          </li>
          <li>
            Construction and maintenance of Internal & External Electrical
            Installation and Pumping sets in godowns at various locations.
          </li>
          <li>
            Execution of deposit works for Food & Civil Supplies Department,
            Haryana Agro industries Corporation Ltd; Transport Department,
            Sarswati Vikas Board.
          </li>
          <li>
            Installation of new weighbridges and Up-gradation of existing
            weighbridges to fully electronic, enhancement of capacity of
            weigh-bridges as per requirement.
          </li>
          <li>Maintenance of HQ/ Office Building.</li>
          <li>
            Introduction of new roofing technologies in HSWC godowns like
            installation of Galvalume sheets with Turbo ventilators.
          </li>
        </ul>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
