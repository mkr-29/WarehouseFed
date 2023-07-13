import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import RBP from "../Assets/rbp.pdf";

export default function COOI() {
  return (
    <div>
      <Header />
      <section className="profile p-overview ec-cooi">
        <h6>Employee Corner</h6>
        <h1>Circulars / Office Orders / Instructions</h1>
        <table>
          <tr>
            <th>SNo.</th>
            <th>Subject</th>
            <th>Issuing Branch</th>
            <th>Circular Date</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>
              <a href="#404">PROMOTION OF GODOWN KEEPERS</a>
            </td>
            <td>Admin Branch</td>
            <td>2013-09-26</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>
              <a href="#404">TRANSFER ORDERS OF STAFF</a>
            </td>
            <td>Admin Branch</td>
            <td>2013-11-21</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>
              <a href="#404">TRANSFER ORDERS OF CONSTRUCTION STAFF</a>
            </td>
            <td>Admin Branch</td>
            <td>2013-11-21</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>
              <a href="#404">PROMOTION OF GODOWN KEEPERS</a>
            </td>
            <td>Admin Branch</td>
            <td>2014-01-01</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>
              <a href="#404">TRANSFER OF STAFF</a>
            </td>
            <td>Admin Branch</td>
            <td>2014-01-01</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>
              <a href="#404">
                {" "}
                Computer Type Test of newly appointed employees/ candidates as
                Accounts Clerk.{" "}
              </a>
            </td>
            <td>Admin Branch</td>
            <td>2014-01-08</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>
              <a href="#404">Transfer of Managers / Godown Keeper</a>
            </td>
            <td>Admin Branch</td>
            <td>2014-02-10</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>
              <a href="#404">Transfer of Technical Staff</a>
            </td>
            <td>Admin Branch</td>
            <td>2014-02-10</td>
          </tr>
          <tr>
            <td>9.</td>
            <td>
              <a href="#404">Transfer of Accounts Staff</a>
            </td>
            <td>Admin Branch</td>
            <td>2014-02-10</td>
          </tr>
          <tr>
            <td>10.</td>
            <td>
              <a href="#404">Office Order 01062018</a>
            </td>
            <td>Admin Branch</td>
            <td>2018-06-01</td>
          </tr>
          <tr>
            <td>11.</td>
            <td>
              <a href="#404">Circular</a>
            </td>
            <td>Admin Branch</td>
            <td>2018-06-01</td>
          </tr>
          <tr>
            <td>12.</td>
            <td>
              <a href="#404">TRANSFER ORDER 27062018</a>
            </td>
            <td>Admin Branch</td>
            <td>2018-06-27</td>
          </tr>
          <tr>
            <td>13.</td>
            <td>
              <a href="#404">TRANSFER ORDER 03072018</a>
            </td>
            <td>Admin Branch</td>
            <td>2018-07-03</td>
          </tr>
          <tr>
            <td>14.</td>
            <td>
              <a href="#404">Office Order (Promotion) 12072018</a>
            </td>
            <td>Admin Branch</td>
            <td>2018-07-12</td>
          </tr>
          <tr>
            <td>15.</td>
            <td>
              <a href="#404">PROMOTION ORDER Mgr-II (30408-453)</a>
            </td>
            <td>Administration</td>
            <td>2020-07-29</td>
          </tr>
          <tr>
            <td>16.</td>
            <td>
              <a href="#404">PROMOTION ORDER SAMA (30744-766)</a>
            </td>
            <td>Administration</td>
            <td>2020-07-30</td>
          </tr>
          <tr>
            <td>17.</td>
            <td>
              <a href="#404">PROMOTION ORDER ACCOUNTANT (30769-794)</a>
            </td>
            <td>Administration</td>
            <td>2020-07-30</td>
          </tr>
          <tr>
            <td>18.</td>
            <td>
              <a href="#404">PROMOTION ORDER Mgr-III (30821-868)</a>
            </td>
            <td>Administration</td>
            <td>2020-07-30</td>
          </tr>
          <tr>
            <td>19.</td>
            <td>
              <a href="#404">PROMOTION ORDER SDE (Civil) (31978-32000)</a>
            </td>
            <td>Administration</td>
            <td>2020-08-07</td>
          </tr>
          <tr>
            <td>20.</td>
            <td>
              <a href="#404">PROMOTION ORDER ACCOUNTS ASSISTANT (30795-820)</a>
            </td>
            <td>Administration</td>
            <td>2020-07-30</td>
          </tr>
          <tr>
            <td>21.</td>
            <td>
              <a href="#404">PROMOTION ORDER GK (30697-711)</a>
            </td>
            <td>Administration</td>
            <td>2020-07-30</td>
          </tr>
          <tr>
            <td>22.</td>
            <td>
              <a href={RBP} target="_blank">Rebate Policy</a>
            </td>
            <td>Business</td>
            <td>2023-01-30</td>
          </tr>
        </table>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
