import React, { useEffect } from 'react';
import styled from 'styled-components';
import Icon2 from '../../images/Contact.svg';
import Icon3 from '../../images/CarSit.svg';
import Icon1 from '../../images/Car.svg';
import { Button } from '../Button/ButtonElements';
import {
  ValueCard,
  ValueContainer,
  ValueH1,
  ValueH2,
  ValueIcon,
  ValueP,
  ValueWrapper,
  ButtonWrap,
  BenefitWrap,
  StockWrap,
  More,
  Cars,
  ValueContainer3,
} from './ValueElements';
import Footer from '../Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Italic = styled.span`
  font-style: italic;
`;

const Plan2 = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <ValueContainer3 id="services">
      <ValueH1 data-aos="fade">Interested?</ValueH1>
      <ValueWrapper>
        <ValueCard data-aos="fade-left">
          <ValueIcon src={Icon2} />
          <ValueH2>1. Contact us</ValueH2>
          <ValueP>
            Contact us directly using the information on our contact section.
          </ValueP>
        </ValueCard>
        <ValueCard data-aos="fade-down">
          <ValueIcon src={Icon3} />
          <ValueH2>2. Enjoy the process</ValueH2>
          <ValueP>
            We will work with you to find the car you've been looking for, or
            better !
          </ValueP>
        </ValueCard>
        <ValueCard data-aos="fade-right">
          <ValueIcon src={Icon1} />
          <ValueH2>3. Step into your dream car</ValueH2>
          <ValueP>
            Pick up your car or have it delivered right to your doorstep !
          </ValueP>
        </ValueCard>
      </ValueWrapper>
      <ButtonWrap>
        <Button primary="true" dark="true" to="/contact">
          Contact us
        </Button>
      </ButtonWrap>
    </ValueContainer3>
  );
};

export default Plan2;
