import React, { useState } from "react";
import Library from "../assets/Library.png";
// Facility Data
const facilities = [
  {
    id: 1,
    name: "Seminar Halls",
    image: Library,
    description: `Our state-of-the-art Seminar Hall is the perfect venue for academic discussions, workshops, and thought-provoking events. Designed to foster collaboration and engagement, the hall is equipped with:
    Our state-of-the-art Seminar Hall is the perfect venue for academic discussions, workshops, and thought-provoking events. Designed to foster collaboration and engagement, the hall is equipped with: Enjoy a quiet and comfortable environment for reading and learning.
    `,
  },
  {
    id: 2,
    name: "Library",
    image: Library,
    description: `Our library is a treasure trove of knowledge, offering a vast collection of books, journals, and digital resources for students and researchers. Enjoy a quiet and comfortable environment for reading and learning.
    Our library is a treasure trove of knowledge, offering a vast collection of books, journals, and digital resources for students and researchers. Enjoy a quiet and comfortable environment for reading and learning.`,
  },
  {
    id: 3,
    name: "Sports",
    image: Library,
    description: `Our sports facilities include modern courts and fields for various indoor and outdoor games. We promote physical fitness and team spirit among students through tournaments and events.
    Our library is a treasure trove of knowledge, offering a vast collection of books, journals, and digital resources for students and researchers. Enjoy a quiet and comfortable environment for reading and learning.`,
  },
  {
    id: 4,
    name: "Conference Halls",
    image: Library,
    description: `Our sports facilities include modern courts and fields for various indoor and outdoor games. We promote physical fitness and team spirit among students through tournaments and events.
    Our library is a treasure trove of knowledge, offering a vast collection of books, journals, and digital resources for students and researchers. Enjoy a quiet and comfortable environment for reading and learning.`,
  },
  {
    id: 5,
    name: "Auditorium",
    image: Library,
    description: `Our sports facilities include modern courts and fields for various indoor and outdoor games. We promote physical fitness and team spirit among students through tournaments and events.
    Our library is a treasure trove of knowledge, offering a vast collection of books, journals, and digital resources for students and researchers. Enjoy a quiet and comfortable environment for reading and learning.`,
  },
  {
    id: 6,
    name: "Computer Labs",
    image: Library,
    description: `Our sports facilities include modern courts and fields for various indoor and outdoor games. We promote physical fitness and team spirit among students through tournaments and events.
    Our library is a treasure trove of knowledge, offering a vast collection of books, journals, and digital resources for students and researchers. Enjoy a quiet and comfortable environment for reading and learning.`,
  },
  {
    id: 7,
    name: "Medical Rooms",
    image: Library,
    description: `Our sports facilities include modern courts and fields for various indoor and outdoor games. We promote physical fitness and team spirit among students through tournaments and events.
    Our library is a treasure trove of knowledge, offering a vast collection of books, journals, and digital resources for students and researchers. Enjoy a quiet and comfortable environment for reading and learning.`,
  },
  {
    id: 8,
    name: "Stationary",
    image: Library,
    description: `Our sports facilities include modern courts and fields for various indoor and outdoor games. We promote physical fitness and team spirit among students through tournaments and events.
    Our library is a treasure trove of knowledge, offering a vast collection of books, journals, and digital resources for students and researchers. Enjoy a quiet and comfortable environment for reading and learning.`,
  },
  {
    id: 9,
    name: "Bank Facility",
    image: Library,
    description: `Our sports facilities include modern courts and fields for various indoor and outdoor games. We promote physical fitness and team spirit among students through tournaments and events.
    Our library is a treasure trove of knowledge, offering a vast collection of books, journals, and digital resources for students and researchers. Enjoy a quiet and comfortable environment for reading and learning.`,
  },
];

const Facilities = () => {
  const [currentFacility, setCurrentFacility] = useState(facilities[0]);

  const handleFacilityClick = (facility) => {
    setCurrentFacility(facility);
  };

  return (
    <div className="app">
      {/* Facilities Navigation */}
      <div className="facilities">
        <h3>Facilities</h3>
        <ul>
          {facilities.map((facility) => (
            <li
              key={facility.id}
              className={currentFacility.id === facility.id ? "active" : ""}
              onClick={() => handleFacilityClick(facility)}
            >
              {facility.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Section */}
      <div className="content">
        <h2 className="header-title">{currentFacility.name}</h2>
        <img
          src={currentFacility.image}
          alt={currentFacility.name}
          className="facility-image"
        />
        <p className="seminar-description">{currentFacility.description}</p>
      </div>
    </div>
  );
};

export default Facilities;
