import styled from 'styled-components';

export const ValueContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(237, 237, 237);

  @media screen and (max-width: 768px) {
    height: 260vh;
  }
  @media screen and (max-width: 480px) {
    height: 240vh;
  }
  @media screen and (max-width: 400px) {
    height: 240vh;
  }
  @media screen and (max-width: 380px) {
    height: 280vh;
  }
`;

export const ValueWrapper = styled.div`
  // max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ValueCard = styled.div`
  background: #fff;
  display: flex;
  color: #000;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 575px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 600px) {
    height: 705px;
    padding: 10px;
  }
`;

export const ValueIcon = styled.img`
  height: 200px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ValueH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 64px;
  padding: 32px;
  margin-top: 10%;

  @media screen and (max-width: 768px) {
    margin-top: -20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: -20%;
    padding-top: 0px;
  }
`;

export const ValueH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 400;
  text-align: center;
`;

export const ValueP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ButtonWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20%;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 500px;
  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 75px;
  }
`;
export const BenefitWrap = styled.div``;
export const StockWrap = styled.div``;
export const More = styled.div`
  font-size: 1.2rem;

  padding-bottom: 24px;
`;
export const Cars = styled.div`
  font-size: 1.2rem;

  padding-bottom: 24px;
`;
