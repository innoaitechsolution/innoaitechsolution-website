import React from "react";
import "./ServicesPage.css";
import { FaFigma, FaWordpressSimple, FaCode } from "react-icons/fa";

const WebDevelopmentPage = () => {
  return (
    <div className="webdev-page">
      {/* Hero Section */}
      <section className="webdev-hero">
        <h1>Your Website, Ready in Just 1 Week</h1>
        <p className="webdev-hero-subtitle">
          Choose the best platform for your business — fast, modern, and scalable solutions.
        </p>
      </section>

      {/* Services Grid */}
      <section className="webdev-services">
        <div className="webdev-services-grid">
          <div className="webdev-service-card">
            <FaFigma className="webdev-service-icon" />
            <h3>Framer</h3>
            <p>Modern, clean, ultra-fast websites</p>
            <div className="webdev-service-details">Built with Framer</div>
            <div className="webdev-service-details">Delivery: 3–5 Days</div>
            <div className="webdev-service-price">From £450</div>
            <a href="https://calendly.com/arzucaner" target="_blank" rel="noopener noreferrer" className="pricing-button webdev-call-btn">Book a Call</a>
          </div>
          <div className="webdev-service-card">
            <FaWordpressSimple className="webdev-service-icon" />
            <h3>WordPress</h3>
            <p>Content-rich, SEO-friendly sites</p>
            <div className="webdev-service-details">Built with WordPress</div>
            <div className="webdev-service-details">Delivery: 1 Week</div>
            <div className="webdev-service-price">From £600</div>
            <a href="https://calendly.com/arzucaner" target="_blank" rel="noopener noreferrer" className="pricing-button webdev-call-btn">Book a Call</a>
          </div>
          <div className="webdev-service-card">
            <FaCode className="webdev-service-icon" />
            <h3>Custom Code</h3>
            <p>Tailored solutions (SaaS, platforms)</p>
            <div className="webdev-service-details">Built with React, Next.js, Vue/Nuxt</div>
            <div className="webdev-service-details">Delivery: 2–3 Weeks</div>
            <div className="webdev-service-price">From £1200+</div>
            <a href="https://calendly.com/arzucaner" target="_blank" rel="noopener noreferrer" className="pricing-button webdev-call-btn">Book a Call</a>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="webdev-why">
        <h2>Why Work With Us?</h2>
        <ul className="webdev-why-list">
          <li>Fast turnaround</li>
          <li>Clean UI/UX</li>
          <li>SEO optimized</li>
          <li>Mobile-first</li>
          <li>Optional support</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="webdev-cta">
        <h2>Let’s Build Your Website</h2>
        <p>Contact us today and launch your online presence in just one week.</p>
        <a href="/contact" className="webdev-cta-button">Start Now</a>
      </section>

      {/* Back to Home Button Only */}
      <div className="webdev-backhome-btnonly">
        <a href="/" className="webdev-backhome-btnonly-link">← Back to Home</a>
      </div>
    </div>
  );
};

export default WebDevelopmentPage; 