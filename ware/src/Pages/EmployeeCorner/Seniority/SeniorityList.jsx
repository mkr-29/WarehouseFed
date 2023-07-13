import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import SL1 from "../Assets/sl1.pdf";
import SL2 from "../Assets/sl2.pdf";
import SL3 from "../Assets/sl3.pdf";
import SL4 from "../Assets/sl4.pdf";
import SL5 from "../Assets/sl5.pdf";
import SL6 from "../Assets/sl6.pdf";
import SL7 from "../Assets/sl7.pdf";
import SL8 from "../Assets/sl8.pdf";
import SL9 from "../Assets/sl9.pdf";
import SL10 from "../Assets/sl10.pdf";
import SL11 from "../Assets/sl11.pdf";
import SL12 from "../Assets/sl12.pdf";
import SL13 from "../Assets/sl13.pdf";
import SL14 from "../Assets/sl14.pdf";
import SL15 from "../Assets/sl15.pdf";
import SL16 from "../Assets/sl16.pdf";
import SL17 from "../Assets/sl17.pdf";
import SL18 from "../Assets/sl18.pdf";

export default function SeniorityList() {
  return (
    <div>
      <Header />
      <section className="profile p-overview">
        <h6>Employee Corner</h6>
        <h1>Seniority List</h1>
        <div className="ppdf-links">
          <a href={SL1} target="_blank">
            Seniority list of Class-I
          </a>
          <a href={SL2} target="_blank">
            Seniority list of Godown Keepers
          </a>
          <a href={SL3} target="_blank">
            Seniority list of Accounts Clerks
          </a>
          <a href={SL4} target="_blank">
            Seniority list of Clerks
          </a>
          <a href={SL5} target="_blank">
            Seniority list of Accounts Assistant
          </a>
          <a href={SL6} target="_blank">
            Seniority list of AMA
          </a>
          <a href={SL7} target="_blank">
            Seniority list of District Managers
          </a>
          <a href={SL8} target="_blank">
            Seniority list of Junior Tech. Assist.
          </a>
          <a href={SL9} target="_blank">
            Seniority list of Manager GR.-I
          </a>
          <a href={SL10} target="_blank">
            Seniority list of Manager GR-II
          </a>
          <a href={SL11} target="_blank">
            Seniority list of Manager GR-III
          </a>
          <a href={SL12} target="_blank">
            Seniority list of Tech. Assitt.
          </a>
          <a href={SL13} target="_blank">
            Seniority list of Accountant
          </a>
          <a href={SL14} target="_blank">
            Seniority list of Junior Engineer (Civil)
          </a>
          <a href={SL15} target="_blank">
            Seniority list of Junior Engineer (Electrical)
          </a>
          <a href={SL16} target="_blank">
            Seniority list of Sub-Divisional Engineer (Civil)
          </a>
          <a href={SL17} target="_blank">
            Seniority list of Assistant Manager (Quality Control)
          </a>
          <a href={SL18} target="_blank">
            Seniority list of Sr. District Manager
          </a>
        </div>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
