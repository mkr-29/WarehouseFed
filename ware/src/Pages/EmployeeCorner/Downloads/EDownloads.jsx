import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import D1 from "../Assets/d1.pdf";
import D2 from "../Assets/d2.pdf";
import D3 from "../Assets/d3.pdf";
import D4 from "../Assets/d4.pdf";
import D5 from "../Assets/d5.pdf";
import D6 from "../Assets/d6.pdf";
import D7 from "../Assets/d7.pdf";
import D8 from "../Assets/d8.pdf";
import D9 from "../Assets/d9.pdf";
import D11 from "../Assets/d11.pdf";

export default function EDownloads() {
  return (
    <div>
      <Header />
      <section className="profile p-overview ec-downloads">
        <h6>Employee Corner</h6>
        <h1>Downloads</h1>
        <table>
          <tr>
            <td>
              <a href={D1} target="_blank">
                APPLICATION FORM FOR CAR/MOTOR CYCLE /SCOOTER /MOPED/ BYCYCLE /
                COMPUTER ADVANCE.
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href={D2} target="_blank">APPLICATION FOR MARRIAGE ADVANCE</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href={D3} target="_blank">PROFORMA FOR THE GRANT OF HOUSE BUILDING ADVANCE </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href={D4} target="_blank">
                APPLICATION FORM FOR REFUNDABLE/NON-REFUNDABLE ADVANCE FROM THE
                EMPLOYEES OWN WELFARE FUND.
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href={D5} target="_blank">SOP FOR BUSINESS BRANCH</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href={D6} target="_blank">SOP FOR STORAGE & TECHNICAL</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href={D7} target="_blank">SOP FOR ACCOUNTS-1</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href={D8} target="_blank">SOP FOR ACCOUNTS-2</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href={D9} target="_blank">SOP FOR INTERNAL AUDIT</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#404">SOP FOR PERSONNEL</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href={D11} target="_blank">SOP FOR CONSTRUCTION</a>
            </td>
          </tr>
        </table>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
