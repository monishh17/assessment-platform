const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    saveAssessmentResult,
    getPreviousResults,
    getResultById
} = require("../controllers/assessmentResultController");

// Save assessment result
router.post("/", protect, saveAssessmentResult);

// Get previous results
router.get("/", protect, getPreviousResults);

// Get individual result
router.get("/:id", protect, getResultById);

module.exports = router;