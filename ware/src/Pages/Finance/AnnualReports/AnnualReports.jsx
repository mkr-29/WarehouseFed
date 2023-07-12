import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import AnnualReportsPDF from "../Assets/annualReports.pdf";

export default function AnnualReports() {
  return (
    <div>
      <Header />
      <section className="profile finance-annualrep p-overviews">
        <h6>Finance</h6>
        <h1>Annual Reports</h1>
        <a href={AnnualReportsPDF} target="_blank">
          Balance Sheet of Financial Year 2021-22
        </a>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
