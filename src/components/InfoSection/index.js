import React from 'react';
import { Button } from '../Button/ButtonElements';
import { ImgWrap } from './InfoElements';
import Logo from '../../images/Logo.PNG';
import './InfoSection.css';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  IFrame,
} from './InfoElements';
import { Link } from 'react-router-dom';
import Stats from '../Stats';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>
                  We make buying a car
                  <span className="headline"> stress-free </span>
                </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Link to="/stock">
                    <Button
                      to="/stock"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <IFrame
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/zOCbU2yPHnA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></IFrame>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
        <Stats />
      </InfoContainer>
    </>
  );
};

export default InfoSection;
