import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export function CarouselCard({ imagen, keyindex, onCardClick }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1)" : "scale(0..8)",
  });

  return (
    <div>
      <animated.div
        onClick={() => {
          onCardClick && onCardClick(); // open modal
        }}
        className={Styles.card}
        style={props3}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        <img src={imagen} alt="" />
      </animated.div>
    </div>
  );
}
