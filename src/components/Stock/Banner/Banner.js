import React, { useState } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Img1 from '../../../van/van1.jpg';
import Img2 from '../../../van/van2.jpg';
import Img3 from '../../../van/van3.jpg';
import Img4 from '../../../van/van4.jpg';
import Img5 from '../../../van/van1.jpg';
import Img6 from '../../../van/van2.jpg';
import Img7 from '../../../van/van3.jpg';
import Img8 from '../../../van/van4.jpg';
import Img9 from '../../../van/van1.jpg';
import Img10 from '../../../van/van2.jpg';
import './Banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 9 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 9 ? 0 : (prev) => prev + 1);
  };
  console.log(currentSlide);
  return (
    <div className=" overflow-hidden flex justify-center align-middle cont">
      <div className=" w-screen h-[350px] relative box">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-[100vw] h-[250px] object-cover img"
            src={data[0]}
            alt=""
            loading="priority"
          />
          <img
            className="w-[100vw] h-[250px] object-cover img"
            src={data[1]}
            alt=""
          />
          <img
            className="w-[100vw] h-[250px] object-cover img"
            src={data[2]}
            alt=""
          />
          <img
            className="w-[100vw] h-[250px] object-cover img"
            src={data[3]}
            alt=""
          />
          <img
            className="w-[100vw] h-[250px] object-cover img"
            src={data[4]}
            alt=""
          />
          <img
            className="w-[100vw] h-[250px] object-cover img"
            src={data[5]}
            alt=""
          />
          <img
            className="w-[100vw] h-[250px] object-cover img"
            src={data[6]}
            alt=""
          />
          <img
            className="w-[100vw] h-[250px] object-cover img"
            src={data[7]}
            alt=""
          />
          <img
            className="w-[100vw] h-[250px] object-cover img"
            src={data[8]}
            alt=""
          />
          <img
            className="w-[50vw] h-[250px] object-cover img"
            src={data[9]}
            alt=""
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 top-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white activ:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white activ:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
