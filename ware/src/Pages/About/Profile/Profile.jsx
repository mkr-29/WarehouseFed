import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import "./Profile.css";
import HSWC from "../Assets/hswc.png";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <Header />
      <section className="profile">
        <h1>Profile</h1>
        <img src={HSWC} alt="" />
        <p>
          As a growth and productivity-oriented public sector enterprise,
          <span>Haryana State Warehousing Corporation (HSWC)</span>, is
          committed to meet the storage and warehousing needs of agriculture,
          trade, industry, and export-import sectors in the entire state. It has
          made rapid strides since its inception in November 1967. From a humble
          beginning with 16 warehouses of 7,000 Mts capacity, today it operates
          a network of more than 115 warehouses with over 18.80 LMT storage
          capacity. <span>HSWC's</span> dedicated personnel offer efficient
          services for the storage of agricultural and notified commodities to a
          clientele of over 15,000 satisfied customers. <span>HSWC</span> has an
          extraordinarily strong financial base for a service-oriented
          organization with outstanding financial results. It has developed the
          technical capability as well as the requisite financial resilience to
          take up mammoth projects with its internal resources.
          <br />
          <br />
          Please click <Link to="our-functions">our functions</Link> for
          overview of functions prescribed in our preamble.
        </p>
        <h2>Share Capital</h2>
        <p>
          The State Government of Haryana and the Central Warehousing
          Corporation contribute to the share capital of the Corporation on
          equity basis. The authorised capital of the Corporation is Rs. 62
          Million against which the paid-up capital is Rs. 58.4 Million.
        </p>
        <h2>Corporate Management</h2>
        <p>
          The general superintendence and management of the affairs of the
          corporation vests in a Board of Directors, comprising the following:-
        </p>
        <ul>
          <li>
            Five directors nominated by the State Government, one of whom is
            appointed as Chairman of the Corporation
          </li>
          <li>
            Five directors nominated by the Central Warehousing Corporation; and
          </li>
          <li>Managing Director</li>
        </ul>
        <p>
          At Head Office, the Chairman, and the Managing Director are assisted
          by Secretary, Executive Engineer, Manager (Storage & Technical),
          Manager(Business), Manager(Personnel ), Manager(Accounts), Legal
          Advisor and Sr. Systems Analyst. Our field units are grouped into nine
          regions which are controlled by respective District Managers. A small
          but experienced and technically competent team of professionals
          manages the primary work-units, Warehouse.
        </p>
        <h2>Range of Activities</h2>
        <p>
          Our present range of activities provides quality services to a wide
          spectrum of clientele in the following areas :
        </p>
        <ul>
          <li>Handling and Transportation.</li>
          <li>
            Package for storage, sale, and distribution of agricultural produce
            and notified commodities.
          </li>
          <li>Institutional credit through the medium of warehouse receipt.</li>
          <li>
            Facilities for International Trade through Inland Container Depot,
            Rewari.
          </li>
          <li>
            Disinfestation of agricultural produce, factory premises, flour/
            rice mills, containers, and pre-shipment fumigation of export cargo.
          </li>
          <li>Pre-construction soil treatment against termites.</li>
          <li>
            Procurement of foodgrains and other commodities on behalf of various
            State and Central Govt. Agencies.
          </li>
        </ul>
        <h2>Consultancy And Technical Know-How</h2>
        <p>
          HSWC has a large human resource bank with the necessary wherewithal to
          provide quality consultancy and project implementation services in the
          following area:
        </p>
        <ul>
          <li>
            Technical know-how for scientific storage preservation and
            disinfestation services for a number of commodities.
          </li>
          <li>Design, erection and maintenance of warehouses and godowns.</li>
        </ul>
        <h2>Quality Management</h2>
        <p>
          HSWC scores very high on all parameters of quality scientific storage
          in over 50 commodities. Commodity-specific preservation measures are
          adopted both in the design of warehouses and storage services. Special
          care is taken to preserve the quality and chemical balance of
          commodities (such as nutrients in food grains) and even highly
          hygroscopic commodities like jaggery, sugar, etc. are preserved
          without appreciable loss of quality & quantity. Consequently,
          commodities stored with HSWC fetch a premium price in the market.
          Customers are fully indemnified against any loss to their goods due to
          fire, flood, and theft/ burglary.
        </p>
        <h2>Financial Profile Of The Corporation</h2>
        <table>
          <caption>Financial Results (in Lakhs)</caption>
          <tr>
            <th>Particulars</th>
            <th>2019-20</th>
            <th>2020-21</th>
            <th>2021-22</th>
            <th>2022-23</th>
            <th>2023-24</th>
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
            <td>Paid Up Capital ( 50% each by CWC & State Govt.)</td>
            <td>584</td>
            <td>584</td>
            <td>584</td>
            <td>584</td>
            <td>584</td>
          </tr>
          <tr>
            <td>Percentage of Dividends paid</td>
            <td>880</td>
            <td>1646</td>
            <td>472</td>
            <td>89</td>
            <td>429</td>
          </tr>
          <tr>
            <td>Profit after tax</td>
            <td>5868</td>
            <td>10974</td>
            <td>3144</td>
            <td>596</td>
            <td>2860</td>
          </tr>
        </table>
        <h2>Service With Smile</h2>
        <p>
          Apart from operating 59 rural warehouses, especially for small and
          marginal farmers, disinfestation services are provided at the
          doorsteps of the farmers and others at nominal charges on a simple
          request.
        </p>
        <br />
        <p>
          Another scheme run for the welfare of farmers, called Farmers
          Extension Service Scheme, involves free training to farmers in
          scientific storage and dis-infestation measures at farm and community
          level.
        </p>
        <h2>Stride In New Areas</h2>
        <p>
          A mega project of Inland Container Depot has been set up at Rewari,
          over an area of 31.5 acres, in collaboration with CONCOR to provide
          cost-effective services to the exporters /importers of Haryana and
          adjoining areas. Regular train services are being provided by CONCOR.
        </p>
        <h2>Testimony To Customer Service</h2>
        <p>
          Public acclaim of services is our real testimony to customer
          satisfaction. HSWC was awarded the Best Productivity Performance Award
          by the National Productivity Council for the years 1991-92 & 1994-95
          and the second Best Productivity Performance Award in 1995-96.
        </p>
        <br/>
        <p>
          The Corporation is proud recipient of the Certificate of Merit in
          warehousing sector, awarded by the National Productivity Council for
          the years 1997-98 and 1998-99.
        </p>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
