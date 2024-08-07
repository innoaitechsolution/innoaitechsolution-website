import React, { useRef } from 'react';
import './contact.css';
import XIcon from '../../assets/x.png';
import LinkedInIcon from '../../assets/linkedIn.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sgazfwc', 'template_edkezw9', form.current, {
        publicKey: 'e55t0YsBnsn57QEwf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset(); 
          alert('Email Sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
           <h1 className="contactPageTitle">Our Clients</h1>
           <span className="clientsDesc">
           We pride ourselves on our diverse clientele, spanning across various industries, and our commitment to providing personalized and innovative solutions tailored to their unique needs.
           </span>        
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Us!</h1>
        <span className="contactDesc"> Unlock your potential. Let's explore opportunities together. Share your journey with us!</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder='Your Name' name='your_name'/>
              <input type="email" className="email" placeholder='Your Email' name='your_email'/>
              <textarea className='msg' name="message"rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value='Send' className="submitBtn">Submit</button>
              <div className="links"> 
              <a href="https://www.linkedin.com/company/100811930/admin">
  <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
</a>
<a href="https://twitter.com/innoai_tech">
  <img src={XIcon} alt="X" className="social-icon" /></a>    
                   
              </div>        
       </form>
      </div>

    </section> 
    
  );
}

export default Contact;
