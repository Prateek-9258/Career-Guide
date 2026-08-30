import React from "react";
import "./CareerArticles.css";

const articles = [
  {
    icon: "🔬",
    title: "Best Careers After 12th Science",
    description:
      "Explore Engineering, Medical, Architecture, Data Science and other high-growth options.",
  },
  {
    icon: "💼",
    title: "Best Careers After Commerce",
    description:
      "Explore CA, CS, CMA, Finance, Banking, Business and Management pathways.",
  },
  {
    icon: "⚖️",
    title: "CA vs CS vs CMA",
    description:
      "Understand the difference between popular commerce professional courses and pick the right one.",
  },
  {
    icon: "💻",
    title: "BCA vs B.Tech",
    description:
      "Compare duration, skills, career opportunities and learning paths for tech aspirants.",
  },
  {
    icon: "🏛️",
    title: "Government Careers After 12th",
    description:
      "Explore government exams and career paths available after school with preparation tips.",
  },
  {
    icon: "🚀",
    title: "High-Demand Skills",
    description:
      "Discover practical skills that can help students prepare for future careers in any field.",
  },
];

function CareerArticles() {
  return (
    <section className="career-articles-section">
      <div className="career-articles-container">
        <div className="career-articles-header">
          <span className="career-badge">📚 Career Guides</span>
          <h2>Learn Before You Choose</h2>
          <p>
            Understand your options before selecting a career path that aligns
            with your passion and potential.
          </p>
        </div>

        <div className="career-articles-grid">
          {articles.map((article, index) => (
            <article
              className="career-article-card"
              key={article.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="career-article-icon">{article.icon}</div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <button className="career-read-btn">
                Read Guide
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerArticles;