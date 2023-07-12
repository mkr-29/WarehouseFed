import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";

export default function FinanceOverview() {
  return (
    <>
      <Header/>
      <div className="overview">
        <h1>Finance - Overview</h1>
        <p>
          During the year 2021-22, the Corporation has earned a profit of Rs.
          3211 lakh before tax and Rs. 3144 lakh after tax.
        </p>
      </div>
      <Footer/>
      <Copyrights/>
    </>
  );
}
