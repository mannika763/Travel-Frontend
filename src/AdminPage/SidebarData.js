// Sidebar.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import "./SidebarData.css";
import { Link } from 'react-router-dom';

function Sidebar({ setCurrentView }) {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <ul>
            <li><a href="#" onClick={() => setCurrentView('home')}><i className="fas fa-home"></i>Dashboard</a></li>
                <li><a href="#" onClick={() => setCurrentView('profile')}><i className="fas fa-user"></i>Profile</a></li>
                <li><a href="#" onClick={() => setCurrentView('about')}><i className="fas fa-address-card"></i>About</a></li>
                <li><a href="#" onClick={() => setCurrentView('portfolio')}><i className="fas fa-project-diagram"></i>Portfolio</a></li>
                <li><a href="#" onClick={() => setCurrentView('blogs')}><i className="fas fa-blog"></i>Blogs</a></li>
                <li><a href="#" onClick={() => setCurrentView('contact')}><i className="fas fa-address-book"></i>Contact</a></li>
                <li><a href="#" onClick={() => setCurrentView('map')}><i className="fas fa-map-pin"></i>Map</a></li>
            </ul>
            <div className="social_media">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    );
}

export default Sidebar;
