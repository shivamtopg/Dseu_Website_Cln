const express = require("express");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const Notice = require("../models/Notice");
const router = express.Router();

const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    next();
  });
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post(
  "/upload",
  authenticateAdmin,
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const notice = new Notice({
        filename: req.file.originalname,
        filepath: req.file.path,
      });
      await notice.save();
      res.status(200).json({ message: "File uploaded successfully!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error uploading file." });
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find();
    res.status(200).json(notices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch notices" });
  }
});

router.delete("/delete/:id", authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const notice = await Notice.findByIdAndUpdate(id, { archived: true });
    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }
    res.json({ message: "Notice archived" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error archiving notice" });
  }
});

module.exports = router;
