import React from "react";
import "./Main.css"; 

const Main = () => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="header">
          <div className="logo-container">
            <img className="logo" src="./Image/Lo.png" alt="QRapid Logo" />
            <div className="logo-text">QRapid</div>
          </div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li style={{color:"black"}} className="for-restaurant">For Restaurant</li>
          </ul>
        </div>
        <div className="main-content">
          <div className="main-title">
            Boost Your Sales by 20% with QR Menus
          </div>
          <div className="promo-section">
            <div className="promo-text">
              <div className="main-description">
                Streamline your operations and enhance customer experience with our intuitive QR code solution. Our mission is to build an ecosystem in the restaurant industry.
              </div>
              <div className="main-free-demo">Free Demo</div>
            </div>
            <div className="promo-image">
              <img className="main-image" src="./Image/Phone.png" alt="Phone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
