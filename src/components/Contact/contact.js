import React, { useRef } from 'react';
import './contact.css';
import Microsoft from '../../assets/microsoft.png';
import YoutubeIcon from '../../assets/youtube.png';
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
            Lorem
           </span>
           <div className="clientImgs">
            <img src={Microsoft} alt="Client" className="clientImg" />

           </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Us</h1>
        <span className="contactDesc"> Unlock your potential. Let's explore opportunities together. Share your journey with us!</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder='Your Name' name='your_name'/>
              <input type="email" className="email" placeholder='Your Email' name='your_email'/>
              <textarea className='msg' name="message"rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value='Send' className="submitBtn">Submit</button>
              <div className="links">         
                <img src={LinkedInIcon} alt="LinkedIn" className="https://www.linkedin.com/company/100811930/admin" /> 
                <img src={XIcon} alt="X" className="https://twitter.com/innoai_tech" />  
                <img src={YoutubeIcon} alt="Youtube" className="https://www.youtube.com/@innoaitechsolution" />       
              </div>        
       </form>
      </div>

    </section> 
    
  );
}

export default Contact;
