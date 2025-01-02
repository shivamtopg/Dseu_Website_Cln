require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const adminRoutes = require("./routes/admin");
const noticeRoutes = require("./routes/notices");
const cors = require("cors");

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/uploads", express.static("uploads"));
app.use("/admin", adminRoutes);
app.use("/notices", noticeRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
