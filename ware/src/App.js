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
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);