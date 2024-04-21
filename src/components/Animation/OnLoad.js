import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Img1 from '../../images/logo.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Animated from './Animated';
import './OnLoad.css';
import { ClipLoader } from 'react-spinners';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div``;
const Content = styled.div`
  font-size: 3rem;
`;
const ImgWrap = styled.div``;
const Img = styled.img`
  @media screen and (max-width: 500px) {
    height: 150px;
  }
`;
const Div = styled.div`
  position: absolute;
  top: 250px;
  left: 115px;
`;
const Div2 = styled.div`
  position: absolute;
  top: 250px;
  right: 115px;
`;
const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const OnLoad = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const [loading2, setLoading2] = useState(false);
  useEffect(() => {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 3000);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <Container>
      {loading ? (
        <ImgWrap data-aos="fade">
          <Img src={Img1} />
          <Spinner>
            <ClipLoader size={30} color={'#000'} loading={loading} />
          </Spinner>
        </ImgWrap>
      ) : (
        <section>
          <h5>
            <span>C</span>
            <span>a</span>
            <span>r</span>

            <span className="gap"></span>
            <span>s</span>
            <span>a</span>
            <span>l</span>
            <span>e</span>
            <span>s</span>
            <span className="gap"></span>
            <span>m</span>
            <span>a</span>
            <span>d</span>
            <span>e</span>
            <span className="gap"></span>
            <span>s</span>
            <span>i</span>
            <span>m</span>
            <span>p</span>
            <span>l</span>
            <span>e</span>
          </h5>
        </section>
      )}
    </Container>
  );
};

export default OnLoad;
