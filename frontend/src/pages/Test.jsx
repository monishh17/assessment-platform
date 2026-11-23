
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Test.css";

// QUESTION BANK

const testQuestions = {
  // JAVASCRIPT ASSESSMENT

 javascript: [
  // SINGLE SELECT QUESTIONS (1–15)

  {
    id: 1,
    type: "single",
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: ["const"],
  },
  {
    id: 2,
    type: "single",
    question: "Which method is used to display output in the browser console?",
    options: ["console.log()", "print()", "display()", "document.writeLog()"],
    answer: ["console.log()"],
  },
  {
    id: 3,
    type: "single",
    question: "What is the output of typeof 'Hello'?",
    options: ["number", "string", "boolean", "object"],
    answer: ["string"],
  },
  {
    id: 4,
    type: "single",
    question: "Which operator checks both value and data type?",
    options: ["==", "=", "===", "!="],
    answer: ["==="],
  },
  {
    id: 5,
    type: "single",
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: ["push()"],
  },
  {
    id: 6,
    type: "single",
    question: "Which keyword is used to define a function?",
    options: ["function", "method", "define", "func"],
    answer: ["function"],
  },
  {
    id: 7,
    type: "single",
    question: "What is the output of Boolean(0)?",
    options: ["true", "false", "undefined", "null"],
    answer: ["false"],
  },
  {
    id: 8,
    type: "single",
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "#"],
    answer: ["//"],
  },
  {
    id: 9,
    type: "single",
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    answer: ["JSON.parse()"],
  },
  {
    id: 10,
    type: "single",
    question: "Which array method creates a new array by transforming every element?",
    options: ["filter()", "map()", "find()", "reduce()"],
    answer: ["map()"],
  },
  {
    id: 11,
    type: "single",
    question: "What is the output of 5 + '5'?",
    options: ["10", "55", "Error", "NaN"],
    answer: ["55"],
  },
  {
    id: 12,
    type: "single",
    question: "Which statement is used to handle errors in JavaScript?",
    options: ["try...catch", "if...else", "for...in", "switch"],
    answer: ["try...catch"],
  },
  {
    id: 13,
    type: "single",
    question: "Which method removes the last element from an array?",
    options: ["shift()", "push()", "pop()", "slice()"],
    answer: ["pop()"],
  },
  {
    id: 14,
    type: "single",
    question: "Which keyword is used to create a class in JavaScript?",
    options: ["object", "class", "constructor", "struct"],
    answer: ["class"],
  },
  {
    id: 15,
    type: "single",
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Ordinance Model",
      "Document Oriented Method",
    ],
    answer: ["Document Object Model"],
  },

  // MULTIPLE SELECT QUESTIONS (16–20)

  {
    id: 16,
    type: "multiple",
    question: "Which of the following are JavaScript data types?",
    options: ["String", "Number", "Boolean", "Float"],
    answer: ["String", "Number", "Boolean"],
  },
  {
    id: 17,
    type: "multiple",
    question: "Which of the following are array methods?",
    options: ["map()", "filter()", "reduce()", "repeat()"],
    answer: ["map()", "filter()", "reduce()"],
  },
  {
    id: 18,
    type: "multiple",
    question: "Which of the following are looping statements in JavaScript?",
    options: ["for", "while", "do...while", "repeat"],
    answer: ["for", "while", "do...while"],
  },
  {
    id: 19,
    type: "multiple",
    question: "Which of the following are JavaScript logical operators?",
    options: ["&&", "||", "!", "&"],
    answer: ["&&", "||", "!"],
  },
  {
    id: 20,
    type: "multiple",
    question: "Which of the following can declare variables in JavaScript?",
    options: ["var", "let", "const", "define"],
    answer: ["var", "let", "const"],
  },
],

  // REACT ASSESSMENT
  // 15 SINGLE SELECT + 5 MULTIPLE SELECT

  react: [
    {
      id: 1,
      type: "single",
      question: "What is React?",
      options: [
        "JavaScript Library",
        "Programming Language",
        "Database",
        "Operating System",
      ],
      answer: ["JavaScript Library"],
    },
    {
      id: 2,
      type: "single",
      question: "Which company developed React?",
      options: ["Google", "Facebook (Meta)", "Microsoft", "Amazon"],
      answer: ["Facebook (Meta)"],
    },
    {
      id: 3,
      type: "single",
      question: "What is JSX?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JSON XML",
        "JavaScript Extra",
      ],
      answer: ["JavaScript XML"],
    },
    {
      id: 4,
      type: "single",
      question: "Which hook is used to manage state in functional components?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: ["useState"],
    },
    {
      id: 5,
      type: "single",
      question: "Which method is used to render a React application into the DOM?",
      options: [
        "React.render()",
        "createRoot()",
        "useState()",
        "component()",
      ],
      answer: ["createRoot()"],
    },
    {
      id: 6,
      type: "single",
      question: "What are props in React?",
      options: [
        "Internal component state",
        "Data passed from parent to child",
        "CSS properties",
        "Database values",
      ],
      answer: ["Data passed from parent to child"],
    },
    {
      id: 7,
      type: "single",
      question: "Which hook is used to perform side effects?",
      options: ["useState", "useEffect", "useContext", "useRef"],
      answer: ["useEffect"],
    },
    {
      id: 8,
      type: "single",
      question: "How do you pass data from a parent component to a child component?",
      options: ["Using props", "Using CSS", "Using HTML", "Using DOM"],
      answer: ["Using props"],
    },
    {
      id: 9,
      type: "single",
      question: "Which operator is commonly used to render elements conditionally in JSX?",
      options: [
        "Assignment operator",
        "Ternary operator",
        "Bitwise operator",
        "Typeof operator",
      ],
      answer: ["Ternary operator"],
    },
    {
      id: 10,
      type: "single",
      question: "Why is the key prop used when rendering lists in React?",
      options: [
        "To style elements",
        "To identify elements between renders",
        "To create components",
        "To manage API requests",
      ],
      answer: ["To identify elements between renders"],
    },
    {
      id: 11,
      type: "single",
      question: "Which hook allows components to access context values?",
      options: ["useState", "useEffect", "useContext", "useMemo"],
      answer: ["useContext"],
    },
    {
      id: 12,
      type: "single",
      question: "What happens when a component's state is updated using its setter function?",
      options: [
        "The browser closes",
        "React schedules a re-render",
        "The component is deleted",
        "The application restarts",
      ],
      answer: ["React schedules a re-render"],
    },
    {
      id: 13,
      type: "single",
      question: "Which hook is used to access a DOM element directly?",
      options: ["useState", "useEffect", "useRef", "useContext"],
      answer: ["useRef"],
    },
    {
      id: 14,
      type: "single",
      question: "Which React Router component is used to define a route?",
      options: ["BrowserRouter", "Route", "Link", "Navigate"],
      answer: ["Route"],
    },
    {
      id: 15,
      type: "single",
      question: "What is the purpose of useMemo?",
      options: [
        "To memoize calculated values",
        "To navigate between pages",
        "To update the DOM manually",
        "To create event handlers automatically",
      ],
      answer: ["To memoize calculated values"],
    },

    // MULTIPLE SELECT QUESTIONS

    {
      id: 16,
      type: "multiple",
      question: "Which of the following are React hooks?",
      options: ["useState", "useEffect", "useContext", "createElement"],
      answer: ["useState", "useEffect", "useContext"],
    },
    {
      id: 17,
      type: "multiple",
      question: "Which of the following are valid ways to handle events in React?",
      options: ["onClick", "onChange", "onSubmit", "onclick"],
      answer: ["onClick", "onChange", "onSubmit"],
    },
    {
      id: 18,
      type: "multiple",
      question: "Which of the following are valid React component characteristics?",
      options: [
        "Components can accept props",
        "Components can maintain state",
        "Components can be reused",
        "Components must directly modify the DOM",
      ],
      answer: [
        "Components can accept props",
        "Components can maintain state",
        "Components can be reused",
      ],
    },
    {
      id: 19,
      type: "multiple",
      question: "Which of the following are valid ways to conditionally render JSX?",
      options: [
        "Ternary operator",
        "Logical AND (&&)",
        "if statement before the return",
        "CSS comments",
      ],
      answer: [
        "Ternary operator",
        "Logical AND (&&)",
        "if statement before the return",
      ],
    },
    {
      id: 20,
      type: "multiple",
      question: "Which of the following are commonly used React Router features?",
      options: ["BrowserRouter", "Routes", "Route", "useState"],
      answer: ["BrowserRouter", "Routes", "Route"],
    },
  ],

  // NODE.JS ASSESSMENT

 node: [
  // SINGLE SELECT QUESTIONS (1–15)

  {
    id: 1,
    type: "single",
    question: "What is Node.js?",
    options: [
      "A JavaScript runtime environment",
      "A programming language",
      "A database",
      "A CSS framework",
    ],
    answer: ["A JavaScript runtime environment"],
  },
  {
    id: 2,
    type: "single",
    question: "Which JavaScript engine does Node.js use?",
    options: ["SpiderMonkey", "V8", "Chakra", "JavaScriptCore"],
    answer: ["V8"],
  },
  {
    id: 3,
    type: "single",
    question: "Which command checks the installed Node.js version?",
    options: ["node --version", "npm --version", "node install", "node check"],
    answer: ["node --version"],
  },
  {
    id: 4,
    type: "single",
    question: "Which object provides information about the current Node.js process?",
    options: ["window", "document", "process", "console"],
    answer: ["process"],
  },
  {
    id: 5,
    type: "single",
    question: "Which property provides command-line arguments?",
    options: ["process.args", "process.argv", "process.params", "process.input"],
    answer: ["process.argv"],
  },
  {
    id: 6,
    type: "single",
    question: "Which command initializes a Node.js project?",
    options: ["npm start", "npm init", "node create", "npm install"],
    answer: ["npm init"],
  },
  {
    id: 7,
    type: "single",
    question: "What is the default package configuration filename?",
    options: ["node.json", "config.json", "package.json", "npm.json"],
    answer: ["package.json"],
  },
  {
    id: 8,
    type: "single",
    question: "Which module is used to work with files in Node.js?",
    options: ["http", "fs", "url", "events"],
    answer: ["fs"],
  },
  {
    id: 9,
    type: "single",
    question: "Which method reads a file asynchronously?",
    options: ["fs.readFile()", "fs.readFileSync()", "fs.openSync()", "fs.writeFileSync()"],
    answer: ["fs.readFile()"],
  },
  {
    id: 10,
    type: "single",
    question: "Which module is used to create file paths?",
    options: ["http", "path", "events", "os"],
    answer: ["path"],
  },
  {
    id: 11,
    type: "single",
    question: "Which keyword is used to import modules in ES Modules?",
    options: ["require", "include", "import", "load"],
    answer: ["import"],
  },
  {
    id: 12,
    type: "single",
    question: "Which method creates a new HTTP server?",
    options: [
      "http.createServer()",
      "http.newServer()",
      "http.start()",
      "http.server()",
    ],
    answer: ["http.createServer()"],
  },
  {
    id: 13,
    type: "single",
    question: "What is Express.js?",
    options: [
      "A database",
      "A Node.js web framework",
      "A programming language",
      "A browser",
    ],
    answer: ["A Node.js web framework"],
  },
  {
    id: 14,
    type: "single",
    question: "Which method is commonly used to define a GET route in Express?",
    options: ["app.post()", "app.put()", "app.get()", "app.delete()"],
    answer: ["app.get()"],
  },
  {
    id: 15,
    type: "single",
    question: "Which object contains information about an incoming HTTP request in Express?",
    options: ["res", "req", "app", "next"],
    answer: ["req"],
  },

  // MULTIPLE SELECT QUESTIONS (16–20)

  {
    id: 16,
    type: "multiple",
    question: "Which of the following are built-in Node.js modules?",
    options: ["fs", "path", "http", "React"],
    answer: ["fs", "path", "http"],
  },
  {
    id: 17,
    type: "multiple",
    question: "Which of the following are valid npm commands?",
    options: [
      "npm install",
      "npm init",
      "npm start",
      "npm execute",
    ],
    answer: ["npm install", "npm init", "npm start"],
  },
  {
    id: 18,
    type: "multiple",
    question: "Which of the following are ways to handle asynchronous operations in JavaScript?",
    options: ["Callbacks", "Promises", "async/await", "HTML"],
    answer: ["Callbacks", "Promises", "async/await"],
  },
  {
    id: 19,
    type: "multiple",
    question: "Which HTTP methods are commonly used in REST APIs?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: ["GET", "POST", "PUT", "DELETE"],
  },
  {
    id: 20,
    type: "multiple",
    question: "Which properties are available on the Express response object?",
    options: ["res.send()", "res.json()", "res.status()", "res.argv"],
    answer: ["res.send()", "res.json()", "res.status()"],
  },
],
};


