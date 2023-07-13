import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import ES1 from "../Assets/es1.png";
import ES2 from "../Assets/es2.png";

export default function ExtSer() {
  return (
    <div>
      <Header />
      <section className="profile p-overview ss-scu ext-ser">
        <h6>Scientific Storage</h6>
        <h1>Extension Service Schemes</h1>
        <p>
          The Corporation is running two extension service schemes namely
          Dis-infestation Extension Service Scheme (DESS) and Farmers Extension
          Service Scheme (FESS).
        </p>
        <h2>i) FARMERS EXTENSION SERVICE SCHEME</h2>
        <p>
          The Corporation imparts free training to the farmers about scientific
          storage & preservation of agricultural produce and Dis-infestation
          measures. The warehouse staff visits surrounding villages to
          demonstrate the dis-infestation measures besides acquainting them
          about the benefits of scientific storage and the facilities being
          provided by the Corporation to the farmers. During the year 2017-18 in
          459 villages, 4870 farmers were educated.
        </p>
        <h2>ii) DIS-INFESTATION EXTENSION SERVICE SCHEME</h2>
        <p>
          Under this scheme, stocks of farmers, cooperatives, traders and others
          are disinfested in their own homes/godowns. During the year 2017-18,
          2528 people availed benefit from this scheme and Corporation earned
          Rs. 9.80 lakh under this scheme.
        </p>
        <p className="mt-1">
          During the current financial year 2018-19, the Corporation against the
          target of Rs. 15.00 lakh, has earned an amount of Rs. 0.87 lakh under
          DESS and 235 number of beneficiaries availed themselves of this
          facility from 01.04.2018 to 30.06.2018.
        </p>

        <p className="mt-1">
          The progress made by the Corporation under these two schemes since 2010-11 is as under:
        </p>
        <div className="exts-tab-sec">
          <table>
            <tr>
              <th rowSpan={2}>Year</th>
              <th rowSpan={2}>Earning under DESS (lakh Rs.)</th>
              <th colSpan={2}>FESS</th>
            </tr>
            <tr>
              <th>Villages Covered</th>
              <th>Farmers educated</th>
            </tr>
            <tr>
              <td>2010-11</td>
              <td>12.36</td>
              <td>577</td>
              <td>5707</td>
            </tr>
            <tr>
              <td>2011-12</td>
              <td>13.14</td>
              <td>583</td>
              <td>6653</td>
            </tr>
            <tr>
              <td>2012-13</td>
              <td>11.14</td>
              <td>530</td>
              <td>6983</td>
            </tr>
            <tr>
              <td>2013-14</td>
              <td>9.29</td>
              <td>637</td>
              <td>7057</td>
            </tr>
            <tr>
              <td>2014-15</td>
              <td>10.84</td>
              <td>590</td>
              <td>6411</td>
            </tr>
            <tr>
              <td>2015-16</td>
              <td>12.21</td>
              <td>683</td>
              <td>8441</td>
            </tr>
            <tr>
              <td>2016-17</td>
              <td>10.13</td>
              <td>653</td>
              <td>7706</td>
            </tr>
            <tr>
              <td>2017-18</td>
              <td>9.80</td>
              <td>459</td>
              <td>4870</td>
            </tr>
            <tr>
              <td>2018-19</td>
              <td>5.7</td>
              <td>332</td>
              <td>3786</td>
            </tr>
            <tr>
              <td>2019-20</td>
              <td>6.46</td>
              <td>345</td>
              <td>3621</td>
            </tr>
            <tr>
              <td>2020-21 (upto 30/01/2021)</td>
              <td>7.12</td>
              <td>198</td>
              <td>2633</td>
            </tr>
          </table>
          <div>
            <img src={ES1} alt="" />
          </div>
        </div>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
