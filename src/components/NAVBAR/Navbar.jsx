import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // For top navbar menu

    // Function to check screen size on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuItems = [
        { text: "Home", icon: "icons/home.svg", path: "/" },
        { text: "Trending", icon: "icons/trending.svg", path: "/trending" },
        { text: "Workshops", icon: "icons/workshop.svg", path: "/workshops" },
        { text: "Internships", icon: "icons/internship.svg", path: "/internship" },
        { text: "Jobs", icon: "icons/job.svg", path: "/jobs" },
        { text: "Notifications", icon: "icons/notification.svg", path: "/notifications" },
        { text: "Account", icon: "images/profile.jpg", path: "/profile" },
        { text: "Contact us", icon: "icons/contactus.svg", path: "/contactus" },
    ];

    return (
        <>
            {/* ✅ TOP NAVBAR (MOBILE VIEW) */}
            {isMobile ? (
                <>
                    <nav className="top-navbar">
                        <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
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
                            {menuItems.map(({ text, path }) => (
                                <li key={text}>
                                    <NavLink to={path} onClick={() => setIsMenuOpen(false)}>{text}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                /* ✅ SIDE NAVBAR (DESKTOP VIEW) */
                <div className="sidebar">
                    <div className="nav-menu">
                        {menuItems.map(({ text, icon, path }) => (
                            <NavLink to={path} key={text} className="menu-item">
                                <img className="menu-item-icon" src={icon} alt={`${text} icon`} />
                                <p>{text}</p>
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;