import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/ButtonElements.js';

import './Footer.css';
import Logo from '../../images/Logo.PNG';
import styled from 'styled-components';
import Proof from './Proof.js';

const Img = styled.img`
  height: 110px;
  width: 100%;
  @media screen and (max-width: 500px) {
    display: none;
  }
  //z-index: 99;
`;

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        {/* <img className="logo" src={Logo} alt="" />
        <Img src={Logo} /> */}
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h4>About us</h4>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/benefits">Benefits</Link>
          </div>
          <div className="footer-link-items">
            <h4>Contact us</h4>
            <Link to="/contact">How to get in touch</Link>
            <Link to="/contact">Drop your email</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h4>Social media</h4>
            <a
              href="https://www.instagram.com/ltdmotorsforyou/"
              alt="instagram"
            >
              Instagram
            </a>
            <a href="https://www.facebook.com/MotorsForYouLtd/" alt="facebook">
              Facebook
            </a>
            <a href="https://twitter.com/motorsforyoultd" alt="twitter">
              Twitter
            </a>
          </div>
          <div className="footer-link-items">
            <h4>View Cars</h4>
            <Link to="/latest-stock">Latest Stock</Link>
          </div>
          <div className="social-icons">
            <div
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <a
                href="https://www.instagram.com/ltdmotorsforyou/"
                alt="instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <div className="social-icon-link">
              <a href="https://twitter.com/motorsforyoultd" alt="twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div className="social-icon-link">
              <a
                href="https://www.facebook.com/MotorsForYouLtd/"
                alt="facebook"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Proof /> */}
    </div>
  );
}

export default Footer;
