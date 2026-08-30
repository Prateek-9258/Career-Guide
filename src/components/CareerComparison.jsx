import React, { useState } from "react";

const careers = [
  {
    name: "Engineering",
    icon: "⚙️",
    duration: "4 Years",
    salary: "₹4–12 LPA*",
    exam: "JEE Main / Advanced",
    skills: "Problem Solving, Maths, Technology",
    scope: "IT, Core Engineering, PSU, R&D",
  },
  {
    name: "Medical",
    icon: "🩺",
    duration: "5.5 Years+",
    salary: "Varies by role*",
    exam: "NEET UG",
    skills: "Biology, Communication, Patience",
    scope: "Hospitals, Research, Healthcare",
  },
  {
    name: "Chartered Accountant",
    icon: "📊",
    duration: "4–5 Years",
    salary: "₹6–12 LPA*",
    exam: "CA Foundation",
    skills: "Accounting, Finance, Analysis",
    scope: "Audit, Tax, Finance, Consulting",
  },
  {
    name: "BCA / Software",
    icon: "💻",
    duration: "3 Years",
    salary: "₹3–9 LPA*",
    exam: "University / Merit",
    skills: "Programming, Web Development",
    scope: "IT, Software, Startups",
  },
  {
    name: "Law",
    icon: "⚖️",
    duration: "5 Years",
    salary: "₹3–15 LPA*",
    exam: "CLAT / AILET",
    skills: "Logic, Communication, Research",
    scope: "Courts, Corporate, Litigation",
  },
  {
    name: "Design",
    icon: "🎨",
    duration: "4 Years",
    salary: "₹3–10 LPA*",
    exam: "NID / NIFT / UCEED",
    skills: "Creativity, Tools, Aesthetics",
    scope: "UI/UX, Fashion, Product Design",
  },
];

const categories = [
  { key: "duration", label: "⏱️ Duration", icon: "⏱️" },
  { key: "salary", label: "💰 Salary", icon: "💰" },
  { key: "exam", label: "📝 Entrance Exam", icon: "📝" },
  { key: "skills", label: "🧠 Skills", icon: "🧠" },
  { key: "scope", label: "🚀 Scope", icon: "🚀" },
];

