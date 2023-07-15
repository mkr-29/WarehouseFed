import React from "react";
import Header from "../Homepage/Components/Header/Header";
import Footer from "../Homepage/Components/Footer/Footer";
import Copyrights from "../Homepage/Components/Footer/Copyrights";
import "./RTI.css";
import RTI1 from "./Assets/rti1.pdf";
import RTI2 from "./Assets/rti2.pdf";
import RTI3 from "./Assets/rti3.pdf";
import RTI4 from "./Assets/rti4.jpg";
import RTI5 from "./Assets/rti5.pdf";
import { Link } from "react-router-dom";

export default function RTI() {
  return (
    <div>
      <Header />
      <section className="profile p-overview">
        <h1>RTI</h1>
        <p>
          The Government of India, in order to ensure greater and more effective
          access to the information to citizens has enacted 'Right To
          Information Act, 2005 ', [ hereinafter called RTI Act ] . The subject
          Act got assent of the President of India on 15-06-2005 and teh Act
          came into force from 12-10-2005.
        </p>
        <p className="mt-1">
          The main object of the Act is to provide Roght to information under
          the control of Public Authority to the citizens in order to promote
          transparency and accountability in the working of Public Authority.
        </p>
        <p className="mt-1">
          The Right to Information includes an access to the information which
          is held under the control of any public authority and incldes the
          right to inspet the work, document, record, taking notes, extracts or
          certified copies of documents / records and certifies samples of the
          materials and obtaining information which is also stored in electronic
          form.
        </p>
        <p className="mt-1">
          A citizen can request for information by making an application in
          writing or through electronic means in English / Hindi/ official
          language of the areas, in which the application is being made together
          with the prescribed fees to the concerned Public Information Officer.
          The Act provides under Section 8 and 9 , certain categories of
          information thatare exempt from disclosre to the citizens. The public
          may also refer to the relative sections of teh Act before submitting a
          request for the information.
        </p>
        <div className="ppdf-links">
            <a href={RTI1} target="_blank">Right To Information ACT, 2005</a>
            <a href={RTI2} target="_blank">Haryana RTI Rules 2005</a>
            <a href={RTI3} target="_blank">Haryana RTI Rules</a>
            <a href={RTI4} target="_blank">Haryana RTI (Amendment) Rules, 2006</a>
            <Link to="pursuance-rti">Pursuance RTI</Link>
            <Link to="spio">SPIO/Appellate Authority</Link>
            <a href={RTI5} target="_blank">Pro Active Disclousure Info.</a>
        </div>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
