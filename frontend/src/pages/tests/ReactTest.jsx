import ExamLayout from "../../components/ExamLayout";

const questions = [
  // SINGLE SELECT (1–15)

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
    question: "Which hook manages state in functional components?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: ["useState"],
  },
  {
    id: 5,
    type: "single",
    question: "Which method renders a React application into the DOM?",
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
    question: "Which hook performs side effects?",
    options: ["useState", "useEffect", "useContext", "useRef"],
    answer: ["useEffect"],
  },
  {
    id: 8,
    type: "single",
    question: "How do you pass data from a parent to a child component?",
    options: ["Using props", "Using CSS", "Using HTML", "Using DOM"],
    answer: ["Using props"],
  },
  {
    id: 9,
    type: "single",
    question: "Which operator is commonly used for conditional rendering in JSX?",
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
    question: "What happens when a component's state is updated?",
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
    question: "Which hook accesses a DOM element directly?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    answer: ["useRef"],
  },
  {
    id: 14,
    type: "single",
    question: "Which React Router component defines a route?",
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

  // MULTIPLE SELECT (16–20)

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
    question: "Which are valid ways to handle events in React?",
    options: ["onClick", "onChange", "onSubmit", "onclick"],
    answer: ["onClick", "onChange", "onSubmit"],
  },
  {
    id: 18,
    type: "multiple",
    question: "Which are valid React component characteristics?",
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
    question: "Which are valid ways to conditionally render JSX?",
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
    question: "Which are commonly used React Router features?",
    options: ["BrowserRouter", "Routes", "Route", "useState"],
    answer: ["BrowserRouter", "Routes", "Route"],
  },
];

function ReactTest() {
  return (
    <ExamLayout
      testId="react"
      questions={questions}
      testName="React Assessment"
      duration={40}
    />
  );
}

export default ReactTest;
