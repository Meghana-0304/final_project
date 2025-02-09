import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
    const [activeSection, setActiveSection] = useState("profile");

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="profile-container">
            {/* Left Panel - Profile */}
            <div className="profile-card">
                <div className="profile-image-container">
                    <img
                        src="images/profile.png"
                        alt="Profile"
                        className="profile-image"
                    />
                    <label htmlFor="file-upload" className="camera-icon">
                        <img src="icons/camera.svg" alt="Camera" />
                    </label>
                    <input type="file" id="file-upload" accept="image/*" />
                </div>
                <h2>NAME</h2>
                <p className="role">ROLE</p>

                <div className="activity-section">
                    <h1>MY ACTIVITY</h1>
                    <button
                        className={activeSection === "profile" ? "active" : ""}
                        onClick={() => handleSectionChange("profile")}
                    >
                        Profile
                    </button>
                    <button
                        className={activeSection === "jobs" ? "active" : ""}
                        onClick={() => handleSectionChange("jobs")}
                    >
                        My Jobs
                    </button>
                    <button
                        className={activeSection === "workshops" ? "active" : ""}
                        onClick={() => handleSectionChange("workshops")}
                    >
                        My Workshops
                    </button>
                    <button
                        className={activeSection === "internships" ? "active" : ""}
                        onClick={() => handleSectionChange("internships")}
                    >
                        My Internships
                    </button>
                </div>
            </div>

            {/* Right Panel - Dynamic Section */}
            <div className={`content-container ${activeSection}`}>
                <div className="content">
                    {activeSection === "profile" && (
                        <div className="profile-details">
                            <h3>Profile Details</h3>
                            <form>
                                <div className="forms">
                                    <label htmlFor="fullName">FULL NAME:</label>
                                    <input type="text" name="First Name" placeholder="First Name" />
                                </div>
                                <div className="forms">
                                    <label htmlFor="fullName">PHONE NUMBER:</label>
                                    <input type="text" placeholder="Phone Number" />
                                </div>
                                <div className="forms">
                                    <label htmlFor="fullName">MIDDLE NAME:</label>
                                    <input type="text" placeholder="Middle Name" />
                                </div>
                                <div className="forms">
                                    <label htmlFor="fullName">EMAIL ADDRESS:</label>
                                    <input type="text" placeholder="Email Address" />
                                </div>
                                <div className="forms">
                                    <label htmlFor="fullName">LAST NAME:</label>
                                    <input type="text" placeholder="Last Name" />
                                </div>
                                <div className="forms">
                                    <label htmlFor="fullName">CITY:</label>
                                    <input type="text" placeholder="City" />
                                </div>
                                <div className="forms">
                                    <label htmlFor="fullName">GENDER:</label>
                                    <input type="text" placeholder="Gender" />
                                </div>
                                <div className="forms">
                                    <label htmlFor="fullName">STATE:</label>
                                    <input type="text" placeholder="State" />
                                </div>
                                <div className="forms">
                                    <label htmlFor="fullName">PINCODE:</label>
                                    <input type="text" placeholder="Pincode" />
                                </div>
                                <div className="forms">
                                    <label htmlFor="fullName">COUNTRY:</label>
                                    <input type="text" placeholder="Country" />
                                </div>
                            </form>
                            <button type="submit">Update</button>
                        </div>
                    )}

                    {activeSection === "jobs" && (
                        <div className="jobs">
                            <h3>My Jobs</h3>
                            <div className="grid">
                                <div className="job-card">Infosys</div>
                                <div className="job-card">TCS</div>
                                <div className="job-card">Wipro</div>
                                <div className="job-card">Tata Steel</div>
                                <div className="job-card">AWS</div>
                                <div className="job-card">HCL</div>
                                <div className="job-card">Adobe</div>
                            </div>
                        </div>
                    )}

                    {activeSection === "workshops" && (
                        <div className="workshops">
                            <h3>My Workshops</h3>
                            <div className="grid">
                                <div className="workshop-card">Infosys</div>
                                <div className="workshop-card">TCS</div>
                                <div className="workshop-card">Wipro</div>
                                <div className="workshop-card">IBM</div>
                                <div className="workshop-card">Tata Steel</div>
                                <div className="workshop-card">HCL</div>
                                <div className="workshop-card">Adobe</div>
                            </div>
                        </div>
                    )}

                    {activeSection === "internships" && (
                        <div className="internships">
                            <h3>My Internships</h3>
                            <p>Internship details will be displayed here...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;