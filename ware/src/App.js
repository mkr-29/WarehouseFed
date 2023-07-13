import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Notifications from "./Pages/Notifications/Notifications";
import Photo from "./Pages/Gallery/Photo/Photo";
import Video from "./Pages/Gallery/Video/Video";
import About from "./Pages/About/About";
import Overview from "./Pages/About/Overview/Overview";
import Profile from "./Pages/About/Profile/Profile";
import Functions from "./Pages/About/Profile/Functions/Functions";
import Bod from "./Pages/About/BOD/Bod";
import FinanceOverview from "./Pages/Finance/Overview/FinanceOverview";
import AnnualReports from "./Pages/Finance/AnnualReports/AnnualReports";
import PaidupTurnover from "./Pages/Finance/PaidupTurnover/PaidupTurnover";
import POverview from "./Pages/Procurement/Overview/POverview";
import ProcurementData from "./Pages/Procurement/ProData/ProcurementData";
import Technical from "./Pages/Procurement/Technical/Technical";
import SCU from "./Pages/ScientificStorage/SCU/SCU";
import ExtSer from "./Pages/ScientificStorage/ExtServices/ExtSer";
import BusinessReport from "./Pages/ScientificStorage/BusinessRep/BusinessReport";
import EOverview from "./Pages/Engineering/Overview/EOverview";
import CCDTY from "./Pages/Engineering/CCDTY/CCDTY";
import LayoutPlans from "./Pages/Engineering/LayoutPlans/LayoutPlans";
import Rules from "./Pages/EmployeeCorner/Rules/Rules";
import SeniorityList from "./Pages/EmployeeCorner/Seniority/SeniorityList";
import GPFStatements from "./Pages/EmployeeCorner/GPF/GPFStatements";
import COOI from "./Pages/EmployeeCorner/Circulars/COOI";
import EDownloads from "./Pages/EmployeeCorner/Downloads/EDownloads";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Homepage />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="photo-gallery" element={<Photo />} />
          <Route path="video-gallery" element={<Video />} />
          <Route path="about" element={<About />} />
          <Route path="about/overview" element={<Overview />} />
          <Route path="about/profile-objective" element={<Profile />} />
          <Route path="about/profile-objective/our-functions" element={<Functions />} />
          <Route path="about/board-of-directors" element={<Bod />} />
          <Route path="finance-overview" element={<FinanceOverview />} />
          <Route path="finance-paidup-turnover" element={<PaidupTurnover />} />
          <Route path="finance-annual-reports" element={<AnnualReports />} />
          <Route path="procurement-overview" element={<POverview />} />
          <Route path="procurement-data" element={<ProcurementData />} />
          <Route path="technical-reports" element={<Technical />} />
          <Route path="storage-capacity-and-utilization" element={<SCU />} />
          <Route path="extension-services" element={<ExtSer />} />
          <Route path="business-report" element={<BusinessReport />} />
          <Route path="engineering-overview" element={<EOverview />} />
          <Route path="capacity-construted-during-the-years" element={<CCDTY />} />
          <Route path="layout-plans" element={<LayoutPlans />} />
          <Route path="hswc-rules-regulations" element={<Rules />} />
          <Route path="seniority-list" element={<SeniorityList />} />
          <Route path="gpf-statements" element={<GPFStatements />} />
          <Route path="circulars-office-order-instructions" element={<COOI />} />
          <Route path="employee-corner-downloads" element={<EDownloads />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);