import React from 'react';
import "./Styl.css";

const Policy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: 10th June 2024</p>
      <p>
        At QRapid, we value your privacy and are committed to protecting your personal information.
        This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you
        use our services via our website, mobile application, and physical interactions at partner
        restaurants. By accessing or using our services, you agree to the collection and use of your
        information in accordance with this policy.
      </p>
      <h2>1. Information We Collect</h2>
      <h3>1.1 Personal Information:</h3>
      <ul>
        <li>Contact Details: Name, email address, phone number.</li>
        <li>Account Details: Username, password.</li>
        <li>Payment Information: Credit card details, billing address.</li>
        <li>Restaurant Interaction: Orders placed, loyalty points, feedback.</li>
      </ul>
      <h3>1.2 Non-Personal Information:</h3>
      <ul>
        <li>Usage Data: Browser type, device type, pages visited, time spent on pages, and other diagnostic data.</li>
        <li>Cookies and Tracking Technologies: We use cookies, beacons, tags, and scripts to collect and track information and to improve and analyze our services.</li>
      </ul>
      <h2>2. How We Use Your Information</h2>
      <h3>2.1 To Provide and Maintain Services:</h3>
      <ul>
        <li>Process orders and payments.</li>
        <li>Manage loyalty points and rewards.</li>
        <li>Provide customer support.</li>
      </ul>
      <h3>2.2 To Improve Our Services:</h3>
      <ul>
        <li>Analyze usage to improve website/app performance.</li>
        <li>Personalize user experience based on preferences and interactions.</li>
      </ul>
      <h3>2.3 Communication:</h3>
      <ul>
        <li>Send updates, newsletters, promotional materials, and other information.</li>
        <li>Notify you about changes to our services.</li>
      </ul>
      <h3>2.4 Legal and Security Purposes:</h3>
      <ul>
        <li>Comply with legal obligations and protect our rights.</li>
        <li>Detect, prevent, and address technical issues and fraud.</li>
      </ul>
      <h2>3. Information Sharing and Disclosure</h2>
      <h3>3.1 With Service Providers:</h3>
      <p>
        We may share your information with third-party vendors who perform services on our behalf,
        such as payment processing, data analysis, email delivery, and customer service.
      </p>
      <h3>3.2 For Business Transfers:</h3>
      <p>
        In the event of a merger, acquisition, or asset sale, your information may be transferred. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
      </p>
      <h3>3.3 Legal Requirements:</h3>
      <p>
        We may disclose your information if required by law or in response to valid requests by public authorities.
      </p>
      <h2>4. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, use, alteration, and disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
      </p>
      <h2>5. Your Data Protection Rights</h2>
      <h3>5.1 Access and Correction:</h3>
      <p>You have the right to access, update, or correct your personal information.</p>
      <h3>5.2 Deletion:</h3>
      <p>You can request the deletion of your personal data, subject to certain exceptions.</p>
      <h3>5.3 Objection and Restriction:</h3>
      <p>You may object to or request the restriction of processing your personal information.</p>
      <h3>5.4 Data Portability:</h3>
      <p>You have the right to receive a copy of your personal data in a structured, commonly used, and machine-readable format.</p>
      <h2>6. Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and app. You are advised to review this Privacy Policy periodically for any changes.
      </p>
      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
        <br /> QRapid: Mumbai <br /> Email: contact@qrapid.io <br /> Phone: 9137997312
      </p>
    </div>
  );
};

export default Policy;
