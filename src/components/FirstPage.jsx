import React, { useState } from "react";
import { CgArrowLeftO } from "react-icons/cg";
import { CgArrowRightO } from "react-icons/cg";

const FirstPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["ff.avif", "aa.avif", "bb.webp", "cc.jpeg", "zz.webp"];
  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>ALL ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>
                New <br /> Collection <br />
                For Everyone
              </p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <CgArrowLeftO
            onClick={prevImage}
            style={{ fontSize: "50px" }}
            id="left"
          />

          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="carousel-image"
            style={{ width: "600px", height: "55vh" }}
          />

          <CgArrowRightO
            onClick={nextImage}
            style={{ fontSize: "50px" }}
            id="right"
          />
        </div>
      </div>
    </>
  );
};

export default FirstPage;
