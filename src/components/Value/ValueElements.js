import styled from 'styled-components';

export const ValueContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  background: rgba(150, 12, 78, 0.2);
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 35x;
`;
export const ValueContainer2 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  background: rgba(150, 12, 78, 0.2);
  width: 100%;

  @media screen and (max-width: 1024px) {
    height: 200vh;
  }
  @media screen and (max-width: 768px) {
    height: 180vh;
  }
  @media screen and (max-width: 600px) {
    height: 190vh;
  }
  @media screen and (max-width: 500px) {
    height: 190vh;
  }
  @media screen and (max-width: 380px) {
    height: 190vh;
  }
`;

export const ValueWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  padding-bottom: 20px;

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

  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-align: center;

  &:hover {
    // background: rgba(178, 12, 78, 0.2);
    box-shadow: 5px -5px 15px 0 rgba(178, 12, 78, 0.5),
      -5px 5px 15px 0 rgba(178, 12, 78, 0.5);
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    margin-left: 75px;
    margin-right: 75px;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    margin-left: 5%;
    margin-right: 5%;
    padding: 15px;

    text-align: left;
  }
`;

export const ValueIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ValueH1 = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 64px;
  padding-left: 25px;
  padding-right: 25px;
  // margin-top: 25%;
  color: #fff;
  @media screen and (max-width: 900px) {
    font-size: 3rem;
    width: 400px;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }
  /* @media screen and (max-width: 1024px) {
    margin-top: -20%;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 0%;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 400px) {
    //margin-top: 100px;
    margin-bottom: 50px;
  } */
`;

export const ValueH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const ValueP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const Quote = styled.div`
  font-size: 3rem;
  color: rgb(178, 12, 78);

  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 500px) {
    text-align: left;
  }
`;

export const QuoteHeader = styled.div`
  font-size: 1.1rem;
  margin-bottom: 10%;
`;

export const ButtonWrap = styled.div`
  padding: 50px;
  //margin-bottom: 300px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 00px;
    padding-bottom: 25px;
  }
`;

export const ButtonHeader = styled.div`
  font-size: 1.4rem;
  margin-top: 50px;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 768px) {
  }
`;
