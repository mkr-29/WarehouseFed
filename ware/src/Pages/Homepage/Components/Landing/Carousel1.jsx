import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel1.css"

export default function Carousel1(parse) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="textcar">
          <h2>{parse.heading1}</h2>
          <h3>{parse.subheading1}</h3>
          <p>{parse.about1}</p>
        </div>
        <div className="textcar">
          <h2>{parse.heading2}</h2>
          <h3>{parse.subheading2}</h3>
          <p>{parse.about2}</p>
        </div>
      </Slider>
    </div>
  );
}
