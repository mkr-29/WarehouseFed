import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import "../Procurement.css";
import ProcurementImg from "../Assets/procurement.png";

export default function POverview() {
  return (
    <div>
      <Header />
      <section className="profile p-overview">
        <h6>Procurement</h6>
        <h1>Overview</h1>
        <p>
          <span>
            <img src={ProcurementImg} alt="" />
            <div className="p-ov-sp">
              <span>
                FCI, the nodal central agency of Government of India, along with
                other State Agencies undertakes procurement of wheat and paddy
                under price support scheme. The Government policy of procurement
                of Food grains has broad objectives of ensuring MSP to the
                farmers and availability of food grains to the weaker sections
                at affordable prices. It also ensures effective market
                intervention thereby keeping the prices under check and also
                adding to the overall food security of the country.
              </span>
              <span>
                The Government of India announces the minimum support prices
                (MSP) for procurement before the harvest during each Rabi /
                Kharif Crop season.HSWC Procures wheat.paddy & Bajra for Central
                Pool as per the direction issued by Government of India/ State
                Govt. from time to time. It started with procuring only two
                items i.e. wheat and paddy w.e.f. 1983-84 and 1997-98
                respectively.
              </span>
            </div>
          </span>
          <span>
            The procurement under Price Support is taken up mainly to ensure
            remunerative prices to the farmers for their produce which works as
            an incentive for achieving better production.
          </span>
        </p>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
