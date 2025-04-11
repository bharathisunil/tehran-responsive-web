import React from "react";

const OverlayImageViewer = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <img
        src={image}
        alt="Enlarged"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "contain",
          userSelect: "none",
          touchAction: "none",
        }}
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "10px",
          fontSize: "40px",
          background: "transparent",
          border: "none",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default OverlayImageViewer;
