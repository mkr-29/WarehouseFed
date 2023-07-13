import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";

export default function CCDTY() {
  return (
    <div>
      <Header />
      <section className="profile p-overview ccdty">
        <h6>Engineering</h6>
        <h1>Capacity Constructed During The Years</h1>
        <h2>
          The detail of capacity constructed in recent years is as under: -
        </h2>
        <table>
          <tr>
            <th>SNo.</th>
            <th>Year</th>
            <th>HSWC (In MTs.)</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>2009-10</td>
            <td>77,120</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>2010-11</td>
            <td>1,32,480</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>2011-12</td>
            <td>97,890</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>2012-13</td>
            <td>45,274</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>2013-14</td>
            <td>1,83,172</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>2016-17</td>
            <td>20,636</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>2017-18</td>
            <td>10,165</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>2018-19</td>
            <td>71,500</td>
          </tr>
          <tr>
            <td>9.</td>
            <td>2019-20</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10.</td>
            <td>2020-21</td>
            <td>0</td>
          </tr>
          <tr>
            <td>11.</td>
            <td>2021-22</td>
            <td>1,42,442</td>
          </tr>
          <tr>
            <td>12.</td>
            <td>2022-23</td>
            <td>1,10,706 &90,666 (Close to completion up to 31.08.2023)</td>
          </tr>
          <tr>
            <td>13.</td>
            <td>2023-24</td>
            <td>1,72,176(in the process)</td>
          </tr>
        </table>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
