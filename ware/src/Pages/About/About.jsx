import React from "react";
import Header from "../Homepage/Components/Header/Header";
import Footer from "../Homepage/Components/Footer/Footer";
import Copyrights from "../Homepage/Components/Footer/Copyrights";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Header />
      <div id="about">
        <section className="about-sec">
          <h2>Overview</h2>
          <p>
            Efficiently managing storage and distribution of goods in Haryana.
            Our department ensures smooth warehousing operations, compliance,
            and timely delivery, supporting industries and promoting economic
            growth.
          </p>
          <Link to="overview">Know More...</Link>
        </section>
        <section className="about-sec">
          <h2>Profile / Objective</h2>
          <p>
            As a growth and productivity-oriented public sector enterprise,
            Haryana State Warehousing Corporation (HSWC), is committed to meet
            the storage and warehousing needs of agriculture, trade, industry,
            and export-import sectors in the entire state.
          </p>
          <Link to="profile-objective">Know More...</Link>
        </section>
        <section className="about-sec">
          <h2>Board Of Directors</h2>
          <p>
            In a room adorned with wisdom's embrace, The Board of Directors,
            with vision and grace, Guiding the ship, their expertise we embrace.
          </p>
          <Link to="board-of-directors">Know More...</Link>
        </section>
      </div>
      <Footer />
      <Copyrights />
    </div>
  );
}
