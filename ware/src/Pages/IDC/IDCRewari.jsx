import React from "react";
import Header from "../Homepage/Components/Header/Header";
import Footer from "../Homepage/Components/Footer/Footer";
import Copyrights from "../Homepage/Components/Footer/Copyrights";
import IDCRewariImg from "./Assets/icd-rewari.jpg";
import IDCTruck from "./Assets/idc-truck.jpg";
import "./IDC.css";
import IDCCrane from "./Assets/idc-crane.jpg";
import ICDCompaniesTemplate from "./Templates/ICDCompaniesTemplate";
import ICDRewari from "./JSON/ICDRewari.json";

export default function IDCRewari() {
  return (
    <div>
      <Header />
      <section className="profile p-overview idc-rewari">
        <h1>LAYOUT PLAN OF ICD, REWARI</h1>
        <img src={IDCRewariImg} alt="" />
        <p>
          An ICD is a common user facility with public authority status equipped
          with fixed installations and offering services for handling and
          temporary storage of import/ export laden and empty containers carried
          under Customs control and with Customs and other agencies competent to
          clear goods for home use, warehousing, temporary missions, re-export,
          temporary storage for onward transit and outright export.
          Trans-shipment of cargo can also take place from such stations.
        </p>
        <hr />
        <div className="idc-containers">
          <img src={IDCTruck} alt="" />
          <div>
            <h4>OPT FOR CONTAINERISATION WITH HWC</h4>
            <p>
              It will provide single window clearance to the importers/
              exporters of Haryana, Rajasthan, and Western Uttar Pradesh. The
              ICD will have state-of-the-art equipment with modern communication
              systems like Electronic Data Interchange. All formalities relating
              to import and export will be completed at Rewari itself. The
              initial capacity of the ICD will be to handle 50,000 containers
              per annum and it would take full advantage of the latest
              developments in freight technology, communication, and
              computerization of operations.
            </p>
          </div>
        </div>
        <hr />
        <div className="idc-containers">
          <div>
            <p>
              Inland Container Depot will be linked to Mumbai Jawaharlal Nehru
              and Kandla ports with rail/road terminal facilities.
            </p>
            <h4>SALIENT FEATURES</h4>
            <ul>
              <li>Two container parks</li>
              <li>Open scrap yard for destuffing of iron and steel scrap.</li>
              <li>
                Office accommodation for Shipping lines, Custom Office, Bank,
                Custom Clearing agents and Surveyors.
              </li>
              <li>
                Communication system equipped with electronic telephone
                exchange, Telex, FAX, STD and Data processing facilities.
              </li>
              <li>Parking area for truck trailers.</li>
              <li>Workshop, Canteen and other services.</li>
            </ul>
          </div>
          <img src={IDCCrane} alt="" />
        </div>
        <table className="idc-icd">
          <caption>Operating from ICD, Rewari </caption>
          <tr>
            <th>SNo.</th>
            <th>NAME OF THE SHIPPING LINE</th>
            <th className="res-mob">SNo.</th>
            <th className="res-mob">NAME OF THE SHIPPING LINE</th>
            <th className="res-mob">SNo.</th>
            <th className="res-mob">NAME OF THE SHIPPING LINE</th>
          </tr>
          <ICDCompaniesTemplate data={ICDRewari} />
        </table>
        <p>
          <b>Manoj Parashar,</b>
        </p>
        <p>Port Manager, ICD Rewari.</p>
        <p> Mobile. No. 85060-81118.</p>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
