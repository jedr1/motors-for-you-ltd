import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #fff;
  //background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
  background: #000;
  width: 100%;
  padding: 100px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
const ExplanCard = styled.div`
  background: transparent;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 1000px;
  padding: 30px;
  margin-left: 20%;
  margin-right: 20%;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;
const ExplanText = styled.div``;

const Explanatory = () => {
  return (
    <Container>
      <ExplanCard>
        <ExplanText>
          At Motors For You, we know you are the kind of people who want to be
          treated as people rather than customers. In order to be that way you
          need to find a car dealership who doesn't upsell or pressure you into
          buying only the cars they have in stock. The problem is most car
          dealerships are numbers driven and their only objective is to sell as
          many cars as possible, which makes you feel as though you are being
          treated as a sale. We understand the importance of buying the right
          car. That's why we pride ourselves on going the extra mile to find the
          perfect car for you. Here's how it works: 1. Contact Duncan either
          directly or by leaving your email on the website. 2. He will listen to
          your needs and will strive to find the perfect car for you. 3. Once
          you've made the decision we will deliver the car right to your
          doorstep! So get in touch so you can stop worrying about being taken
          advantage of by car dealers and look forward to finding your next car!
        </ExplanText>
      </ExplanCard>
    </Container>
  );
};

export default Explanatory;
