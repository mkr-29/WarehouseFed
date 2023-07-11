import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";

export default function Bod() {
  return (
    <div>
      <Header />
      <section className="profile bod-about">
        <h2>Board of Directors</h2>
        <table>
          <tr>
            <th>SNo.</th>
            <th>Name of officer and Designations</th>
            <th>SNo.</th>
            <th>Name of officer and Designations</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>
              <h3>The Chairman,</h3>
              <p>Haryana State Warehousing Panchkula.</p>
            </td>
            <td>7.</td>
            <td>
              <h3>Sh. P.K Saw,</h3>
              <p>General manager (RLD),</p>
              <p>Corporate office,</p>
              <p>Central Warehousing Corporation,</p>
              <p>4/1, Siri Institutional Area, Hauz Khan,</p>
              <p>Warehousing Bhawan, New Delhi.</p>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>
              <h3>Director General,</h3>
              <p>
                Agriculture and Farmers Welfare Department, Haryana, Sector-21,
              </p>
              <p>Panchkula</p>
            </td>
            <td>8.</td>
            <td>
              <h3>Sh. Harish Kumar L,</h3>
              <p>No. B104, B Block 1St Floor, Vaishnavi Nakshatra,</p>
              <p>Yeswanthpur, Tumur Railway Station Road. Bangalor-560022.</p>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>
              <h3>Smt. Mandeep Kaur, IAS,</h3>
              <p>Special Secretary to Govt Haryana,</p>
              <p>Finance Department, Haryana,</p>
              <p>Chandigarh</p>
            </td>
            <td>9.</td>
            <td>
              <h3>Sh. Prakash Chandra Rai,</h3>
              <p>Regional Manager, Central Warehousing</p>
              <p>Corporation, Bays No. 39-42, Sector 31-A, Regional</p>
              <p>Office, Chandigarh</p>
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>
              <h3>The Director General,</h3>
              <p>Food, Civil Supplies & Consumer Affairs</p>
              <p>Department, Haryana,</p>
              <p>Sector-17, Chandigarh</p>
            </td>
            <td>10.</td>
            <td>
              <h3>Sh. Kaushal Kishor Singh,</h3>
              <p>DGM (SME) LHO, State Bank of India,</p>
              <p>Sector-17, Chandigarh.</p>
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td>
              <h3>The Managing Director,</h3>
              <p>Haryana State Co-operative Supply &</p>
              <p>Marketing Federation (HAFED),</p>
              <p>Sector-5, Panchkula.</p>
            </td>
            <td>11.</td>
            <td>
              <h3>Sh. Jaibir Singh Arya, IAS,</h3>
              <p>Managing Director,</p>
              <p>Haryana State Warehousing Corporation, Panchkula.</p>
            </td>
          </tr>
          <tr className="bod-tab">
            <td>6.</td>
            <td>
              <h3>Sh. Mateshwari Prasad Mishra,</h3>
              <p>Director (WH),</p>
              <p>Ministry of Consumers Affairs, Food & Public Distribution,</p>
              <p>Govt. of India, Krishi Bhawan, New Delhi,</p>
              <p>Bhavan, New Delhi.</p>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
