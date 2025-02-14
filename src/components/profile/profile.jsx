import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
    const [activeSection, setActiveSection] = useState("profile");

    const [name, setName] = useState("NAME");
    const [role, setRole] = useState("ROLE");
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingRole, setIsEditingRole] = useState(false);

    const [profileImage, setProfileImage] = useState("images/profile.png");

    const [formData, setFormData] = useState({
        FullName: "",
        PhoneNumber: "",
        Email: "",
        Gender: "",
        Address: "",
    });

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateClick = () => {
        console.log("Updated Data:", formData);
        alert("Profile Updated Successfully!");
    };

    return (
        <div className="profile-container">
            {/* Left Panel - Profile */}
            <div className="profile-card">
                <div className="profile-image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                    <label htmlFor="file-upload" className="camera-icon">
                        <img src="icons/camera.svg" alt="Camera" />
                    </label>
                    <input
                        type="file"
                        id="file-upload"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />
                </div>

                {/* Editable Name with Pencil Icon */}
                <div className="editable-field">
                    {isEditingName ? (
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => setIsEditingName(false)}
                            autoFocus
                        />
                    ) : (
                        <h2>
                            {name}
                            <img
                                src="icons/edit-dark.svg"
                                alt="Edit"
                                className="edit-icon"
                                onClick={() => setIsEditingName(true)}
                            />
                        </h2>
                    )}
                </div>

                {/* Editable Role with Pencil Icon */}
                <div className="editable-field">
                    {isEditingRole ? (
                        <input
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            onBlur={() => setIsEditingRole(false)}
                            autoFocus
                        />
                    ) : (
                        <p className="role">
                            {role}
                            <img
                                src="icons/edit-primary.svg"
                                alt="Edit"
                                className="edit-icon"
                                onClick={() => setIsEditingRole(true)}
                            />
                        </p>
                    )}
                </div>

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
                                {Object.keys(formData).map((key) => (
                                    <div className="forms" key={key}>
                                        <label>{key.toUpperCase()}:</label>
                                        <input
                                            type="text"
                                            name={key}
                                            placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                                            value={formData[key]}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                ))}
                            </form>
                            <button type="button" className="button" onClick={handleUpdateClick}>
                                Update
                            </button>
                        </div>
                    )}

                    {activeSection === "jobs" && (
                        <div className="jobs">
                            <h3>My Jobs</h3>
                            <p>Applied Job details will be displayed here...</p>
                        </div>
                    )}

                    {activeSection === "workshops" && (
                        <div className="workshops">
                            <h3>My Workshops</h3>
                            <p>Applied Workshop details will be displayed here...</p>
                        </div>
                    )}

                    {activeSection === "internships" && (
                        <div className="internships">
                            <h3>My Internships</h3>
                            <p>Applied Internship details will be displayed here...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;