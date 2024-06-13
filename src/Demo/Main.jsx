import React, { useState, useEffect } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleModel = () => {
    setModelOpen(!modelOpen);
  };

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="header">
          <div className="logo-container">
            <img className="logo" src="./Image/Lo.png" alt="QRapid Logo" />
            <div className="logo-text">QRapid</div>
            {isMobile && (
              <img
                style={{ color: "green" }}
                className="menu-iconnn"
                src="./Image/menu.png"
                alt="Menu Icon"
                onClick={toggleModel}
              />
            )}
            {!isMobile || (isMobile && modelOpen) ? (
              <ul
                className={
                  isMobile && !modelOpen ? "mobile-nav-links" : "nav-links"
                }
              >
                <li>
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "16",
                      fontFamily: "poppins",
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "16",
                      fontFamily: "poppins",
                    }}
                    to="/footer"
                  >
                    Benifits
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "16",
                      fontFamily: "poppins",
                    }}
                    to="/about"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      color: "black",
                      textDecoration: "none",
                      padding: "10px",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      fontSize: "16",
                      fontFamily: "poppins",
                    }}
                    to="/demo"
                  >
                    For Customers
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
          {modelOpen && (
            <div>
            <div
              style={{
                position: "fixed",
                zIndex: "2000",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "black",
                opacity: "0.6",
              }}
            ></div>
            <div
              style={{
                position: "fixed",
                zIndex: "2001", // Slightly higher than the overlay
                top: "0",
                left: "0",
                right: "0",
                height: "35%",
                width:"385px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                borderRadius: "16px",
                transition: "transform 0.3s ease",
                transform: modelOpen ? "translateY(0)" : "translateY(-100%)",
                color: "black",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "black", // Optional: to match the image background
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <div style={{ paddingBottom: "40px" }}>
                  <img
                    style={{
                      height: "22px",
                      cursor: "pointer",
                      backgroundColor: "black",
                    }}
                    src="./Image/x.png"
                    alt="Close"
                    onClick={() => setModelOpen(false)}
                  />
                </div>
  
                <ul className="popup-menu-new" style={{ padding: 0, margin: 0 }}>
                  <li>
                    <Link
                      style={{ color: "white" }}
                      to="/"
                      className="popup-link-new"
                    >
                      Home
                    </Link>
                  </li>
                  <li style={{ color: "white", listStyle: "none" }}>
                    Contact Us
                  </li>
                  <li>
                    <Link style={{ color: "white" }} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li
                    style={{
                      padding: "12px",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      listStyle: "none",
                    }}
                  >
                    <Link to="/demo" className="popup-link-new">
                      For Restaurant
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          )}
        </div>
        <div className="main-content">
          <div className="main-title">
            Boost Your Sales by <spam style={{ color: "green" }}>20% </spam>with
            QR Menus
          </div>
          <div className="promo-section">
            <div className="promo-text">
              <div className="main-description">
                Streamline your operations and enhance customer experience with
                our intuitive QR code solution. Our mission is to build an
                ecosystem in the restaurant industry.
              </div>
              <Link to="/demo" className="main-free-demo">
                Free Demo
              </Link>
            </div>
            <div style={{ height: "20px" }} className="promo-image">
              <img className="main-image" src="./Image/Phone.png" alt="Phone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
