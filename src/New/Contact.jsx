import React from "react";
import "./Styl.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <p className="contact-title">Contact Us</p>
          <p className="contact-description">
            Please feel free to contact us with any questions, comments, or
            collaborations.
          </p>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <p>9137997312</p>
            <img
              className="contact-icon"
              src="../Im/call.png"
              alt="Call Icon"
            />
          </div>
          <div className="contact-item">
            <p>contact@qrapid.io</p>
            <img
              className="contact-icon"
              src="../Im/email.png"
              alt="Call Icon"
            />
          </div>
          <div className="contact-item">
            <p>Mumbai</p>
            <img
              className="contact-icon"
              src="../../public/Im/gps.png"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
