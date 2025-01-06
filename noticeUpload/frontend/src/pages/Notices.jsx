import React, { useEffect, useState } from "react";
import axios from "axios";

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/notices");
        setNotices(res.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div>
      <h1>Notices</h1>
      <ul>
        {notices.map((notice) => (
          <li key={notice._id}>
            <h3>{notice.title}</h3>
            <p>{notice.description}</p>
            {notice.filepath && (
              <a
                href={`http://localhost:5000/${notice.filepath}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View File
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notices;
