import React, { useEffect, useState } from "react";
import api from "../api";
import "../styles/Profile.css";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
function Profile({ username }) {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("REFRESH_TOKEN");
        navigate("/login");
    };
    return (
        <div className="profile-container">
            <div className="profile-data">
                <h1 className="user-name">
                    Hello User <em style={{ color: "#560000" }}>{username}</em>
                </h1>
                <div className="about-app">
                    <h2 className="about">About App</h2>
                    <p className="about">
                        Welcome to our Notes App! Our app makes note-taking simple and efficient.
                        Capture your thoughts, ideas, and important information with ease.
                    </p>
                    <h3>Key Features:</h3>
                    <ul>
                        <li>
                            <strong>User-Friendly Design:</strong> Navigate effortlessly through
                            your notes.
                        </li>
                        <li>
                            <strong>Create and Edit:</strong> Quickly jot down or refine your ideas.
                        </li>
                        <li>
                            <strong>Organize with Tags:</strong> Easily categorize and find your
                            notes.
                        </li>
                        <li>
                            <strong>User Authentication:</strong> Log in to access your personal
                            notes. Privacy
                        </li>
                        <li>
                            <strong>Protection:</strong> Your notes are safeguarded from
                            unauthorized access.
                        </li>
                    </ul>
                    <p>
                        Whether for studying, work, or personal use, Notes Plus helps you stay
                        organized and inspired. Start taking control of your thoughts today!
                    </p>
                </div>
                <button type="submit" className="btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Profile;
