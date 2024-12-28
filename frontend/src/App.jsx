import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./components/Upload";
import Notices from "./components/Notices";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Notice Management</h1>
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/notices" element={<Notices />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
