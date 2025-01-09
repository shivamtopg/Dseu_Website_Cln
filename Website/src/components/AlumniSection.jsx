import React from "react";
import DSEU from "../assets/DSEU.png";
import TopStories from "./TopStories";
import ProgramEvents from "./ProgramEvents";
import DSEUSection from "./DSEUSection";
import bannerImage from "../assets/Image8.png";
import "./AlumniSection.css";

const AlumniSection = () => {
  return (
    <>
      <section
        className="banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <h1 className="heading1">Welcome Home!</h1>
        <p className="subheading">Strengthening Our Alumni Legacy</p>
      </section>
      <section className="container">
        <div className="textContainer">
          <h2 className="heading">Strengthening Our Alumni Legacy</h2>
          <p className="quote">
            "A university's greatest strength lies in the success of its
            alumni."
          </p>
          <p className="paragraph">
            Through the Alumni Association, DSEU aims to foster strong
            connections, celebrate achievements, and create opportunities for
            collaboration that empower both alumni and current students.
          </p>
          <p className="paragraph">
            This platform reflects DSEU's commitment to building a vibrant
            community that continues to inspire excellence and drive innovation,
            ensuring that the bond between the university and its alumni remains
            strong and impactful.
          </p>
        </div>
        <div className="imagePlaceholder">
          <img src={DSEU} className="image" alt="DSEU Logo" />
        </div>
      </section>
      <TopStories />
      <ProgramEvents />
      <DSEUSection />
    </>
  );
};

export default AlumniSection;
