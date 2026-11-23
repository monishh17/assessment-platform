const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./src/config/db");

const studentRoutes = require("./src/routes/studentRoutes");
const assessmentResultRoutes = require("./src/routes/assessmentResultRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Default route
app.get("/", (req, res) => {
    res.send("Gradious Assessment Platform Backend is Running!");
});

// Health check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend is working successfully!"
    });
});

// API routes
app.use("/api/students", studentRoutes);
app.use("/api/results", assessmentResultRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});