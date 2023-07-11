import React from "react";
import Header from "../Homepage/Components/Header/Header";
import Footer from "../Homepage/Components/Footer/Footer";
import Copyrights from "../Homepage/Components/Footer/Copyrights";
import GodownMap from "./Assets/godownmap.png";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Header />
      <div id="about">
        <section className="about-overview">
          <h2>Overview</h2>
          <p>
            Efficiently managing storage and distribution of goods in Haryana.
            Our department ensures smooth warehousing operations, compliance,
            and timely delivery, supporting industries and promoting economic
            growth.
          </p>
          <Link to="overview">Know More...</Link>
        </section>
      </div>
      <Footer />
      <Copyrights />
    </div>
  );
}
