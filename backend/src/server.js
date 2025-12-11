// HealthBeauty AI – Backend Server
// Day 1 – 11 Dec 2025 – First heartbeat

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ 
    message: "HealthBeauty AI Backend is LIVE!", 
    status: "running",
    timestamp: new Date().toISOString(),
    author: "Shana Fatima"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Christmas offer loading... 99%");
});
