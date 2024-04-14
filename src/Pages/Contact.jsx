import React, { useRef, useState } from 'react';
import "../Style/Contact.css";
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, 
      {
      publicKey: import.meta.env.VITE_USER_ID,
    })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true);

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <section id="contact" className="contact">
        <h1>Get in Touch</h1>

        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-option">
              <a href="mailto:himanibabariya@gmail.com" target='_blank'>
                <i className="fa-solid fa-envelope"></i>
                <p>Email me</p>
                <p>himanibabariya@gmail.com</p>
              </a>
            </div>
            <div className="contact-option">
              <a href="https://www.linkedin.com/in/himanibabariya/" target='_blank'>
                <i className="fa-brands fa-linkedin"></i>
                <p>Message me</p>
                <p>linkedin.com/himanibabariya</p>
              </a>
            </div>
          </div>
          <div className="contact-right">

            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder='Name' />
              <label>Email</label>
              <input type="email" name="user_email" placeholder='Email' />
              <label>Message</label>
              <textarea name="message" placeholder='Message' />
              <input type="submit" value="Send" />
            
              {messageSent && <p className='message-sent'> Message Sent!</p>}

            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
