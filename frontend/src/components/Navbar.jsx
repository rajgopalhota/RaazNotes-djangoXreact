// Navbar.js

import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark" : "navbar-light"
      } bg-${isDarkMode ? "dark" : "light"}`}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          My Blog
        </NavLink>
        <button
          className={`navbar-toggler ${
            isDarkMode ? "navbar-toggler-dark" : ""
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addnotes">
                Add Notes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/allnotes">
                My Notes
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
