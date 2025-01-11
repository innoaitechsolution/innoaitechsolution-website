import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy-container">
        <h1 className="privacy-policy-title">Privacy Policy</h1>
        <p className="privacy-policy-intro">
          At InnoAl Tech Solution, we respect your privacy and are committed to protecting it through our compliance with this policy.
        </p>

        <div className="privacy-policy-section">
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information, such as your name, email address, and any other details you provide to us voluntarily.
          </p>
        </div>

        <div className="privacy-policy-section">
          <h2>How We Use Your Information</h2>
          <p>
            The information we collect is used to respond to inquiries, improve our services, and communicate with you about updates.
          </p>
        </div>

        <div className="privacy-policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our privacy practices, please contact us at{" "}
            <a href="mailto:innoaltechsolution@gmail.com" className="contact-link">
              innoaltechsolution@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

