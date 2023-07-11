import React from "react";
import Header from "../../../Homepage/Components/Header/Header";
import Footer from "../../../Homepage/Components/Footer/Footer";
import Copyrights from "../../../Homepage/Components/Footer/Copyrights";

export default function Functions() {
  return (
    <div>
      <Header />
      <section className="profile our-functions">
        <h1>Our Functions</h1>
        <hr />
        <span>
          Haryana Warehousing Corporation was set up on November 1, 1967, under
          the Warehousing Corporations Act, 1962, to carry out the following
          functions:-
        </span>
        <ul>
          <li>
            Acquire and build godowns and warehouses at such places within the
            State as it may, with the previous approval of the Central
            Warehousing Corporation , determine;
          </li>
          <li>
            Run warehouses in the State for the storage of agricultural produce,
            seeds manures, fertilizers, agricultural implements and notified
            commodities;
          </li>
          <li>
            Arrange facilities for the transport of agricultural produce, seeds
            , manures, fertilizers, agricultural implements and notified
            commodities to and from warehouses;
          </li>
          <li>
            Act as an agent of the Central Warehousing Corporation or of the
            Government for the purpose of purchase, sale, storage and
            distribution of agricultural produce, seeds, manures, fertilizers,
            agricultural implements and notified commodities ;
          </li>
          <li>
            The Corporation may, at its discretion and at the request of the
            parties concerned, undertake dis-infestation service out-side its
            Warehouses in respect of agricultural produce or notified
            commodities as defined in Section 2;
          </li>
          <li>
            The Corporation may, at its discretion, act as an agent for the
            purpose of purchase, sale, storage and distribution of agricultural
            produce, seeds, manures, fertilizers, agricultural implements and
            notified commodities as defined in Section 2, on behalf of a company
            as defined in the Companies Act 1956 ( one of 1956) or a body
            incorporate established by an Act of Parliament or a State
            Legislature or a Co-operative Society;
          </li>
          <li>
            The Corporation may establish and run Inland Container Depot,
            Container Freight Station, Air Cargo handling, marketing and other
            warehousing related services in respect of agricultural produce, or
            notified commodity as defined in Section 2 of the Act, either alone
            or in partnership or as a joint venture with the Central or State
            Government Departments or a body corporate or established by an Act
            of Parliament or a State Legislature or co-operative society or a
            company incorporated under the Companies Act, 1956, or private
            entrepreneur ;
          </li>
          <li>
            The Corporation to promote and diversify its business, may aid,
            assist and finance programs or projects for diversification and
            production of agricultural produce;
          </li>
          <li>
            The Corporation may lend money to the bonafide farmers of the
            Haryana against goods deposited in its warehouses on terms and
            conditions as it may determine;
          </li>
          <li>Carry out such other functions as may be prescribed.</li>
        </ul>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
