import React from "react";
import "./Price.css";

const Price = () => {
  return (
    <div className="price-container">
     
        <div className="price-title">
          Looking for <span style={{ color: "green" }}>a Deal?</span>
        </div>
        <div className="price-trial">15 days Free Trial*</div>

        <div className="price-section">
          <div className="price-feature">
            <div className="price-feature-title">Feature</div>
            <div className="price-feature-list">
              <div className="price-feature-item">Digital Menu Creation</div>
              <div className="price-feature-item">Setup and Assistance</div>
              <div className="price-feature-item">Weekly Reports</div>
              <div className="price-feature-item">Feedback on food</div>
              <div className="price-feature-item">Support</div>
            </div>
          </div>

          <div className="price-plan">
            <div className="price-plan-box" style={{ backgroundColor: "gray" }}>
              <div className="price-plan-price">₹199/m</div>
              <div className="price-plan-name">Snacks</div>
            </div>
            <div className="price-icons">
              <img className="price-icon" src="./Image/c.png" alt="" />
              <img className="price-icon" src="./Image/c.png" alt="" />
              <img className="price-icon-img" src="./Image/x.png" alt="" />
              <img className="price-icon-img" src="./Image/x.png" alt="" />
              <img className="price-icon" src="./Image/c.png" alt="" />
            </div>
          </div>

          <div className="price-plann" style={{ backgroundColor: "#00BF63" ,borderRadius:"30px"}}>
            <div className="price-plan-box" style={{ backgroundColor: "white" }}>
              <div style={{color:"black"}} className="price-plan-price">₹299/m</div>
              <div style={{color:"black"}}className="price-plan-name">Starter</div>
            </div>
            <div className="price-icons">
              <img className="price-icon" src="./Image/c.png" alt="" />
              <img className="price-icon" src="./Image/c.png" alt="" />
              <img className="price-icon" src="./Image/c.png" alt="" />
              <img className="price-icon" src="./Image/c.png" alt="" />
              <img className="price-icon" src="./Image/c.png" alt="" />
            </div>
          </div>
        </div>
   
    </div>
  );
};

export default Price;
