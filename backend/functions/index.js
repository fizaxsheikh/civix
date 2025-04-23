const fs = require("fs");
const path = require("path");
const express = require("express");
const functions = require("firebase-functions");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const admin = require("firebase-admin");
require("dotenv").config();

// === Initialize Firebase Admin ===
admin.initializeApp();
const db = admin.firestore();

// Optional: connect to emulator (default Firestore port is 8080)
if (process.env.FUNCTIONS_EMULATOR === "true") {
  db.settings({ host: "localhost:8080", ssl: false });
}

// === App Setup ===
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// === Dummy Data ===
const usersPath = path.join(__dirname, "dummy-data/users.json");
let users = require("./dummy-data/users.json");
const policies = require("./dummy-data/policies.json");
const events = require("./dummy-data/events.json");
const representatives = require("./dummy-data/representatives.json");

// === GET /policy (with optional zip filtering)
app.get("/policy", (req, res) => {
  const { zip } = req.query;
  const result = zip ? policies.filter(p => p.zip === zip) : policies;
  res.json(result);
});

// === GET /events
app.get("/events", (_req, res) => {
  res.json(events);
});

// === GET /representatives
app.get("/representatives", (_req, res) => {
  res.json(representatives);
});

// === GET /user/:id (from Firestore)
app.get("/user/:id", async (req, res) => {
  try {
    const doc = await db.collection("users").doc(req.params.id).get();

    if (!doc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(doc.data());
  } catch (error) {
    console.error("🔥 Error fetching user:", error.message);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// === POST /user (sign up — saves to Firestore)
app.post("/user", async (req, res) => {
  const newUser = {
    id: uuidv4(),
    ...req.body,
    lastLogin: new Date().toISOString()
  };

  try {
    await db.collection("users").doc(newUser.id).set(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("🔥 Error creating user:", error.message, error.stack);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// === Export the API function
exports.api = functions.https.onRequest(app);
