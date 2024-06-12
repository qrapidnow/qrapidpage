import React from "react";
import "../Partner/Partner.css";
const Partner = () => {
  const restaurantData = [
    {
      location: "Ghatkopar",
      name: "The Lucky Restaurants",
      image: "./Image/4.png",
    },
    { location: "Kharghar", name: "Neo Welcome", image: "./Image/5.png" },
    { location: "Worli", name: "Asian Restaurant", image: "./Image/6.png" },
    {
      location: "Ghatkopar",
      name: "The Lucky Restaurants",
      image: "./Image/7.png",
    },
    { location: "Marine Lines", name: "Namkeen", image: "./Image/8.png" },
    { location: "Colaba", name: "Neo Welcome", image: "./Image/9.png" },
  ];

  return (
    <div 
      style={{
        backgroundColor: "black",
        paddingTop: "48px",
        paddingBottom: "138px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="Aaaa" style={{ color: "white" }}>
        Our<spam style={{color:"green"}}> Restaurant </spam>Partners
      </div>
      <div className="cards-container">
        {restaurantData.map((restaurant, index) => (
          <div
            className="restaurant-card"
            key={index}
            style={{ backgroundImage: `url(${restaurant.image})` }}
          >
            <div className="location-tag">{restaurant.location}</div>
            <div className="card-content">
              <div className="restaurant-name">{restaurant.name}</div>
              <div>
                <img
                  className="arrow-icon"
                  src="./Image/Arrow.png"
                  alt="Arrow"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
