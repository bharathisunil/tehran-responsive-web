import React from "react";
import "./Card.module.css"; // or your global modal styles

export default function ModalViewer({ show, onClose, imageSrc }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <img src={imageSrc} alt="Preview" className="modal-image" />
      </div>
    </div>
  );
}
