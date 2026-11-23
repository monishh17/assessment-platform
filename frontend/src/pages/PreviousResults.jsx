import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PreviousResults.css";

function PreviousResults() {
    const navigate = useNavigate();

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchResults() {
            try {
                const token = sessionStorage.getItem("token");

                const response = await fetch(
                    "http://localhost:5000/api/results",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Failed to fetch results");
                }

                setResults(data.results);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchResults();
    }, []);

    if (loading) return <h2>Loading results...</h2>;

    if (error) return <h2 className="results-error">{error}</h2>;

    return (
        <div className="previous-results-page">

            <div className="results-header">
                <h1>Previous Assessment Results</h1>

                <button
                    className="back-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    Back to Dashboard
                </button>
            </div>

            {results.length === 0 ? (
                <div className="no-results">
                    No previous assessments found.
                </div>
            ) : (
                <div className="results-grid">

                    {results.map((result) => (
                        <div className="result-card" key={result._id}>

                            <h3>{result.testName} Assessment</h3>

                            <p>
                                <strong>Score:</strong>{" "}
                                {result.score}/{result.totalQuestions}
                            </p>

                            <p className="result-percentage">
                                {result.percentage.toFixed(2)}%
                            </p>

                            <p>
                                <strong>Attempt:</strong>{" "}
                                {result.attemptNumber}
                            </p>

                            <p>
                                <strong>Completed:</strong>{" "}
                                {new Date(result.completedAt).toLocaleString()}
                            </p>

                        <button className="view-answers-btn"
                        onClick={() => navigate(`/answer-review/${result._id}`)}>View Answers</button>
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default PreviousResults;