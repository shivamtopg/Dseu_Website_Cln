import React from "react";
import EntrepreneurshipEvents from "./EntrepreneurshipEvents";
// passion, ambition, vision, excellence, creativity, strategy

const Entrepreneurship = () => {
  return (
    <>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.6",
          color: "black",
          width: "100%",
        }}
      >
        <header style={{ textAlign: "left", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "45px",
              fontWeight: "bold",
              margin: "10px 20px",
              padding: "20px",
              letterSpacing: "-3px",
              marginLeft: "8.5%",
              textAlign: "left",
            }}
          >
            Nurturing entrepreneurial minds to <br /> revolutionize industries{" "}
            <br />
            with passion
          </h1>
          <div
            style={{
              height: "500px",
              maxWidth: "80%",
              backgroundColor: "#f0f0f0",
              margin: "20px auto",
              borderRadius: "8px",
            }}
          ></div>
        </header>

        <main>
          <section style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "2.2em",
                fontWeight: "600",
                margin: "20px 0",
              }}
            >
              <span
                style={{
                  borderBottom: "2px solid black",
                  display: "inline-block",
                }}
              >
                DSEU Innovation and Incubation Centre{" "}
              </span>
              <br />
              <span
                style={{
                  borderBottom: "2px solid black",
                  display: "inline-block",
                }}
              >
                for Entrepreneurship (DIICE)
              </span>
            </h2>
          </section>

          <section
            style={{
              maxWidth: "90%",
              margin: "0 auto",
              textAlign: "justify",
            }}
          >
            <h3 style={{ fontSize: "1.5em", marginBottom: "10px" }}>
              Introduction
            </h3>
            <p>
              The Delhi Skill and Entrepreneurship University (DSEU) was
              established in August 2020 by the Government of NCT of Delhi
              (GNCTD) to equip students with world-class skill education to
              enable access to aspirational jobs, inculcate an entrepreneurial
              mindset and entrepreneurship. Entrepreneurship is an integral
              part of DSEU's vision and mission. Coming up with a new business
              idea is only a start; building a successful business around it is
              the challenge. Solving this challenge needs an entrepreneurial
              mindset, i.e., a person who is a voracious learner, has strong
              communication and problem-solving skills, with a high motivation
              to succeed, and yet open to risk and failure.
            </p>
            <p>
              To provide a platform to encourage and support entrepreneurial
              endeavors, GNCTD has set up an incubator, DSEU Innovation and
              Incubation Centre for Entrepreneurship (DIICE). DIICE has been set
              up as a Section 8 Company with its own independent Board of
              Directors. To streamline all entrepreneurship and incubation
              activities at DSEU, a consolidation of all incubation programs
              under the various campuses of DSEU was proposed under one
              incubator model premise, including programs like Foundation's
              BUNI, promoted by Bhai Parmanand DSEU Shakarpur campus. Other such
              programs are also in the process of being consolidated.
            </p>
          </section>

          <div
            style={{
              fontFamily: "Arial, sans-serif",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            {/* Responsive Grid Section */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "20px",
                width: "90%",
                marginBottom: "20px",
              }}
            >
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#dcdcdc", // Gray background
                    height: "200px", // Height of each card
                    borderRadius: "8px", // Rounded corners
                  }}
                ></div>
              ))}
            </div>

            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#ffb733", // Orange color
                color: "#003e70",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Know More
            </button>
          </div>
        </main>
      </div>

      <main>
        <section style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "2.2em",
              fontWeight: "600",
              margin: "20px 0",
              borderBottom: "2px solid black",
              display: "inline-block",
            }}
          >
            DSEU - SIDBI Entrepreneurship Programme
          </h2>
        </section>

        <section
          style={{ maxWidth: "90%", margin: "0 auto", textAlign: "justify" }}
        >
          <h3 style={{ fontSize: "1.5em", marginBottom: "10px" }}>
            Introduction
          </h3>
          <p>
            The Delhi Skill and Entrepreneurship University (DSEU) was
            established in August 2020 by the Government of NCT of Delhi (GNCTD)
            to equip students with world-class skill education to enable access
            to aspirational jobs, inculcate an entrepreneurial mindset and
            entrepreneurship. Entrepreneurship is an integral part of DSEU’s
            vision and mission. Coming up with a new business idea is only a
            start, building a successful business around it is the challenge.
            Solving this challenge needs an entrepreneurial mindset, i.e. a
            person who is creative, has strong communication and problem-solving
            skills, with a high motivation to succeed, and yet open to risk and
            failure.
          </p>
          <p>
            To provide a platform to encourage and support entrepreneurial
            endeavors, GNCTD has set up an incubator, DSEU Innovation and
            Incubation Centre for Entrepreneurship (DIICE). DIICE has been set
            up as a Section 8 Company with its own independent Board of
            Directors. To streamline all entrepreneurship and incubation
            activities at DSEU, a consolidation of all incubation programs under
            the various campuses of DSEU was proposed under one incubator and
            hence, BPIBS Knowledge and Innovation Foundation (BKIF), promoted by
            Bhai Parmanand DSEU Shakarpur campus. Other such programs are also
            in the process of being consolidated.
          </p>
        </section>

        <div
          style={{
            fontFamily: "Arial, sans-serif",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {/* Grid Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "20px",
              width: "90%",
              marginBottom: "20px",
            }}
          >
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#dcdcdc",
                  height: "200px",
                  borderRadius: "8px",
                }}
              ></div>
            ))}
          </div>

          {/* Button Section */}
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#ffb733",
              color: "#003e70",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Know More
          </button>
        </div>
      </main>
      <EntrepreneurshipEvents />
    </>
  );
};

export default Entrepreneurship;
