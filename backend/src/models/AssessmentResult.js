const mongoose = require("mongoose");

const assessmentResultSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },

        testId: {
            type: String,
            required: true
        },

        testName: {
            type: String,
            required: true
        },

        score: {
            type: Number,
            required: true
        },

        totalQuestions: {
            type: Number,
            required: true
        },

        percentage: {
            type: Number,
            required: true
        },

        answers: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },

        questions: {
            type: Array,
            required: true
        },

        attemptNumber: {
            type: Number,
            required: true
        },

        completedAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

const AssessmentResult = mongoose.model(
    "AssessmentResult",
    assessmentResultSchema
);

module.exports = AssessmentResult;