import React, { useState } from "react";
import { CarouselCard } from "./Card";
import Carroussel from "./Carousel";
import Styles from "./Card.module.css";

export function MenuCarousel({ onCardClick }) {
  const [modalImage, setModalImage] = useState(null);

  const handleCardClick = (imagePath) => {
    setModalImage(imagePath);
    onCardClick(imagePath);
  };

  const closeModal = () => setModalImage(null);

  const cards = [
    { key: 1, src: "/assets/menu01.jpg" },
    { key: 2, src: "/assets/menu02.jpg" },
    { key: 3, src: "/assets/menu03.jpg" },
    { key: 4, src: "/assets/menu04.jpg" },
  ].map((item, index) => ({
    key: item.key,
    content: (
      <CarouselCard
        imagen={item.src}
        keyindex={item.key}
        // onCardClick={() => handleCardClick(item.src)}
      />
    ),
  }));

  return (
    <div className="carousel-container">
      <Carroussel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
      {modalImage && (
        <div className={Styles["modal-overlay"]}>
          <div className={Styles.modal}>
            <button className={Styles["close-button"]} onClick={closeModal}>
              &times;
            </button>
            <img src={modalImage} className={Styles["modal-image"]} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
