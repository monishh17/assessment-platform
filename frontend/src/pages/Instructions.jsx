import { useNavigate, useParams } from "react-router-dom";
import "./Instructions.css";

const testDetails = {
  javascript: {
    title: "JavaScript Assessment",
    questions: 20,
    duration: 30,
  },
  react: {
    title: "React Assessment",
    questions: 20,
    duration: 40,
  },
  node: {
    title: "Node.js Assessment",
    questions: 20,
    duration: 30,
  },
  html: {
    title: "HTML Assessment",
    questions: 20,
    duration: 25,
  },
  css: {
    title: "CSS Assessment",
    questions: 20,
    duration: 30,
  },
  java: {
    title: "Java Assessment",
    questions: 20,
    duration: 40,
  },
  python: {
    title: "Python Assessment",
    questions: 20,
    duration: 35,
  },
  sql: {
    title: "SQL Assessment",
    questions: 20,
    duration: 30,
  },
};

function Instructions() {
  const navigate = useNavigate();

  const { testId } = useParams();

  const test = testDetails[testId];

  if (!test) {
    return <h2>Test not found!</h2>;
  }

  return (
    <div className="instructions-page">

      <div className="instructions-box">

        <h1>{test.title}</h1>

        <p className="subtitle">
          Please read the instructions carefully before starting.
        </p>

        <div className="exam-details">

          <div>
            <span>Questions</span>
            <strong>{test.questions}</strong>
          </div>

          <div>
            <span>Duration</span>
            <strong>{test.duration} Minutes</strong>
          </div>

          <div>
            <span>Total Marks</span>
            <strong>{test.questions}</strong>
          </div>

        </div>

        <h3>Examination Instructions</h3>

        <ul>
          <li>Questions contain single-select and multiple-select MCQs.</li>
          <li>Single-select questions allow one answer.</li>
          <li>Multiple-select questions allow multiple answers.</li>
          <li>There is no negative marking.</li>
          <li>The timer starts when you click Start Exam.</li>
          <li>You can navigate between questions.</li>
          <li>Your score will be displayed after submission.</li>
        </ul>

        <button
          className="start-exam-btn"
          onClick={() => navigate(`/test/${testId}`)}
        >
          Start Exam
        </button>

      </div>

    </div>
  );
}

export default Instructions;