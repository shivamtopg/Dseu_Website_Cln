import React from "react";

const TopStories = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Our Top Stories</h2>
      <div style={styles.storiesContainer}>
        <div style={styles.storyCard}>
          <div style={styles.imagePlaceholder}></div>
          <div style={styles.cardFooter}></div>
        </div>
        <div style={styles.storyCard}>
          <div style={styles.imagePlaceholder}></div>
          <div style={styles.cardFooter}></div>
        </div>
        <div style={styles.featuredCard}>
          <div style={styles.featuredContent}>
            <h3 style={styles.featuredText}>Alumni Magazine <br /> January 2025 <a href="/"><i class="fa-solid fa-up-right-from-square arrow"></i></a> </h3>
          </div>
        </div>
      </div>
      <button style={styles.button}>Read More</button>
    </section>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#e7e7e7",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#003366",
    marginBottom: "20px",
    textDecoration: "underline",
  },
  storiesContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "30px",
  },
  storyCard: {
    width: "300px",
    height: "350px",
    backgroundColor: "#fff",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  imagePlaceholder: {
    height: "70%",
    backgroundColor: "#c4c4c4",
  },
  cardFooter: {
    height: "30%",
    backgroundColor: "#fff",
  },
  featuredCard: {
    width: "300px",
    height: "350px",
    backgroundColor: "#003e70",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  featuredContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    textAlign: "center",
    height: "100%",
    padding: "20px",
  },

  featuredText: {
    fontSize: "26px",
    fontWeight: "bold",
    textAlign: "bottom",
  },
  
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#ff9900",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default TopStories;
