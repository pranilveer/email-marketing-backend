const mongoose = require("mongoose");

const nodeSchema = new mongoose.Schema({
  id: { type: String, required: true },
  type: { type: String, required: true },
  data: {
    label: { type: String, required: true },
  },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
});

const edgeSchema = new mongoose.Schema({
  id: { type: String, required: true },
  source: { type: String, required: true },
  target: { type: String, required: true },
});

const flowchartSchema = new mongoose.Schema({
  nodes: { type: [nodeSchema], required: true },
  edges: { type: [edgeSchema], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Flowchart", flowchartSchema);