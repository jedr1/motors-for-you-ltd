import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { Button } from '../Button/ButtonElements';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_zfe3grh',
        'template_bnnxc9n',
        form.current,
        'WagdLhtLdSqEJBjF0'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <div className="contact">
        <div className="contact-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form --card">
            <div className="contact-input-items">
              <p className="contact-input-header">Name:</p>
              <input
                type="text"
                className="input-box"
                placeholder="Full Name"
                name="user_name"
                required
              />
            </div>
            <div className="contact-input-items">
              <p className="contact-input-header">Email:</p>
              <input
                className="input-box"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>
            <div className="contact-input-items">
              <p className="contact-input-header">Subject:</p>
              <input
                className="input-box"
                type="text"
                placeholder="Car you're interested in"
                name="subject"
                required
              />
            </div>
            <div className="contact-input-items">
              <p className="contact-input-header">Message:</p>
              <textarea
                className="input-box"
                placeholder="Message (include phone number)"
                name="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="contact-input-items">
              <div className="contact-btn">
                {' '}
                <Button
                  className="contact-btn"
                  primary="true"
                  dark="true"
                  type="submit"
                >
                  {' '}
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
