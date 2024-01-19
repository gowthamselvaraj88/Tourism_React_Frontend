import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";


const Banner = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
      <Carousel.Item>
        <img className="d-block w-100 fixed-height" src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg"  alt="First slide" />
        <Carousel.Caption className="caption rounded-3">
          <h3>Travelle</h3>
          <p>We ensures the best care as well as clinical service</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 fixed-height" src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg"  alt="Second slide" />

        <Carousel.Caption className="caption">
          <h3>Travelle</h3>
          <p>We ensures the best care as well as clinical service</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 fixed-height" src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg"  alt="Third slide" />

        <Carousel.Caption className="caption">
          <h3>Travelle</h3>
          <p>We ensures the best care as well as clinical service</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
