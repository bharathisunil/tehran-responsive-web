import React, { useState, useEffect, useMemo } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

import MenuImg1 from "../assets/assets/menu01.jpg";
import MenuImg2 from "../assets/assets/menu02.jpg";
import MenuImg3 from "../assets/assets/menu03.jpg";
import MenuImg4 from "../assets/assets/menu04.jpg";

const FunctionalCarousel = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const [animationConfig] = useState(config.gentle);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageWidth = windowWidth < 600 ? "90vw" : "500px";
  //   const imageHeight = windowWidth < 600 ? "auto" : "auto";

  const imageList = useMemo(() => [MenuImg1, MenuImg2, MenuImg3, MenuImg4], []);

  const slides = useMemo(() => {
    return imageList.map((img, index) => ({
      key: uuidv4(),
      content: (
        <div
          style={{
            width: imageWidth,
            height: "auto",
            overflow: "hidden",
            boxShadow: "0 30px 40px rgba(0, 0, 0, 0.5)",
            filter: index === goToSlide ? "none" : "blur(4px)",
            transform: index === goToSlide ? "scale(1)" : "scale(1.1)",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      ),
      onClick: () => setGoToSlide(index),
    }));
  }, [imageList, goToSlide, imageWidth]);

  useEffect(() => {
    const loop = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(loop);
  }, [slides.length]);

  return (
    <div style={{ width: "70%", height: "700px", margin: "0 auto" }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={false}
        animationConfig={animationConfig}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setGoToSlide(index)}
            style={{
              width: "25px",
              height: "5px",
              borderRadius: "12px",
              cursor: "pointer",
              backgroundColor: index === goToSlide ? "#D2BA83" : "#efefef",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FunctionalCarousel;
