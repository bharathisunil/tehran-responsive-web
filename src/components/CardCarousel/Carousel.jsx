import Carousel from "react-spring-3d-carousel";
import React, { useState, useEffect, useRef } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
  const totalSlides = props.cards.length;
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);
  const [cards] = useState(
    props.cards.map((element, index) => ({
      ...element,
      onClick: () => setGoToSlide(index),
    }))
  );

  const slideIndex = useRef(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      slideIndex.current = (slideIndex.current + 1) % totalSlides;
      setGoToSlide(slideIndex.current);
    }, 2000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
