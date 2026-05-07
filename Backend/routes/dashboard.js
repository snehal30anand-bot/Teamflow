const express = require("express");
const router = express.Router();

const Task = require("../models/Task");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, async (req, res) => {
  const total = await Task.count();
  const pending = await Task.count({ where: { status: "pending" } });
  const completed = await Task.count({ where: { status: "completed" } });

  res.json({
    total,
    pending,
    completed
  });
});

module.exports = router;