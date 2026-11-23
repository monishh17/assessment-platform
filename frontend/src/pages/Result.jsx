import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./Result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { testId } = useParams();

  const result = location.state;

  if (!result) {
    return (
      <div className="result-container">
        <h2>Result not available!</h2>
        <button onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </button>
      </div>
    );
  }

  const percentage = Math.round(
    (result.score / result.total) * 100
  );

  return (
    <div className="result-container">
      <div className="result-card">
        <h1>Assessment Completed!</h1>

        <h2>{result.testName}</h2>

        <div className="score-circle">
          <h1>{result.score}/{result.total}</h1>
          <p>Your Score</p>
        </div>

        <h3>{percentage}%</h3>

        <p>
          {percentage >= 50
            ? "Congratulations! You passed the assessment."
            : "Keep practicing. You can do better!"}
        </p>

        <button onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Result;