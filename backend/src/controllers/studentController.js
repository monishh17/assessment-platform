const Student = require("../models/Student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// STUDENT REGISTRATION
const registerStudent = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            college,
            course,
            year,
            password
        } = req.body;

        // Check required fields
        if (
            !name ||
            !email ||
            !phone ||
            !college ||
            !course ||
            !year ||
            !password
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check existing email
        const existingStudent = await Student.findOne({ email });

        if (existingStudent) {
            return res.status(409).json({
                success: false,
                message: "Email already registered"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save student
        const student = await Student.create({
            name,
            email,
            phone,
            college,
            course,
            year,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "Registration successful",
            student: {
                id: student._id,
                name: student.name,
                email: student.email,
                phone: student.phone,
                college: student.college,
                course: student.course,
                year: student.year
            }
        });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Email already registered"
            });
        }

        res.status(500).json({
            success: false,
            message: "Registration failed",
            error: error.message
        });
    }
};

// STUDENT LOGIN
const loginStudent = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Find student by email
        const student = await Student.findOne({
            email: email.trim().toLowerCase()
        });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            student.password
        );

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: student._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // Send response
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            student: {
                id: student._id,
                name: student.name,
                email: student.email
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Login failed"
        });
    }
};

// GET LOGGED-IN STUDENT PROFILE
const getStudentProfile = async (req, res) => {
    try {
        const student = await Student.findById(req.studentId)
            .select("-password");

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student profile fetched successfully",
            student
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to fetch student profile"
        });
    }
};

module.exports = {
    registerStudent,
    loginStudent,
    getStudentProfile
};