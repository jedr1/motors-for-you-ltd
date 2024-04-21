import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: transparent;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 1000px;
  padding: 30px;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;
const Header = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-size: 2rem;
  font-family: 'Poppins';
  font-weight: 400;
`;
const P = styled.div`
  font-weight: 300;
`;
const Italic = styled.span`
  font-style: italic;
`;

const BenefitCard = () => {
  return (
    <>
      <Card>
        <Header>Part Exchange and Finance Facilities:</Header>
        <P>
          We will take your current vehicle in part exchange regardless of age,
          mileage and condition. We find most customers prefer the ” no hassle ”
          way of just exchanging cars, keys and documnets and driving away in
          their new car ! Most people don’t want the hassle and worry of trying
          to sell their car privately. We offer accurate market value for any
          potential part exchange and always try to achieve the best value for
          our customers. We also offer finance facilities to suit your needs
          and, more importantly, your budget. With a whole host of different
          finance optons open to you we can talk you through which maybe best
          for you and the benefits of each package. If you don’t know your HP
          from your PCP give us a call !!
        </P>
      </Card>
      <Card>
        <Header>Nationwide Delivery :</Header>
        <P>
          We can deliver your vehicle nationwide, or even further afield, at
          very competitive rates ! Our professional drivers can deliver to your
          home or work at your convenience. This option saves you time and fuel
          costs and let’s somebody else take the strain ! It’s a nice feeling
          having your new car delivered to<Italic>YOU!</Italic> Ask for a quote
          today.
        </P>
      </Card>
      <Card>
        <Header>H.P.I. :</Header>
        <P>
          Every vehicle we supply has been checked through H.P.I giving you
          peace of mind that your next car has not been previously ” written off
          ” by an insurance company, is not on the Stolen Register, is not
          subject to a Finance Agreement etc. This also checks that all the data
          held for the car matches with the data held at DVLA. We would never
          supply a car that is subject to any of the above conditions. Remember,
          a car advertised as ” Cat C ” doesn’t mean it has a catalyctic
          converter – it means it has been written off in the past and our
          advice would be to ” steer clear ” !!
        </P>
      </Card>

      <Card>
        <Header>Debit and Credit Cards :</Header>
        <P>
          We have the facility to accept all major debit and credit cards. This
          is the safest way of arranging payment either in person or over the
          ‘phone. It is simple and fast to use and secures your car with a
          holding deposit staright away ! There is no waiting for a cheque or a
          bank transfer to clear and gets you ” on the road ” smoothly and
          quickly. Some fees may apply. Ask for details.
        </P>
      </Card>
      <Card>
        <Header>Opening Times :</Header>
        <P>
          We are open 7 days a week from 8 a.m until 8 p.m. We recognise in
          todays workplace that it may not be convenient to visit us within in
          these times. To meet our customers demands we are flexible and can
          arrange a meeting before or after these opening tmes by prior
          appointment. We can also arrange a visit to your home or work which
          may be more convenient, again by prior appointment. Just ask – we aim
          to please !
        </P>
      </Card>
    </>
  );
};

export default BenefitCard;
