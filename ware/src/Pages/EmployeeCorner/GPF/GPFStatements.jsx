import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import GPF1 from "../Assets/gpf1.pdf";
import GPF2 from "../Assets/gpf2.pdf";
import GPF3 from "../Assets/gpf3.pdf";
import GPF4 from "../Assets/gpf4.pdf";
import GPF5 from "../Assets/gpf5.pdf";
import GPF6 from "../Assets/gpf6.pdf";

export default function GPFStatements() {
  return (
    <div>
      <Header />
      <section className="profile p-overview">
        <h6>Employee Corner</h6>
        <h1>GPF Statements</h1>
        <div className="ppdf-links">
          <a href={GPF1} target="_blank">
            GPF Statement of FY 2012-13
          </a>
          <a href={GPF2} target="_blank">
            GPF Statement of FY 2013-14
          </a>
          <a href={GPF3} target="_blank">
            GPF Statement of FY 2014-15
          </a>
          <a href={GPF4} target="_blank">
            GPF Statement of FY 2015-16
          </a>
          <a href={GPF5} target="_blank">
            GPF Statement of FY 2016-17
          </a>
          <a href={GPF6} target="_blank">
            GPF Statement of FY 2018-19
          </a>
        </div>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
