import ExamLayout from "../../components/ExamLayout";

const questions = [
  // SINGLE SELECT (1–15)

  {
    id: 1,
    type: "single",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    answer: ["Hyper Text Markup Language"],
  },
  {
    id: 2,
    type: "single",
    question: "Which tag is used to create the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: ["<h1>"],
  },
  {
    id: 3,
    type: "single",
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: ["<a>"],
  },
  {
    id: 4,
    type: "single",
    question: "Which tag is used to insert an image?",
    options: ["<image>", "<picture>", "<img>", "<src>"],
    answer: ["<img>"],
  },
  {
    id: 5,
    type: "single",
    question: "Which attribute specifies the image location?",
    options: ["href", "src", "alt", "link"],
    answer: ["src"],
  },
  {
    id: 6,
    type: "single",
    question: "Which tag creates an unordered list?",
    options: ["<ol>", "<li>", "<ul>", "<list>"],
    answer: ["<ul>"],
  },
  {
    id: 7,
    type: "single",
    question: "Which tag is used to create a table row?",
    options: ["<td>", "<tr>", "<th>", "<table-row>"],
    answer: ["<tr>"],
  },
  {
    id: 8,
    type: "single",
    question: "Which attribute provides alternative text for an image?",
    options: ["title", "src", "alt", "name"],
    answer: ["alt"],
  },
  {
    id: 9,
    type: "single",
    question: "Which HTML element is used to create a form?",
    options: ["<input>", "<form>", "<fieldset>", "<label>"],
    answer: ["<form>"],
  },
  {
    id: 10,
    type: "single",
    question: "Which input type is used to enter an email address?",
    options: ["text", "mail", "email", "address"],
    answer: ["email"],
  },
  {
    id: 11,
    type: "single",
    question: "Which tag is used to create a line break?",
    options: ["<break>", "<lb>", "<br>", "<hr>"],
    answer: ["<br>"],
  },
  {
    id: 12,
    type: "single",
    question: "Which tag defines the title displayed in the browser tab?",
    options: ["<meta>", "<head>", "<title>", "<header>"],
    answer: ["<title>"],
  },
  {
    id: 13,
    type: "single",
    question: "Which HTML5 element represents the main content of a page?",
    options: ["<main>", "<section>", "<aside>", "<footer>"],
    answer: ["<main>"],
  },
  {
    id: 14,
    type: "single",
    question: "Which attribute opens a link in a new tab?",
    options: [
      'target="_self"',
      'target="_blank"',
      'open="new"',
      'tab="new"',
    ],
    answer: ['target="_blank"'],
  },
  {
    id: 15,
    type: "single",
    question: "Which declaration specifies that a document uses HTML5?",
    options: [
      "<html5>",
      "<!DOCTYPE html>",
      "<doctype>",
      "<document html>",
    ],
    answer: ["<!DOCTYPE html>"],
  },

  // MULTIPLE SELECT (16–20)

  {
    id: 16,
    type: "multiple",
    question: "Which of the following are semantic HTML5 elements?",
    options: ["<header>", "<footer>", "<article>", "<div>"],
    answer: ["<header>", "<footer>", "<article>"],
  },
  {
    id: 17,
    type: "multiple",
    question: "Which of the following are valid HTML form input types?",
    options: ["text", "password", "checkbox", "paragraph"],
    answer: ["text", "password", "checkbox"],
  },
  {
    id: 18,
    type: "multiple",
    question: "Which tags are used to create lists in HTML?",
    options: ["<ul>", "<ol>", "<dl>", "<listitem>"],
    answer: ["<ul>", "<ol>", "<dl>"],
  },
  {
    id: 19,
    type: "multiple",
    question: "Which attributes can be used with an HTML input element?",
    options: ["placeholder", "required", "disabled", "font-size"],
    answer: ["placeholder", "required", "disabled"],
  },
  {
    id: 20,
    type: "multiple",
    question: "Which elements can be used to embed media in HTML?",
    options: ["<audio>", "<video>", "<iframe>", "<heading>"],
    answer: ["<audio>", "<video>", "<iframe>"],
  },
];

function HTMLTest() {
  return (
    <ExamLayout
      testId="html"
      questions={questions}
      testName="HTML Assessment"
      duration={25}
    />
  );
}

export default HTMLTest;
