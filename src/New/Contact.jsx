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
            <p>00000000000000</p>
            <img
              className="contact-icon"
              src="../Im/call.png"
              alt="Call Icon"
            />
          </div>
          <div className="contact-item">
            <p>00000000000000</p>
            <img
              className="contact-icon"
              src="../Im/call.png"
              alt="Call Icon"
            />
          </div>
          <div className="contact-item">
            <p>00000000000000</p>
            <img
              className="contact-icon"
              src="../Im/call.png"
              alt="Call Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
