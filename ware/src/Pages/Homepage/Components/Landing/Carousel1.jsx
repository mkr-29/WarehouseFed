import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousel1(parse) {
  const carouselRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const goToNextSlide = () => {
    carouselRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    carouselRef.current.slickPrev();
  };
  return (
    <div>
      <Slider {...settings} ref={carouselRef}>
        <div>
          <h2>{parse.heading1}</h2>
          <h3>{parse.subheading1}</h3>
          <p>{parse.about1}</p>
        </div>
        <div>
          <h2>{parse.heading2}</h2>
          <h3>{parse.subheading2}</h3>
          <p>{parse.about2}</p>
        </div>
      </Slider>
      <div>
        <button onClick={goToPrevSlide}>Previous</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
}
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      Next
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      Previous
    </div>
  );
}
