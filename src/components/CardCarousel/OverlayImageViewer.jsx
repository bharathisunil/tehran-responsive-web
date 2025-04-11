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
          maxWidth: "90%",
          maxHeight: "90%",
          objectFit: "contain",
        }}
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "30px",
          fontSize: "30px",
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
