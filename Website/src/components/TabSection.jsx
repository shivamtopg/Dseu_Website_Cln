import React from "react";
import DSEU from "../assets/DSEU.png";

const TabSection = () => {
  return (
    <div className="tab-section">
      <div className="tab">
        <h3>STUDENT EVENTS & ACTIVITIES</h3>
        <div className="tab-content">
          <div className="large-card"><img src={DSEU} alt="" /></div>
        </div>
      </div>
      <div className="tab">
        <h3>VOICE OF DSEU</h3>
        <div className="tab-content small-cards">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="small-card">
              <img src={DSEU} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabSection;
