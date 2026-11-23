const express = require("express");
const router = express.Router();

const {
    registerStudent,
    loginStudent,
    getStudentProfile
} = require("../controllers/studentController");

const protect = require("../middleware/authMiddleware");

// Student Registration
router.post("/register", registerStudent);

// Student Login
router.post("/login", loginStudent);

// Protected Student Profile
router.get("/profile", protect, getStudentProfile);

module.exports = router;