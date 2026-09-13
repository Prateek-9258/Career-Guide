import { useState } from "react";
import Navbar from "./Navbar.jsx";

const careerDatabase = [
  {
    name: "Software Developer",
    streams: ["Science", "Commerce", "Arts"],
    interests: ["Technology", "Problem Solving"],
    courses: ["BCA", "B.Tech Computer Science", "B.Sc Computer Science"],
    govt: ["NIC", "ISRO Technical Roles", "SSC Technical Posts"],
    private: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    icon: "💻",
  },
  {
    name: "Data Analyst",
    streams: ["Science", "Commerce", "Arts"],
    interests: ["Technology", "Mathematics", "Business"],
    courses: ["BCA", "B.Sc Data Science", "BBA Analytics"],
    govt: ["Government Data Analyst Roles", "Statistical Departments"],
    private: ["Data Analyst", "Business Analyst", "Data Associate"],
    icon: "📊",
  },
  {
    name: "Doctor / Healthcare Professional",
    streams: ["Science"],
    interests: ["Biology", "Helping People"],
    courses: ["MBBS", "BDS", "B.Pharm", "B.Sc Nursing"],
    govt: ["Government Hospitals", "UPSC Medical Services"],
    private: ["Doctor", "Medical Consultant", "Healthcare Specialist"],
    icon: "🩺",
  },
  {
    name: "Chartered Accountant",
    streams: ["Commerce", "Science", "Arts"],
    interests: ["Finance", "Business", "Mathematics"],
    courses: ["B.Com", "CA Foundation", "BBA"],
    govt: ["Income Tax Department", "Government Finance Roles"],
    private: ["Chartered Accountant", "Financial Analyst", "Auditor"],
    icon: "💼",
  },
  {
    name: "Business Manager",
    streams: ["Commerce", "Science", "Arts"],
    interests: ["Business", "Leadership", "Communication"],
    courses: ["BBA", "BMS", "B.Com", "MBA"],
    govt: ["Management Roles", "Banking Services"],
    private: ["Business Manager", "Marketing Manager", "HR Manager"],
    icon: "📈",
  },
  {
    name: "Designer / Creative Professional",
    streams: ["Arts", "Commerce", "Science"],
    interests: ["Creativity", "Design", "Communication"],
    courses: ["B.Des", "BA Design", "Graphic Design"],
    govt: ["Government Design Positions", "Media Departments"],
    private: ["UI/UX Designer", "Graphic Designer", "Creative Director"],
    icon: "🎨",
  },
  {
    name: "Law Professional",
    streams: ["Arts", "Commerce", "Science"],
    interests: ["Law", "Communication", "Helping People"],
    courses: ["BA LLB", "BBA LLB", "LLB"],
    govt: ["Judicial Services", "Legal Officer", "Government Advocate"],
    private: ["Lawyer", "Legal Advisor", "Corporate Lawyer"],
    icon: "⚖️",
  },
  {
    name: "Teacher / Education Professional",
    streams: ["Arts", "Commerce", "Science"],
    interests: ["Teaching", "Helping People", "Communication"],
    courses: ["BA + B.Ed", "B.Sc + B.Ed", "B.El.Ed"],
    govt: ["Government Teacher", "Education Department"],
    private: ["Teacher", "Trainer", "Education Consultant"],
    icon: "📚",
  },
];

const questions = [
  {
    question: "Which type of work do you enjoy the most?",
    options: [
      { text: "Solving technical problems", interest: "Technology" },
      { text: "Working with numbers", interest: "Mathematics" },
      { text: "Helping people", interest: "Helping People" },
      { text: "Creating new ideas", interest: "Creativity" },
    ],
  },
  {
    question: "What kind of environment attracts you?",
    options: [
      { text: "Technology and computers", interest: "Technology" },
      { text: "Business and finance", interest: "Business" },
      { text: "Healthcare and science", interest: "Biology" },
      { text: "Creative and artistic work", interest: "Design" },
    ],
  },
  {
    question: "Which skill would you like to improve?",
    options: [
      { text: "Programming", interest: "Technology" },
      { text: "Leadership", interest: "Leadership" },
      { text: "Communication", interest: "Communication" },
      { text: "Creative thinking", interest: "Creativity" },
    ],
  },
  {
    question: "What motivates you the most?",
    options: [
      { text: "Building something useful", interest: "Technology" },
      { text: "Financial success", interest: "Finance" },
      { text: "Helping society", interest: "Helping People" },
      { text: "Expressing creativity", interest: "Creativity" },
    ],
  },
  {
    question: "Which future career sounds most exciting?",
    options: [
      { text: "Technology professional", interest: "Technology" },
      { text: "Business professional", interest: "Business" },
      { text: "Healthcare professional", interest: "Biology" },
      { text: "Creative professional", interest: "Creativity" },
    ],
  },
];

