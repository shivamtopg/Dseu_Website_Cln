import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

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

  const handleCreateNotice = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      formData.append("description", description);

      await axios.post("http://localhost:5000/notices/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setTitle("");
      setDescription("");
      setFile(null);
      fetchNotices();
    } catch (error) {
      console.error("Error creating notice:", error);
    }
  };

  const handleDeleteNotice = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/notices/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNotices();
    } catch (error) {
      console.error("Error deleting notice:", error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleCreateNotice}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
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
            {notice.filepath && (
              <a
                href={`http://localhost:5000/${notice.filepath}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View File
              </a>
            )}
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
