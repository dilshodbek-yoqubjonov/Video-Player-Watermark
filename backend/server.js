const express = require("express");
const path = require("path");
const fs = require("fs"); // fs modulini import qilish

const app = express();
const port = 3000;

const videosDir = path.join(__dirname, "../videos");

// Static fayllar uchun papka
app.use(express.static(path.join(__dirname, "../frontend")));

// Bosh sahifa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "index.html")); // frontend uchun
});

// Video fayllarni yuborish
app.get("/videos/:filename", (req, res) => {
  const { filename } = req.params;
  const videoPath = path.join(videosDir, filename);

  if (!fs.existsSync(videoPath)) {
    return res.status(404).send("Video not found");
  }

  // Videoni yuborish
  res.sendFile(videoPath);
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishga tushdi`);
});
