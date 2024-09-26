import React from "react";
import "../styles/Profile.css";
import "../styles/Home.css";
function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-data">
                <h1 className="user-name">Hello User</h1>
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
                            <strong>Access Anytime:</strong> Your notes are available on any device.
                        </li>
                    </ul>
                    <p>
                        Whether for studying, work, or personal use, Notes Plus helps you stay
                        organized and inspired. Start taking control of your thoughts today!
                    </p>
                </div>
                <button type="submit" className="btn">
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Profile;
