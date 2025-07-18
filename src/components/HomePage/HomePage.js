import React from "react";
import "./HomePage.css";
import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>InnoAl Tech Solution</h1>
        <p>Transforming Your Ideas into Innovative Digital Solutions</p>
        <Link to="/services">
        <button className="cta-button">Unlock the Future</button>
        </Link>        
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card expanded-card">
            <FaMobileAlt className="service-icon" />
            <h3>Mobile App Development</h3>
            <p>
              We build seamless, high-quality mobile apps.
            </p>
            <p>
              iOS, Android, or both — we've got you covered.
            </p>
            <Link to="/services" className="learn-more-button">
              Learn More
            </Link>
          </div>
          <div className="service-card expanded-card">
            <FaLaptopCode className="service-icon" />
            <h3>Web Development</h3>
            <p>
              We build fast, responsive websites and web apps tailored to your business.
            </p>
            <p>
              From landing pages to platforms — secure, scalable, and efficient.
            </p>
            <Link to="/web-development" className="learn-more-button">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Our Digital Products</h2>
        <div className="product-list">
          <div className="product-item">
            <h3>AI Products</h3>
            <p>Innovative solutions powered by artificial intelligence.</p>
          </div>
          <div className="product-item">
            <h3>Mobile Apps</h3>
            <p>Available on Google Play and App Store.</p>
          </div>
          <div className="product-item">
            <h3>Custom Templates</h3>
            <p>Ready-to-use templates for your business.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

