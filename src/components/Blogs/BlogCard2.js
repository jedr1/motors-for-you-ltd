import React, { useEffect, useState } from 'react';
import Img1 from '../../images/Finance.jpg';
import styled from 'styled-components';
import BlogNav from './BlogNav';
import { Link } from 'react-router-dom';
import './BlogCard.css';
import { useInView } from 'react-intersection-observer';
import { Button } from '../Button/ButtonElements';

const CardContainer2 = styled.div`
  width: 750px;

  transition: 0.3s ease;
  @media screen and (max-width: 1500px) {
    margin-left: 25px;
  }
  /* &:hover {
    transform: scale(1.03);
  } */
  @media screen and (max-width: 1350px) {
    //height: 350px;
    width: 600px;
    //margin-top: -150px;
  }
  @media screen and (max-width: 1250px) {
    width: 550px;
  }
  @media screen and (max-width: 1150px) {
    width: 500px;
  }

  @media screen and (max-width: 500px) {
    width: 90vw;
    // height: 300px;
  }
  @media screen and (max-width: 390px) {
    margin-left: 5px;
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
  width: 100%;
  height: 400px;
  // border-radius: 15px;
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
  //position: relative;
  top: 70%;
`;
const Header = styled.div`
  //position: absolute;
  //top: 0;
  //color: #fff;
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  left: 10px;
  z-index: 2;
  @media screen and (max-width: 1400px) {
    top: -25px;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;
const M4U = styled.div`
  font-size: 1rem;
  color: rgb(80, 80, 80);
  font-family: 'Heebo', sans-serif;
  margin-top: 10px;
`;
const Img = styled.img`
  object-fit: cover;
  height: 450px;
  width: 800px;
  //margin-left: -2px;
  transition-duration: 500ms;
  //display: block;
  max-width: 100%;
  border-radius: 5px;
  //height: auto;
  // overflow: hidden;
  &:hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 1350px) {
    height: 350px;
    width: 600px;
  }
  @media screen and (max-width: 1250px) {
    width: 550px;
  }
  @media screen and (max-width: 1250px) {
    width: 500px;
  }
  @media screen and (max-width: 500px) {
    width: 90vw;
    height: 225px;
  }
`;
const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  width: 800px;
  height: 450px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  //position: absolute;
  border-radius: 5px;
  position: relative; /* Required for positioning the pseudo-element */
  display: inline-block;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Adjust the color and opacity as needed */
    opacity: 0; /* Initially transparent */
    transition: opacity 0.3s ease-in-out; /* Add a smooth transition effect */
  }
  &:hover::before {
    opacity: 1; /* Show the background color on hover */
  }

  /* Adjust image appearance if needed */

  &:hover {
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.02);
  }
  transition-duration: 500ms;
  @media screen and (max-width: 1350px) {
    height: 350px;
    width: 600px;
  }
  @media screen and (max-width: 1250px) {
    width: 550px;
  }
  @media screen and (max-width: 1250px) {
    width: 500px;
  }
  @media screen and (max-width: 500px) {
    width: 90vw;
    height: 225px;
  }
`;
const ImgWrapWrap = styled.div`
  height: 450px;
  width: 750px;
  overflow: hidden;
  border-radius: 5px;
  @media screen and (max-width: 1350px) {
    height: 350px;
    width: 600px;
  }
  @media screen and (max-width: 1250px) {
    width: 550px;
  }
  @media screen and (max-width: 1250px) {
    width: 500px;
  }
  @media screen and (max-width: 500px) {
    width: 90vw;
    height: 225px;
  }
`;
const ImgText = styled.div`
  position: absolute;
  top: 50%; /* Adjust the vertical position of the text */
  left: 50%; /* Adjust the horizontal position of the text */
  text-align: center;
  transform: translate(
    -50%,
    -50%
  ); /* Center the text both horizontally and vertically */
  //background-color: rgba(0, 0, 0, 0.7); /* Background color for the text */
  color: white; /* Text color */
  padding: 10px; /* Adjust padding as needed */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out;
`;
const SubHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  color: #000;
  //position: absolute;
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
  /* height: 100%;
  width: 100%; */
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
const BtnWrap = styled.div`
  width: 200px;
`;

const config = {
  rootMargin: '4000px 4000px 4000px 4000px',
  threshold: 0,
};

function BlogCard2(props) {
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
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });
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
          <CardContainer2>
            <Wrapper>
              {/* <div ref={myRef2}>
                <GradBackground1
                  className={`${''} ${
                    myElementIsVisible ? 'not-gone2' : 'gone2'
                  }`}
                />
              </div> */}
              <div ref={myRef}>
                <ImgWrapWrap>
                  <ImgWrap className="image-container">
                    <Img
                      src={props.src}
                      className={`${''} ${
                        myElementIsVisible ? 'not-gone' : 'gone'
                      }`}
                    />
                    <ImgText className="image-text">{props.header}</ImgText>
                  </ImgWrap>
                </ImgWrapWrap>
              </div>
              <Content>
                <M4U>{props.tag}</M4U>
                <Header>{props.header}</Header>
                <SubHeader>{props.subh}</SubHeader>
              </Content>
            </Wrapper>
          </CardContainer2>
        </Link>
      </div>
    </>
  );
}

export default BlogCard2;
