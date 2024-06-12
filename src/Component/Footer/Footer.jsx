import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sub_footer">
        <div className="new">
          <div className="sub_footer_left">
            <div style={{ display: "flex", gap: "12px" }}>
              <img
                style={{ height: "40px" }}
                src="../../Image/black.png"
                alt=""
              />
              <div className="new3">QRapid</div>
            </div>
            <div
              style={{
                fontSize: "16px",
                width: "46%",
                fontFamily: "Quicksand",
              }}
            >
              Stay in the loop and sign up for the QRapid for more:
            </div>

            <div className="new4">
              <div style={{ paddingTop: "24px", paddingBottom: "22px" }}>
                <div class="container">
                  <input
                    type="text"
                    id="textInput"
                    placeholder="Enter text here"
                  />
                  <button id="submitButton">
                    <img
                      style={{ borderRadius: "20px" }}
                      src="./Image/Right.png"
                      alt="Submit"
                    />
                  </button>
                </div>
              </div>

              <div className="new5">
                <div class="container2">
                  <p style={{ fontSize: "16px", paddingLeft: "14px" }}>
                    Are You a Restaurant Owner?
                  </p>
                  <button
                    style={{
                      backgroundColor: "#F2E982",
                      padding: "14px",
                      borderRadius: "20px",
                    }}
                    id="submitButton"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/demo"
                    >
                      Click Me
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="sub_footer_right">
            <div className="new2">
              <div
                style={{
                  gap: "14px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: "18px", fontWeight: "800" }}>
                  Company
                </div>
                <div style={{ fontSize: "18px" }}>Home</div>
                <div style={{ fontSize: "18px" }}>About</div>
                <div style={{ fontSize: "18px" }}>Careers</div>
              </div>

              <div
                style={{
                  gap: "14px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: "18pxpx", fontWeight: "800" }}>
                  Documentation
                </div>
                <div style={{ fontSize: "18pxpx" }}>Help Centre</div>
                <div style={{ fontSize: "18pxpx" }}>Privacy Policy</div>
                <div style={{ fontSize: "18pxpx" }}>FAQ</div>
              </div>

              <div
                style={{
                  gap: "14px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: "18px", fontWeight: "800" }}>
                  Social
                </div>
                <div style={{ fontSize: "18px" }}>Facebook</div>
                <a
                 style={{
                  textDecoration:"none",color:"black"
                }}
                  href="https://www.instagram.com/qrapid.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ fontSize: "18px" }}>Instagram</div>
                </a>
                <a
                 style={{
                  textDecoration:"none",color:"black"
                }}
                  href="https://www.linkedin.com/company/qrapidnow/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ fontSize: "18px" }}>linkedin</div>
                </a>
                <a style={{
                  textDecoration:"none",color:"black"
                }}
                  href="https://youtube.com/@qrapidnow?si=2ISON4k_IMVRORcY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ fontSize: "18px" }}>youtube</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "18px",
            }}
          >
            <div style={{ fontSize: "14px" }}>
              © QRapid All Rights Reserved 2024
            </div>
            <div style={{ fontSize: "14px" }}>Terms & Conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
