import React, { useEffect, useRef } from "react";
import "./Notifications.css";

const Notification = ({ isOpen, onClose }) => {
    const cardRef = useRef(null);

    // Close the notification card when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                onClose(); // Close the notification card
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`notification-overlay ${isOpen ? "show" : "true"}`}>
            <div ref={cardRef} className="notification-card">
                <div className="notification-header">
                    <h2>Notifications</h2>
                    <button className="close-btn" onClick={onClose}>✖</button>
                </div>
                <div className="notification-content">
                    <p>You have new notifications.</p>
                </div>
            </div>
        </div>
    );
};

export default Notification;