import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AnswerReview.css";

function AnswerReview() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchResult() {
            try {
                const token = sessionStorage.getItem("token");

                const response = await fetch(
                    `https://assessment-platform-yypg.onrender.com/api/results/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Failed to fetch result");
                }

                setResult(data.result);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchResult();
    }, [id]);

    if (loading) return <h2>Loading answer review...</h2>;

    if (error) return <h2>{error}</h2>;

    if (!result) return <h2>Result not found!</h2>;

    return (
        <div className="answer-review-page">

            <h1>Answer Review</h1>

            <h2>{result.testName}</h2>

            <p>
                Score: {result.score}/{result.totalQuestions}
            </p>

            <button onClick={() => navigate("/previous-results")}>
                Back to Previous Results
            </button>

            {result.questions.map((question, index) => {

                const selected = result.answers[index] || [];
                const correct = question.answer || [];

                const isCorrect =
                    selected.length === correct.length &&
                    [...selected].sort().every(
                        (answer, i) => answer === [...correct].sort()[i]
                    );

                return (
                    <div className="review-question-card" key={question.id || index}>

                        <h3>
                            Question {index + 1}: {question.question}
                        </h3>

                        <p>
                            Your Answer:{" "}
                            {selected.length > 0
                                ? selected.join(", ")
                                : "Not Answered"}
                        </p>

                        <p>
                            Correct Answer: {correct.join(", ")}
                        </p>

                        <h4 className={isCorrect ? "correct-answer" : "wrong-answer"}>
                            {isCorrect ? "Correct Answer ✓" : "Incorrect Answer ✗"}
                        </h4>

                    </div>
                );
            })}

        </div>
    );
}

export default AnswerReview;