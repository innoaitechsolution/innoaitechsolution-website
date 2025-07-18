import React from "react";
import "./ServicesPage.css";
import { FaMobileAlt } from "react-icons/fa";

const ServicesPage = () => {
  return (
    <div className="services-page">      
      <header className="services-header">
        <h1>Your Idea,</h1>
        <span className="highlight">Ready in 4 Weeks</span>
        <p>
          Turn your app idea into reality in just 4 weeks with sleek, 
        </p> 
        <p>
          user-friendly mobile solutions designed to accelerate your business growth.        
        </p>
      </header>
      
      <section className="features">
        <div className="feature-item">
          <FaMobileAlt className="feature-icon" />
          <h3>Accelerated MVP Development</h3>
          <p>Deliver your app idea to market faster without compromising on quality, using our agile development process.</p>
        </div>
        <div className="feature-item">
          <FaMobileAlt className="feature-icon" />
          <h3>Tailored and Engaging UI/UX</h3>
          <p>Elevate your app with designs that are not only visually captivating but also aligned with your audience's needs.</p>
        </div>
        <div className="feature-item">
          <FaMobileAlt className="feature-icon" />
          <h3>Reliable Post-Launch Support</h3>
          <p>Your journey doesn’t end at launch. We offer support and maintenance to ensure your app stays secure, optimized, and aligned with your goals.</p>
        </div>
      </section>
      
      <section className="pricing">
        <div className="pricing-plan">
          <h2>Standard</h2>
          <p>Get your mobile app in 4 weeks.</p>
          <h3>£5,750</h3>
          <ul>
            <li><span className="check-icon">✓</span> MVP delivered within 4 weeks</li>
            <li><span className="check-icon">✓</span> Modern and user-friendly UI/UX design for a seamless experience</li>
            <li><span className="check-icon">✓</span> Scalable cloud-based backend</li>
            <li><span className="check-icon">✓</span> Weekly updated test versions</li>
            <li><span className="check-icon">✓</span> Deployment-ready for both iOS & Android app stores</li>
            <li><span className="check-icon">✓</span> Advanced analytics and real-time notifications</li>
            <li><span className="check-icon">✓</span> Regular progress updates to ensure transparency</li>  
          </ul>
          <button
            className="pricing-button"
            onClick={() => window.open("https://calendly.com/arzucaner", "_blank")}
          >
            Book a Call
          </button>
        </div>
        <div className="pricing-plan pro">
          <h2>Pro</h2>
          <p>Get your mobile app in 4 weeks with extras.</p>
          <h3>£8,750</h3>
          <ul>
            <li><span className="check-icon">✓</span> Includes everything from the Standard Plan</li>
            <li><span className="check-icon">✓</span> Enhanced UI/UX design for a premium and engaging experience</li>
            <li><span className="check-icon">✓</span> Custom backend solutions tailored to your needs</li>
            <li><span className="check-icon">✓</span> Seamless in-app purchase integration for monetization</li>
            <li><span className="check-icon">✓</span> Localized user experience</li>
            <li><span className="check-icon">✓</span> 1-week post-launch monitoring and performance optimization</li>
            <li><span className="check-icon">✓</span> Dedicated customer support for troubleshooting and guidance</li>
          </ul>
          <button
            className="pricing-button"
            onClick={() => window.open("https://calendly.com/arzucaner", "_blank")}
          >
            Book a Call
          </button>
        </div>
      </section>
      {/* Back to Home Button Only */}
      <div className="webdev-backhome-btnonly">
        <a href="/" className="webdev-backhome-btnonly-link">← Back to Home</a>
      </div>
    </div>
  );
};

export default ServicesPage;

