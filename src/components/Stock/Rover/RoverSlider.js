import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import { ProductImages } from './RoverImages';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 800px;
  height: 700px;
  padding: 20px;
`;

const RoverSlider = () => {
  return (
    <Container>
      <Wrapper>
        <ImageSlider images={ProductImages} />
      </Wrapper>
    </Container>
  );
};

export default RoverSlider;
