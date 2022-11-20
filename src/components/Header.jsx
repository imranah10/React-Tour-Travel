import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="nav-logo">
            <h1>Traveller</h1>
          </div>
          <div className="nav-list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
