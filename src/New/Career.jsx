import React from 'react';
import './Styl.css';

const Career = () => {
  return (
    <div className="career-container">
      <h1>Careers at QRapid</h1>
      <h2>Join Our Team</h2>
      <p className="intro-text">
        🚀 Embark on an exciting journey with QRapid, where we’re redefining the dining experience
        through cutting-edge technology. If you’re passionate about innovation and eager to make a
        difference, we want you on our team!
      </p>
      <h2>Why Work With Us?</h2>
      <ul className="benefits-list">
        <li><strong>Innovative Environment:</strong> Be part of a forward-thinking team that’s shaping the future of the restaurant industry.</li>
        <li><strong>Growth Opportunities:</strong> We offer extensive opportunities for professional growth and advancement in a dynamic and evolving field.</li>
        <li><strong>Collaborative Culture:</strong> Join a supportive and inclusive work environment where your ideas are valued, and collaboration is key.</li>
      </ul>
      <h2>Current Openings</h2>
      <div className="job-opening">
        <h3>Cloud and IoT Freelancer</h3>
        <p><strong>Location:</strong> Mumbai</p>
        <p><strong>Responsibilities:</strong> Design and implement cloud and IoT solutions for our restaurant platform, manage cloud infrastructure.</p>
      </div>
      <div className="job-opening">
        <h3>Social Media Content Creator</h3>
        <p><strong>Location:</strong> Mumbai</p>
        <p><strong>Responsibilities:</strong> Create engaging content for our social media platforms, including graphics, videos, and written posts. Collaborate with the marketing team to develop content strategies and campaigns. Be the social face of our company.</p>
      </div>
      <div className="job-opening">
        <h3>Join Our Sales Team!</h3>
        <p><strong>Location:</strong> Mumbai</p>
        <p><strong>Responsibilities:</strong> Onboarding restaurant partners to use QRapid.</p>
      </div>
      <p className="application-instruction">
        Interested candidates, please send your resume to <a href="mailto:contact@qrapid.io">contact@qrapid.io</a>. Let’s create memorable dining experiences together!
      </p>
    </div>
  );
};

export default Career;
