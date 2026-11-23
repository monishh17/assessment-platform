import ExamLayout from "../../components/ExamLayout";

const questions = [
  // SINGLE SELECT (1–15)

  {
    id: 1,
    type: "single",
    question: "Which keyword declares a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: ["const"],
  },
  {
    id: 2,
    type: "single",
    question: "Which method displays output in the browser console?",
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
    question: "Which symbol is used for single-line comments?",
    options: ["<!-- -->", "//", "/* */", "#"],
    answer: ["//"],
  },
  {
    id: 9,
    type: "single",
    question: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
    answer: ["JSON.parse()"],
  },
  {
    id: 10,
    type: "single",
    question: "Which array method transforms every element?",
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
    question: "Which statement handles errors in JavaScript?",
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
    question: "Which keyword creates a class in JavaScript?",
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

  // MULTIPLE SELECT (16–20)

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
    question: "Which are looping statements in JavaScript?",
    options: ["for", "while", "do...while", "repeat"],
    answer: ["for", "while", "do...while"],
  },
  {
    id: 19,
    type: "multiple",
    question: "Which are JavaScript logical operators?",
    options: ["&&", "||", "!", "&"],
    answer: ["&&", "||", "!"],
  },
  {
    id: 20,
    type: "multiple",
    question: "Which keywords can declare variables in JavaScript?",
    options: ["var", "let", "const", "define"],
    answer: ["var", "let", "const"],
  },
];

function JSTest() {
  return (
    <ExamLayout
      testId="javascript"
      questions={questions}
      testName="JavaScript Assessment"
      duration={30}
    />
  );
}

export default JSTest;
