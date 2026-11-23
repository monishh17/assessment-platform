import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Test.css";

function ExamLayout({ testId, questions, testName, duration }) {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [review, setReview] = useState([]);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [submitted, setSubmitted] = useState(false);

  const question = questions?.[currentQuestion];

  // COUNTDOWN TIMER
  useEffect(() => {
    if (submitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  // SELECT ANSWER
  function selectAnswer(option) {
    const currentAnswers = answers[currentQuestion] || [];

    if (question.type === "single") {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion]: [option],
      }));
    } else {
      const updatedAnswers = currentAnswers.includes(option)
        ? currentAnswers.filter((item) => item !== option)
        : [...currentAnswers, option];

      setAnswers((prev) => ({
        ...prev,
        [currentQuestion]: updatedAnswers,
      }));
    }
  }

  // MARK FOR REVIEW
  function toggleReview() {
    setReview((prev) =>
      prev.includes(currentQuestion)
        ? prev.filter((item) => item !== currentQuestion)
        : [...prev, currentQuestion]
    );
  }

  // SUBMIT EXAM
  const handleSubmit = useCallback(async () => {
    if (submitted || !questions) return;

    setSubmitted(true);

    let score = 0;

    questions.forEach((question, index) => {
      const selected = [...(answers[index] || [])].sort();
      const correct = [...question.answer].sort();

      const isCorrect =
        selected.length === correct.length &&
        selected.every((answer, i) => answer === correct[i]);

      if (isCorrect) score++;
    });

    const resultData = {
      score,
      total: questions.length,
      answers,
      questions,
      testName,
      completedAt: new Date().toLocaleString(),
    };

    try {
      const token = sessionStorage.getItem("token");

      const response = await fetch("https://assessment-platform-yypg.onrender.com/api/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          testId,
          testName,
          score,
          totalQuestions: questions.length,
          answers,
          questions,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save result");
      }

      console.log("Result saved:", data);

      navigate(`/result/${testId}`, { state: resultData });
    } catch (error) {
      console.error("Error saving result:", error);

      alert("Could not save your result. Please check your backend.");

      navigate(`/result/${testId}`, { state: resultData });
    }
  }, [submitted, questions, answers, navigate, testId, testName]);

  // AUTOMATIC SUBMISSION
  useEffect(() => {
    if (timeLeft === 0 && !submitted && questions) {
      handleSubmit();
    }
  }, [timeLeft, submitted, questions, handleSubmit]);

  // INVALID TEST CHECK
  if (!questions || questions.length === 0) {
    return <h2>Assessment not found!</h2>;
  }

  // TIMER FORMAT
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="exam-page">
      <header className="exam-header">
        <h2>{testName}</h2>

        <div className="exam-timer">
          Time Left: {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </div>
      </header>

      <main className="exam-container">
        <div className="question-section">
          <div className="question-heading">
            <h3>
              Question {currentQuestion + 1} of {questions.length}
            </h3>

            <span>
              {question.type === "single"
                ? "Single Select"
                : "Multiple Select"}
            </span>
          </div>

          <div className="question-box">
            <h3>{question.question}</h3>

            <p className="question-instruction">
              {question.type === "single"
                ? "Select one option."
                : "Select all correct options."}
            </p>

            <div className="exam-options">
              {question.options.map((option, index) => {
                const selected = (
                  answers[currentQuestion] || []
                ).includes(option);

                return (
                  <label
                    key={index}
                    className={`exam-option ${
                      selected ? "selected" : ""
                    }`}
                  >
                    <input
                      type={
                        question.type === "single" ? "radio" : "checkbox"
                      }
                      name={`question-${currentQuestion}`}
                      checked={selected}
                      onChange={() => selectAnswer(option)}
                    />

                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className="exam-actions">
            <button
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>

            <button className="review-btn" onClick={toggleReview}>
              {review.includes(currentQuestion)
                ? "Remove Review"
                : "Mark for Review"}
            </button>

            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
              >
                Next
              </button>
            ) : (
              <button className="submit-btn" onClick={handleSubmit}>
                Submit Exam
              </button>
            )}
          </div>
        </div>

        {/* QUESTION PALETTE */}
        <aside className="question-palette">
          <h3>Question Palette</h3>

          <div className="palette-grid">
            {questions.map((q, index) => (
              <button
                key={q.id}
                className={`
                  ${currentQuestion === index ? "active-question" : ""}
                  ${answers[index]?.length ? "answered-question" : ""}
                  ${review.includes(index) ? "review-question" : ""}
                `}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="palette-legend">
            <p>🟢 Answered</p>
            <p>⚪ Not Answered</p>
            <p>🟡 Marked for Review</p>
          </div>

          <button className="palette-submit" onClick={handleSubmit}>
            Submit Exam
          </button>
        </aside>
      </main>
    </div>
  );
}

export default ExamLayout;