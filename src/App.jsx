import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Roadmap from "./Roadmap.jsx";
import CareerDetails from "./CareerDetails.jsx";
import CareerVisionDashboard from "./CareerVisionDashboard.jsx";
import Comparisons from "./Comparisons.jsx";
import MyProfile from "./MyProfile.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />

        {/* Private pages: login ke bina khulenge hi nahi */}
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roadmap"
          element={
            <ProtectedRoute>
              <Roadmap />
            </ProtectedRoute>
          }
        />
        <Route
          path="/career-details"
          element={
            <ProtectedRoute>
              <CareerDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/career-vision"
          element={
            <ProtectedRoute>
              <CareerVisionDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/comparisons"
          element={
            <ProtectedRoute>
              <Comparisons />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}