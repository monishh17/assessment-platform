import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Instructions from "./pages/Instructions";
import Result from "./pages/Result";
import AnswerReview from "./pages/AnswerReview";
import PreviousResults from "./pages/PreviousResults";
// Components
import ProtectedRoute from "./components/ProtectedRoute";

// Assessment Components
import JSTest from "./pages/tests/JSTest";
import ReactTest from "./pages/tests/ReactTest";
import NodeTest from "./pages/tests/NodeTest";
import HTMLTest from "./pages/tests/HTMLTest";
import CSSTest from "./pages/tests/CSSTest";
import JavaTest from "./pages/tests/JavaTest";
import PythonTest from "./pages/tests/PythonTest";
import SQLTest from "./pages/tests/SQLTest";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>

                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route
                        path="/instructions/:testId"
                        element={<Instructions />}
                    />

                    {/* Assessments */}
                    <Route path="/test/javascript" element={<JSTest />} />
                    <Route path="/test/react" element={<ReactTest />} />
                    <Route path="/test/node" element={<NodeTest />} />
                    <Route path="/test/html" element={<HTMLTest />} />
                    <Route path="/test/css" element={<CSSTest />} />
                    <Route path="/test/java" element={<JavaTest />} />
                    <Route path="/test/python" element={<PythonTest />} />
                    <Route path="/test/sql" element={<SQLTest />} />

                    {/* Results */}
                    <Route path="/result/:testId" element={<Result />} />
                    <Route path="/previous-results" element={<PreviousResults />}/>
                    <Route path="/answer-review/:id"  element={<AnswerReview />}/>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;