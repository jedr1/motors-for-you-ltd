import React, { useEffect, useState } from 'react';
import Img1 from '../../images/Finance.jpg';
import styled from 'styled-components';
import BlogNav from './BlogNav';
import { Link } from 'react-router-dom';
import './BlogCard.css';
import { useInView } from 'react-intersection-observer';

const CardContainer = styled.div`
  //z-index: 2;

  height: 400px;
  width: 500px;
  border-radius: 15px;
  margin: 10px;
  //margin-right: 200px;
  padding-bottom: 50px;
  box-shadow: 5px -5px 15px 0 rgba(178, 12, 78, 0.5),
    -5px 15px -5px 0 rgba(178, 12, 78, 0.5);
  object-fit: cover;
  box-shadow: 5px -5px 10px 0 rgba(178, 12, 78, 0.5),
    -5px 5px 10px 0 rgba(178, 12, 78, 0.5);
  position: absolute;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
  @media screen and (max-width: 1400px) {
    height: 350px;
    width: 425px;
  }

  @media screen and (max-width: 500px) {
    width: 90vw;
    height: 300px;
  }
`;
const CardWrapper1 = styled.img`
  object-fit: cover;
  width: 110%;
  height: 110%;
  border-radius: 15px;
  z-index: 20;
`;
const CardWrapper2 = styled.img`
  object-fit: cover;
  width: 110%;
  height: 400px;
  border-radius: 15px;
  z-index: 3;
  @media screen and (max-width: 1400px) {
    height: 350px;
    width: 425px;
  }
  @media screen and (max-width: 500px) {
    width: 90vw;
    height: 300px;
  }
`;
const CardWrapper = styled.img`
  object-fit: cover;
  width: 100%;
  height: 110%;
  border-radius: 15px;
  z-index: 20;
  display: none;
`;
const Content = styled.div`
  position: relative;
  top: 70%;
`;
const Header = styled.div`
  position: absolute;
  //top: 0;
  color: #fff;
  font-size: 1.7rem;
  left: 10px;
  z-index: 2;
  @media screen and (max-width: 1400px) {
    top: -25px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;
const SubHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  color: #fff;
  position: absolute;
  top: 50px;
  left: 10px;
  z-index: 2;
  @media screen and (max-width: 1400px) {
    top: 50px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Wrapper = styled.div`
  /*background: linear-gradient(
    180deg,
    transparent 0% 90%,

    rgba(0, 0, 0) 100%
  );*/
  //background: #000;
  //background-position: 100% 100%;
  //background-size: 300% 300%;
  //position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
`;
const GradBackground1 = styled.div`
  height: 400px;
  width: 100%;
  //position: absolute;
  background: linear-gradient(
    180deg,
    transparent 0% 33%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0) 100%
  );
  border-radius: 15px;
  z-index: 20;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1400px) {
    height: 350px;
    width: 425px;
  }
  @media screen and (max-width: 500px) {
    width: 90vw;
    height: 300px;
  }
`;
const BackWrap = styled.div``;

const config = {
  rootMargin: '4000px 4000px 4000px 4000px',
  threshold: 0,
};

function BlogCard(props) {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let observer = new window.IntersectionObserver(function (entries, self) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
        }
        self.unobserve(entry.target);
      });
    }, config);
    const imgs = document.querySelectorAll('[data-src]');
    imgs.forEach((img) => {
      observer.observe(img);
    });
    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);
  function loadImages(image) {
    image.src = image.dataset.src;
  }
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div>
        <Link to={props.path}>
          <CardContainer>
            <Wrapper>
              <Content>
                <Header>{props.header}</Header>
                <SubHeader>{props.subh}</SubHeader>
              </Content>
              <div ref={myRef2}>
                <GradBackground1
                  className={`${''} ${
                    myElementIsVisible ? 'not-gone2' : 'gone2'
                  }`}
                />
              </div>
              <div ref={myRef}>
                <CardWrapper2
                  src={props.src}
                  className={`${''} ${
                    myElementIsVisible ? 'not-gone' : 'gone'
                  }`}
                />
              </div>
            </Wrapper>
          </CardContainer>
        </Link>
      </div>
    </>
  );
}

export default BlogCard;
