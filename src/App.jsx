import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Roadmap from "./Roadmap.jsx";
import CareerDetails from "./CareerDetails.jsx";
import CareerVisionDashboard from "./CareerVisionDashboard.jsx";
import Comparisons from "./Comparisons.jsx";
import MyProfile from "./MyProfile.jsx";

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/career-details" element={<CareerDetails />} />
        <Route path="/career-vision" element={<CareerVisionDashboard />} />
        <Route path="/comparisons" element={<Comparisons />} />
        <Route path="/profile" element={<MyProfile />} />
        
      </Routes>
    </BrowserRouter>
  );
}
