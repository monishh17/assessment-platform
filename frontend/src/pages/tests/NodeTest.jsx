
import ExamLayout from "../../components/ExamLayout";

const questions = [
  // SINGLE SELECT (1–15)

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

  // MULTIPLE SELECT (16–20)

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
    options: ["npm install", "npm init", "npm start", "npm execute"],
    answer: ["npm install", "npm init", "npm start"],
  },
  {
    id: 18,
    type: "multiple",
    question: "Which of the following handle asynchronous operations in JavaScript?",
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
    question: "Which methods are available on the Express response object?",
    options: ["res.send()", "res.json()", "res.status()", "res.argv"],
    answer: ["res.send()", "res.json()", "res.status()"],
  },
];

function NodeTest() {
  return (
    <ExamLayout
      testId="node"
      questions={questions}
      testName="Node.js Assessment"
      duration={30}
    />
  );
}

export default NodeTest;
