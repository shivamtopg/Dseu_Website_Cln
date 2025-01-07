import React from "react";

const ProgramEvents = () => {
  const events = [
    {
      date: "07",
      month: "JAN",
      location: "Lighthouse Point, FL | Social",
      title:
        "Holiday Cheer and Jazz with the Harvard Din & Tonics at the Club's Annual Holiday Party!",
      organization: "Harvard Club of Broward County",
    },
    {
      date: "07",
      month: "JAN",
      location: "Lighthouse Point, FL | Social",
      title:
        "Holiday Cheer and Jazz with the Harvard Din & Tonics at the Club's Annual Holiday Party!",
      organization: "Harvard Club of Broward County",
    },
    {
      date: "07",
      month: "JAN",
      location: "Lighthouse Point, FL | Social",
      title:
        "Holiday Cheer and Jazz with the Harvard Din & Tonics at the Club's Annual Holiday Party!",
      organization: "Harvard Club of Broward County",
    },
  ];

  const styles = {
    container: {
      maxWidth: "700px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "'Inter', sans-serif",
    },
    heading: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "#003366",
      marginBottom: "20px",
      textAlign: "center",
      textDecoration: "underline",
    },
    eventCard: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      padding: "15px",
      marginBottom: "15px",
      height: "150px",
    },
    dateContainer: {
      marginRight: "15px",
      padding: "10px",
      display: "flex",           // Enable flexbox layout
      flexDirection: "column",   // Stack children vertically
      alignItems: "flex-start",  // Align children to the start horizontally (left)
      justifyContent: "flex-start",  // Align children to the top vertically
    },
    span: {
      fontSize: "14px",
      color: "#333",
      lineHeight: "1",
      fontWeight: 'normal',
    },
    month: {
      fontSize: "24px",
      textTransform: "uppercase",
      color: "black",
      lineHeight: "1.15",
      fontWeight: "bold",
      textAlign: "start",       // Align the text within the month to the start
    },
    imagePlaceholder: {
      width: "150px",
      height: "150px",
      backgroundColor: "#d3d3d3",
      marginRight: "15px",
    },
    details: {
      flex: 1,
    },
    location: {
      fontSize: "12px",
      color: "#777",
      marginBottom: "5px",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    title: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "5px",
    },
    organization: {
      fontSize: "14px",
      color: "#666",
    },
    buttonContainer: {
      textAlign: "center",
      marginTop: "20px",
    },
    button: {
      backgroundColor: "#ff9800",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Programs & Events</h2>
      {events.map((event, index) => (
        <div key={index} style={styles.eventCard}>
          <div style = {styles.imagePlaceholder}></div>
          <div style={styles.dateContainer}>
            <p style={styles.month}><span style = {styles.span}>{event.month}</span> <br />{event.date}</p>
          </div>
          <div style={styles.details}>
            <p style={styles.location}>{event.location}</p>
            <h3 style={styles.title}>{event.title}</h3>
            <p style={styles.organization}>{event.organization}</p>
          </div>
        </div>
      ))}
      <div style={styles.buttonContainer}>
        <button style={styles.button}>View All Stories</button>
      </div>
    </section>
  );
};

export default ProgramEvents;
