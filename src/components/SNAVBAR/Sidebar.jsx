import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Notifications from "../NOTIFICATIONS/Notifications";
import "./Sidebar.css";

const SideNavBar = () => {
    const [isExpanded, setExpendState] = useState(false);
    const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const sidebarRef = useRef(null);
    const dropdownRef = useRef(null);

    const menuItems = [
        { text: "Home", icon: "icons/home.svg", path: "/" },
        { text: "Trending", icon: "icons/trending.svg", path: "/trending" },
        { text: "Workshops", icon: "icons/workshop.svg", path: "/workshops" },
        { text: "Internships", icon: "icons/internship.svg", path: "/internship" },
        { text: "Jobs", icon: "icons/job.svg", path: "/jobs" },
        { text: "Notifications", icon: "icons/notification.svg", path: "#" }, // Keep path as "#" for opening notification
        { text: "Contact us", icon: "icons/contactus.svg", path: "/contactus" },
        { text: "Account", icon: "images/profile.png", path: "/profile" },
        { text: "Logout", icon: "icons/logout.svg", path: "/" },
    ];

    // Close sidebar & dropdown when clicking a menu item
    const handleMenuClick = () => {
        setExpendState(false);
        setAccountMenuOpen(false);
        setIsNotificationOpen(false); // Close notifications when a menu item is clicked
    };

    return (
        <>
            <div
                ref={sidebarRef}
                className={`sidebar ${isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"}`}
            >
                <div className="nav-upper">
                    <div className="nav-heading">
                        {isExpanded && (
                            <div className="nav-brand">
                                <img src="images/logo.png" alt="LOGO" />
                            </div>
                        )}
                        <button
                            className={`hamburger ${isExpanded ? "hamburger-in" : "hamburger-out"}`}
                            onClick={() => setExpendState(!isExpanded)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className="nav-menu">
                        {menuItems.map(({ text, icon, path }) =>
                            text === "Account" ? (
                                <div
                                    ref={dropdownRef}
                                    key={text}
                                    className={`menu-item ${isExpanded ? "" : "menu-item-NX"}`}
                                    onClick={() => {
                                        setAccountMenuOpen(!isAccountMenuOpen);
                                        handleMenuClick();
                                    }}
                                >
                                    <img className="profile-circle" src={icon} alt="profile-icon" />
                                    {isExpanded && <p>{text}</p>}
                                </div>
                            ) : text === "Notifications" ? (
                                <div
                                    key={text}
                                    className={`menu-item ${isExpanded ? "" : "menu-item-NX"}`}
                                    onClick={() => setIsNotificationOpen(true)}
                                >
                                    <img className="menu-item-icon" src={icon} alt={`${text} icon`} />
                                    {isExpanded && <p>{text}</p>}
                                </div>
                            ) : (
                                <NavLink
                                    to={path}
                                    key={text}
                                    className={`menu-item ${isExpanded ? "" : "menu-item-NX"}`}
                                    activeClassName="active"
                                    onClick={handleMenuClick}
                                >
                                    <img className="menu-item-icon" src={icon} alt={`${text} icon`} />
                                    {isExpanded && <p>{text}</p>}
                                </NavLink>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Floating Notification Card */}
            {isNotificationOpen && (
                <Notifications isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
            )}
        </>
    );
};

export default SideNavBar;
