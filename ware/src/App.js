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
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);