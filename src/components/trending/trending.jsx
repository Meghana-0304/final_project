import React from "react";
import "./Trending.css";

const UNavbar = () => {
    return (
        <div className="trending-page">
            <nav className="Upper-Navbar">
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
                <h1>TRENDING</h1>
            </div>
        </div>
    );
};

export default UNavbar;