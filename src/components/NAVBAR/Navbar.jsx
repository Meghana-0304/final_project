import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // For top navbar menu
    const [isAccountMenuOpen, setAccountMenuOpen] = useState(false); // Account dropdown state
    const dropdownRef = useRef(null); // Reference for the dropdown container

    // Function to check screen size on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setAccountMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    const menuItems = [
        { text: "Home", icon: "icons/home.svg", path: "/" },
        { text: "Trending", icon: "icons/trending.svg", path: "/trending" },
        { text: "Workshops", icon: "icons/workshop.svg", path: "/workshops" },
        { text: "Internships", icon: "icons/internship.svg", path: "/internship" },
        { text: "Jobs", icon: "icons/job.svg", path: "/jobs" },
        { text: "Notifications", icon: "icons/notification.svg", path: "/notifications" },
        { text: "Contact us", icon: "icons/contactus.svg", path: "/contactus" },
        { text: "Account", icon: "images/profile.png", path: "/profile" },
        { text: "Logout", icon: "icons/logout.svg", path: "/" },
        
    ];

    return (
        <>
            {/* ✅ TOP NAVBAR (MOBILE VIEW) */}
            {isMobile ? (
                <>
                    <nav className="top-navbar">
                        <div className="menu-icon menu-open" onClick={() => setIsMenuOpen(true)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="logo">
                            <img src="images/logo.png" alt="Logo" />
                        </div>
                    </nav>

                    {/* Side Menu for Mobile */}
                    <div className={`mobile-side-menu ${isMenuOpen ? "open" : ""}`}>
                        <button className="close-btn" onClick={() => setIsMenuOpen(false)}>✖</button>
                        <ul>
                            {menuItems.map(({ text, icon, path }) =>
                                text === "Account" ? (
                                    <li key={text} ref={dropdownRef} className="menu-items">
                                        <NavLink className="account-menu" onClick={() => setAccountMenuOpen(!isAccountMenuOpen)}>
                                            <img className="profile" src={icon} alt="profile-icon" />
                                            <span className="menu-text">{text}</span>
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li key={text} className="menu-items">
                                        <NavLink to={path} onClick={() => setIsMenuOpen(false)}>
                                            <img src={icon} alt={`${text} icon`} className="menu-icon" />
                                            <span className="menu-text">{text}</span>
                                        </NavLink>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Navbar;