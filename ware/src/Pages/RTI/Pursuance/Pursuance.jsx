import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import PursuanceTempl from "./PursuanceTempl";
import Pursuance1 from "./Pursuance1.json";
import "../RTI.css";
import Annexure1 from "./Annexure1.json";
import AnnexureTempl from "./AnnexureTempl";
import Annexure2 from "./Annexure2.json";

export default function Pursuance() {
  return (
    <div>
      <Header />
      <section className="profile p-overview pursuance-rti">
        <h1>IN PURSUANCE OF SECTION 4 (1) (b) THE RTI ACT, 2005</h1>
        <h3>
          THE INFORMATION IN RESPECT OF HARYANA STATE WAREHOUSING CORPORATION
          (HSWC) , IS GIVEN HERE UNDER
        </h3>
        <table>
          <caption>
            THE INFORMATION IN RESPECT OF HARYANA STATE WAREHOUSING CORPORATION
            (HWC) , IS GIVEN HERE UNDER
          </caption>
          <PursuanceTempl data={Pursuance1} />
        </table>
        <h3>Annexure - I</h3>
        <table className="annex-table">
          <caption>
            List of officers designated as First Appellate Authority and State
            Public Information Officerat Head Office, Panchkula under Right to
            Information Act, 2005
          </caption>
          <tr>
            <th>Sno.</th>
            <th>
              Name & designation of State Assistant Public Information Officers
            </th>
            <th>Address of Field/Branch Offices</th>
            <th>Telephone Numbers</th>
          </tr>
          <AnnexureTempl data={Annexure1} />
        </table>
        <h3>Annexure - II</h3>
        <table className="annex-table">
          <tr>
            <th>SNo.</th>
            <th>
              Name & designation of State Assistant Public Information Officers
            </th>
            <th>Address of Field/Branch Offices</th>
            <th>Telephone Numbers</th>
          </tr>
          <AnnexureTempl data={Annexure2} />
        </table>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
