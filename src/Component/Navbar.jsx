import React, { useState, useEffect } from "react";
import "../Component/Style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setModelOpen(!modelOpen);
  };

  return (
    <div className="main-new">
      <div className="navbar-container-new">
        {isMobile ? (
          <div className="mobile-header-new">
            <img className="logo-new" src="./Image/Lo.png" alt="QRapid Logo" />
            <div className="brand-name-new">QRapid</div>
            <img
              className="menu-img-new"
              src="./Image/menu.png"
              alt="Menu"
              onClick={toggleMenu}
            />
          </div>
        ) : (
          <div className="navbar-new">
            <div className="logo-container-new">
              <img
                className="logo-new"
                src="./Image/Lo.png"
                alt="QRapid Logo"
              />
              <div className="brand-name-new">QRapid</div>
            </div>
            <div>
              <ul className="nav-links-new">
                <li className="nav-item-new">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item-new">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/footer"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item-new">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="highlighted-link-new">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/demo"
                  >
                    For Restaurant
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="main-title-new">
          QR Menus & <spam style={{ color: "green" }}>Discounts</spam> Await –
          Go Scan Now!
        </div>
        <div className="description-new">
          Scan QR codes at your favorite restaurants for easy access to digital
          menus, exclusive offers, and rewards
        </div>
        <div className="cta-container-new">
          <div className="cta-button-new">Find Nearby Restaurant</div>
        </div>
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
              height: "50%",
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
  );
};

export default Navbar;
