import React, { useRef, useState } from "react";
import "./Notifications.css";

const Notifications = ({ isOpen, onClose }) => {
    const notificationRef = useRef(null);

    // Sample notifications (some are from today, some are earlier)
    const [notifications, setNotifications] = useState([
        { id: 1, text: "New message received", date: new Date() },
        { id: 2, text: "Your post got 5 likes!", date: new Date() },
        { id: 3, text: "Workshop starts tomorrow", date: new Date("2024-02-04") },
        { id: 4, text: "New job alert: Frontend Developer", date: new Date("2024-02-03") },
    ]);

    // Get today's date in YYYY-MM-DD format
    const todayDate = new Date().toISOString().split("T")[0];

    // Separate notifications into "New" (today) and "Earlier"
    const newNotifications = notifications.filter(
        (notif) => notif.date.toISOString().split("T")[0] === todayDate
    );
    const earlierNotifications = notifications.filter(
        (notif) => notif.date.toISOString().split("T")[0] !== todayDate
    );

    // Function to delete a notification
    const deleteNotification = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notif) => notif.id !== id)
        );
    };

    return (
        <div className={`notification-card ${isOpen ? "show" : ""}`} ref={notificationRef}>
            <div className="notification-header">
                <h2>Notifications</h2>
                <button className="close" onClick={onClose}>✖</button>
            </div>
            <div className="notification-content">
                {/* Display "New" notifications */}
                {newNotifications.length > 0 && (
                    <div>
                        <h3 className="notification-title">New</h3>
                        {newNotifications.map((notif) => (
                            <div key={notif.id} className="notification-item">
                                <span>{notif.text}</span>
                                <button
                                    className="delete"
                                    onClick={() => deleteNotification(notif.id)}
                                >
                                    <img src="icons/delete.svg" alt="Delete" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Display "Earlier" notifications */}
                {earlierNotifications.length > 0 && (
                    <div>
                        <h3 className="notification-title">Earlier</h3>
                        {earlierNotifications.map((notif) => (
                            <div key={notif.id} className="notification-item">
                                <span>{notif.text}</span>
                                <button
                                    className="delete"
                                    onClick={() => deleteNotification(notif.id)}
                                >
                                    <img src="icons/delete.svg" alt="Delete" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notifications;
