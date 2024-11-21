const express = require("express");
const Flowchart = require("../models/Flowchart");

const router = express.Router();

router.post("/save", async (req, res) => {
  const { nodes, edges } = req.body;

  try {
    const flowchart = new Flowchart({ nodes, edges });
    await flowchart.save();
    res.status(200).json({ message: "Flowchart saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save flowchart" });
  }
});

module.exports = router;