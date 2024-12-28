const express = require("express");
const multer = require("multer");
const Notice = require("../models/Notice");
const router = express.Router();
const fs = require("fs");
const authenticate = require("../middleware/auth");

const storage = multer.diskStorage({
  //ye file storage ke liye hai
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/upload", authenticate, async (req, res) => {
  //notices upload krne ke liye
  try {
    const notice = new Notice({
      filename: req.file.originalname,
      filepath: req.file.path,
    });
    await notice.save();
    res.status(200).json({ message: "File uploaded successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error uploading file." });
  }
});

router.get("/notices", async (req, res) => {
  //notice fetch krne ke liye
  try {
    const notices = await Notice.find();
    res.status(200).json(notices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch notices" });
  }
});

router.delete("/notices/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const notice = await Notice.findByIdAndDelete(id);

    if (!notice) {
      return res.status(404).json({ error: "Notice not found" });
    }

    fs.unlink(notice.filepath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });

    res.json({ message: "Notice deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
