import React from "react";
import Header from "../Homepage/Components/Header/Header";
import Footer from "../Homepage/Components/Footer/Footer";
import Copyrights from "../Homepage/Components/Footer/Copyrights";
import TableTemplate from "./TableTemplate";
import TableData from "./Tenders.json";
import "./ETenders.css";
import t55PDF from './Assets/t55.pdf';
import t54PDF from './Assets/t54.pdf';
import t53PDF from './Assets/t53.pdf';
import t52PDF from './Assets/t52.pdf';
import t51PDF from './Assets/t51.pdf';
import t50PDF from './Assets/t50.pdf';
import t49PDF from './Assets/t49.png';
import t48PDF from './Assets/t48.png';
import t47PDF from './Assets/t47.jpeg';
import t46PDF from './Assets/t46.pdf';
import t45PDF from './Assets/t45.pdf';
import t44PDF from './Assets/t44.pdf';
import t43PDF from './Assets/t43.pdf';
import t42PDF from './Assets/t42.pdf';
import t41PDF from './Assets/t41.pdf';
import t40PDF from './Assets/t40.jpeg';
import t39PDF from './Assets/t39.jpeg';
import t38PDF from './Assets/t38.jpeg';
import t35PDF from './Assets/t35.jpeg';
import t34PDF from './Assets/t34.pdf';
import t33PDF from './Assets/t33.pdf';
import t32PDF from './Assets/t32.pdf';
import t31PDF from './Assets/t31.pdf';
import t30PDF from './Assets/t30.pdf';
import t29PDF from './Assets/t29.pdf';
import t28PDF from './Assets/t28.jpeg';
import t27PDF from './Assets/t27.jpeg';
import t26PDF from './Assets/t26.jpeg';
import t25PDF from './Assets/t25.pdf';
import t24PDF from './Assets/t24.pdf';
import t23PDF from './Assets/t23.pdf';
import t22PDF from './Assets/t22.pdf';
import t21PDF from './Assets/t21.pdf';
import t20PDF from './Assets/t20.pdf';
import t19PDF from './Assets/t19.pdf';
import t18PDF from './Assets/t18.pdf';
import t17PDF from './Assets/t17.pdf';
import t16PDF from './Assets/t16.pdf';
import t15PDF from './Assets/t15.pdf';
import t14PDF from './Assets/t14.pdf';
import t13PDF from './Assets/t13.pdf';
import t12PDF from './Assets/t12.pdf';
import t11PDF from './Assets/t11.pdf';
import t10PDF from './Assets/t10.pdf';
import t9PDF from './Assets/t9.pdf';
import t8PDF from './Assets/t8.pdf';
import t7PDF from './Assets/t7.pdf';
import t6PDF from './Assets/t6.pdf';
import t5PDF from './Assets/t5.pdf';
import t4PDF from './Assets/t4.pdf';
import t3PDF from './Assets/t3.pdf';

const pdfFiles = [
  t55PDF,
  t54PDF,
  t53PDF,
  t52PDF,
  t51PDF,
  t50PDF,
  t49PDF,
  t48PDF,
  t47PDF,
  t46PDF,
  t45PDF,
  t44PDF,
  t43PDF,
  t42PDF,
  t41PDF,
  t40PDF,
  t39PDF,
  t38PDF,
  "#404",
  "#404",
  t35PDF,
  t34PDF,
  t33PDF,
  t32PDF,
  t31PDF,
  t30PDF,
  t29PDF,
  t28PDF,
  t27PDF,
  t26PDF,
  t25PDF,
  t24PDF,
  t23PDF,
  t22PDF,
  t21PDF,
  t20PDF,
  t19PDF,
  t18PDF,
  t17PDF,
  t16PDF,
  t15PDF,
  t14PDF,
  t13PDF,
  t12PDF,
  t11PDF,
  t10PDF,
  t9PDF,
  t8PDF,
  t7PDF,
  t6PDF,
  t5PDF,
  t4PDF,
  t3PDF,
];

export default function ETenders() {
  return (
    <div>
      <Header />
      <section className="profile p-overview etenders">
        <h6>E-Tender & E-Auction</h6>
        <h1>Tenders</h1>
        <table>
          <tr>
            <th>SNo.</th>
            <th>Title</th>
            <th>Float Date</th>
            <th>Expiry Date</th>
            <th>Zone / Region</th>
          </tr>
          <TableTemplate
            files={pdfFiles}
           data={TableData} 
          />
        </table>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
