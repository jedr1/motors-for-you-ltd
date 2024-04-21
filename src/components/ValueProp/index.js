import React from 'react';
import styled from 'styled-components';
import Icon2 from '../../images/Car.svg';
import Icon3 from '../../images/Card.svg';
import Icon1 from '../../images/CarRepair.svg';
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
} from './ValueElements';

const Italic = styled.span`
  font-style: italic;
`;

const ValueProp = () => {
  return (
    <ValueContainer id="services">
      <ValueH1>What you'll enjoy by working with Motors For You:</ValueH1>
      <ValueWrapper>
        <ValueCard>
          <ValueIcon src={Icon2} />
          <ValueH2>Nationwide Delivery</ValueH2>
          <ValueP>
            We can deliver your vehicle nationwide, or even further afield, at
            very competitive rates! Our professional drivers can deliver to your
            home or work at your convenience. This option saves you time and
            fuel costs and let’s somebody else take the strain ! It’s a nice
            feeling having your new car delivered to <Italic>YOU!</Italic> Ask
            for a quote today.
          </ValueP>
        </ValueCard>
        <ValueCard>
          <ValueIcon src={Icon3} />
          <ValueH2>Debit and Credit Cards</ValueH2>
          <ValueP>
            We have the facility to accept all major credit and debit cards.
            This is the safest way of arranging payment either in person or over
            the phone. It's simple and fast to use and secures your car with a
            holding deposit straight away! There is no waiting for a cheque or a
            bank transfer to clear and gets you ” on the road ” smoothly and
            quickly. Some fees may apply. Ask for details.
          </ValueP>
        </ValueCard>
        <ValueCard>
          <ValueIcon src={Icon1} />
          <ValueH2>Part Exchange and Finance Facilities</ValueH2>
          <ValueP>
            Most customers prefer the "no hassle" way of just exchanging cars,
            keys and documents and driving away in their new car! We offer
            accurate market value for any potential part exchange and always try
            to achieve the best value for our customers.
          </ValueP>
        </ValueCard>
      </ValueWrapper>
      <ButtonWrap>
        <BenefitWrap>
          <More>More benefits you'll enjoy:</More>
          <Button to="/benefits" primary="true" dark="true">
            Benefits
          </Button>
        </BenefitWrap>
        <StockWrap>
          <Cars>Check out our latest stock:</Cars>
          <Button to="/stock" primary="true" dark="true">
            Latest Stock
          </Button>
        </StockWrap>
      </ButtonWrap>
    </ValueContainer>
  );
};

export default ValueProp;
