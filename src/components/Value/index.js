import React from 'react';
import './Testimonial.css';

import { Button } from '../Button/ButtonElements';

import {
  ValueCard,
  ValueContainer,
  ValueH1,
  ValueWrapper,
  Quote,
  QuoteHeader,
  ButtonWrap,
  ButtonHeader,
} from './ValueElements';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';

const TestimonialsHome = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <ValueContainer id="services">
      <ValueH1>What people are saying about us:</ValueH1>
      <ValueWrapper>
        <Link to="/testimonials">
          <ValueCard data-aos="fade-right">
            <Quote>
              <i class="fa-solid fa-quote-left"></i>
            </Quote>
            <QuoteHeader>
              To experience such a relaxed and non pressurised approach is a
              pleasure to see.
            </QuoteHeader>
            <div>-Andy and Sandra Barron</div>
          </ValueCard>
        </Link>
        <Link to="/testimonials">
          <ValueCard>
            <Quote>
              <i class="fa-solid fa-quote-left"></i>
            </Quote>
            <QuoteHeader>
              The initial consultation was easy, friendly but more importantly,
              I felt he listened to what I wanted. To my amazement he found the
              car of my dreams in six days.
            </QuoteHeader>
            <div>-Miss Deborah Parr</div>
          </ValueCard>
        </Link>
        <Link to="/testimonials">
          <ValueCard data-aos="fade-left">
            <Quote>
              <i class="fa-solid fa-quote-left"></i>
            </Quote>
            <QuoteHeader>
              No matter what budget Motors For You not only go the extra mile
              but a further ten or so on top.
            </QuoteHeader>
            <div>-Miss L Gold</div>
          </ValueCard>
        </Link>
      </ValueWrapper>
      <ButtonHeader>
        Find out why people <span className="grad-text"> love </span>Motors For
        You Ltd:
      </ButtonHeader>
      <ButtonWrap>
        <Button primary="true" dark="true" to="/testimonials">
          Testimonials
        </Button>
      </ButtonWrap>
    </ValueContainer>
  );
};

export default TestimonialsHome;
