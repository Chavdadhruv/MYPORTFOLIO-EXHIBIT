import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this path matches your folder structure

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="your-logo-url.jpg" alt="Logo" className="logo-image" />
        </div>
        <div className="navbar-title">
          <span>Data Scientist</span>
        </div>
        <button className="navbar-toggle" onClick={toggleCollapse}>
          ☰
        </button>
        <ul className={`navbar-list ${isCollapsed ? 'collapsed' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
