import React from "react";
import "./AlumniSection.css"; // Import the CSS file

const TopStories = () => {
  return (
    <section className="top-stories-container">
      <h2 className="top-stories-heading">Our Top Stories</h2>
      <div className="top-stories-stories-container">
        <div className="top-stories-story-card">
          <div className="top-stories-image-placeholder"></div>
          <div className="top-stories-card-footer"></div>
        </div>
        <div className="top-stories-story-card">
          <div className="top-stories-image-placeholder"></div>
          <div className="top-stories-card-footer"></div>
        </div>
        <div className="top-stories-featured-card">
          <div className="top-stories-featured-content">
            <h3 className="top-stories-featured-text">
              Alumni Magazine <br /> January 2025
              <a href="/">
                <i className="fa-solid fa-up-right-from-square top-stories-arrow"></i>
              </a>
            </h3>
          </div>
        </div>
      </div>
      <button className="top-stories-button">Read More</button>
    </section>
  );
};

export default TopStories;