function CareerComparison() {
  const [first, setFirst] = useState("Engineering");
  const [second, setSecond] = useState("BCA / Software");
  const [animating, setAnimating] = useState(false);

  const career1 = careers.find((c) => c.name === first);
  const career2 = careers.find((c) => c.name === second);

  const handleChange = (setter, value) => {
    if (value === first || value === second) return;
    setAnimating(true);
    setTimeout(() => {
      setter(value);
      setAnimating(false);
    }, 200);
  };

  const swapCareers = () => {
    setAnimating(true);
    setTimeout(() => {
      setFirst(second);
      setSecond(first);
      setAnimating(false);
    }, 200);
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes rowEnter {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .comparison-wrapper {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(180deg, #f8fafc 0%, #eef2f6 100%);
          min-height: 100vh;
          padding: 40px 20px;
        }
        .comparison-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Header */
        .comparison-header {
          text-align: center;
          margin-bottom: 40px;
          animation: fadeInUp 0.6s ease-out;
        }
        .comparison-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #16324F, #0B1F33);
          color: #E3A73C;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
          box-shadow: 0 4px 15px rgba(22, 50, 79, 0.2);
        }
        .comparison-header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: #16324F;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .comparison-header p {
          color: #5C6B7A;
          font-size: 1.05rem;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Select Cards */
        .comparison-selects {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 32px;
          flex-wrap: wrap;
          animation: fadeInUp 0.6s ease-out 0.15s backwards;
        }
        .select-card {
          background: white;
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
          min-width: 260px;
          position: relative;
          overflow: hidden;
        }
        .select-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #16324F, #E3A73C);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .select-card:hover {
          border-color: #16324F;
          box-shadow: 0 8px 30px rgba(22, 50, 79, 0.12);
          transform: translateY(-2px);
        }
        .select-card:hover::before {
          opacity: 1;
        }
        .select-card label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .select-card select {
          appearance: none;
          -webkit-appearance: none;
          width: 100%;
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 40px 12px 16px;
          font-size: 1rem;
          font-weight: 700;
          color: #16324F;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.25s ease;
          outline: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2316324F' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
        }
        .select-card select:hover {
          border-color: #16324F;
          background-color: white;
        }
        .select-card select:focus {
          border-color: #16324F;
          box-shadow: 0 0 0 4px rgba(22, 50, 79, 0.1);
        }

        /* VS Badge */
        .vs-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .vs-badge {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #E3A73C, #d4952a);
          color: white;
          border-radius: 50%;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 1px;
          box-shadow: 0 6px 20px rgba(227, 167, 60, 0.35);
          animation: pulse 2s ease-in-out infinite;
          cursor: default;
        }
        .swap-btn {
          background: none;
          border: 2px solid #e2e8f0;
          color: #5C6B7A;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: inherit;
        }
        .swap-btn:hover {
          border-color: #16324F;
          color: #16324F;
          background: #f1f5f9;
        }

        /* Table */
        .comparison-table-wrapper {
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          overflow: hidden;
          border: 1px solid #e2e8f0;
          animation: fadeInUp 0.6s ease-out 0.3s backwards;
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        .comparison-table thead {
          background: linear-gradient(135deg, #16324F 0%, #0B1F33 100%);
          color: white;
        }
        .comparison-table th {
          padding: 22px 24px;
          font-weight: 700;
          font-size: 1rem;
          text-align: left;
          font-family: 'Space Grotesk', sans-serif;
        }
        .comparison-table th:first-child {
          width: 22%;
          color: #94a3b8;
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .comparison-table th:nth-child(2),
        .comparison-table th:nth-child(3) {
          width: 39%;
        }
        .comparison-table th .career-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .comparison-table th .career-header .icon {
          font-size: 1.6rem;
        }
        .comparison-table th .career-header .name {
          font-size: 1.1rem;
        }

        .comparison-table tbody tr {
          border-bottom: 1px solid #f1f5f9;
          transition: all 0.2s ease;
          animation: rowEnter 0.4s ease backwards;
        }
        .comparison-table tbody tr:nth-child(1) { animation-delay: 0.35s; }
        .comparison-table tbody tr:nth-child(2) { animation-delay: 0.42s; }
        .comparison-table tbody tr:nth-child(3) { animation-delay: 0.49s; }
        .comparison-table tbody tr:nth-child(4) { animation-delay: 0.56s; }
        .comparison-table tbody tr:nth-child(5) { animation-delay: 0.63s; }

        .comparison-table tbody tr:last-child {
          border-bottom: none;
        }
        .comparison-table tbody tr:hover {
          background: linear-gradient(90deg, #f8fafc, #f1f5f9);
        }
        .comparison-table td {
          padding: 20px 24px;
          color: #334155;
          line-height: 1.6;
          vertical-align: top;
        }
        .comparison-table td:first-child {
          font-weight: 700;
          color: #475569;
          font-size: 0.9rem;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .comparison-table td:first-child .cat-icon {
          font-size: 1.2rem;
        }
        .comparison-table td:nth-child(2),
        .comparison-table td:nth-child(3) {
          font-weight: 500;
        }

        /* Winner highlight */
        .comparison-table tbody tr:hover td:nth-child(2).highlight,
        .comparison-table tbody tr:hover td:nth-child(3).highlight {
          color: #16324F;
          font-weight: 700;
        }

        /* Salary Note */
        .salary-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
          padding: 16px 24px;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          border-radius: 12px;
          color: #92400e;
          font-size: 0.85rem;
          font-weight: 500;
          text-align: center;
          animation: fadeInUp 0.5s ease-out 0.7s backwards;
          border: 1px solid #fbbf24;
        }
        .salary-note span {
          font-size: 1.2rem;
        }

        /* Animating state */
        .comparison-table-wrapper.animating {
          opacity: 0.6;
          transform: scale(0.98);
          transition: all 0.2s ease;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .comparison-wrapper { padding: 24px 16px; }
          .comparison-header h1 { font-size: 1.7rem; }
          .comparison-selects { flex-direction: column; width: 100%; }
          .select-card { width: 100%; min-width: unset; }
          .vs-wrapper { flex-direction: row; }
          .comparison-table-wrapper { overflow-x: auto; }
          .comparison-table { min-width: 600px; }
          .comparison-table th,
          .comparison-table td { padding: 14px 16px; font-size: 0.88rem; }
        }
        @media (max-width: 480px) {
          .comparison-header h1 { font-size: 1.4rem; }
          .comparison-table th,
          .comparison-table td { padding: 12px 14px; font-size: 0.82rem; }
        }
      `}</style>

      <div className="comparison-wrapper">
        <div className="comparison-container">
          {/* Header */}
          <div className="comparison-header">
            <div className="comparison-badge">
              <span>⚖️</span> Career Comparison
            </div>
            <h1>Compare Careers Side by Side</h1>
            <p>
              Compare duration, exams, skills and career scope before making your big decision.
            </p>
          </div>

          {/* Selects */}
          <div className="comparison-selects">
            <div className="select-card" style={{ animation: "slideInLeft 0.5s ease-out 0.1s backwards" }}>
              <label>Choose First Career</label>
              <select
                value={first}
                onChange={(e) => handleChange(setFirst, e.target.value)}
              >
                {careers.map((career) => (
                  <option key={career.name} value={career.name}>
                    {career.icon} {career.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="vs-wrapper">
              <div className="vs-badge">VS</div>
              <button className="swap-btn" onClick={swapCareers} title="Swap careers">
                ⇄ Swap
              </button>
            </div>

            <div className="select-card" style={{ animation: "slideInRight 0.5s ease-out 0.1s backwards" }}>
              <label>Choose Second Career</label>
              <select
                value={second}
                onChange={(e) => handleChange(setSecond, e.target.value)}
              >
                {careers.map((career) => (
                  <option key={career.name} value={career.name}>
                    {career.icon} {career.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Table */}
          <div className={`comparison-table-wrapper ${animating ? "animating" : ""}`}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>
                    <div className="career-header">
                      <span className="icon">{career1.icon}</span>
                      <span className="name">{career1.name}</span>
                    </div>
                  </th>
                  <th>
                    <div className="career-header">
                      <span className="icon">{career2.icon}</span>
                      <span className="name">{career2.name}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.key}>
                    <td>
                      <span className="cat-icon">{cat.icon}</span>
                      {cat.label.replace(/^[^\s]+\s/, "")}
                    </td>
                    <td>{career1[cat.key]}</td>
                    <td>{career2[cat.key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="salary-note">
            <span>💡</span>
            Salary figures are indicative and can vary by college, location, role, skills and experience.
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerComparison;