import React from "react";
import "./ServicesPage.css";
import { FaLaptopCode, FaMobileAlt, FaDatabase } from "react-icons/fa";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>We deliver innovative and tailored solutions to meet your business needs.</p>
      </header>

      <section className="services-list">
        <div className="service-item">
          <FaLaptopCode className="service-icon" />
          <h2>Web Development</h2>
          <p>
            We create customized and responsive websites to meet your business requirements, ensuring a seamless user experience.
          </p>
        </div>

        <div className="service-item">
          <FaMobileAlt className="service-icon" />
          <h2>Mobile App Development</h2>
          <p>
            Our team designs and develops user-friendly mobile applications, helping you reach customers on all platforms.
          </p>
        </div>

        <div className="service-item">
          <FaDatabase className="service-icon" />
          <h2>Database Development</h2>
          <p>
            We offer scalable and secure database solutions that enhance your data management and optimize performance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
