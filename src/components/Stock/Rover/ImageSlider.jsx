import React from 'react';
import PropTypes from 'prop-types';
import './ImageSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Thumbs } from 'swiper';

const ImageSlider = (props) => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        className="product-images-slider"
      >
        {props.images.map((item, index) => {
          <SwiperSlide key={index}>
            <img src={item} alt="car images" />
          </SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageSlider;
