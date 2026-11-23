
import ExamLayout from "../../components/ExamLayout";

const questions = [
  // SINGLE SELECT (1–15)

  {
    id: 1,
    type: "single",
    question: "Who created Python?",
    options: [
      "James Gosling",
      "Guido van Rossum",
      "Dennis Ritchie",
      "Brendan Eich",
    ],
    answer: ["Guido van Rossum"],
  },
  {
    id: 2,
    type: "single",
    question: "Which file extension is commonly used for Python files?",
    options: [".java", ".py", ".js", ".cpp"],
    answer: [".py"],
  },
  {
    id: 3,
    type: "single",
    question: "Which function displays output in Python?",
    options: ["echo()", "print()", "console.log()", "display()"],
    answer: ["print()"],
  },
  {
    id: 4,
    type: "single",
    question: "Which symbol is used for single-line comments in Python?",
    options: ["//", "/*", "#", "<!--"],
    answer: ["#"],
  },
  {
    id: 5,
    type: "single",
    question: "Which data type stores True or False values?",
    options: ["int", "str", "bool", "float"],
    answer: ["bool"],
  },
  {
    id: 6,
    type: "single",
    question: "Which keyword defines a function in Python?",
    options: ["function", "def", "fun", "define"],
    answer: ["def"],
  },
  {
    id: 7,
    type: "single",
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "//", "%%"],
    answer: ["**"],
  },
  {
    id: 8,
    type: "single",
    question: "Which data structure stores ordered and mutable elements?",
    options: ["Tuple", "Set", "List", "String"],
    answer: ["List"],
  },
  {
    id: 9,
    type: "single",
    question: "Which method adds an element to the end of a list?",
    options: ["add()", "append()", "insertEnd()", "push()"],
    answer: ["append()"],
  },
  {
    id: 10,
    type: "single",
    question: "Which keyword is used for conditional statements?",
    options: ["when", "if", "check", "condition"],
    answer: ["if"],
  },
  {
    id: 11,
    type: "single",
    question: "What is the output of len('Python')?",
    options: ["5", "6", "7", "8"],
    answer: ["6"],
  },
  {
    id: 12,
    type: "single",
    question: "Which loop iterates over a sequence in Python?",
    options: ["for", "switch", "repeat", "foreach"],
    answer: ["for"],
  },
  {
    id: 13,
    type: "single",
    question: "Which keyword handles exceptions in Python?",
    options: ["catch", "except", "error", "handle"],
    answer: ["except"],
  },
  {
    id: 14,
    type: "single",
    question: "Which function converts a value to an integer?",
    options: ["str()", "float()", "int()", "bool()"],
    answer: ["int()"],
  },
  {
    id: 15,
    type: "single",
    question: "Which keyword is used to create a class in Python?",
    options: ["object", "class", "struct", "define"],
    answer: ["class"],
  },

  // MULTIPLE SELECT (16–20)

  {
    id: 16,
    type: "multiple",
    question: "Which of the following are built-in Python data types?",
    options: ["int", "float", "str", "decimal"],
    answer: ["int", "float", "str"],
  },
  {
    id: 17,
    type: "multiple",
    question: "Which of the following are Python collection types?",
    options: ["List", "Tuple", "Set", "Dictionary"],
    answer: ["List", "Tuple", "Set", "Dictionary"],
  },
  {
    id: 18,
    type: "multiple",
    question: "Which of the following are valid Python comparison operators?",
    options: ["==", "!=", ">", "==="],
    answer: ["==", "!=", ">"],
  },
  {
    id: 19,
    type: "multiple",
    question: "Which of the following are Python loop control statements?",
    options: ["break", "continue", "pass", "stop"],
    answer: ["break", "continue", "pass"],
  },
  {
    id: 20,
    type: "multiple",
    question: "Which of the following are built-in Python functions?",
    options: ["print()", "len()", "input()", "displayText()"],
    answer: ["print()", "len()", "input()"],
  },
];

function PythonTest() {
  return (
    <ExamLayout
      testId="python"
      questions={questions}
      testName="Python Assessment"
      duration={35}
    />
  );
}

export default PythonTest;
