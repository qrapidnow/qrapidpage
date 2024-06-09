import React from "react";
import "../Component/Style.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="main">
      <div className="navbar-container">
        <div className="navbar">
          <div className="logo-container">
            <img className="logo" src="./Image/Lo.png" alt="QRapid Logo" />
            <div className="brand-name">QRapid</div>
          </div>
          <div>
            <ul className="nav-links">
              <li className="nav-item"><Link   style={{textDecoration:"none",color:"white"}}to="/">Home</Link></li>
              <li className="nav-item">Contact Us</li>
              <li className="nav-item">About Us</li>
              <li className="highlighted-link"><Link  style={{textDecoration:"none",color:"black"}} to="/demo">For Restaurant</Link></li>
            </ul>
          </div>
        </div>
        <div className="main-title">
          Discover Your Favorite Menus Digitally!
        </div>
        <div className="description">
          Scan QR codes at your favorite restaurants for easy access to digital
          menus, exclusive offers, and rewards
        </div>
        <div className="cta-container">
          <div className="cta-button">
            Find Restaurant
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
