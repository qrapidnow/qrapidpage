import React from "react";
import "../Reward/Reward.css";

const Reward = () => {
  return (
    <div className="reward-container">
      <div className="reward-title">
        <spam style={{color:"green"}}>Reward</spam> Program Just For You!
      </div>
      <div className="reward-cards">
        {[
          {
            title: "Save More",
            text: "Get exclusive discounts and special offers.",
            image: "./Image/11.png",
          },
          {
            title: "Loyalty Points",
            text: "Collect points on every meal and use it for additional discounts.",
            image: "./Image/12.png",
          },
          {
            title: "Birthday Rewards",
            text: "Special perks on your birthday.",
            image: "./Image/13.png",
          },
          {
            title: "Gift Points",
            text: "Gift points to your friends & family members.",
            image: "./Image/14.png",
          },
        ].map((reward, index) => (
          <div key={index} className="reward-card">
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
  );
};

export default Reward;
