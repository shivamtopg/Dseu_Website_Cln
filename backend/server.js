const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const noticesRoutes = require("./routes/notices");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/", noticesRoutes);
// app.use("/", noticesRoutes);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://divyanshraj0408:dbUserPassword@cluster0.o6qwi.mongodb.net/notices?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
