import styled from 'styled-components';

export const ValueContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(220, 220, 220);

  z-index: 1;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  /* @media screen and (max-height: 700px) {
    height: 110vh;
  }
  @media screen and (max-height: 650px) {
    height: 120vh;
  }
  @media screen and (max-height: 600px) {
    height: 130vh;
  }
  @media screen and (max-height: 570px) {
    height: 150vh;
  }
  @media screen and (max-height: 500px) {
    height: 170vh;
  }
  @media screen and (max-width: 1024px) {
    height: 220vh;
  }
  @media screen and (max-width: 480px) {
    height: 190vh;
  }
  @media screen and (max-width: 380px) {
    height: 230vh;
  } */
`;
export const ValueContainer3 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(220, 220, 220);

  z-index: 1;

  @media screen and (max-width: 1024px) {
    height: 220vh;
  }
  @media screen and (max-width: 480px) {
    height: 230vh;
  }
  @media screen and (max-width: 380px) {
    height: 250vh;
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
  position: relative;
  z-index: 1;

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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  max-width: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
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

  margin-top: 0%;

  @media screen and (max-width: 1024px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 00px;
  }
`;

export const ValueH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ValueP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ButtonWrap = styled.div`
  align-items: center;
  margin-top: 64px;
  // margin-bottom: 350px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 36px;
  }
`;
export const BenefitWrap = styled.div``;
export const StockWrap = styled.div``;
export const More = styled.div`
  font-size: 1.2rem;
  color: #fff;
  padding-bottom: 24px;
`;
export const Cars = styled.div`
  font-size: 1.2rem;
  color: #fff;
  padding-bottom: 24px;
`;
