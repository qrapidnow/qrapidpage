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
        {/* Desktop header */}
        {!isMobile && (
          <div className="desktop-header">
            <img className="logo" src="./Image/Lo.png" alt="QRapid Logo" />
            <div className="logo-text">QRapid</div>
            <ul className="nav-links">
              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontFamily: "Poppins",
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
                    fontSize: "18px",
                    fontFamily: "Poppins",
                  }}
                  to=""
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontFamily: "Poppins",
                  }}
                  to="/price"
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
                    fontSize: "18px",
                    fontFamily: "Poppins",
                  }}
                  to=""
                >
                  For Customers
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Mobile header */}
        {isMobile && (
          <div className="mobile-header">
            <div className="logo-container">
              <img className="logo" src="./Image/Lo.png" alt="QRapid Logo" />
              <div className="logo-text">QRapid</div>
              <img
                className="menu-iconnn"
                src="./Image/menu.png"
                alt="Menu Icon"
                onClick={toggleModel}
              />
            </div>
          </div>
        )}
      </div>

      {modelOpen && isMobile && (
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
              zIndex: "2001",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "black",
              borderRadius: "16px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              maxWidth: "90%",
              padding: "20px",
              color: "white",
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              gap:"20px"
            }}
          >
            <div style={{ paddingBottom: "20px" }}>
              <img
                style={{
                  height: "22px",
                  cursor: "pointer",
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
              <li style={{ color: "white", listStyle: "none" }}>Contact Us</li>
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
      )}

      <div className="main-content">
        <div className="main-title">
          Boost Your Sales by <span style={{ color: "green" }}>20% </span>with
          QR Menus
        </div>
        <div className="promo-section">
          <div className="promo-text">
            <div className="main-description">
              Streamline your operations and enhance customer experience with
              our intuitive QR code solution. Our mission is to build an
              ecosystem in the restaurant industry.
            </div>
          
             <a className="main-free-demo" href="http://bit.ly/QRapid-Demo"> Free Demo</a>
   
          </div>
          <div style={{ height: "20px" }} className="promo-image">
            <img className="main-image" src="./Image/Phone.png" alt="Phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
