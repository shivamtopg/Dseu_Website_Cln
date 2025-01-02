import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null); // Track file input

  // Fetch notices when the component mounts
  const fetchNotices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/notices");
      setNotices(res.data);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle creating a new notice
  const handleCreateNotice = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      const token = localStorage.getItem("token"); // Get the token from localStorage
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      formData.append("description", description);

      // Send the file and data to the backend
      await axios.post("http://localhost:5000/notices/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setFile(null);
      fetchNotices();
    } catch (error) {
      console.error("Error creating notice:", error);
    }
  };

  // Handle deleting a notice
  const handleDeleteNotice = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/notices/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNotices(); // Refresh the notices list
    } catch (error) {
      console.error("Error deleting notice:", error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleCreateNotice}>
        <input
          type="file"
          onChange={handleFileChange} // Handle file selection
          required
        />
        <button type="submit">Create Notice</button>
      </form>

      <h2>Notices</h2>
      <ul>
        {notices.map((notice) => (
          <li key={notice._id}>
            <h3>{notice.title}</h3>
            <p>{notice.description}</p>
            <a
              href={`http://localhost:5000/${notice.filepath}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View File
            </a>
            <button onClick={() => handleDeleteNotice(notice._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
