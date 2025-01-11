import React, { useState } from "react";
import "./sidebar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
        {
			text: "Home",
			icon: "icons/home.svg",
		},
        {
			text: "Trending",
			icon: "icons/trending.svg",
		},
		{
			text: "Workshops",
			icon: "icons/workshop.svg",
		},
		{
			text: "Internships",
			icon: "icons/internship.svg",
		},
		{
			text: "Jobs",
			icon: "icons/job.svg",
		},
		{
			text: "Notifications",
			icon: "icons/notification.svg",
		},
		{
			text: "About us",
			icon: "icons/about.svg",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="images/logo.png" alt="LOGO"/>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>

		</div>
	);
};

export default SideNavBar;