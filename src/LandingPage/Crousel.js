import React, { useState,useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

import "./Crousel.css";

 const Crousel = ({ data }) => {

    const slides = data.slides || [];
    // console.log(slides)
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => {
      const next = prevSlide === slides.length - 1 ? 0 : prevSlide + 1;
    //   console.log("Next slide index:", next); // Debugging
      return next;
    });
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slides.length]);

  return (
    <div className="carousel">
      {/* <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" /> */}
      <i class="fa fa-angle-left" aria-hidden="true"onClick={prevSlide} ></i>
     
      {slides.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      {/* <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      /> */}
       <i class="fa fa-angle-right" aria-hidden="true"    onClick={nextSlide}></i>
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Crousel