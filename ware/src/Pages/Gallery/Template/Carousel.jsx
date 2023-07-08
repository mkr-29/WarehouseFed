import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel2.css';

const Carousel2 = (parse) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 3000,
    autoplay: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {parse.images.map((item) => (
            <div className="carousel-item">
                <img src={item} alt="carousel" />
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel2;
