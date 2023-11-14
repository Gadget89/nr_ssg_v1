import React, { useState, useEffect, useCallback } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import Arrow from "../img/brand_assets/arrow.png"

const Carousel = ({ slideItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideItems.length - 1 : prevSlide - 1
    );
  }, [slideItems.length]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slideItems.length - 1 ? 0 : prevSlide + 1
    );
  }, [slideItems.length]);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        goToNextSlide();
      }, 10000);
    }

    return () => clearInterval(interval);
  }, [isPaused, goToNextSlide]);

  const togglePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  if (!slideItems || slideItems.length === 0) {
    return null;
  }

  const currentSlideItem = slideItems[currentSlide];
  const currentSlideImage = getImage(currentSlideItem.image);

  return (
    <div 
      className="columns is-multiline"
      style={{
        justifyContent: "center",
      }}>
      

      <div className="carousel-body">
        <div className="splash-column">
        <span className="carousel-display">
      <button className="slide-arrow" onClick={goToPrevSlide} aria-label="Last slide" data-tooltip="Last slide">
            <img src={Arrow} alt="Last slide" />
          </button>
        <div className="carousel-content">
          <h2>{currentSlideItem.title}</h2>
          <p style={{minHeight: "8rem"}}>{currentSlideItem.text}</p>
          <div className="content-link">
          <a className="button-link" href={currentSlideItem.buttonLink}>
            {currentSlideItem.buttonLabel}
          </a>
          </div>
        </div>
        <button className="slide-arrow" onClick={goToNextSlide} aria-label="Next slide" data-tooltip="Next slide">
            <img src={Arrow} alt="Next slide" />
          </button>
      </span>
      <div className="breadcrumb-wrapper">
      <div className="breadcrumbs">
          {slideItems.map((item, index) => (
            <button
              key={index}
              className={`breadcrumb ${index === currentSlide ? "breadcrumb-active" : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
          <button className="auto-control" onClick={togglePause}>{isPaused ? "Auto" : "Pause"}</button>
        </div>
      </div>
        </div>
        <div className="splash-column">
          <section className="stage">
            <GatsbyImage image={currentSlideImage} alt="Slide" loading="eager" />
          </section>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slideItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
      buttonLabel: PropTypes.string,
      buttonLink: PropTypes.string,
    })
  ),
};

export default Carousel;
