import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div>
      <div className="new-benefits-container new-reward-container">
        <div className="new-benefits-title">
          <span className="new-highlight">Benefits</span> to Restaurant
        </div>
        <div className="new-reward-cards">
          {[
            {
              title: "Attract More Customers",
              text: "With strategic marketing we aim to increase your footfall by 15%.",
              image: "./Image/11.png",
            },
            {
              title: "Menu Editing",
              text: "Easily edit your menu anytime with our app.",
              image: "./Image/12.png",
            },
            {
              title: "Speed & Efficiency",
              text: "Do order via QR menu and increase efficiency with customer experience.",
              image: "./Image/13.png",
            },
            {
              title: "Customer Retarget",
              text: "Gift points to your friends & family members.",
              image: "./Image/14.png",
            },
          ].map((reward, index) => (
            <div key={index} className="new-benefits-card new-reward-card">
              <div className="new-reward-card-content">
                <p className="new-reward-card-title">{reward.title}</p>
                <p className="new-reward-card-text">{reward.text}</p>
              </div>
              <div className="new-reward-card-image">
                <img src={reward.image} alt={reward.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
