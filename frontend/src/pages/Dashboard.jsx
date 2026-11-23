import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const tests = [
    {
      id: "javascript",
      title: "JavaScript Assessment",
      questions: 20,
      duration: 30,
    },
    {
      id: "react",
      title: "React Assessment",
      questions: 20,
      duration: 40,
    },
    {
      id: "node",
      title: "Node.js Assessment",
      questions: 20,
      duration: 30,
    },
    {
      id: "html",
      title: "HTML Assessment",
      questions: 20,
      duration: 25,
    },
    {
      id: "css",
      title: "CSS Assessment",
      questions: 20,
      duration: 30,
    },
    {
      id: "java",
      title: "Java Assessment",
      questions: 20,
      duration: 40,
    },
    {
      id: "python",
      title: "Python Assessment",
      questions: 20,
      duration: 35,
    },
    {
      id: "sql",
      title: "SQL Assessment",
      questions: 20,
      duration: 30,
    },
  ];

  const student = JSON.parse(
    sessionStorage.getItem("student") || "{}"
  );

  function handleLogout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("student");

    navigate("/", { replace: true });
  }

  return (
    <div className="dashboard">

      <header className="dashboard-header">
        <h1>Gradious Assessment</h1>

        <div className="dashboard-header-actions">

          <button
            className="previous-results-btn"
            onClick={() => navigate("/previous-results")}
          >
            Previous Results
          </button>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      </header>

      <main className="dashboard-content">

        <section className="welcome-section">
          <h2>Welcome, {student.name || "Student"} 👋</h2>
          <p>Choose an assessment and test your knowledge.</p>
        </section>

        <h2 className="section-title">Available Tests</h2>

        <div className="test-grid">

          {tests.map((test) => (
            <div className="test-card" key={test.id}>

              <h3>{test.title}</h3>

              <p>Questions: {test.questions}</p>

              <p>Duration: {test.duration} Minutes</p>

              <button
                className="start-btn"
                onClick={() => {
                  navigate(`/instructions/${test.id}`);
                }}
              >
                Start Test
              </button>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}

export default Dashboard;
