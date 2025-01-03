import React, { useState, useEffect } from "react";
import EntrepreneurshipEvents from "./EntrepreneurshipEvents";
import DSEU from "../assets/Image1.png";
import DSEU1 from "../assets/Image2.png";

const Entrepreneurship = () => {
  const keywords = [
    "passion",
    "ambition",
    "vision",
    "excellence",
    "creativity",
    "strategy",
  ];


  const wrapperStyle = {
    fontFamily: "Inter, sans-serif",
    lineHeight: "1.6",
    color: "black",
    width: "100%",
  };

  const sectionStyle = {
    textAlign: "center",
    marginBottom: "40px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
    width: "90%",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "13px 23px",
    fontSize: "17px",
    backgroundColor: "#ffb733",
    color: "#003e70",
    border: "none",
    borderRadius: "7px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const spanStyle = {
    color: "black",
    animation: "spin_words 3s infinite",
  };

  const animatedSpan = {
    display: "inline-block",
  };

  const styles = {
    body: {
      padding: "2em",
      font: "normal 40px/50px Inter, sans-serif",
      color: "black",
    },
    paragraph: {
      height: "50px",
      float: "left",
      marginRight: "0.3em",
      fontWeight: "700",
      marginTop: "-1.5em",
      marginLeft: '70px',
      letterSpacing: "-3px",
    },
    bold: {
      float: "left",
      overflow: "hidden",
      position: "absolute",
      height: "50px",
      marginLeft: '10px',
      fontWeight: "700",
    },
    span: {
      color: "black",
      position: "relative",
      whiteSpace: "nowrap",
      top: "0",
      left: "0",
      animation: "move 5s infinite 1s",
    },
  };

  return (
    <>
      <div style={wrapperStyle}>
        <header style={{ textAlign: "left", marginBottom: "40px" }}>
          <div style={styles.body}>
            <p style={styles.paragraph}>
              Nurturing entrepreneurial minds to revolutionize <br /> industries with{" "}
              <b style={styles.bold}>
                <span style={styles.span}>
                  passion
                  <br />
                  ambition
                  <br />
                  vision
                  <br />
                  excellence
                  <br />
                  creativity
                  <br />
                  strategy
                </span>
              </b>
            </p>
          </div>
          <div
            style={{
              height: "500px",
              maxWidth: "80%",
              margin: "auto",
              borderRadius: "8px",
            }}
          >
            <img
              src={DSEU1}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "4px",
              }}
            />
          </div>
        </header>

        <main>
          <section style={sectionStyle}>
            <h2
              style={{
                fontSize: "2.2em",
                fontWeight: "700",
                margin: "10px 0",
                // borderBottom: "2px solid black",
                // display: "inline-block",
              }}
            >
              DSEU Innovation and Incubation Centre for Entrepreneurship (DIICE)
            </h2>
          </section>

          <section
            style={{
              maxWidth: "90%",
              margin: "0 auto",
              marginLeft: "90px",
              textAlign: "justify",
              marginTop: "-30px",
            }}
          >
            <h3
              style={{
                fontSize: "1.5em",
                marginBottom: "5px",
                borderBottom: "2px solid black",
                marginTop: "-20px",
                display: "inline-block",
                paddingBottom: "-15px",
              }}
            >
              Introduction
            </h3>
            <p
              style={{
                maxWidth: "97%",
              }}
            >
              The Delhi Skill and Entrepreneurship University (DSEU) was
              established in August 2020 by the Government of NCT of Delhi
              (GNCTD) to equip students with world-class skill education to
              enable access to aspirational jobs, inculcate an entrepreneurial
              mindset and entrepreneurship. Entrepreneurship is an integral part
              of DSEU’s vision and mission. Coming up with a new business idea
              is only a start, building a successful business around it is the
              challenge. Solving this challenge needs an entrepreneurial
              mindset, i.e. a person who is creative, has strong communication
              and problem-solving skills, with a high motivation to succeed, and
              yet open to risk and failure.
            </p>
            <p
              style={{
                maxWidth: "97%",
              }}
            >
              To provide a platform to encourage and support entrepreneurial
              endeavors, GNCTD has set up an incubator, DSEU Innovation and
              Incubation Centre for Entrepreneurship (DIICE). DIICE has been set
              up as a Section 8 Company with its own independent Board of
              Directors. To streamline all entrepreneurship and incubation
              activities at DSEU, a consolidation of all incubation programs
              under the various campuses of DSEU was proposed under one
              incubator and hence, BPIBS Knowledge and Innovation Foundation
              (BKIF), promoted by Bhai Parmanand DSEU Shakarpur campus. Other
              such programs are also in the process of being consolidated.
            </p>
          </section>

          <div
            style={{
              fontFamily: "Inter, sans-serif",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div style={gridStyle}>
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#dcdcdc",
                    height: "200px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={DSEU}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              ))}
            </div>

            <button className="button">Know More</button>
          </div>
        </main>

        <section style={sectionStyle}>
          <h2
            style={{
              fontSize: "2.2em",
              fontWeight: "600",
              margin: "20px 0",
              // borderBottom: "2px solid black",
              // display: "inline-block",
            }}
          >
            DSEU - SIDBI Entrepreneurship Programme
          </h2>
        </section>

        <section
          style={{
            maxWidth: "90%",
            margin: "0 auto",
            marginLeft: "90px",
            textAlign: "justify",
            marginTop: "-30px",
          }}
        >
          <h3
            style={{
              fontSize: "1.5em",
              marginBottom: "5px",
              borderBottom: "2px solid black",
              marginTop: "-20px",
              display: "inline-block",
              paddingBottom: "-15px",
            }}
          >
            Introduction
          </h3>
          <p
            style={{
              maxWidth: "97%",
            }}
          >
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
          <p
            style={{
              maxWidth: "97%",
            }}
          >
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
          <p
            style={{
              maxWidth: "97%",
            }}
          >
            Many DSEU programs (e.g., Interior design, Fashion design,
            Aesthetics & Beauty) are designed to promote freelancing/creation of
            traditional businesses, as evidenced by a rich pool of alumni
            entrepreneurs. Thus, the incubator is expected to support ventures
            like these, in addition to typical product/process innovation
            start-ups. Our platform is primarily available for the students,
            alumni, faculty and staff of DSEU. However, we are open to be
            engaged with people from outside the DSEU fraternity as well, who
            have strong passion and ideas to be on their own, to set up new
            ventures and to create new businesses. DSEU has also introduced a
            compulsory curriculum to inculcate an entrepreneurial mindset
            amongst the students, which will be carried forward by the students
            to their respective undergraduate programs as they become
            intrapreneurs or entrepreneurs. 
          </p>
        </section>
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <button className="button">Know More</button>
      </div>

      <EntrepreneurshipEvents />
    </>
  );
};

export default Entrepreneurship;
