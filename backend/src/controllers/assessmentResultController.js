const AssessmentResult = require("../models/AssessmentResult");

const saveAssessmentResult = async (req, res) => {
    try {
        const {
            testId,
            testName,
            score,
            totalQuestions,
            answers,
            questions
        } = req.body;

        if (
            !testId ||
            !testName ||
            score === undefined ||
            !totalQuestions ||
            !answers ||
            !questions
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all assessment result details."
            });
        }

        const previousAttempts = await AssessmentResult.countDocuments({
            studentId: req.studentId,
            testId
        });

        const percentage = (score / totalQuestions) * 100;

        const result = await AssessmentResult.create({
            studentId: req.studentId,
            testId,
            testName,
            score,
            totalQuestions,
            percentage,
            answers,
            questions,
            attemptNumber: previousAttempts + 1
        });

        res.status(201).json({
            success: true,
            message: "Assessment result saved successfully!",
            result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const getPreviousResults = async (req, res) => {
    try {
        const results = await AssessmentResult.find({
            studentId: req.studentId
        }).sort({ completedAt: -1 });

        res.status(200).json({
            success: true,
            count: results.length,
            results
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const getResultById = async (req, res) => {
    try {
        const result = await AssessmentResult.findOne({
            _id: req.params.id,
            studentId: req.studentId
        });

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Assessment result not found."
            });
        }

        res.status(200).json({
            success: true,
            result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {  
    saveAssessmentResult,
    getResultById,
    getPreviousResults };