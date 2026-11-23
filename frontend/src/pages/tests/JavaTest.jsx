
import ExamLayout from "../../components/ExamLayout";

const questions = [
  // SINGLE SELECT (1–15)

  {
    id: 1,
    type: "single",
    question: "Which keyword is used to define a class in Java?",
    options: ["class", "Class", "define", "struct"],
    answer: ["class"],
  },
  {
    id: 2,
    type: "single",
    question: "Which method is the entry point of a Java application?",
    options: ["start()", "main()", "run()", "execute()"],
    answer: ["main()"],
  },
  {
    id: 3,
    type: "single",
    question: "Which data type stores whole numbers in Java?",
    options: ["float", "boolean", "int", "char"],
    answer: ["int"],
  },
  {
    id: 4,
    type: "single",
    question: "Which keyword creates an object in Java?",
    options: ["class", "new", "this", "static"],
    answer: ["new"],
  },
  {
    id: 5,
    type: "single",
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implements", "inherits", "extends", "super"],
    answer: ["extends"],
  },
  {
    id: 6,
    type: "single",
    question: "Which keyword prevents a variable from being reassigned?",
    options: ["static", "final", "constant", "private"],
    answer: ["final"],
  },
  {
    id: 7,
    type: "single",
    question: "Which access modifier provides the widest accessibility?",
    options: ["private", "protected", "default", "public"],
    answer: ["public"],
  },
  {
    id: 8,
    type: "single",
    question: "Which keyword refers to the current object?",
    options: ["super", "this", "current", "self"],
    answer: ["this"],
  },
  {
    id: 9,
    type: "single",
    question: "Which concept allows one method name to have different parameter lists?",
    options: ["Inheritance", "Encapsulation", "Method Overloading", "Abstraction"],
    answer: ["Method Overloading"],
  },
  {
    id: 10,
    type: "single",
    question: "Which keyword is used to implement an interface?",
    options: ["extends", "implements", "interface", "abstract"],
    answer: ["implements"],
  },
  {
    id: 11,
    type: "single",
    question: "Which collection does not allow duplicate elements?",
    options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
    answer: ["HashSet"],
  },
  {
    id: 12,
    type: "single",
    question: "Which exception occurs when dividing an integer by zero?",
    options: [
      "NullPointerException",
      "ArithmeticException",
      "IOException",
      "ClassNotFoundException",
    ],
    answer: ["ArithmeticException"],
  },
  {
    id: 13,
    type: "single",
    question: "Which keyword is used to handle exceptions?",
    options: ["try", "throw", "catch", "All of the above"],
    answer: ["All of the above"],
  },
  {
    id: 14,
    type: "single",
    question: "Which package contains the Scanner class?",
    options: ["java.io", "java.util", "java.lang", "java.sql"],
    answer: ["java.util"],
  },
  {
    id: 15,
    type: "single",
    question: "Which JVM component executes Java bytecode?",
    options: [
      "Class Loader",
      "Execution Engine",
      "Java Compiler",
      "Source Code Parser",
    ],
    answer: ["Execution Engine"],
  },

  // MULTIPLE SELECT (16–20)

  {
    id: 16,
    type: "multiple",
    question: "Which of the following are primitive data types in Java?",
    options: ["int", "char", "boolean", "String"],
    answer: ["int", "char", "boolean"],
  },
  {
    id: 17,
    type: "multiple",
    question: "Which are OOP principles?",
    options: [
      "Inheritance",
      "Encapsulation",
      "Polymorphism",
      "Compilation",
    ],
    answer: ["Inheritance", "Encapsulation", "Polymorphism"],
  },
  {
    id: 18,
    type: "multiple",
    question: "Which of the following are valid loop structures in Java?",
    options: ["for", "while", "do-while", "repeat-until"],
    answer: ["for", "while", "do-while"],
  },
  {
    id: 19,
    type: "multiple",
    question: "Which of the following are Java access modifiers?",
    options: ["public", "private", "protected", "internal"],
    answer: ["public", "private", "protected"],
  },
  {
    id: 20,
    type: "multiple",
    question: "Which of the following are methods of the Java String class?",
    options: ["length()", "charAt()", "substring()", "push()"],
    answer: ["length()", "charAt()", "substring()"],
  },
];

function JavaTest() {
  return (
    <ExamLayout
      testId="java"
      questions={questions}
      testName="Java Assessment"
      duration={40}
    />
  );
}

export default JavaTest;
