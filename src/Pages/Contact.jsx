import React from 'react'
import "../Style/Contact.css";
import Email from "../assets/social/email.svg";
import Linkedin from "../assets/social/linkedin-1.svg";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact">
        <h1>Get in Touch</h1>
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-option">
              <a href="mailto:himanibabariya@gmail.com" target='_blank'>
                <img src={Email} alt="" />
                <p>Email me</p>
                <p>himanibabariya@gmail.com</p>
              </a>
            </div>
            <div className="contact-option">
              <a href="https://www.linkedin.com/in/himanibabariya/" target='_blank'>
                <img src={Linkedin} alt="" />
                <p>Message me</p>
                <p>linkedin.com/himanibabariya</p>
              </a>
            </div>
          </div>
          <div className="contact-right">
            {/* <h2>Email Me 🚀</h2> */}
            <form action="">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <textarea name="" id="" cols="30" rows="4" placeholder="Message"></textarea>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
