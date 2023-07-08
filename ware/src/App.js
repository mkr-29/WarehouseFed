import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Notifications from "./Pages/Notifications/Notifications";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Homepage />} />
          <Route path="notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);