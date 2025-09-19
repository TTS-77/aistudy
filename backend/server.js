// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy login API
app.post("/api/login", (req, res) => {
  const { email, password, role } = req.body;

  // Simple validation (replace with DB check later)
  if (email === "student@test.com" && password === "1234" && role === "student") {
    return res.json({ success: true, message: "Student login successful" });
  }
  if (email === "teacher@test.com" && password === "1234" && role === "teacher") {
    return res.json({ success: true, message: "Teacher login successful" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
