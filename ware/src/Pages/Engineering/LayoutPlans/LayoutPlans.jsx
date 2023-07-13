import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import LayoutP from "../Assets/layout.png";
import AMBALA_CITY from "../Assets/AMBALA_CITY.jpg";
import SWH_NANEOLA from "../Assets/SWH_NANEOLA.jpg";
import SWH_SAHA from "../Assets/SWH_SAHA.jpg";
import SWH_MULLANA from "../Assets/SWH_MULANA.jpg";
import SWH_YAMUNANAGAR from "../Assets/SWH_YAMUNANAGAR.jpg";
import SWH_SADHAURA from "../Assets/SWH_SADHAURA.jpg";
import SWH_KURUKSHETRA1 from "../Assets/SWH_KURUKSHETRA1.jpg";
import SWH_KURUKSHETRA2 from "../Assets/SWH_KURUKSHETRA2.jpg";
import SWH_SHAHABAD from "../Assets/SWH_SHAHBAD.jpg";
import SWH_LADWA from "../Assets/SWH_LADWA.jpg";
import SWH_PEHOWA from "../Assets/SWH_PEHOWA.jpg";
import SWH_GUMTHALA_GARHU from "../Assets/SWH_GUMTHALA_GARHU.jpg";
import SWH_PIPLI from "../Assets/SWH_PIPLI.jpg";
import SWH_KAITHAL1 from "../Assets/SWH_KAITHAL1.jpg";
import SWH_KAITHAL2 from "../Assets/SWH_KAITHAL2.jpg";
import SWH_PUNDRI from "../Assets/SWH_PUNDRI.jpg";
import SWH_SIWAN from "../Assets/SWH_SIWAN.jpg";
import SWH_CHEEKA1 from "../Assets/SWH_CHEEKA1.jpg";
import SWH_CHEEKA2 from "../Assets/SWH_CHEEKA2.jpg";
import SWH_JAKHOLI from "../Assets/SWH_JAKHOLI.jpg";
import SWH_PAI from "../Assets/SWH_PAI.jpg";
import SWH_KAUL from "../Assets/SWH_KAUL.jpg";
import SWH_KALAYAT from "../Assets/SWH_KALAYAT.jpg";
import SWH_PANIPAT1 from "../Assets/SWH_PANIPAT1.jpg";
import SWH_MADLAUDA from "../Assets/SWH_MADLAUDA.jpg";
import SWH_SAMALKHA from "../Assets/SWH_SMALKHA.jpg";
import SWH_ISRANA from "../Assets/SWH_ISRANA.jpg";
import SWH_BAPOLI from "../Assets/SWH_BAPOLI.jpg";
import SWH_SALWAN from "../Assets/SWH_SALWAN.jpg";
import SWH_GHARAUNDA1 from "../Assets/SWH_GHARAUNDA1.jpg";
import SWH_GHARAUNDA2 from "../Assets/SWH_GHARAUNDA2.jpg";
import SWH_JUNDLA from "../Assets/SWH_JUNDLA.jpg";
import SWH_TARAORI from "../Assets/SWH_TAROARI.jpg";
import SWH_GHEER from "../Assets/SWH_GHEER.jpg";
import SWH_NIGDHU from "../Assets/SWH_NIGDHU.jpg";
import SWH_BARSAT from "../Assets/SWH_BARSAT.jpg";
import SWH_NISSING from "../Assets/SWH_NISSING.jpg";
import SWH_GOHANA from "../Assets/SWH_GOHANA.jpg";
import SWH_PUNGTHALA from "../Assets/SWH_PUNGTHALA.jpg";
import SWH_HANSI from "../Assets/S.W.H_HANSI.jpg";
import SWH_TOHANA1 from "../Assets/SWH_TOHANA1.jpg";
import SWH_BHUNA from "../Assets/SWH_BHUNA.jpg";
import SWH_DABWALI from "../Assets/SWH_DABWALI.jpg";
import SWH_CHAUTALA from "../Assets/SWH_CHAUTALA.jpg";
import SWH_JIWAN_NAGAR from "../Assets/SWH_JEEVAN NAGAR.jpg";
import SWH_RORI from "../Assets/SWH_RORI.jpg";
import SWH_ROHTAK1 from "../Assets/SWH_ROHTAK1.jpg";
import SWH_LAKHAN_MAJRA from "../Assets/SWH_LAKHAN_MAJRA.jpg";
import SWH_MEHAM from "../Assets/SWH_MEHAM.jpg";
import SWH_SAFIDON1 from "../Assets/SWH_SAFIDON1.jpg";
import SWH_DHANAURI from "../Assets/SWH_DHANWARI.jpg";
import SWH_JULLANA from "../Assets/SWH_JULANA.jpg";
import SWH_NAGURA from "../Assets/SWH_NAGAURA.jpg";