export default function Home() {
  const [page, setPage] = useState("home");

  const [form, setForm] = useState({
    name: "",
    stream: "",
    percentage: "",
    interest: "",
    budget: "",
  });

  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [results, setResults] = useState([]);

  const interests = [
    "Technology",
    "Business",
    "Creativity",
    "Helping People",
    "Mathematics",
    "Biology",
    "Finance",
    "Leadership",
    "Communication",
    "Design",
    "Law",
    "Teaching",
    "Problem Solving",
  ];

  const updateForm = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const startQuiz = () => {
    if (
      !form.name.trim() ||
      !form.stream ||
      !form.percentage ||
      !form.interest ||
      !form.budget
    ) {
      alert("Please fill all the details first.");
      return;
    }

    const percentage = Number(form.percentage);

    if (percentage < 0 || percentage > 100) {
      alert("Please enter a valid percentage between 0 and 100.");
      return;
    }

    setQuestionIndex(0);
    setAnswers([]);
    setSelectedAnswer("");
    setResults([]);
    setPage("quiz");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const selectAnswer = (interest) => {
    setSelectedAnswer(interest);
  };

  const nextQuestion = () => {
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedAnswer;

    setAnswers(newAnswers);

    if (questionIndex < questions.length - 1) {
      const nextIndex = questionIndex + 1;

      setQuestionIndex(nextIndex);
      setSelectedAnswer(newAnswers[nextIndex] || "");

      return;
    }

    generateResults(newAnswers);
  };

  const previousQuestion = () => {
    if (questionIndex === 0) {
      setPage("home");
      return;
    }

    const previousIndex = questionIndex - 1;

    setQuestionIndex(previousIndex);
    setSelectedAnswer(answers[previousIndex] || "");
  };

  const goBackFromResults = () => {
    setPage("quiz");
    setQuestionIndex(questions.length - 1);
    setSelectedAnswer(
      answers[questions.length - 1] || ""
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const generateResults = (quizAnswers) => {
    const scoredCareers = careerDatabase
      .map((career) => {
        let score = 30;

        if (career.streams.includes(form.stream)) {
          score += 20;
        }

        if (career.interests.includes(form.interest)) {
          score += 25;
        }

        quizAnswers.forEach((answer) => {
          if (career.interests.includes(answer)) {
            score += 7;
          }
        });

        const percentage = Number(form.percentage);

        if (percentage >= 80) {
          score += 8;
        } else if (percentage >= 60) {
          score += 5;
        } else {
          score += 2;
        }

        return {
          ...career,
          score: Math.min(Math.round(score), 98),
        };
      })
      .sort((a, b) => b.score - a.score);

    setResults(scoredCareers);
    setPage("results");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const restart = () => {
    setPage("home");

    setForm({
      name: "",
      stream: "",
      percentage: "",
      interest: "",
      budget: "",
    });

    setQuestionIndex(0);
    setAnswers([]);
    setSelectedAnswer("");
    setResults([]);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goHome = () => {
    setPage("home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const percentageLevel = () => {
    const value = Number(form.percentage);

    if (value >= 85) {
      return "Strong academic profile";
    }

    if (value >= 70) {
      return "Good academic profile";
    }

    if (value >= 50) {
      return "Developing academic profile";
    }

    return "Improve your academic foundation";
  };

  const roadmap = (career) => [
    `Explore the ${career.name} career path and required skills.`,
    `Choose a suitable course such as ${career.courses[0]}.`,
    "Build practical skills through projects and regular practice.",
    "Prepare for suitable entrance exams or eligibility requirements.",
    `Start building experience for roles such as ${career.private[0]}.`,
  ];

  const progress =
    ((questionIndex + 1) / questions.length) * 100;

  return (
    <>
      <style>{styles}</style>

      <div className="app">
        <Navbar />

        {page === "home" && (
          <>
            <section className="hero">
              <div className="hero-content">
                <div className="hero-badge">
                  ✨ Smart Career Guidance
                </div>

                <h1>
                  Discover Your
                  <span> Perfect Career Path</span>
                </h1>

                <p>
                  Answer a few simple questions and get personalized
                  career recommendations based on your stream,
                  interests and academic profile.
                </p>

                <div className="hero-buttons">
                  <button
                    className="primary-btn"
                    onClick={() =>
                      document
                        .getElementById("career-form")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                  >
                    Start Career Journey →
                  </button>

                  <button
                    className="secondary-btn"
                    onClick={() =>
                      document
                        .getElementById("how-it-works")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                  >
                    How It Works
                  </button>
                </div>

                <div className="hero-stats">
                  <div>
                    <strong>8+</strong>
                    <span>Career Paths</span>
                  </div>

                  <div>
                    <strong>5</strong>
                    <span>Smart Questions</span>
                  </div>

                  <div>
                    <strong>100%</strong>
                    <span>Personalized</span>
                  </div>
                </div>
              </div>

              <div className="hero-visual">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />

                <div className="career-illustration">
                  <div className="illustration-icon">🚀</div>

                  <h3>Your Future</h3>

                  <p>Starts with the right direction</p>
                </div>

                <div className="floating-card card-top">
                  <span>💻</span>

                  <div>
                    <strong>Technology</strong>
                    <small>Build the future</small>
                  </div>
                </div>

                <div className="floating-card card-left">
                  <span>📊</span>

                  <div>
                    <strong>Analytics</strong>
                    <small>Understand data</small>
                  </div>
                </div>

                <div className="floating-card card-bottom">
                  <span>🎨</span>

                  <div>
                    <strong>Creativity</strong>
                    <small>Create something new</small>
                  </div>
                </div>
              </div>
            </section>

            <section className="features" id="how-it-works">
              <div className="section-heading">
                <span>HOW IT WORKS</span>

                <h2>
                  Simple Steps. Better
                  <span> Career Direction.</span>
                </h2>
              </div>

              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-number">01</div>
                  <div className="feature-icon">📝</div>

                  <h3>Share Your Profile</h3>

                  <p>
                    Enter your stream, percentage, interests and
                    education preferences.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-number">02</div>
                  <div className="feature-icon">🧠</div>

                  <h3>Answer Questions</h3>

                  <p>
                    Complete a short quiz to identify your strongest
                    career preferences.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-number">03</div>
                  <div className="feature-icon">🎯</div>

                  <h3>Get Your Roadmap</h3>

                  <p>
                    Receive career matches, courses and a personal
                    roadmap.
                  </p>
                </div>
              </div>
            </section>

            <section className="form-section" id="career-form">
              <div className="section-heading">
                <span>START NOW</span>

                <h2>
                  Tell Us About
                  <span> Yourself</span>
                </h2>

                <p>
                  Fill in your details to begin your personalized
                  Career Vision journey.
                </p>
              </div>

              <div className="form-container">
                <div className="form-title">
                  <div className="form-icon">🎯</div>

                  <div>
                    <h3>Career Profile</h3>
                    <p>Your details help improve recommendations.</p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group full">
                    <label>Your Name</label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(e) =>
                        updateForm("name", e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Academic Stream</label>

                    <select
                      value={form.stream}
                      onChange={(e) =>
                        updateForm("stream", e.target.value)
                      }
                    >
                      <option value="">Select stream</option>
                      <option value="Science">Science</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Arts">Arts</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Percentage</label>

                    <input
                      type="number"
                      placeholder="Example: 75"
                      min="0"
                      max="100"
                      value={form.percentage}
                      onChange={(e) =>
                        updateForm("percentage", e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Primary Interest</label>

                    <select
                      value={form.interest}
                      onChange={(e) =>
                        updateForm("interest", e.target.value)
                      }
                    >
                      <option value="">Select interest</option>

                      {interests.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Education Budget</label>

                    <select
                      value={form.budget}
                      onChange={(e) =>
                        updateForm("budget", e.target.value)
                      }
                    >
                      <option value="">Select budget</option>
                      <option value="Low">Low Budget</option>
                      <option value="Medium">Medium Budget</option>
                      <option value="High">High Budget</option>
                    </select>
                  </div>
                </div>

                <button className="start-btn" onClick={startQuiz}>
                  Start My Career Quiz <span>→</span>
                </button>

                <p className="form-note">
                  🔒 Your information is used only for this career
                  recommendation experience.
                </p>
              </div>
            </section>
          </>
        )}

        {page === "quiz" && (
          <section className="quiz-page">
            <div className="quiz-container">
              <div className="quiz-header">
                <div>
                  <span className="small-label">
                    CAREER PERSONALITY QUIZ
                  </span>

                  <h1>
                    Let's Discover Your
                    <span> Strengths</span>
                  </h1>
                </div>

                <div className="question-count">
                  {questionIndex + 1}/{questions.length}
                </div>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="question-card">
                <span className="question-label">
                  QUESTION {questionIndex + 1}
                </span>

                <h2>
                  {questions[questionIndex].question}
                </h2>

                <div className="options">
                  {questions[questionIndex].options.map(
                    (option, index) => (
                      <button
                        key={option.text}
                        className={`option ${
                          selectedAnswer === option.interest
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          selectAnswer(option.interest)
                        }
                      >
                        <span className="option-letter">
                          {String.fromCharCode(65 + index)}
                        </span>

                        {option.text}

                        {selectedAnswer === option.interest && (
                          <span className="check">✓</span>
                        )}
                      </button>
                    )
                  )}
                </div>

                <div className="quiz-actions">
                  <button
                    className="back-btn"
                    onClick={previousQuestion}
                  >
                    ← Back
                  </button>

                  <button
                    className="next-btn"
                    onClick={nextQuestion}
                  >
                    {questionIndex === questions.length - 1
                      ? "View My Results"
                      : "Next Question"}

                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {page === "results" && results.length > 0 && (
          <section className="results-page">
            <div className="results-container">
              <div className="result-header">
                <div className="success-icon">🎉</div>

                <span className="small-label">
                  YOUR PERSONALIZED REPORT
                </span>

                <h1>
                  Hello, {form.name}!
                  <span> Your Career Vision</span>
                </h1>

                <p>
                  Based on your profile and quiz responses, here are
                  the career paths that match your preferences.
                </p>

                <div className="profile-pills">
                  <span>{form.stream}</span>
                  <span>{form.percentage}%</span>
                  <span>{form.interest}</span>
                  <span>{form.budget} Budget</span>
                </div>
              </div>

              <div className="best-career">
                <div className="best-badge">
                  🏆 BEST CAREER MATCH
                </div>

                <div className="best-content">
                  <div className="best-icon">
                    {results[0].icon}
                  </div>

                  <div>
                    <h2>{results[0].name}</h2>

                    <p>
                      Your strongest career direction based on your
                      profile and quiz answers.
                    </p>

                    <div className="match-score">
                      <div className="score-circle">
                        {results[0].score}%
                      </div>

                      <span>Career Match Score</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="result-grid">
                <div className="result-card wide">
                  <div className="card-heading">
                    <span>⭐</span>

                    <div>
                      <h3>Your Top Career Matches</h3>

                      <p>
                        Careers ranked according to your profile.
                      </p>
                    </div>
                  </div>

                  <div className="career-list">
                    {results.slice(0, 5).map((career, index) => (
                      <div
                        className="career-result"
                        key={career.name}
                      >
                        <div className="rank">{index + 1}</div>

                        <div className="career-result-icon">
                          {career.icon}
                        </div>

                        <div className="career-result-info">
                          <h4>{career.name}</h4>

                          <p>
                            Matches your interests and academic
                            profile.
                          </p>
                        </div>

                        <div className="result-score">
                          {career.score}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="result-card">
                  <div className="card-heading">
                    <span>🎓</span>

                    <div>
                      <h3>Recommended Courses</h3>
                      <p>Possible education routes.</p>
                    </div>
                  </div>

                  <ul className="clean-list">
                    {results[0].courses.map((course) => (
                      <li key={course}>✓ {course}</li>
                    ))}
                  </ul>
                </div>

                <div className="result-card">
                  <div className="card-heading">
                    <span>🏛️</span>

                    <div>
                      <h3>Government Options</h3>
                      <p>Potential career directions.</p>
                    </div>
                  </div>

                  <ul className="clean-list">
                    {results[0].govt.map((job) => (
                      <li key={job}>✓ {job}</li>
                    ))}
                  </ul>
                </div>

                <div className="result-card">
                  <div className="card-heading">
                    <span>💼</span>

                    <div>
                      <h3>Private Career Options</h3>
                      <p>Possible professional roles.</p>
                    </div>
                  </div>

                  <ul className="clean-list">
                    {results[0].private.map((job) => (
                      <li key={job}>✓ {job}</li>
                    ))}
                  </ul>
                </div>

                <div className="result-card">
                  <div className="card-heading">
                    <span>📊</span>

                    <div>
                      <h3>Your Profile Analysis</h3>
                      <p>Summary of your profile.</p>
                    </div>
                  </div>

                  <div className="analysis">
                    <div>
                      <span>Stream</span>
                      <strong>{form.stream}</strong>
                    </div>

                    <div>
                      <span>Academic Profile</span>
                      <strong>{percentageLevel()}</strong>
                    </div>

                    <div>
                      <span>Main Interest</span>
                      <strong>{form.interest}</strong>
                    </div>

                    <div>
                      <span>Budget Preference</span>
                      <strong>{form.budget}</strong>
                    </div>
                  </div>
                </div>

                <div className="result-card wide">
                  <div className="card-heading">
                    <span>🛣️</span>

                    <div>
                      <h3>Your Personal Roadmap</h3>

                      <p>
                        A simple path to start your career journey.
                      </p>
                    </div>
                  </div>

                  <div className="roadmap">
                    {roadmap(results[0]).map((step, index) => (
                      <div
                        className="roadmap-step"
                        key={step}
                      >
                        <div className="step-number">
                          {index + 1}
                        </div>

                        <div>
                          <h4>Step {index + 1}</h4>
                          <p>{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="notice">
                <strong>⚠️ Career Vision Notice</strong>

                <p>
                  These recommendations are based on the information
                  you provide and are intended for career exploration
                  and guidance.
                </p>
              </div>

              <button
                className="back-btn result-back-btn"
                onClick={goBackFromResults}
              >
                ← Back to Quiz
              </button>

              <button className="restart-btn" onClick={restart}>
                🔄 Take the Quiz Again
              </button>
            </div>
          </section>
        )}

        <footer>
          <div className="footer-logo">
            <div className="logo">CV</div>

            <div>
              <strong>Career Vision</strong>
              <span>Discover Your Future</span>
            </div>
          </div>

          <p>© 2026 Career Vision · Discover Your Future</p>
        </footer>
      </div>
    </>
  );
}

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");

:root {
  --bg: #070b1c;
  --card: rgba(20, 29, 62, 0.78);
  --primary: #7468ff;
  --primary-light: #978cff;
  --cyan: #47d7ff;
  --pink: #f35ac4;
  --text: #ffffff;
  --muted: #aab4d2;
  --border: rgba(255, 255, 255, 0.1);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at 10% 10%, rgba(116,104,255,.22), transparent 28%),
    radial-gradient(circle at 90% 30%, rgba(71,215,255,.13), transparent 25%),
    radial-gradient(circle at 50% 90%, rgba(243,90,196,.1), transparent 25%),
    var(--bg);
}

button,
input,
select {
  font: inherit;
}

button {
  border: none;
}

.app {
  min-height: 100vh;
  color: var(--text);
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}

.brand,
.footer-logo {
  display: flex;
  align-items: center;
  gap: 11px;
}

.brand {
  cursor: pointer;
}

.logo {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 15px;
  background: linear-gradient(135deg, var(--cyan), var(--primary), var(--pink));
  font-weight: 800;
  box-shadow: 0 10px 25px rgba(116,104,255,.35);
}

.brand h2 {
  margin: 0;
  font-size: 17px;
}

.brand span,
.footer-logo span {
  display: block;
  color: var(--muted);
  font-size: 10px;
}

.back-btn {
  min-height: 46px;
  padding: 0 18px;
  border-radius: 13px;
  background: rgba(255,255,255,.07);
  color: white;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: .25s;
}

.back-btn:hover {
  background: rgba(116,104,255,.3);
  border-color: var(--primary-light);
}

.hero {
  width: min(1180px, calc(100% - 40px));
  min-height: 700px;
  margin: auto;
  padding: 70px 0 90px;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 60px;
}

.hero-badge,
.small-label {
  color: var(--cyan);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.hero-badge {
  display: inline-flex;
  padding: 9px 15px;
  background: rgba(71,215,255,.08);
  border: 1px solid rgba(71,215,255,.18);
  border-radius: 30px;
}

.hero h1 {
  margin: 22px 0;
  font-size: clamp(48px, 6vw, 78px);
  line-height: 1.05;
  letter-spacing: -3px;
}

.hero h1 span,
.section-heading h2 span,
.quiz-header h1 span,
.result-header h1 span {
  background: linear-gradient(90deg, var(--cyan), var(--primary-light), var(--pink));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero h1 span {
  display: block;
}

.hero p {
  max-width: 630px;
  color: var(--muted);
  line-height: 1.9;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  margin-top: 30px;
}

.primary-btn,
.secondary-btn,
.start-btn,
.next-btn,
.restart-btn {
  min-height: 54px;
  padding: 0 24px;
  border-radius: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: .25s;
}

.primary-btn,
.start-btn,
.next-btn,
.restart-btn {
  background: linear-gradient(100deg, var(--primary), #8d62ff, var(--pink));
  color: white;
  box-shadow: 0 15px 35px rgba(116,104,255,.3);
}

.primary-btn:hover,
.start-btn:hover,
.next-btn:hover,
.restart-btn:hover {
  transform: translateY(-3px);
}

.secondary-btn {
  background: rgba(255,255,255,.06);
  color: white;
  border: 1px solid var(--border);
}

.hero-stats {
  display: flex;
  gap: 35px;
  margin-top: 50px;
}

.hero-stats div {
  display: flex;
  flex-direction: column;
}

.hero-stats strong {
  font-size: 24px;
}

.hero-stats span {
  color: var(--muted);
  font-size: 11px;
}

.hero-visual {
  min-height: 520px;
  position: relative;
  display: grid;
  place-items: center;
}

.orbit {
  position: absolute;
  border: 1px solid rgba(116,104,255,.25);
  border-radius: 50%;
}

.orbit-one {
  width: 430px;
  height: 430px;
}

.orbit-two {
  width: 330px;
  height: 330px;
  border-color: rgba(71,215,255,.2);
}

.career-illustration {
  width: 270px;
  height: 270px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(116,104,255,.28), rgba(71,215,255,.12));
  border: 1px solid var(--border);
  backdrop-filter: blur(20px);
}

.illustration-icon {
  font-size: 70px;
}

.career-illustration h3 {
  margin: 10px 0 4px;
}

.career-illustration p {
  margin: 0;
  font-size: 11px;
}

.floating-card {
  min-width: 170px;
  padding: 13px 16px;
  position: absolute;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(17,25,57,.85);
  border: 1px solid var(--border);
  border-radius: 17px;
  animation: floating 4s ease-in-out infinite;
}

.floating-card span {
  font-size: 24px;
}

.floating-card strong,
.floating-card small {
  display: block;
}

.floating-card strong {
  font-size: 12px;
}

.floating-card small {
  color: var(--muted);
  font-size: 9px;
}

.card-top {
  top: 40px;
  right: 15px;
}

.card-left {
  top: 230px;
  left: 0;
  animation-delay: 1s;
}

.card-bottom {
  right: 15px;
  bottom: 50px;
  animation-delay: 2s;
}

@keyframes floating {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.features,
.form-section,
.quiz-page,
.results-page {
  padding: 100px 20px;
}

.features {
  background: rgba(255,255,255,.015);
}

.section-heading {
  width: min(760px, 100%);
  margin: 0 auto 50px;
  text-align: center;
}

.section-heading h2 {
  margin: 14px 0;
  font-size: clamp(36px, 5vw, 58px);
  line-height: 1.1;
}

.feature-grid {
  width: min(1180px, 100%);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.feature-card,
.result-card {
  background: var(--card);
  border: 1px solid var(--border);
}

.feature-card {
  min-height: 280px;
  padding: 30px;
  position: relative;
  border-radius: 24px;
}

.feature-number {
  position: absolute;
  top: 20px;
  right: 22px;
  color: rgba(255,255,255,.15);
  font-size: 34px;
  font-weight: 800;
}

.feature-icon,
.form-icon {
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  border-radius: 17px;
  background: linear-gradient(135deg, rgba(116,104,255,.35), rgba(71,215,255,.18));
  font-size: 26px;
}

.feature-card h3 {
  margin: 24px 0 10px;
}

.feature-card p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.form-container {
  width: min(780px, 100%);
  margin: auto;
  padding: 38px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 30px;
}

.form-title {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 30px;
}

.form-title h3 {
  margin: 0;
}

.form-title p {
  margin: 4px 0;
  color: var(--muted);
  font-size: 11px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 19px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group.full {
  grid-column: 1 / -1;
}

.form-group label {
  font-size: 12px;
}

.form-group input,
.form-group select {
  width: 100%;
  height: 54px;
  padding: 0 15px;
  outline: none;
  background: rgba(5,10,29,.6);
  color: white;
  border: 1px solid var(--border);
  border-radius: 13px;
}

.form-group select option {
  background: #101735;
}

.start-btn {
  width: 100%;
  margin-top: 28px;
}

.form-note {
  color: var(--muted);
  text-align: center;
  font-size: 10px;
}

.quiz-container,
.results-container {
  width: min(1000px, 100%);
  margin: auto;
}

.quiz-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 25px;
}

.quiz-header h1 {
  margin: 8px 0 0;
  font-size: clamp(34px, 5vw, 58px);
}

.question-count {
  width: 65px;
  height: 65px;
  display: grid;
  place-items: center;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--cyan);
  font-weight: 700;
}

.progress-track {
  height: 9px;
  margin-bottom: 30px;
  background: rgba(255,255,255,.08);
  border-radius: 30px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--cyan), var(--primary), var(--pink));
  transition: width .35s ease;
}

.question-card {
  padding: clamp(25px, 5vw, 50px);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 30px;
}

.question-label {
  color: var(--cyan);
  font-size: 11px;
  font-weight: 700;
}

.question-card h2 {
  margin: 12px 0 35px;
  font-size: clamp(25px, 4vw, 40px);
}

.options {
  display: grid;
  gap: 13px;
}

.option {
  min-height: 66px;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
  background: rgba(255,255,255,.045);
  color: #dfe5f8;
  border: 1px solid var(--border);
  border-radius: 17px;
  cursor: pointer;
}

.option.selected {
  background: linear-gradient(90deg, rgba(116,104,255,.28), rgba(243,90,196,.18));
  border-color: var(--primary-light);
}

.option-letter {
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,.08);
  border-radius: 10px;
  color: var(--cyan);
  font-size: 12px;
}

.check {
  margin-left: auto;
  color: var(--cyan);
  font-size: 20px;
}

.quiz-actions {
  display: flex;
  gap: 15px;
  margin-top: 25px;
}

.quiz-actions .back-btn {
  min-height: 54px;
}

.quiz-actions .next-btn {
  flex: 1;
}

.result-header {
  padding: 20px 0 45px;
  text-align: center;
}

.success-icon {
  width: 70px;
  height: 70px;
  margin: auto auto 20px;
  display: grid;
  place-items: center;
  background: rgba(116,104,255,.16);
  border-radius: 22px;
  font-size: 34px;
}

.result-header h1 {
  font-size: clamp(36px, 5vw, 58px);
}

.result-header h1 span {
  display: inline;
}

.result-header p {
  max-width: 650px;
  margin: auto;
  color: var(--muted);
  line-height: 1.8;
}

.profile-pills {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 22px;
}

.profile-pills span {
  padding: 8px 13px;
  background: rgba(255,255,255,.06);
  border: 1px solid var(--border);
  border-radius: 30px;
  font-size: 11px;
}

.best-career {
  padding: clamp(25px, 5vw, 45px);
  margin-bottom: 22px;
  background: linear-gradient(135deg, rgba(116,104,255,.28), rgba(243,90,196,.12));
  border: 1px solid rgba(151,140,255,.3);
  border-radius: 30px;
}

.best-badge {
  display: inline-block;
  padding: 8px 13px;
  background: rgba(255,255,255,.08);
  border-radius: 30px;
  font-size: 10px;
}

.best-content {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 25px;
}

.best-icon {
  width: 100px;
  height: 100px;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,.1);
  border-radius: 28px;
  font-size: 52px;
}

.best-content h2 {
  margin: 0;
}

.best-content p {
  color: var(--muted);
}

.match-score {
  display: flex;
  align-items: center;
  gap: 13px;
}

.score-circle {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--cyan), var(--primary));
  border-radius: 50%;
  font-size: 12px;
  font-weight: 800;
}

.result-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.result-card {
  padding: 27px;
  border-radius: 24px;
}

.result-card.wide {
  grid-column: 1 / -1;
}

.card-heading {
  display: flex;
  gap: 12px;
  margin-bottom: 22px;
}

.card-heading > span {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  background: rgba(116,104,255,.14);
  border-radius: 13px;
}

.card-heading h3 {
  margin: 0;
}

.card-heading p {
  margin: 3px 0;
  color: var(--muted);
  font-size: 10px;
}

.career-list {
  display: grid;
  gap: 11px;
}

.career-result {
  min-height: 75px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 13px;
  background: rgba(255,255,255,.04);
  border-radius: 16px;
}

.rank {
  color: var(--muted);
}

.career-result-icon {
  font-size: 28px;
}

.career-result-info {
  flex: 1;
}

.career-result-info h4 {
  margin: 0;
}

.career-result-info p {
  margin: 3px 0;
  color: var(--muted);
  font-size: 10px;
}

.result-score {
  padding: 7px 10px;
  background: rgba(71,215,255,.1);
  border-radius: 10px;
  color: var(--cyan);
  font-size: 11px;
}

.clean-list {
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  list-style: none;
}

.clean-list li {
  color: #c9d2ea;
  font-size: 12px;
}

.analysis {
  display: grid;
  gap: 10px;
}

.analysis div {
  padding: 13px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  background: rgba(255,255,255,.04);
  border-radius: 12px;
}

.analysis span {
  color: var(--muted);
  font-size: 11px;
}

.analysis strong {
  text-align: right;
  font-size: 11px;
}

.roadmap {
  display: grid;
  gap: 20px;
}

.roadmap-step {
  display: flex;
  gap: 16px;
}

.step-number {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--pink));
  border-radius: 13px;
}

.roadmap-step h4 {
  margin: 2px 0 5px;
}

.roadmap-step p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.notice {
  margin-top: 22px;
  padding: 22px;
  background: rgba(255,184,77,.07);
  border: 1px solid rgba(255,184,77,.2);
  border-radius: 20px;
}

.notice strong {
  color: #ffd27a;
}

.notice p {
  color: #c3cadc;
  font-size: 11px;
  line-height: 1.8;
}

.result-back-btn,
.restart-btn {
  width: 100%;
  margin-top: 15px;
}

footer {
  width: min(1180px, calc(100% - 40px));
  margin: auto;
  padding: 35px 0 45px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--border);
}

.footer-logo .logo {
  width: 40px;
  height: 40px;
  font-size: 13px;
}

.footer-logo strong {
  font-size: 13px;
}

footer > p {
  color: var(--muted);
  font-size: 10px;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-visual {
    min-height: 430px;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 650px) {
  .hero {
    padding: 50px 0 70px;
  }

  .hero h1 {
    font-size: 47px;
  }

  .hero-buttons,
  .hero-stats {
    width: 100%;
    flex-direction: column;
  }

  .hero-stats {
    gap: 10px;
  }

  .hero-visual {
    transform: scale(.82);
    margin: -35px 0;
  }

  .features,
  .form-section,
  .quiz-page,
  .results-page {
    padding: 70px 15px;
  }

  .form-container,
  .question-card,
  .result-card {
    padding: 22px;
  }

  .form-grid,
  .result-grid {
    grid-template-columns: 1fr;
  }

  .form-group.full,
  .result-card.wide {
    grid-column: auto;
  }

  .quiz-header {
    align-items: center;
  }

  .best-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .quiz-actions {
    flex-direction: column-reverse;
  }

  .quiz-actions .back-btn,
  .quiz-actions .next-btn {
    width: 100%;
  }

  footer {
    flex-direction: column;
    gap: 20px;
  }
}
`;