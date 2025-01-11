import React from "react";
import "./HomePage.css";
import { FaLaptopCode, FaMobileAlt, FaDatabase } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>InnoAl Tech Solution</h1>
        <p>Transforming Your Ideas into Innovative Digital Solutions</p>
        {/* Butonu değiştirdik */}
        <button className="cta-button">Unlock the Future</button>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <FaLaptopCode className="service-icon" />
            <h3>Web Development</h3>
            <p>Custom web solutions tailored to your business needs.</p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h3>Mobile App Development</h3>
            <p>Innovative and user-friendly mobile applications.</p>
          </div>
          <div className="service-card">
            <FaDatabase className="service-icon" />
            <h3>Database Development</h3>
            <p>Efficient and scalable database solutions.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Our Digital Products</h2>
        <div className="product-list">
          <div className="product-item">
            <h3>AI Tools</h3>
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

