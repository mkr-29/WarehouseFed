import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import spio1 from "../Assets/spio1.pdf"
import spio2 from "../Assets/spio2.pdf"
import spio3 from "../Assets/spio3.pdf"
import spio4 from "../Assets/spio4.pdf"

export default function SPIO() {
  return (
    <div>
      <Header />
      <section className="profile p-overview">
        <h6>RTI</h6>
        <h1>SPIO/Appellate Authority</h1>
        <div className="ppdf-links">
          <a href={spio1} target="_blank">Office Order (RTI) 01042015</a>
          <a href={spio2} target="_blank">Office Order (RTI) 10042018</a>
          <a href={spio3} target="_blank">Office Order (RTI) 16072018</a>
          <a href={spio4} target="_blank">Office Order (RTI) 19012021</a>
          <a
            href="http://ww25.hwc.org.in/wdir/uploads/page_pdf/Pdf-1629698778-image_file.pdf?subid1=20230715-1904-51cf-8ef8-004ef836f9ea"
            target="_blank"
          >
            Appellate Authority/SPlO/ASPlO
          </a>
        </div>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
