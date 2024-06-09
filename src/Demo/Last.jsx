import React from "react";
import "./Last.css"; // Assuming the media queries are in Last.css

const Last = () => {
  return (
    <div className="last-container">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "56px" }}>
        <div className="last-title">
          Join the <span style={{ color: "green" }}>Digital Revolution</span>
        </div>
        <div className="last-description">
          Empower your restaurant with QRapid. Engage customers with our rewards
          program, boost sales, and grow your business today!
        </div>
        <div className="last-button">
          <button>Book a FREE Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Last;
