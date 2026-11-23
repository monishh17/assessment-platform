
import ExamLayout from "../../components/ExamLayout";

const questions = [
  // SINGLE SELECT (1–15)

  {
    id: 1,
    type: "single",
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "Sequential Query Logic",
      "Standard Question Language",
    ],
    answer: ["Structured Query Language"],
  },
  {
    id: 2,
    type: "single",
    question: "Which SQL statement retrieves data from a table?",
    options: ["GET", "SELECT", "FETCH", "OPEN"],
    answer: ["SELECT"],
  },
  {
    id: 3,
    type: "single",
    question: "Which clause filters records based on a condition?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
    answer: ["WHERE"],
  },
  {
    id: 4,
    type: "single",
    question: "Which SQL command inserts new records into a table?",
    options: ["ADD", "INSERT INTO", "UPDATE", "CREATE"],
    answer: ["INSERT INTO"],
  },
  {
    id: 5,
    type: "single",
    question: "Which command modifies existing records?",
    options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
    answer: ["UPDATE"],
  },
  {
    id: 6,
    type: "single",
    question: "Which command removes records from a table?",
    options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
    answer: ["DELETE"],
  },
  {
    id: 7,
    type: "single",
    question: "Which SQL constraint uniquely identifies each row?",
    options: ["FOREIGN KEY", "PRIMARY KEY", "CHECK", "DEFAULT"],
    answer: ["PRIMARY KEY"],
  },
  {
    id: 8,
    type: "single",
    question: "Which clause sorts query results?",
    options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
    answer: ["ORDER BY"],
  },
  {
    id: 9,
    type: "single",
    question: "Which function counts the number of rows?",
    options: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"],
    answer: ["COUNT()"],
  },
  {
    id: 10,
    type: "single",
    question: "Which operator checks whether a value matches a pattern?",
    options: ["IN", "LIKE", "BETWEEN", "EXISTS"],
    answer: ["LIKE"],
  },
  {
    id: 11,
    type: "single",
    question: "Which JOIN returns only matching rows from both tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    answer: ["INNER JOIN"],
  },
  {
    id: 12,
    type: "single",
    question: "Which SQL statement creates a new table?",
    options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "INSERT TABLE"],
    answer: ["CREATE TABLE"],
  },
  {
    id: 13,
    type: "single",
    question: "Which clause groups rows with the same values?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "DISTINCT"],
    answer: ["GROUP BY"],
  },
  {
    id: 14,
    type: "single",
    question: "Which command removes a table and its structure?",
    options: ["DELETE", "REMOVE", "DROP TABLE", "TRUNCATE ROW"],
    answer: ["DROP TABLE"],
  },
  {
    id: 15,
    type: "single",
    question: "Which keyword removes duplicate rows from query results?",
    options: ["UNIQUE", "DISTINCT", "DIFFERENT", "REMOVE"],
    answer: ["DISTINCT"],
  },

  // MULTIPLE SELECT (16–20)

  {
    id: 16,
    type: "multiple",
    question: "Which of the following are SQL aggregate functions?",
    options: ["COUNT()", "SUM()", "AVG()", "JOIN()"],
    answer: ["COUNT()", "SUM()", "AVG()"],
  },
  {
    id: 17,
    type: "multiple",
    question: "Which of the following are SQL constraints?",
    options: ["PRIMARY KEY", "FOREIGN KEY", "NOT NULL", "ORDER BY"],
    answer: ["PRIMARY KEY", "FOREIGN KEY", "NOT NULL"],
  },
  {
    id: 18,
    type: "multiple",
    question: "Which are commonly used SQL JOIN types?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "SORT JOIN"],
    answer: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN"],
  },
  {
    id: 19,
    type: "multiple",
    question: "Which are SQL data definition language (DDL) commands?",
    options: ["CREATE", "ALTER", "DROP", "SELECT"],
    answer: ["CREATE", "ALTER", "DROP"],
  },
  {
    id: 20,
    type: "multiple",
    question: "Which operators can be used in SQL WHERE conditions?",
    options: ["=", ">", "<", "LIKE"],
    answer: ["=", ">", "<", "LIKE"],
  },
];

function SQLTest() {
  return (
    <ExamLayout
      testId="sql"
      questions={questions}
      testName="SQL Assessment"
      duration={30}
    />
  );
}

export default SQLTest;
