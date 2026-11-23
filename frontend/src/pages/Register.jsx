import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        course: "",
        year: "",
        password: "",
        confirmPassword: ""
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const { confirmPassword, ...studentData } = formData;

            const response = await fetch(
                "https://assessment-platform-yypg.onrender.com/api/students/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(studentData)
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Registration successful!");
                navigate("/");
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error("Registration Error:", error);
            alert("Unable to connect to server");
        }
    }

    return (
        <div className="register-page">

            <div className="register-box">

                <div className="register-header">
                    <h1>Gradious Assessment</h1>
                    <p>Create your student account</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="register-grid">

                        <div className="register-field">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="register-field">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="register-field">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                pattern="[0-9]{10}"
                                maxLength="10"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="register-field">
                            <label>College Name</label>
                            <input
                                type="text"
                                name="college"
                                placeholder="Enter your college name"
                                value={formData.college}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="register-field">
                            <label>Course / Branch</label>
                            <input
                                type="text"
                                name="course"
                                placeholder="e.g. B.Tech CSE"
                                value={formData.course}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="register-field">
                            <label>Year of Study</label>
                            <select
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select your year</option>
                                <option value="1st Year">1st Year</option>
                                <option value="2nd Year">2nd Year</option>
                                <option value="3rd Year">3rd Year</option>
                                <option value="4th Year">4th Year</option>
                                <option value="Graduated">Graduated</option>
                            </select>
                        </div>

                        <div className="register-field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Create a password"
                                minLength="8"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="register-field">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                minLength="8"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <button type="submit" className="register-btn">
                        Create Account
                    </button>

                </form>

                <p className="login-text">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/")}>
                        Login
                    </span>
                </p>

            </div>

        </div>
    );
}

export default Register;