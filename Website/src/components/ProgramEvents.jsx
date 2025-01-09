import React from "react";
import "./AlumniSection.css";

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

  return (
    <section className="event-container">
      <h2 className="event-heading">Programs & Events</h2>
      {events.map((event, index) => (
        <div key={index} className="eventCard">
          <div className="event-imagePlaceholder"></div>
          <div className="dateContainer">
            <p className="month">
              <span className="event-span">{event.month}</span> <br />
              {event.date}
            </p>
          </div>
          <div className="event-details">
            <p className="event-location">{event.location}</p>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-organization">{event.organization}</p>
          </div>
        </div>
      ))}
      <div className="event-buttonContainer">
        <button className="event-button">View All Stories</button>
      </div>
    </section>
  );
};

export default ProgramEvents;
