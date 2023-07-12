import React from "react";
import "../Finance.css";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";

export default function PaidupTurnover() {
  return (
    <div>
      <Header />
      <section className="profile">
        <h1>Paidup Capital & Turnover/Profits</h1>
        <p>
          The financial achievements of the Corporation since 2016-17 onward are
          as under:-(Fig. in lakh Rupees)
        </p>
        <table className="finance-turn">
          <tr>
            <th>Particulars</th>
            <th>2019-20</th>
            <th>2020-21</th>
            <th>2021-22</th>
            <th>
              2022-23
              <br />
              (On Revised Budget Estimate)
            </th>
            <th>
              2023-24
              <br />
              (On Budget Estimate)
            </th>
          </tr>
          <tr>
            <td>Authorized Capital</td>
            <td>620</td>
            <td>620</td>
            <td>620</td>
            <td>620</td>
            <td>620</td>
          </tr>
          <tr>
            <td>Paid up Capital (50% each by CWC & State Govt.)</td>
            <td>584</td>
            <td>584</td>
            <td>584</td>
            <td>584</td>
            <td>584</td>
          </tr>
          <tr>
            <td>Total Turnover</td>
            <td>511811</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Profit before tax</td>
            <td>9631</td>
            <td>14566</td>
            <td>3211</td>
            <td>1750</td>
            <td>3820</td>
          </tr>
          <tr>
            <td>Profit after tax</td>
            <td>5868</td>
            <td>10974</td>
            <td>3144</td>
            <td>596</td>
            <td>2860</td>
          </tr>
          <tr>
            <td>Dividend declared during the year</td>
            <td>880</td>
            <td>1646</td>
            <td>472</td>
            <td>89</td>
            <td>429</td>
          </tr>
          <tr>
            <td>Dividend paid during the year/to be paid</td>
            <td>
              703
              <br /> (F.Y. 2017-18)
            </td>
            <td>NIL</td>
            <td>
              605
              <br />
              (F.Y. 2018-19)
            </td>
            <td>
              880
              <br />
              (F.Y. 2021-22)
              <br />
              to be paid
              <br />
              1646
              <br />
              (F.Y. 2020-21)
            </td>
            <td>
              to be paid
              <br />
              472
              <br />
              (F.Y. 2021-22)
            </td>
          </tr>
        </table>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
