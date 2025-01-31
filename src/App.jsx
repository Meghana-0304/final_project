import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/sidebar";
import Home from "./components/home/home";
import Trending from "./components/trending/trending";
import Workshops from "./components/workshops/workshops";
import Internships from "./components/internship/internship";
import Jobs from "./components/jobs/jobs";
import Notifications from "./components/notifications/notifications";
import Profile from "./components/profile/profile";
import Contactus from "./components/contactus/contactus"

export default function App() {

  return (
    <Router>
      <div className="App">
        {/* Sidebar Navigation */}
        <NavBar />

        {/* Main Content Area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/internship" element={<Internships />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contactus" element={<Contactus/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}