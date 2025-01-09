import React from "react";
import DSEUImage from "../assets/DSEU.png";
import DSEUFooter from "../assets/AlumniFooter.png";
import "./AlumniSection.css"; 

const DSEUSection = () => {
  return (
    <section className="dseu-container">
      {/* Text Content */}
      <div className="dseu-textContainer">
        <h1 className="dseu-heading">DSEU on the Rise</h1>
        <p className="dseu-subheading">
          Discover how DSEU is advancing education to serve society, building a vibrant
          community, and fostering meaningful dialogue to shape a better future.
        </p>
        <a href="#learn-more" className="dseu-button">
          Learn More
        </a>
      </div>

      {/* Image Section */}
      <div className="dseu-imageContainer">
        <img src={DSEUFooter} alt="DSEU Campus" className="dseu-image" />
      </div>
    </section>
  );
};

export default DSEUSection;