// ASSESSMENT DETAILS

const testNames = {
  javascript: "JavaScript Assessment",
  react: "React Assessment",
  node: "Node.js Assessment",
};

const durations = {
  javascript: 30,
  react: 40,
  node: 30,
};


// MAIN COMPONENT

function Test() {
  const navigate = useNavigate();
  const { testId } = useParams();

  const questions = testQuestions[testId];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [review, setReview] = useState([]);
  const [timeLeft, setTimeLeft] = useState(
    (durations[testId] || 30) * 60
  );

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

  function handleSubmit() {
    if (submitted) return;

    setSubmitted(true);

    let score = 0;

    questions.forEach((question, index) => {
      const selected = [...(answers[index] || [])].sort();
      const correct = [...question.answer].sort();

      const isCorrect =
        selected.length === correct.length &&
        selected.every((answer, i) => answer === correct[i]);

      if (isCorrect) {
        score++;
      }
    });

    navigate(`/result/${testId}`, {
      state: {
        score,
        total: questions.length,
        answers,
        questions,
        testName: testNames[testId],
      },
    });
  }

  // AUTOMATIC SUBMISSION

  useEffect(() => {
    if (timeLeft === 0 && !submitted && questions) {
      handleSubmit();
    }
  }, [timeLeft, submitted]);

  // INVALID TEST CHECK

  if (!questions) {
    return <h2>Assessment not found!</h2>;
  }

  // TIMER FORMAT

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="exam-page">

      <header className="exam-header">
        <h2>{testNames[testId]}</h2>

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
                        question.type === "single"
                          ? "radio"
                          : "checkbox"
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
              onClick={() =>
                setCurrentQuestion((prev) => prev - 1)
              }
              disabled={currentQuestion === 0}
            >
              Previous
            </button>

            <button
              className="review-btn"
              onClick={toggleReview}
            >
              {review.includes(currentQuestion)
                ? "Remove Review"
                : "Mark for Review"}
            </button>

            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={() =>
                  setCurrentQuestion((prev) => prev + 1)
                }
              >
                Next
              </button>
            ) : (
              <button
                className="submit-btn"
                onClick={handleSubmit}
              >
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

          <button
            className="palette-submit"
            onClick={handleSubmit}
          >
            Submit Exam
          </button>

        </aside>

      </main>
    </div>
  );
}

export default Test;
