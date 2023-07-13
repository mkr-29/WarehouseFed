import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import BR1 from "../Assets/br1.pdf";
import BR2 from "../Assets/br2.pdf";
import BR3 from "../Assets/br3.pdf";
import BR4 from "../Assets/br4.pdf";
import BR5 from "../Assets/br5.pdf";
import BR6 from "../Assets/br6.pdf";

export default function BusinessReport() {
  return (
    <div>
      <Header />
      <section className="profile p-overview">
        <h6>Scientific Storage</h6>
        <h1>Business Report</h1>
        <div className="ppdf-links">
          <a href={BR1} target="_blank">Business Report October 2022</a>
          <a href={BR2} target="_blank">Business Report November 2022</a>
          <a href={BR3} target="_blank">Business Report December 2022</a>
          <a href={BR4} target="_blank">Business Report January 2023</a>
          <a href={BR5} target="_blank">Business Report February 2023</a>
          <a href={BR6} target="_blank">Business Report March 2023</a>
        </div>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
