import React from 'react';
import DSEU from "../assets/DSEU.png";
import TopStories from './TopStories';
import ProgramEvents from './ProgramEvents';
import DSEUSection from './DSEUSection';
import bannerImage from "../assets/Image8.png"; 

const AlumniSection = () => {
  return (
    <>
      <div style={{ ...styles.banner, backgroundImage: `url(${bannerImage})` }}>
        <h1 style={styles.heading1}>Welcome Home!</h1>
        <p style={styles.subheading}>Strengthening Our Alumni Legacy</p>
      </div>
      <section style={styles.container}>
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>Strengthening Our Alumni Legacy</h2>
          <p style={styles.quote}>
            "A university's greatest strength lies in the success of its alumni."
          </p>
          <p style={styles.paragraph}>
            Through the Alumni Association, DSEU aims to foster strong connections, celebrate achievements, and create opportunities for collaboration that empower both alumni and current students.
          </p>
          <p style={styles.paragraph}>
            This platform reflects DSEU's commitment to building a vibrant community that continues to inspire excellence and drive innovation, ensuring that the bond between the university and its alumni remains strong and impactful.
          </p>
        </div>
        <div style={styles.imagePlaceholder}>
          <img src={DSEU} style={styles.image} alt="DSEU Logo" />
        </div>
      </section>
      <TopStories />
      <ProgramEvents />
      <DSEUSection />
      <style>
        {`
          @media (max-width: 768px) {
            .container {
              flex-direction: column;
              padding: 20px;
            }

            .textContainer {
              width: 100%;
              margin-right: 0;
            }

            .imagePlaceholder {
              width: 100%;
              height: auto;
            }

            .heading1 {
              font-size: 2rem;
            }

            .subheading {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 10%',
    paddingBottom: '60px',
    backgroundColor: '#f9f9f9',
    flexWrap: 'wrap',
  },
  textContainer: {
    flex: 1,
    minWidth: '300px',
    marginRight: '20px',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#003e70',
    marginBottom: '20px',
  },
  quote: {
    fontStyle: 'italic',
    color: '#003e70',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#003e70',
    lineHeight: '1.6',
    marginBottom: '15px',
    width: '90%',
  },
  imagePlaceholder: {
    
    minWidth: '300px',
    height: '300px',
    width: '300px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    marginTop: '50px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  banner: {
    position: "relative", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: '0 10px',
  },
  subheading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0px",
  },
  heading1: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "5px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
};

export default AlumniSection;
