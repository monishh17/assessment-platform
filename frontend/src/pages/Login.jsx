import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleLogin(event) {
        event.preventDefault();
        setError("");

        try {
            const response = await fetch(
                "https://assessment-platform-yypg.onrender.com/api/students/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (response.ok) {
                // Store JWT token
                sessionStorage.setItem("token", data.token);

                // Store student details
                sessionStorage.setItem(
                    "student",
                    JSON.stringify(data.student)
                );

                alert("Login successful!");

                navigate("/dashboard");
            } else {
                setError(data.message);
            }

        } catch (error) {
            console.error("Login Error:", error);
            setError("Unable to connect to server");
        }
    }

    return (
        <div className="login-page">
            <div className="login-box">

                <h1>Gradious Assessment</h1>
                <p>Login to continue</p>

                <form onSubmit={handleLogin}>

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    {error && (
                        <p className="login-error">{error}</p>
                    )}

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p className="register-text">
                    Don't have an account?{" "}
                    <span onClick={() => navigate("/register")}>
                        Register
                    </span>
                </p>

            </div>
        </div>
    );
}

export default Login;