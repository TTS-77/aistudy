// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pdf = require("pdf-parse");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ---------- Dummy Login API ----------
app.post("/api/login", (req, res) => {
  const { email, password, role } = req.body;

  if (email === "student@test.com" && password === "1234" && role === "student") {
    return res.json({ success: true, message: "Student login successful" });
  }
  if (email === "teacher@test.com" && password === "1234" && role === "teacher") {
    return res.json({ success: true, message: "Teacher login successful" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

// ---------- Configure Storage for Uploads ----------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // files saved in backend/uploads
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ---------- Upload Route ----------
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }
  return res.json({
    success: true,
    message: "File uploaded successfully",
    filename: req.file.filename,
  });
});

// ---------- List Uploaded Files ----------
app.get("/api/uploads", (req, res) => {
  const uploadDir = path.join(__dirname, "uploads");
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).json({ success: false, message: "Failed to read uploads" });
    res.json({ success: true, files });
  });
});

// ---------- AI Summary Endpoint ----------
app.get("/api/summary/:filename", async (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "uploads", filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, message: "File not found" });
  }

  try {
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdf(dataBuffer);

    const text = pdfData.text;

    // Take first ~2000 characters for a richer preview
    const preview = text.substring(0, 2000);

    // Split into sentences
    const sentences = preview.split(/(?<=[.!?])\s+/);

    // Select first 8–10 sentences for a summary
    const selected = sentences.slice(0, 10);

    // Format summary with spacing and bullets
    const formattedSummary =
      "📘 AI Generated Summary\n\n" +
      selected.map((s, i) => `   • ${s.trim()}`).join("\n\n") +
      "\n\n✨ (This is an auto-generated summary preview)";

    res.json({ success: true, aiContent: formattedSummary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to process PDF" });
  }
});



// ---------- Start Server ----------
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
