import React from "react";
import Header from "../Homepage/Components/Header/Header";
import Footer from "../Homepage/Components/Footer/Footer";
import Copyrights from "../Homepage/Components/Footer/Copyrights";
import NetworkTablesTemplate from "../WarehouseNetwork/Templates/NetworkTablesTemplate";
import HeadOffice from "./JSON/HeadOffice.json";
import BodTempl from "./Templates/BodTempl";
import Bod from "./JSON/Bod.json";
import "./Directory.css";
import HeadOfficeTemplate from "./Templates/HeadOfficeTemplate";
import HeadOfficePanchkula from "./JSON/HeadOfficePanchkula.json";
import DistrictManagersTemplate from "./Templates/DistrictManagersTemplate";
import DistrictManagers from "./JSON/DistrictManagers.json";

export default function Directory() {
  return (
    <div>
      <Header />
      <section className="profile p-overview">
        <h1>Directory</h1>
        <h2>TELEPHONE DIRECTORY OF HEAD OFFICE AND FIELD UNITS</h2>
        <table>
          <caption>
            SELECT THE LOCATION BY CLICKING ON THE ITEM GIVEN BELOW
          </caption>
          <NetworkTablesTemplate data={HeadOffice} />
        </table>
        <h2>Board of Directors</h2>
        <table className="directory-bod">
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Office Number</th>
            <th>Residence</th>
          </tr>
          <BodTempl data={Bod} />
        </table>
        <h2>HEAD OFFICE, PANCHKULA</h2>
        <table className="directory-head-office">
          <tr>
            <th rowSpan={2}>Name</th>
            <th rowSpan={2}>Designation</th>
            <th colSpan={2}>TELEPHONE NOS. STD CODE (0172)</th>
            <th rowSpan={2}>RESIDENTIAL ADDRESS</th>
          </tr>
          <tr>
            <th>Office</th>
            <th>Res.</th>
          </tr>
          <HeadOfficeTemplate data={HeadOfficePanchkula} />
          <tr>
            <td colSpan={5}>
              EPABX NO: (0172)-2578830-31-32; FAX : (0172)-2586900
            </td>
          </tr>
        </table>
        <table className="directory-district-managers">
          <caption>DIRECTORY OF DISTRICT MANAGERS</caption>
          <tr>
            <th rowSpan={2}>Circle</th>
            <th rowSpan={2}>Name of the District Manager</th>
            <th colSpan={2}>Telephone Number.</th>
          </tr>
          <tr>
            <th>Office</th>
            <th>Mobile</th>
          </tr>
          <DistrictManagersTemplate data={DistrictManagers} />
        </table>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
