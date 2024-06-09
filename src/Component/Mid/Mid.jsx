import React from "react";
import "../Mid/Mid.css";

const Mid = () => {
  return (
    <div className="mainn">
      <div className="title">How It Works?</div>
      <div className="steps-container">
        <div className="step">
          <img className="step-image" src="./Image/1.png" alt="Step 1" />
          <div className="step-description">
            Visit a participating restaurant.
          </div>
        </div>
        <div className="step">
          <img className="step-image" src="./Image/2.png" alt="Step 2" />
          <div className="step-description">Scan the QR code on the table.</div>
        </div>
        <div className="step">
          <img className="step-image" src="./Image/3.png" alt="Step 3" />
          <div className="step-description">
            Browse the digital menu, order, and earn rewards.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
