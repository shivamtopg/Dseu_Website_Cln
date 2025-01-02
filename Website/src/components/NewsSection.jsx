import React, { useState, useEffect } from "react";
import DSEU from "../assets/DSEU.png";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";
import Image5 from "../assets/Image5.png";
import Image6 from "../assets/Image6.png";

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of visible items
  const totalItems = 12; // Total number of news items

  // Array of images
  const images = [DSEU, Image1, Image2, Image3, Image4, Image5, Image6];

  // Generate all news items with unique images
  const allNewsItems = [...Array(totalItems)].map((_, index) => ({
    id: index,
    title: `News Title ${index + 1}`,
    description: `This is a brief description of news article ${index + 1}.`,
    image: images[index % images.length], // Cycle through the images
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightArrowClick();
    }, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to handle the left arrow click
  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  // Function to handle the right arrow click
  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalItems - itemsPerPage ? 0 : prevIndex + itemsPerPage
    );
  };

  // Get the visible items based on the current index
  const visibleItems = allNewsItems.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="news-section">
      <h2 className="news-title" style={{ fontSize: "36px" }}>
        DSEU IN NEWS
      </h2>

      <div className="news-container">
        <button className="arrow-button left" onClick={handleLeftArrowClick}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="outer-container" style={{ overflow: "hidden" }}>
          <div
            className="news-grid"
            style={{
              display: "flex",
              transition: "transform 1s ease",
            }}
          >
            {visibleItems.map((item) => (
              <div key={item.id} className="news-item" style={{ padding: "10px" }}>
                <img src={item.image} alt={`Image of ${item.title}`} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                <div className="news-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow-button right" onClick={handleRightArrowClick}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
