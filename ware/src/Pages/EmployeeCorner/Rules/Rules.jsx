import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import "../Employee.css";
import A3 from "../Assets/a3.pdf";
import B1 from "../Assets/b1.pdf";
import B2 from "../Assets/b2.pdf";
import B4 from "../Assets/b4.pdf";
import B5 from "../Assets/b5.pdf";
import B6 from "../Assets/b6.pdf";
import B7 from "../Assets/b7.pdf";
import B8 from "../Assets/b8.pdf";
import B9 from "../Assets/b9.pdf";
import B10 from "../Assets/b10.pdf";
import B11 from "../Assets/b11.pdf";

export default function Rules() {
  return (
    <div>
      <Header />
      <section className="profile p-overview">
        <h6>Employee Corner</h6>
        <h1>HSWC Rules & Regulations</h1>
        <div className="rules-regl">
          <div>
            <h2>Information</h2>
            <table>
              <tr>
                <th>SNo.</th>
                <th>Subject</th>
              </tr>
              <tr>
                <td>1.</td>
                <td>
                  <a href="#404">WAREHOUSING CORPORATION ACT,1956</a>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>
                  <a href="#404">
                    AMENDMENTS IN WAREHOUSING CORPORATION ACT,1956
                  </a>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>
                  <a href={A3} target="_blank">
                    PUNJAB WAREHOUSES ACT, 1957
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <div>
            <h2>COMPENDIUM ON ACTS , RULES & REGULATIONS</h2>
            <table>
              <tr>
                <th>SNo.</th>
                <th>ACT/RULE/REGULATION- CONTENTS & AMENDMENTS</th>
              </tr>
              <tr>
                <td>1.</td>
                <td>
                  <a href={B1} target="_blank">
                    The Warehousing Corporation Act 1962
                  </a>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>
                  <a href={B2} target="_blank">
                    The Punjab Warehouses Act, 1957
                  </a>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>
                  <a href="#404">The Punjab Warehousing Rules,1958</a>
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>
                  <a href={B4} target="_blank">
                    The Haryana Warehousing Corporation General Regulations,1981
                  </a>
                </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>
                  <a href={B5} target="_blank">
                    HSWC (Officers & Staff) Amendment Regulations 2009
                  </a>
                </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>
                  <a href={B6} target="_blank">
                    HWC Gratuity Regulations,1992
                  </a>
                </td>
              </tr>
              <tr>
                <td>7.</td>
                <td>
                  <a href={B7} target="_blank">
                    HWC (Amendment) Gratuity Regulations,2010
                  </a>
                </td>
              </tr>
              <tr>
                <td>8.</td>
                <td>
                  <a href={B8} target="_blank">
                    HWC Pension Regulations,1996
                  </a>
                </td>
              </tr>
              <tr>
                <td>9.</td>
                <td>
                  <a href={B9} target="_blank">
                    HWC Employees Pension (Amendment) Regulations,2010
                  </a>
                </td>
              </tr>
              <tr>
                <td>10.</td>
                <td>
                  <a href={B10} target="_blank">
                    HWC Employees Contributory Provident Fund Regulations,1971
                  </a>
                </td>
              </tr>
              <tr>
                <td>11.</td>
                <td>
                  <a href={B11} target="_blank">
                    HSWC (Officers & Staff) Regulations ,1994
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
