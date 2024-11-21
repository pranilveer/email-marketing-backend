const express = require("express");
const agenda = require("../agenda");

const router = express.Router();

router.post("/schedule", async (req, res) => {
  const { email, subject, body } = req.body;

  try {
    await agenda.schedule("in 1 hour", "send email", { email, subject, body });
    res.status(200).json({ message: "Email scheduled successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to schedule email" });
  }
});

module.exports = router;