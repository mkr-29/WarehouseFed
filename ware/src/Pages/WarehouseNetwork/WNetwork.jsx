import React from "react";
import Header from "../Homepage/Components/Header/Header";
import Footer from "../Homepage/Components/Footer/Footer";
import Copyrights from "../Homepage/Components/Footer/Copyrights";
import NetworkCircleWise from "./JSON/NetworkCircleWise.json";
import NetworkTablesTemplate from "./Templates/NetworkTablesTemplate";
import NetworkDistrictWise from "./JSON/NetworkDistrictWise.json";
import CircleDistrictTableTemplate from "./Templates/CircleDistrictTableTemplate";
import NetworkAmbalaCircle from "./JSON/NetworkAmbalaCircle.json";
import NetworkKurukshetraCircle from "./JSON/NetworkKurukshetraCircle.json";
import CircleDistrictTableTemplate2 from "./Templates/CircleDistrictTableTemplate2";

export default function WNetwork() {
  return (
    <div>
      <Header />
      <section className="profile p-overview wh-network">
        <h6>Warehouse Network</h6>
        <h1>Network Circle Wise</h1>
        <table>
          <NetworkTablesTemplate data={NetworkCircleWise} />
        </table>
        <h1>Network District Wise</h1>
        <table>
          <NetworkTablesTemplate data={NetworkDistrictWise} />
        </table>
        <h2>Ambala District Office</h2>
        <p>STAFF AT DISTRICT OFFICES & WAREHOUSES</p>
        <table>
          <caption id="ambala-circle">Ambala Circle</caption>
          <tr>
            <th>SNo.</th>
            <th>Name of Circle</th>
            <th>Name of Warehouse</th>
            <th>Designation</th>
            <th>Name of Manager/ Incharge</th>
            <th>Mobile No.</th>
            <th>Email ID</th>
          </tr>
          <CircleDistrictTableTemplate
            data={NetworkAmbalaCircle}
            />
        </table>
        <table>
          <caption id="kurukshetra-circle">Kurukshetra Circle</caption>
            <tr>
              <th>SNo.</th>
              <th>Name of Warehouse</th>
              <th>Telephone No.</th>
              <th>Name of Manager/Incharge/Staff</th>
              <th>Mobile No.</th>
            </tr>
            <CircleDistrictTableTemplate2
              data={NetworkKurukshetraCircle}
            />
        </table>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
