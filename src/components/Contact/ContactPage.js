import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-intro">We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.</p>

      {/* Contact Form */}
      <form className="contact-form" action="https://formspree.io/f/xeooveyl" method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
