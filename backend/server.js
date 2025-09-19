// backend/server.js
const multer = require("multer");
const path = require("path");
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

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // files go into backend/uploads
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// File upload route
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }
  return res.json({ success: true, message: "File uploaded successfully", filename: req.file.filename });
});
// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
