const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ heading: "faculty Route" });
});

module.exports = router;
