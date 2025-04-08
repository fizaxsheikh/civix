const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));

// === Dummy data ===
const policies = require("./dummy-data/policies.json");
const events = require("./dummy-data/events.json");
const representatives = require("./dummy-data/representatives.json");

// === Routes ===
app.get("/policy", (req, res) => {
  const { zip } = req.query;
  if (zip) {
    const filtered = policies.filter(policy => policy.zip === zip);
    res.json(filtered);
  } else {
    res.json(policies);
  }
});

app.get("/events", (_req, res) => {
  res.json(events);
});

app.get("/representatives", (_req, res) => {
  res.json(representatives);
});

exports.api = functions.https.onRequest(app);