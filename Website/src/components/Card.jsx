import React from "react";

const Card = () => {
  const cards = [
    {
      title: "Admissions 2024-25",
      content: ["Committees", "CET 2024 Results"],
      buttonText: "Apply Online..",
    },
    {
      title: "Important Links",
      content: ["IPU Samarth Login", "Viksit Bharat @2047"],
      buttonText: "University Schools",
    },
    {
      title: "Students",
      content: [
        "Students of State Universities of Delhi",
        "Financial Assistance to the students Under Economically Weaker Section (EWS) Scheme-2019-20",
        "ACM-USICT",
        "USS Placement Coordinators",
        "Alumni Portal",
        "NCC Cadet Enrolment Drive",
      ],
      buttonText: "Online Fee Services",
    },
    {
      title: "Alerts",
      content: [
        "For Programme M.Tech. (Nano Technology) (Regular) (CET Code: 149)",
        "Notice regarding Counselling/Admission of B.Sc./M.Sc. Dual Degree (Physics, Chemistry, Mathematics) CET Code 137, Academic Session 2024-25",
        "Schedule of Extended Open",
      ],
      buttonText: "Notices / Circulars",
    },
  ];

  return (
    <div className="container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.title}</h3>
          <hr />
          <div className="scrollable-content">
          <ul>
              {card.content.map((item, idx) => (
                <a href="#"><li key={idx}>{item}</li></a>
              ))}
            </ul>
          </div>
          <button>{card.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
