import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { Button } from '../Button/ButtonElements';
import styled from 'styled-components';

const Btn = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  //min-width: 50px;
  max-width: 250px;
  transition: 300ms ease-in-out;
  background: rgb(178, 12, 78);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #071023;
    cursor: pointer;
  }
`;

const Contact2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z511cjq',
        'template_jh4os1a',
        form.current,
        'i3BtttRuNhmo2u7ru'
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
    <>
      <section className="sec">
        <div className="contact1">
          <h2 className="contact-sub-header1">LOCATE-A-CAR</h2>
          <div className="contact-container1">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form --card"
            >
              <div className="contact-input-items1">
                <p className="contact-input-header1">Name:</p>
                <input
                  type="text"
                  className="input-box1"
                  placeholder="Full Name"
                  name="user_name"
                  required
                />
              </div>
              <div className="contact-input-items1">
                <p className="contact-input-header1">Email:</p>
                <input
                  className="input-box1"
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  required
                />
              </div>
              <div className="contact-input-items1">
                <p className="contact-input-header1">Phone Number:</p>
                <input
                  className="input-box1"
                  type="email"
                  placeholder="Phone Number (optional)"
                  name="user_phone"
                />
              </div>
              <div className="contact-input-items1">
                <p className="contact-input-header1">Subject:</p>
                <input
                  className="input-box1"
                  type="text"
                  placeholder="Subject"
                  name="user_subject"
                  required
                />
              </div>
              <div className="contact-input-items1">
                <p className="contact-input-header1">Message:</p>
                <textarea
                  className="input-box2"
                  placeholder="Brief description of your ideal car"
                  name="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="contact-input-items1">
                <div className="contact-btn1">
                  {' '}
                  <Btn
                    className="contact-btn1"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    type="submit"
                  >
                    {' '}
                    Submit
                  </Btn>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact2;
