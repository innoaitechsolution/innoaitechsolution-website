import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaLinkedin, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>InnoAl Tech Solution</h3>
        <p>© 2024 InnoAl Tech Solution. All Rights Reserved.</p>
        <div className="footer-legal-links">
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms" className="footer-link">
            Terms of Use
          </Link>
          <Link to="/account-deletion" className="footer-link">
            Account Deletion
          </Link>
        </div>
      </div>

      <div className="footer-links">
        <h4 className="footer-section-title">Quick Links</h4>
        <ul>
          <li>
            <Link to="/" className="footer-link">Home</Link>
          </li>
          <li>
            <Link to="/services" className="footer-link">Services</Link>
          </li>
          <li>
            <Link to="/products" className="footer-link">Products</Link>
          </li>
          <li>
            <Link to="/blog" className="footer-link">Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="footer-socials">
        <h4 className="footer-section-title">Follow Us</h4>
        <div className="social-icons">          
          <a href="https://www.linkedin.com/company/innoai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://x.com/innoai_ts" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/@innoaitechsolution" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.tiktok.com/@innoaitechsolution" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



