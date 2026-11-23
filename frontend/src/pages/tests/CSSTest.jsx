
import ExamLayout from "../../components/ExamLayout";

const questions = [
  // SINGLE SELECT (1–15)

  {
    id: 1,
    type: "single",
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    answer: ["Cascading Style Sheets"],
  },
  {
    id: 2,
    type: "single",
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<style>", "<css>", "<link>", "<script>"],
    answer: ["<link>"],
  },
  {
    id: 3,
    type: "single",
    question: "Which CSS property changes the text color?",
    options: ["background-color", "font-color", "color", "text-style"],
    answer: ["color"],
  },
  {
    id: 4,
    type: "single",
    question: "Which symbol is used to select an element by ID?",
    options: [".", "#", "*", "&"],
    answer: ["#"],
  },
  {
    id: 5,
    type: "single",
    question: "Which symbol is used to select elements by class?",
    options: ["#", ".", "*", "$"],
    answer: ["."],
  },
  {
    id: 6,
    type: "single",
    question: "Which CSS property controls the size of text?",
    options: ["font-size", "text-size", "font-style", "text-weight"],
    answer: ["font-size"],
  },
  {
    id: 7,
    type: "single",
    question: "Which property adds space inside an element's border?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    answer: ["padding"],
  },
  {
    id: 8,
    type: "single",
    question: "Which property adds space outside an element's border?",
    options: ["padding", "margin", "border", "outline"],
    answer: ["margin"],
  },
  {
    id: 9,
    type: "single",
    question: "Which CSS property makes text bold?",
    options: ["font-style", "font-weight", "text-decoration", "font-family"],
    answer: ["font-weight"],
  },
  {
    id: 10,
    type: "single",
    question: "Which value makes an element a flex container?",
    options: ["display: block", "display: flex", "position: flex", "flex: display"],
    answer: ["display: flex"],
  },
  {
    id: 11,
    type: "single",
    question: "Which property rounds the corners of an element?",
    options: ["border-style", "border-radius", "corner-radius", "border-width"],
    answer: ["border-radius"],
  },
  {
    id: 12,
    type: "single",
    question: "Which CSS property controls the stacking order of positioned elements?",
    options: ["position", "z-index", "display", "order"],
    answer: ["z-index"],
  },
  {
    id: 13,
    type: "single",
    question: "Which position value places an element relative to the browser viewport?",
    options: ["static", "relative", "absolute", "fixed"],
    answer: ["fixed"],
  },
  {
    id: 14,
    type: "single",
    question: "Which CSS property creates space between letters?",
    options: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    answer: ["letter-spacing"],
  },
  {
    id: 15,
    type: "single",
    question: "Which CSS feature is used to apply styles based on screen size?",
    options: ["CSS variables", "Media queries", "Pseudo-elements", "Transitions"],
    answer: ["Media queries"],
  },

  // MULTIPLE SELECT (16–20)

  {
    id: 16,
    type: "multiple",
    question: "Which of the following are valid CSS positioning values?",
    options: ["static", "relative", "absolute", "center"],
    answer: ["static", "relative", "absolute"],
  },
  {
    id: 17,
    type: "multiple",
    question: "Which of the following are CSS display values?",
    options: ["block", "inline", "flex", "bold"],
    answer: ["block", "inline", "flex"],
  },
  {
    id: 18,
    type: "multiple",
    question: "Which of the following are CSS pseudo-classes?",
    options: [":hover", ":focus", ":active", "::before"],
    answer: [":hover", ":focus", ":active"],
  },
  {
    id: 19,
    type: "multiple",
    question: "Which properties can control text appearance?",
    options: ["font-size", "font-family", "font-weight", "border-radius"],
    answer: ["font-size", "font-family", "font-weight"],
  },
  {
    id: 20,
    type: "multiple",
    question: "Which of the following are CSS Flexbox properties?",
    options: [
      "justify-content",
      "align-items",
      "flex-direction",
      "border-color",
    ],
    answer: ["justify-content", "align-items", "flex-direction"],
  },
];

function CSSTest() {
  return (
    <ExamLayout
      testId="css"
      questions={questions}
      testName="CSS Assessment"
      duration={30}
    />
  );
}

export default CSSTest;
