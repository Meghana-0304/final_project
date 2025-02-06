import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/SNAVBAR/Sidebar";
import TNavbar from "./components/NAVBAR/Navbar"
import Home from "./components/HOME/Home";
import Trending from "./components/TRENDING/Trending";
import Workshops from "./components/WORKSHOPS/Workshops";
import Internships from "./components/INTERNSHIP/Internship";
import Jobs from "./components/JOBS/Jobs";
import Notifications from "./components/NOTIFICATIONS/Notifications";
import Profile from "./components/PROFILE/Profile";
import Contactus from "./components/CONTACTUS/Contactus"

export default function App() {

  return (
    <Router>
      <div className="App">
        {/* Sidebar Navigation */}
        <NavBar />
        <TNavbar />

        {/* Main Content Area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/internship" element={<Internships />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/notifications" element={<Notifications isOpen={true} onClose={() => {}} />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}