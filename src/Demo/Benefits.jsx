import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div>
      <div className="benefits-container reward-container">
        <div className="benefits-title" >
          <span className="highlight">Benefits</span> to Restaurant
        </div>
        <div className="reward-cards">
          {[
            {
              title: "Attract More Customers ",
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
              title: "Customer Retarget ",
              text: "Gift points to your friends & family members.",
              image: "./Image/14.png",
            },
          ].map((reward, index) => (
            <div key={index} className="benefits-card reward-card">
              <div className="reward-card-content">
                <p className="reward-card-title">{reward.title}</p>
                <p className="reward-card-text">{reward.text}</p>
              </div>
              <div className="reward-card-image">
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