export default function LayoutPlans() {
  return (
    <div>
      <Header />
      <section className="profile p-overview eng-layoutp">
        <h6>Engineering</h6>
        <h1>Layout Plans</h1>
        <img src={LayoutP} alt="" />
        <h2>
          LIST OF WAREHOUSES WITH OWNED STORAGE CAPACITY AS ON 31<sup>st</sup>{" "}
          January 2021.
        </h2>
        <table>
          <tr>
            <th rowSpan={2}>SNo.</th>
            <th rowSpan={2}>Name Of Warehouse</th>
            <th colSpan={3}>Capacity (MTS)</th>
          </tr>
          <tr>
            <th>Covered</th>
            <th>Open</th>
            <th>Total</th>
          </tr>
          <tr>
            <th className="text-left" colSpan={5}>
              AMBALA DISTT.
            </th>
          </tr>
          <tr>
            <td>1.</td>
            <td>
              <a href={AMBALA_CITY} target="_blank">Ambala City</a>
            </td>
            <td>16000</td>
            <td>0</td>
            <td>16000</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>
              <a href={SWH_NANEOLA} target="_blank">Naneola</a>
            </td>
            <td>4925</td>
            <td>0</td>
            <td>4925</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>
              <a href={SWH_SAHA} target="_blank">Saha</a>
            </td>
            <td>6700</td>
            <td>0</td>
            <td>6700</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>
              <a href={SWH_MULLANA} target="_blank">Mullana</a>
            </td>
            <td>9180</td>
            <td>0</td>
            <td>9180</td>
          </tr>
          <tr>
            <td>5.</td>
            <td className="text-bold">Shahzadpur</td>
            <td>10164</td>
            <td>0</td>
            <td>10164</td>
          </tr>
          <tr>
            <td>6.</td>
            <td className="text-bold">Nasirpur</td>
            <td>18326</td>
            <td>0</td>
            <td>18326</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>65295</td>
            <td>0</td>
            <td>65295</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Y.Nagar Distt.
            </th>
          </tr>
          <tr>
            <td>7.</td>
            <td className="text-bold">Jagadhari</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>
              <a href={SWH_YAMUNANAGAR} target="_blank">Yamuna Nagar</a>
            </td>
            <td>7000</td>
            <td>0</td>
            <td>7000</td>
          </tr>
          <tr>
            <td>9.</td>
            <td className="text-bold">Radaur</td>
            <td>10820</td>
            <td>0</td>
            <td>10820</td>
          </tr>
          <tr>
            <td>10.</td>
            <td>
              <a href={SWH_SADHAURA} target="_blank">Sadhaura</a>
            </td>
            <td>5000</td>
            <td>0</td>
            <td>5000</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>22820</td>
            <td>0</td>
            <td>22820</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Circle Total</td>
            <td>88115</td>
            <td>0</td>
            <td>88115</td>
          </tr>
          <tr>
            <th className="text-left" colSpan={5}>
              Kurukshetra Distt.
            </th>
          </tr>
          <tr>
            <td>11.</td>
            <td>
              <a href={SWH_KURUKSHETRA1} target="_blank">Kurukshetra-1</a>
            </td>
            <td>16020</td>
            <td>0</td>
            <td>16020</td>
          </tr>
          <tr>
            <td>12.</td>
            <td>
              <a href={SWH_KURUKSHETRA2} target="_blank">Kurukshetra-2</a>
            </td>
            <td>14600</td>
            <td>0</td>
            <td>14600</td>
          </tr>
          <tr>
            <td>13.</td>
            <td>
              <a href={SWH_SHAHABAD} target="_blank">Shahbad</a>
            </td>
            <td>13000</td>
            <td>0</td>
            <td>13000</td>
          </tr>
          <tr>
            <td>14.</td>
            <td>
              <a href={SWH_LADWA} target="_blank">Ladwa</a>
            </td>
            <td>20180</td>
            <td>0</td>
            <td>20180</td>
          </tr>
          <tr>
            <td>15.</td>
            <td className="text-bold">Ismailabad</td>
            <td>14030</td>
            <td>0</td>
            <td>14030</td>
          </tr>
          <tr>
            <td>16.</td>
            <td>
              <a href={SWH_PEHOWA} target="_blank">Pehowa</a>
            </td>
            <td>16504</td>
            <td>0</td>
            <td>16504</td>
          </tr>
          <tr>
            <th className="text-left" colSpan={5}>
              Gumthala
            </th>
          </tr>
          <tr>
            <td>17.</td>
            <td>
              <a href={SWH_GUMTHALA_GARHU} target="_blank">Garhu</a>
            </td>
            <td>4000</td>
            <td>0</td>
            <td>4000</td>
          </tr>
          <tr>
            <td>18.</td>
            <td>
              <a href={SWH_PIPLI} target="_blank">Pipli</a>
            </td>
            <td>32915</td>
            <td>6930</td>
            <td>39854</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Circle Total</td>
            <td>131249</td>
            <td>6930</td>
            <td>138179</td>
          </tr>
          <tr>
            <th className="text-left" colSpan={5}>
              Kaithal Distt.
            </th>
          </tr>
          <tr>
            <td>19.</td>
            <td>
              <a href={SWH_KAITHAL1} target="_blank">Kaithal-1</a>
            </td>
            <td>9500</td>
            <td>0</td>
            <td>9500</td>
          </tr>
          <tr>
            <td>20.</td>
            <td>
              <a href={SWH_KAITHAL2} target="_blank">Kaithal-2</a>
            </td>
            <td>15180</td>
            <td>0</td>
            <td>15180</td>
          </tr>
          <tr>
            <td>21.</td>
            <td className="text-bold">Kaithal-3</td>
            <td>28340</td>
            <td>0</td>
            <td>28340</td>
          </tr>
          <tr>
            <td>22.</td>
            <td>
              <a href={SWH_PUNDRI} target="_blank">Pundri</a>
            </td>
            <td>10000</td>
            <td>0</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>23.</td>
            <td>
              <a href={SWH_SIWAN} target="_blank">Siwan</a>
            </td>
            <td>14590</td>
            <td>0</td>
            <td>14590</td>
          </tr>
          <tr>
            <td>24.</td>
            <td>
              <a href={SWH_CHEEKA1} target="_blank">Cheeka-1</a>
            </td>
            <td>19380</td>
            <td>0</td>
            <td>19380</td>
          </tr>
          <tr>
            <td>25.</td>
            <td>
              <a href={SWH_CHEEKA2} target="_blank">Cheeka-2</a>
            </td>
            <td>48896</td>
            <td>0</td>
            <td>48896</td>
          </tr>
        </table>
        <table>
          <tr>
            <th rowSpan={2}>SNo.</th>
            <th rowSpan={2}>Name Of Warehouse</th>
            <th colSpan={3}>Capacity (MTS)</th>
          </tr>
          <tr>
            <th>Covered</th>
            <th>Open</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>26.</td>
            <td>
              <a href={SWH_JAKHOLI} target="_blank">Jakholi</a>
            </td>
            <td>17286</td>
            <td>0</td>
            <td>17286</td>
          </tr>
          <tr>
            <td>27.</td>
            <td>
              <a href={SWH_PAI} target="_blank">Pai</a>
            </td>
            <td>17907</td>
            <td>0</td>
            <td>17907</td>
          </tr>
          <tr>
            <td>28.</td>
            <td>
              <a href={SWH_KAUL} target="_blank">Kaul</a>
            </td>
            <td>5670</td>
            <td>0</td>
            <td>5670</td>
          </tr>
          <tr>
            <td>29.</td>
            <td>
              <a href={SWH_KALAYAT} target="_blank">Kalayat</a>
            </td>
            <td>5300</td>
            <td>0</td>
            <td>5300</td>
          </tr>
          <tr>
            <td>30.</td>
            <td className="text-bold">Rajound</td>
            <td>8932</td>
            <td>0</td>
            <td>8932</td>
          </tr>
          <tr>
            <td>31.</td>
            <td className="text-bold">Santokh Majra</td>
            <td>15092</td>
            <td>0</td>
            <td>15092</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Circle Total</td>
            <td>216073</td>
            <td>0</td>
            <td>216073</td>
          </tr>
          <tr>
            <th className="text-left" colSpan={5}>
              Panipat Distt.
            </th>
          </tr>
          <tr>
            <td>32.</td>
            <td>
              <a href={SWH_PANIPAT1} target="_blank">Panipat-1</a>
            </td>
            <td>8000</td>
            <td>0</td>
            <td>8000</td>
          </tr>
          <tr>
            <td>33.</td>
            <td className="text-bold">Panipat-2</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>34.</td>
            <td>
              <a href={SWH_MADLAUDA} target="_blank">Madlauda</a>
            </td>
            <td>8000</td>
            <td>0</td>
            <td>8000</td>
          </tr>
          <tr>
            <td>35.</td>
            <td>
              <a href={SWH_SAMALKHA} target="_blank">Samalkha</a>
            </td>
            <td>7000</td>
            <td>0</td>
            <td>7000</td>
          </tr>
          <tr>
            <td>36.</td>
            <td>
              <a href={SWH_ISRANA} target="_blank">Israna</a>
            </td>
            <td>17772</td>
            <td>0</td>
            <td>17772</td>
          </tr>
          <tr>
            <td>37.</td>
            <td>
              <a href={SWH_BAPOLI} target="_blank">Bapoli</a>
            </td>
            <td>24433</td>
            <td>0</td>
            <td>24433</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>65205</td>
            <td>0</td>
            <td>65205</td>
          </tr>
          <tr>
            <th className="text-left" colSpan={5}>
              Karnal Dist.
            </th>
          </tr>
          <tr>
            <td>38.</td>
            <td>
              <a href={SWH_SALWAN} target="_blank">Salwan</a>
            </td>
            <td>5977</td>
            <td>0</td>
            <td>5977</td>
          </tr>
          <tr>
            <td>39.</td>
            <td>
              <a href={SWH_GHARAUNDA1} target="_blank">Gharaunda-1</a>
            </td>
            <td>11820</td>
            <td>0</td>
            <td>11820</td>
          </tr>
          <tr>
            <td>40.</td>
            <td>
              <a href={SWH_GHARAUNDA2} target="_blank">Gharaunda-2</a>
            </td>
            <td>22040</td>
            <td>0</td>
            <td>22040</td>
          </tr>
          <tr>
            <td>41.</td>
            <td>
              <a href={SWH_JUNDLA} target="_blank">Jundla</a>
            </td>
            <td>12000</td>
            <td>0</td>
            <td>12000</td>
          </tr>
          <tr>
            <td>42.</td>
            <td>
              <a href={SWH_TARAORI} target="_blank">Taraori</a>
            </td>
            <td>7680</td>
            <td>0</td>
            <td>7680</td>
          </tr>
          <tr>
            <td>43.</td>
            <td>
              <a href={SWH_GHEER} target="_blank">Gheer</a>
            </td>
            <td>9830</td>
            <td>0</td>
            <td>9830</td>
          </tr>
          <tr>
            <td>44.</td>
            <td>
              <a href={SWH_NIGDHU} target="_blank">Nigdhu</a>
            </td>
            <td>23760</td>
            <td>0</td>
            <td>23760</td>
          </tr>
          <tr>
            <td>45.</td>
            <td>
              <a href={SWH_BARSAT} target="_blank">Barsat</a>
            </td>
            <td>3540</td>
            <td>0</td>
            <td>3540</td>
          </tr>
          <tr>
            <td>46.</td>
            <td>
              <a href={SWH_NISSING} target="_blank">Nissing</a>
            </td>
            <td>13840</td>
            <td>0</td>
            <td>13840</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>110487</td>
            <td>0</td>
            <td>110487</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Sonepat Distt.
            </th>
          </tr>
          <tr>
            <td>47.</td>
            <td>
              <a href={SWH_GOHANA} target="_blank">Gohana</a>
            </td>
            <td>12100</td>
            <td>0</td>
            <td>12100</td>
          </tr>
          <tr>
            <td>48.</td>
            <td>
              <a href={SWH_PUNGTHALA}>Pungthala</a>
            </td>
            <td>19550</td>
            <td>0</td>
            <td>19550</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>31650</td>
            <td>0</td>
            <td>31650</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Circle Total</td>
            <td>60650</td>
            <td>0</td>
            <td>60650</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Fatehabad Circle
            </th>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Hisar Distt.
            </th>
          </tr>
          <tr>
            <td>49.</td>
            <td className="text-bold">Barwala</td>
            <td>60650</td>
            <td>0</td>
            <td>60650</td>
          </tr>
        </table>
        <table>
          <tr>
            <th rowSpan={2}>SNo.</th>
            <th rowSpan={2}>Name Of Warehouse</th>
            <th colSpan={3}>Capacity (in MTS)</th>
          </tr>
          <tr>
            <th>Covered</th>
            <th>Open</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>50.</td>
            <td>
              <a href={SWH_HANSI} target="_blank">Hansi</a>
            </td>
            <td>64431</td>
            <td>0</td>
            <td>64431</td>
          </tr>
          <tr>
            <td>51.</td>
            <td className="text-bold">UKLANA</td>
            <td>22820</td>
            <td>0</td>
            <td>22820</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>147901</td>
            <td>0</td>
            <td>147901</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Fatehabad Distt.
            </th>
          </tr>
          <tr>
            <td>52.</td>
            <td className="text-bold">Fatehbad</td>
            <td>30000</td>
            <td>0</td>
            <td>30000</td>
          </tr>
          <tr>
            <td>53.</td>
            <td>
              <a href="#">Dharsul</a>
            </td>
            <td>19000</td>
            <td>0</td>
            <td>19000</td>
          </tr>
          <tr>
            <td>54.</td>
            <td>
              <a href={SWH_TOHANA1} target="_blank">Tohana-1</a>
            </td>
            <td>12944</td>
            <td>0</td>
            <td>12944</td>
          </tr>
          <tr>
            <td>55.</td>
            <td>
              <a href="#">Tohana-2</a>
            </td>
            <td>35000</td>
            <td>0</td>
            <td>35000</td>
          </tr>
          <tr>
            <td>56.</td>
            <td>
              <a href="#">Jakhal</a>
            </td>
            <td>23902</td>
            <td>0</td>
            <td>23902</td>
          </tr>
          <tr>
            <td>57.</td>
            <td>
              <a href="#">Rattia</a>
            </td>
            <td>7000</td>
            <td>0</td>
            <td>7000</td>
          </tr>
          <tr>
            <td>58.</td>
            <td>
              <a href={SWH_BHUNA} target="_blank">Bhuna</a>
            </td>
            <td>9900</td>
            <td>0</td>
            <td>9900</td>
          </tr>
          <tr>
            <td>59.</td>
            <td>
              <a href="#">Bhattu</a>
            </td>
            <td>5000</td>
            <td>0</td>
            <td>5000</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>142746</td>
            <td>0</td>
            <td>142746</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Bhiwani Distt.
            </th>
          </tr>
          <tr>
            <td>60.</td>
            <td className="text-bold">Bhiwani</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>61.</td>
            <td className="text-bold">Bhiwani Khera</td>
            <td>19200</td>
            <td>1350</td>
            <td>20550</td>
          </tr>
          <tr>
            <td>62.</td>
            <td className="text-bold">Kohlawas</td>
            <td>16170</td>
            <td>0</td>
            <td>16170</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>35370</td>
            <td>1350</td>
            <td>36720</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Circle Total</td>
            <td>326017</td>
            <td>1350</td>
            <td>327367</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Sirsa Distt.
            </th>
          </tr>
          <tr>
            <td>63.</td>
            <td>
              <a href="#">Sirsa-1</a>
            </td>
            <td>10500</td>
            <td>3000</td>
            <td>13500</td>
          </tr>
          <tr>
            <td>64.</td>
            <td>
              <a href={SWH_DABWALI} target="_blank">Dabwali</a>
            </td>
            <td>7000</td>
            <td>0</td>
            <td>7000</td>
          </tr>
          <tr>
            <td>65.</td>
            <td>
              <a href="#">Ellenabad</a>
            </td>
            <td>22698</td>
            <td>5059</td>
            <td>27757</td>
          </tr>
          <tr>
            <td>66.</td>
            <td>
              <a href="#">Kalanwali</a>
            </td>
            <td>5000</td>
            <td>0</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>67.</td>
            <td>
              <a href="#">Rania</a>
            </td>
            <td>16000</td>
            <td>1200</td>
            <td>17200</td>
          </tr>
          <tr>
            <td>68.</td>
            <td>
              <a href={SWH_CHAUTALA} target="_blank">Chautala</a>
            </td>
            <td>21660</td>
            <td>0</td>
            <td>21660</td>
          </tr>
          <tr>
            <td>69.</td>
            <td>
              <a href={SWH_JIWAN_NAGAR} target="_blank">Jiwan Nagar</a>
            </td>
            <td>8200</td>
            <td>0</td>
            <td>8200</td>
          </tr>
          <tr>
            <td>70.</td>
            <td>
              <a href={SWH_RORI} target="_blank">Rori</a>
            </td>
            <td>4130</td>
            <td>0</td>
            <td>4130</td>
          </tr>
          <tr>
            <td>71.</td>
            <td>
              <a href="#">Bani</a>
            </td>
            <td>7500</td>
            <td>1000</td>
            <td>8500</td>
          </tr>
          <tr>
            <td>72.</td>
            <td className="text-bold">Baragudha</td>
            <td>7392</td>
            <td>6468</td>
            <td>13860</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Circle Total</td>
            <td>110080</td>
            <td>16727</td>
            <td>126807</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Rohtak Circle
            </th>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Rohtak Distt.
            </th>
          </tr>
          <tr>
            <td>73.</td>
            <td>
              <a href={SWH_ROHTAK1}>Rohtak-1</a>
            </td>
            <td>24357</td>
            <td>0</td>
            <td>24357</td>
          </tr>
          <tr>
            <td>74.</td>
            <td className="text-bold">Rohtak-2</td>
            <td>10650</td>
            <td>0</td>
            <td>10650</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>35007</td>
            <td>0</td>
            <td>35007</td>
          </tr>
        </table>
        <table>
          <tr>
            <th rowSpan={2}>SNo.</th>
            <th rowSpan={2}>Name Of Warehouse</th>
            <th colSpan={3}>Capacity (MTS)</th>
          </tr>
          <tr>
            <th>Covered</th>
            <th>Open</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>75.</td>
            <td>
              <a href={SWH_LAKHAN_MAJRA}>Lakhan Majra</a>
            </td>
            <td>7540</td>
            <td>1200</td>
            <td>8740</td>
          </tr>
          <tr>
            <td>76.</td>
            <td>
              <a href={SWH_MEHAM}>Meham</a>
            </td>
            <td>9000</td>
            <td>2200</td>
            <td>11200</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>24540</td>
            <td>3400</td>
            <td>27940</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Jind Distt.
            </th>
          </tr>
          <tr>
            <td>77.</td>
            <td>
              <a href="#">Jind</a>
            </td>
            <td>5000</td>
            <td>0</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>78.</td>
            <td>
              <a href={SWH_SAFIDON1}>Safidon-1</a>
            </td>
            <td>21090</td>
            <td>0</td>
            <td>21090</td>
          </tr>
          <tr>
            <td>79.</td>
            <td>
              <a href="#">Uchana</a>
            </td>
            <td>21454</td>
            <td>0</td>
            <td>21454</td>
          </tr>
          <tr>
            <td>80.</td>
            <td>
              <a href="#">Alewa</a>
            </td>
            <td>4880</td>
            <td>1000</td>
            <td>5880</td>
          </tr>
          <tr>
            <td>81.</td>
            <td>
              <a href="#">Dhamtan Sahib</a>
            </td>
            <td>3670</td>
            <td>0</td>
            <td>3670</td>
          </tr>
          <tr>
            <td>82.</td>
            <td>
              <a href={SWH_DHANAURI}>Dhanauri</a>
            </td>
            <td>5010</td>
            <td>0</td>
            <td>5010</td>
          </tr>
          <tr>
            <td>83.</td>
            <td>
              <a href={SWH_JULLANA}>Jullana</a>
            </td>
            <td>51216</td>
            <td>0</td>
            <td>51216</td>
          </tr>
          <tr>
            <td>84.</td>
            <td>
              <a href={SWH_NAGURA}>Nagura</a>
            </td>
            <td>18700</td>
            <td>0</td>
            <td>18700</td>
          </tr>
          <tr>
            <td>85.</td>
            <td className="text-bold">Naya Bans</td>
            <td>17864</td>
            <td>0</td>
            <td>17864</td>
          </tr>
          <tr>
            <td>86.</td>
            <td className="text-bold">Gugaheri</td>
            <td>14322</td>
            <td>0</td>
            <td>14322</td>
          </tr>
          <tr>
            <td>87.</td>
            <td>
              <a href="">Safidon-II</a>
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>163206</td>
            <td>1000</td>
            <td>164206</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Cirlce Total</td>
            <td>187746</td>
            <td>4400</td>
            <td>192146</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Rewari Distt.
            </th>
          </tr>
          <tr>
            <td>88.</td>
            <td>
              <a href="">Rewari-1</a>
            </td>
            <td>11957</td>
            <td>0</td>
            <td>11957</td>
          </tr>
          <tr>
            <td>89.</td>
            <td>
              <a href="">Rewari-2</a>
            </td>
            <td>23050</td>
            <td>0</td>
            <td>23050</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>35007</td>
            <td>0</td>
            <td>35007</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Narnaul Distt.
            </th>
          </tr>
          <tr>
            <td>90.</td>
            <td>
              <a href="">Narnaul</a>
            </td>
            <td>8000</td>
            <td>0</td>
            <td>8000</td>
          </tr>
          <tr>
            <td>91.</td>
            <td>
              <a href="">Kanina</a>
            </td>
            <td>5545</td>
            <td>0</td>
            <td>5545</td>
          </tr>
          <tr>
            <td>92.</td>
            <td>
              <a href="">Ateli-I</a>
            </td>
            <td>7420</td>
            <td>0</td>
            <td>7420</td>
          </tr>
          <tr>
            <td>93.</td>
            <td>
              <a href="">N.Chaudhary</a>
            </td>
            <td>2000</td>
            <td>0</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>94.</td>
            <td>
              <a href="">Mohindergarh</a>
            </td>
            <td>7000</td>
            <td>0</td>
            <td>7000</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>29965</td>
            <td>0</td>
            <td>29965</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Jhajjar Distt.
            </th>
          </tr>
          <tr>
            <td>
              95.
            </td>
            <td className="text-bold">Jhajjar</td>
            <td>7400</td>
            <td>0</td>
            <td>7400</td>
          </tr>
          <tr>
            <td>
              96.
            </td>
            <td className="text-bold">
              Bhadurgarh
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>
              97.
            </td>
            <td className="text-bold">Rampura</td>
            <td>16450</td>
            <td>0</td>
            <td>16450</td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td>23850</td>
            <td>0</td>
            <td>23850</td>
          </tr>
          <tr>
            <td></td>
            <td>Circle Total</td>
            <td>88822</td>
            <td>0</td>
            <td>88822</td>
          </tr>
        </table>
        <table>
          <tr>
            <th rowSpan={2}>S.No.</th>
            <th rowSpan={2}>Name Of Warehouse</th>
            <th colSpan={3}>Capacity (MTS)</th>
          </tr>
          <tr>
            <th>Covered</th>
            <th>
              Open
            </th>
            <th>
              Total
            </th>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Palwal Circle
            </th>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Faridabad Distt.
            </th>
          </tr>
          <tr>
            <td>
              98.
            </td>
            <td>
              <a href="">
                Kherikalan
              </a>
            </td>
            <td>10865</td>
            <td>1200</td>
            <td>12065</td>
          </tr>
          <tr>
            <td>
              99.
            </td>
            <td className="text-bold">
              Sevali
            </td>
            <td>16632</td>
            <td>5236</td>
            <td>21868</td>
          </tr>
          <tr>
            <td>
            </td>
            <td className="text-bold">Total</td>
            <td>27497</td>
            <td>6436</td>
            <td>33933</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Palwal Distt.
            </th>
          </tr>
          <tr>
            <td>
              100.
            </td>
            <td>
              <a href="">
                Palwal-1
              </a>
            </td>
            <td>7700</td>
            <td>0</td>
            <td>7700</td>
          </tr>
          <tr>
            <td>
              101.
            </td>
            <td>
              <a href="">
                Palwal-3
              </a>
            </td>
            <td>27392</td>
            <td>0</td>
            <td>27392</td>
          </tr>
          <tr>
            <td>
              102.
            </td>
            <td>
              <a href="">
                Hodal-1
              </a>
            </td>
            <td>16000</td>
            <td>0</td>
            <td>16000</td>
          </tr>
          <tr>
            <td>
              103.
            </td>
            <td>
              <a href="">
                Badauli
              </a>
            </td>
            <td>9854</td>
            <td>0</td>
            <td>9854</td>
          </tr>
          <tr>
            <td>
              104.
            </td>
            <td>
              <a href="">
                Hathin
              </a>
            </td>
            <td>10310</td>
            <td>0</td>
            <td>10310</td>
          </tr>
          <tr>
            <td>
            </td>
            <td className="text-bold">
              Total
            </td>
            <td>71256</td>
            <td>0</td>
            <td>71256</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Gurgaon Distt.
            </th>
          </tr>
          <tr>
            <td>
              105.
            </td>
            <td>
              <a href="">
                Pataudi
              </a>
            </td>
            <td>8000</td>
            <td>0</td>
            <td>8000</td>
          </tr>
          <tr>
            <td>
              106.
            </td>
            <td>
              <a href="">
                Farukh Nagar
              </a>
            </td>
            <td>6000</td>
            <td>0</td>
            <td>6000</td>
          </tr>
          <tr>
            <td>
              107.
            </td>
            <td className="text-bold">
              Siwari
            </td>
            <td>20790</td>
            <td>0</td>
            <td>20790</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>34790</td>
            <td>0</td>
            <td>34790</td>
          </tr>
          <tr>
            <th colSpan={5} className="text-left">
              Mewat Distt.
            </th>
          </tr>
          <tr>
            <td>
              108.
            </td>
            <td>
              <a href="">
                Tauru
              </a>
            </td>
            <td>15216</td>
            <td>0</td>
            <td>15216</td>
          </tr>
          <tr>
            <td>
              109.
            </td>
            <td>
              <a href="">
                Nuh
              </a>
            </td>
            <td>8940</td>
            <td>0</td>
            <td>8940</td>
          </tr>
          <tr>
            <td>
              110.
            </td>
            <td>
              <a href="">
                Pinangwan
              </a>
            </td>
            <td>3000</td>
            <td>0</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>
              111.
            </td>
            <td>
              <a href="">
                F.Zhirkha
              </a>
            </td>
            <td>9850</td>
            <td>1000</td>
            <td>10850</td>
          </tr>
          <tr>
            <td></td>
            <td className="text-bold">Total</td>
            <td>37006</td>
            <td>1000</td>
            <td>38006</td>
          </tr>
          <tr>
            <td className="text-bold text-left" colSpan={2}>
              Circle Total
            </td>
            <td>170549</td>
            <td>7436</td>
            <td>177985</td>
          </tr>
          <tr className="text-bold">
            <td className="text-bold text-left" colSpan={2}>Grand Total</td>
            <td>1525993</td>
            <td>35493</td>
            <td>1561486</td>
          </tr>
        </table>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
