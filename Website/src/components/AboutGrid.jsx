import React from "react";
import BOG from "../assets/BOG.png";

const AboutGrid = () => {
  const gridItems = [
    { title: "BOARD OF GOVERNORS", image: BOG},
    { title: "BUILDING & WORKS COMMITTEE",image: BOG  },
    { title: "FINANCE COMMITTEE",image: BOG  },
    { title: "MEMBERSHIP OF SENATE", image: BOG },
    { title: "ADMINISTRATION",image: BOG  },
    { title: "IoE",image: BOG  },
    { title: "MISSION & VISION",image: BOG  },
    { title: "ORGANIZATION CHART",image: BOG  },
  ];

  return (
    <div className="dashboard-grid-container">
      {gridItems.map((item, index) => (
        <div
          key={index}
          className={`dashboard-grid-item ${
            item.title === "ADMINISTRATION" ? "active" : ""
          }`}
        >
          <div className="icon">
            <img src={item.image} alt={item.title} className="grid-image" />
          </div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutGrid;
