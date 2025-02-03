import React, { useState } from 'react';
import './Profile.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-icon" onClick={handleMenuClick}>
                <img src="path/to/account-icon.png" alt="Account Icon" className="account-icon" />
            </div>
            {isOpen && (
                <div className="dropdown">
                    <div className="dropdown-content">
                        <a href="#profile">Profile</a>
                        <a href="#logout">Logout</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;