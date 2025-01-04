import React from "react";
import DSEU from "../assets/Image1.png";

const EntrepreneurshipEvents = () => {
  const events = [
    {
      title: "Event 1",
      description:
        "Identifying students with the right entrepreneurial acumen for rising up to solve societal challenges.",
    },
    {
      title: "Event 2",
      description:
        "Building capabilities and developing mindsets and skills amongst students so that they are well equipped to set up enterprises.",
    },
    {
      title: "Event 3",
      description:
        "Challenging students to work on building solutions for real-world current market problems.",
    },
    {
      title: "Event 4",
      description:
        "Building capabilities and developing mindsets and skills amongst students so that they are well equipped to set up enterprises.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2em",
          fontWeight: "bold",
          marginBottom: "40px",
          // display: "inline-block",
          // borderBottom: "2px solid black",
        }}
      >
        ENTREPRENEURSHIP EVENTS
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          alignItems: "stretch", // Ensures all grid items have the same height
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#d0ddeb",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex", // Flexbox for side-by-side layout
              alignItems: "center", // Align items vertically
              gap: "20px",
              minHeight: "150px", // Set consistent height
              color: "#003e70",
            }}
          >
            {/* Image Container */}
            <div
              style={{
                flexShrink: 0, // Prevent shrinking
                height: "150px",
                width: "150px",
                backgroundColor: "#dcdcdc",
                borderRadius: "8px",
                overflow: "hidden", // Ensures no overflow from image
              }}
            >
              <img
                src={DSEU}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover", // Maintain image proportions
                }}
              />
            </div>

            {/* Text Container */}
            <div style={{ flex: 1, textAlign: "left" }}>
              <h3
                style={{
                  fontSize: "1.4em",
                  fontWeight: "bold",
                  margin: "0 0 10px 0",
                }}
              >
                {event.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9em",
                  margin: "0",
                  fontWeight: "bold",
                }}
              >
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="button entreButton">Know More</button>
    </div>
  );
};

export default EntrepreneurshipEvents;
