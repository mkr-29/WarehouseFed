import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import "../ScientificStorage.css";
import SCUimg from "../Assets/scu.png";

export default function SCU() {
  return (
    <div>
      <Header />
      <section className="profile p-overview ss-scu">
        <h6>Scientific Storage</h6>
        <h1>Storage Capacity & Utilization</h1>
        <img src={SCUimg} alt="" />
        <p>
          <span>PRESERVATION</span> of agricultural produce and other
          commodities is essential to sustain human life and the economy. It
          binds the other two vital components of a healthy economy viz.{" "}
          <span>PRODUCTION</span> and
          <span>PROSPERITY</span>. We are committed to making this link even
          stronger by reducing losses in private storage.
        </p>
        <p className="mt-1">
          The post-harvest losses of food grains in storage alone are very
          substantial. Such losses thwart our attempt to boost agricultural
          production and maintain self-sufficiency in food grains.
        </p>
        <p className="mt-1">
          <span>
            The primary cause leading to loss in quality and quantity of
            agricultural produce during its storage are :
          </span>
        </p>
        <ul>
          <li>
            Metabolic activities of insects and mites cause dry heating in the
            produce.
          </li>
          <li>
            Presence of higher moisture contents in the stocks at the time of
            storage cause sprouting, molding, and heating.
          </li>
          <li>
            Various chemical changes take place during storage which causes
            acidity and deterioration of gluten, vitamins, etc.
          </li>
          <li>
            Insects and rodents apart from eating away the produce, pollute it
            by contamination with their urine, excreta, and carcass.
          </li>
          <li>
            Insects and mites eat away the germ portion of the grain rendering
            it unfit for germination.
          </li>
          <li>Mites impart objectionable odor.</li>
        </ul>
        <p className="mt-1">
          <span>
            Such losses can be avoided by using modern warehousing techniques
            based on scientific storage.
          </span>
        </p>
        <p>
          Scientific storage and preservation of agricultural produce is the
          only way out to maintain quality and quantity of stocks.HWC is
          providing facilities of scientific storage and preservation to wide
          range of depositors like Farmers, Traders, Exporters, FCI, HAIC,
          HAFED, Fertilizer agencies, etc.
        </p>
        <p className="mt-1">
          <span>Storage Capacity And Utilization</span>
        </p>
        <p>
          Our scientific outlook and work culture has enabled us to handle and
          efficiently operate a network of over 112 warehouses of over 2 million
          tonne of storage capacity. The figures of average storage capacity and
          its occupancy augur well of our success in reducing storage losses to
          a negligible level by way of scientific storage.
        </p>
        <table>
          <caption>Average Storage Capacity & Occupancy Of Warehouses</caption>
          <tr>
            <th></th>
            <th>2011-12</th>
            <th>2012-13</th>
            <th>2013-14</th>
            <th>2014-15</th>
            <th>2015-16</th>
            <th>2016-17</th>
            <th>2017-18</th>
            <th>2018-19</th>
            <th>2019-20</th>
            <th>2020-21</th>
            <th>2021-22</th>
          </tr>
          <tr>
            <td>Total average storage capacity (lakh MT's)</td>
            <td>16.63</td>
            <td>18.88</td>
            <td>17.91</td>
            <td>16.77</td>
            <td>17.23</td>
            <td>17.12</td>
            <td>16.59</td>
            <td>19.70</td>
            <td>22.58</td>
            <td>21.82</td>
            <td>21.29</td>
          </tr>
          <tr>
            <td>Average occupancy in Lakh MT's</td>
            <td>16.51</td>
            <td>19.66</td>
            <td>16.03</td>
            <td>11.72</td>
            <td>11.81</td>
            <td>12.61</td>
            <td>14.05</td>
            <td>19.13</td>
            <td>13.11</td>
            <td>20.61</td>
            <td>18.68</td>
          </tr>
          <tr>
            <td>Average occupancy in percentage</td>
            <td>99%</td>
            <td>104%</td>
            <td>90%</td>
            <td>70%</td>
            <td>69%</td>
            <td>74%</td>
            <td>85%</td>
            <td>97%</td>
            <td>102%</td>
            <td>94%</td>
            <td>88%</td>
          </tr>
        </table>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
