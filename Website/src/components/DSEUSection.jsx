import React from "react";
import DSEUImage from "../assets/DSEU.png"; // Replace with the path to your image

const DSEUSection = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#003366", // Blue background
      color: "#fff",
      padding: "40px",
      paddingLeft: "120px",
      borderRadius: "8px",
      flexWrap: "wrap", // Allow items to wrap on smaller screens
    },
    textContainer: {
      flex: 1,
      marginRight: "100px",
    },
    heading: {
      fontSize: "50px",
      fontWeight: "bold",
      color: "#F4981d", // Orange color
      marginBottom: "30px",
    },
    subheading: {
      fontSize: "16px",
      lineHeight: "1.6",
      marginBottom: "30px",
      width: "70%",
    },
    button: {
      display: "inline-block",
      backgroundColor: "#F4981d", // Orange button
      color: "#fff",
      padding: "10px 20px",
      fontSize: "14px",
      fontWeight: "bold",
      borderRadius: "4px",
      textDecoration: "none",
      cursor: "pointer",
    },
    imageContainer: {
      flex: 1,
      width: "20px",
      marginTop: "20px", // Add top margin for better spacing on smaller screens
    },
    image: {
      width: "70%",
      height: "auto",
    },

    // Media Queries for Responsiveness
    "@media (max-width: 768px)": {
      container: {
        flexDirection: "column", // Stack elements vertically on small screens
        paddingLeft: "20px", // Reduce padding
      },
      textContainer: {
        marginRight: "0px", // Remove margin for stacked layout
        marginBottom: "20px", // Add margin bottom for spacing
        textAlign: "center", // Center the text
      },
      heading: {
        fontSize: "36px", // Reduce font size on smaller screens
        textAlign: "center", // Center the heading
      },
      subheading: {
        fontSize: "14px", // Reduce font size for smaller screens
        width: "100%", // Make the text take full width
        textAlign: "center", // Center the text
      },
      button: {
        fontSize: "12px", // Adjust button font size
        padding: "8px 16px", // Reduce padding for smaller screens
        display: "block", // Make button block-level for better alignment
        margin: "20px auto", // Center the button
      },
      imageContainer: {
        width: "100%", // Make image container full width on smaller screens
        marginTop: "20px", // Add margin top to ensure spacing between text and image
      },
      image: {
        width: "100%", // Make image responsive and fit the container width
      },
    },

    "@media (max-width: 480px)": {
      heading: {
        fontSize: "28px", // Further reduce font size for very small screens
      },
      subheading: {
        fontSize: "12px", // Adjust subheading font size even more
      },
    },
  };

  return (
    <section style={styles.container}>
      {/* Text Content */}
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>DSEU on the Rise</h1>
        <p style={styles.subheading}>
          Discover how DSEU is advancing education to serve society, building a vibrant
          community, and fostering meaningful dialogue to shape a better future.
        </p>
        <a href="#learn-more" style={styles.button}>
          Learn More
        </a>
      </div>

      {/* Image */}
      <div style={styles.imageContainer}>
        <img src={DSEUImage} alt="DSEU Campus" style={styles.image} />
      </div>
    </section>
  );
};

export default DSEUSection;
