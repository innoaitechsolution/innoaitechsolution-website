import React from "react";
import "./footer.css";
import { FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>InnoAl Tech Solution</h3>
        <p>© 2024 InnoAl Tech Solution. All Rights Reserved.</p>
        <a href="/privacy-policy" className="footer-link">
          Privacy Policy
        </a>
      </div>

      <div className="footer-links">
        <h4 className="footer-section-title">Quick Links</h4>
        <ul>
          <li>
            <a href="/" className="footer-link">Home</a>
          </li>
          <li>
            <a href="/services" className="footer-link">Services</a>
          </li>
          <li>
            <a href="/products" className="footer-link">Products</a>
          </li>
          <li>
            <a href="/blog" className="footer-link">Blog</a>
          </li>
          <li>
            <a href="/contact" className="footer-link">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-socials">
        <h4 className="footer-section-title">Follow Us</h4>
        <div className="social-icons">          
          <a href="https://www.linkedin.com/company/innoai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
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



