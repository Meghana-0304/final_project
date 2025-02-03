import React from "react";
import "./Internship.css";

const UNavbar = () => {
    return (
        <div className="internship-page">
            <nav className="Upper-navbar">
                <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <span className="search-icon">
                        <img src={"icons/search.svg"} alt="Search" />
                    </span>
                </div>
                <button className="filter-btn">
                    <img src={"icons/filter.svg"} alt="Filter" className="filter-icon" />
                    <span className="filter-text">FILTER</span>
                </button>
            </nav>
            <div className="mainpage">
                <h1>INTERNSHIP</h1>
            </div>
        </div>
    );
};

export default UNavbar;