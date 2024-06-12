import React from "react";
import "../New/Styl.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="header-container">
        <div className="logo-text-container">
          <img
            className="logo-image"
            src="../../Image/black.png"
            alt="QRapid Logo"
          />
          <div className="logo-text">QRapid</div>
        </div>
        <ul className="nav-links-new">
          <li className="nav-item-new">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item-new">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item-new">
            <Link style={{ textDecoration: "none", color: "black" }} to="">
              How it works
            </Link>
          </li>
          <li className="highlighted-link-new">
            <Link style={{ textDecoration: "none", color: "black" }} to="/demo">
              For Creators
            </Link>
          </li>
        </ul>
      </div>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to QRapid, a forward-thinking digital solution dedicated to
          transforming the dining experience. We are passionate about leveraging
          technology to enhance restaurant operations, making them smoother,
          faster, and more efficient with our ecosystem. Our journey began with
          a simple yet powerful idea: to revolutionize the way people order food
          and interact with restaurants.
        </p>
        <h2>Our Story</h2>
        <p>
          QRapid was founded by a group of friends who shared a love for good
          food and a keen interest in technology. We often found ourselves
          discussing the inefficiencies we observed in restaurants—long waiting
          times, order errors, and the hassle of manual billing. We realized
          there had to be a better way, one that could benefit both restaurants
          and their customers.
        </p>
        <p>
          Our co-founders, Ashish, Vipul, and Rajat, combined their expertise in
          technology, business, and customer experience to create a solution
          that addresses these pain points.
        </p>
        <h2>What We Do</h2>
        <p>
          At QRapid, we provide an innovative digital menu and order management
          system designed to streamline restaurant operations. Our platform
          allows customers to scan a QR code at their table, access the digital
          menu, place orders directly from their smartphones, and earn loyalty
          points with every purchase. This seamless process not only enhances
          the dining experience but also improves operational efficiency for
          restaurants.
        </p>
        <p>
          We understand that every restaurant has unique needs. That's why we
          offer tailored solutions:
        </p>
        <ul>
          <li>
            <strong>Basic Package:</strong> Ideal for restaurants looking to
            reduce manual order entry. Orders placed via QR code are displayed
            on a dashboard for the cashier to print the KOT and bill with a
            single click.
          </li>
          <li>
            <strong>Pro Package:</strong> Utilizes existing PCs and a wired KOT
            system, balancing cost and efficiency.
          </li>
          <li>
            <strong>Premium Package:</strong> Features dual wireless KOT systems
            for the fastest and most efficient order processing.
          </li>
        </ul>
        <h2>Our Mission</h2>
        <p>
          To enhance the dining experience and operational efficiency of
          restaurants through innovative digital solutions. We are building an
          ecosystem that benefits both users and restaurants, driving customer
          engagement and retention while increasing restaurant revenue.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision a world where dining out is a seamless, enjoyable
          experience for everyone. By integrating cutting-edge technology into
          the restaurant industry, we aim to eliminate the common frustrations
          of dining out and create a harmonious environment where customers and
          restaurants thrive.
        </p>
        <h2>Our Commitment</h2>
        <ul>
          <li>
            <strong>Innovation:</strong> We continuously strive to innovate and
            improve our platform, ensuring we stay ahead of the curve in the
            ever-evolving tech landscape.
          </li>
          <li>
            <strong>Dual-Centric:</strong> Our solutions are designed with both
            users and restaurants in mind, providing a hassle-free and rewarding
            experience for both diners and restaurant staff.
          </li>
          <li>
            <strong>Quality:</strong> We prioritize quality in everything we do,
            from the robustness of our software to the support we provide our
            clients.
          </li>
        </ul>
        <h2>Join Us on This Journey</h2>
        <p>
          We invite you to join us on this exciting journey. Whether you're a
          restaurant owner looking to streamline your operations or a diner
          seeking a more enjoyable dining experience, QRapid has something for
          you. Together, we can transform the restaurant industry, making it
          more efficient, enjoyable, and rewarding for everyone involved.
        </p>
        <p>
          Thank you for being part of the QRapid family. We look forward to
          serving you.
        </p>
      </div>
    </div>
  );
};

export default About;
