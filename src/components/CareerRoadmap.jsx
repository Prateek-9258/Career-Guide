import React from "react";

const defaultSteps = [
  {
    number: "01",
    title: "Complete 12th",
    description: "Choose the stream and subjects required for your target career.",
    icon: "🎓",
  },
  {
    number: "02",
    title: "Entrance / Admission",
    description: "Prepare for the required entrance examination or admission process.",
    icon: "📝",
  },
  {
    number: "03",
    title: "Choose Course",
    description: "Select the right degree, diploma or professional course.",
    icon: "📚",
  },
  {
    number: "04",
    title: "Build Skills",
    description: "Learn practical skills through projects, certifications and internships.",
    icon: "💻",
  },
  {
    number: "05",
    title: "Start Career",
    description: "Build your resume and apply for internships or entry-level jobs.",
    icon: "🚀",
  },
  {
    number: "06",
    title: "Career Growth",
    description: "Upskill, specialize and move toward senior roles or higher studies.",
    icon: "📈",
  },
];

function CareerRoadmap({ title = "Your Career Roadmap", steps = defaultSteps }) {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes circlePop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes circlePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(227, 167, 60, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(227, 167, 60, 0); }
        }
        @keyframes lineGrow {
          from { height: 0; }
          to { height: 100%; }
        }
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes glowRing {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
        }

        .roadmap-wrapper {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(180deg, #f8fafc 0%, #eef2f6 100%);
          min-height: 100vh;
          padding: 50px 20px;
        }
        .roadmap-container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* Header */
        .roadmap-header {
          text-align: center;
          margin-bottom: 50px;
          animation: fadeInUp 0.6s ease-out;
        }
        .roadmap-badge {
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
        .roadmap-header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: #16324F;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .roadmap-header p {
          color: #5C6B7A;
          font-size: 1.05rem;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Timeline */
        .roadmap-timeline {
          position: relative;
          padding-left: 60px;
        }
        .roadmap-timeline::before {
          content: '';
          position: absolute;
          left: 24px;
          top: 12px;
          bottom: 12px;
          width: 3px;
          background: linear-gradient(180deg, #16324F 0%, #E3A73C 50%, #3E7C59 100%);
          border-radius: 3px;
          animation: lineGrow 1.2s ease-out 0.3s both;
        }

        /* Step Item */
        .roadmap-step {
          position: relative;
          margin-bottom: 32px;
          animation: fadeInUp 0.5s ease-out both;
        }
        .roadmap-step:nth-child(1) { animation-delay: 0.2s; }
        .roadmap-step:nth-child(2) { animation-delay: 0.35s; }
        .roadmap-step:nth-child(3) { animation-delay: 0.5s; }
        .roadmap-step:nth-child(4) { animation-delay: 0.65s; }
        .roadmap-step:nth-child(5) { animation-delay: 0.8s; }
        .roadmap-step:nth-child(6) { animation-delay: 0.95s; }
        .roadmap-step:last-child {
          margin-bottom: 0;
        }

        /* Circle */
        .roadmap-circle {
          position: absolute;
          left: -60px;
          top: 4px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #16324F, #0B1F33);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.85rem;
          font-weight: 700;
          border: 3px solid white;
          box-shadow: 0 4px 15px rgba(22, 50, 79, 0.25);
          z-index: 2;
          animation: circlePop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        }
        .roadmap-step:nth-child(1) .roadmap-circle { animation-delay: 0.3s; }
        .roadmap-step:nth-child(2) .roadmap-circle { animation-delay: 0.45s; }
        .roadmap-step:nth-child(3) .roadmap-circle { animation-delay: 0.6s; }
        .roadmap-step:nth-child(4) .roadmap-circle { animation-delay: 0.75s; }
        .roadmap-step:nth-child(5) .roadmap-circle { animation-delay: 0.9s; }
        .roadmap-step:nth-child(6) .roadmap-circle { animation-delay: 1.05s; }

        /* Glow ring behind circle */
        .roadmap-circle::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid #E3A73C;
          animation: glowRing 2.5s ease-out infinite;
          pointer-events: none;
        }
        .roadmap-step:nth-child(1) .roadmap-circle::after { animation-delay: 0.5s; }
        .roadmap-step:nth-child(2) .roadmap-circle::after { animation-delay: 0.7s; }
        .roadmap-step:nth-child(3) .roadmap-circle::after { animation-delay: 0.9s; }
        .roadmap-step:nth-child(4) .roadmap-circle::after { animation-delay: 1.1s; }
        .roadmap-step:nth-child(5) .roadmap-circle::after { animation-delay: 1.3s; }
        .roadmap-step:nth-child(6) .roadmap-circle::after { animation-delay: 1.5s; }

        /* Last circle different color */
        .roadmap-step:last-child .roadmap-circle {
          background: linear-gradient(135deg, #3E7C59, #2d5c41);
        }
        .roadmap-step:last-child .roadmap-circle::after {
          border-color: #3E7C59;
        }

        /* Card */
        .roadmap-card {
          background: white;
          border-radius: 16px;
          padding: 24px 28px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border: 1px solid #e2e8f0;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .roadmap-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #16324F, #E3A73C);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .roadmap-step:last-child .roadmap-card::before {
          background: linear-gradient(180deg, #3E7C59, #E3A73C);
        }
        .roadmap-card:hover {
          transform: translateX(8px);
          box-shadow: 0 12px 40px rgba(22, 50, 79, 0.12);
          border-color: #c8d4e0;
        }
        .roadmap-card:hover::before {
          opacity: 1;
        }

        /* Card Content */
        .roadmap-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .roadmap-card-icon {
          font-size: 1.8rem;
          animation: iconBounce 3s ease-in-out infinite;
          flex-shrink: 0;
        }
        .roadmap-step:nth-child(1) .roadmap-card-icon { animation-delay: 0s; }
        .roadmap-step:nth-child(2) .roadmap-card-icon { animation-delay: 0.5s; }
        .roadmap-step:nth-child(3) .roadmap-card-icon { animation-delay: 1s; }
        .roadmap-step:nth-child(4) .roadmap-card-icon { animation-delay: 1.5s; }
        .roadmap-step:nth-child(5) .roadmap-card-icon { animation-delay: 2s; }
        .roadmap-step:nth-child(6) .roadmap-card-icon { animation-delay: 2.5s; }

        .roadmap-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #16324F;
          margin: 0;
        }
        .roadmap-card p {
          color: #5C6B7A;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
          padding-left: 40px;
        }

        /* Step number badge inside card */
        .step-number-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f1f5f9;
          color: #16324F;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 20px;
          margin-left: auto;
        }
        .roadmap-step:last-child .step-number-badge {
          background: #d1fae5;
          color: #065f46;
        }

        /* Progress bar at bottom */
        .roadmap-progress {
          margin-top: 40px;
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border: 1px solid #e2e8f0;
          animation: fadeInUp 0.6s ease-out 1.2s both;
        }
        .roadmap-progress-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .roadmap-progress-label span {
          font-size: 0.85rem;
          font-weight: 700;
          color: #5C6B7A;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .roadmap-progress-label strong {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 1rem;
          color: #16324F;
        }
        .roadmap-progress-bar {
          height: 10px;
          background: #e2e8f0;
          border-radius: 5px;
          overflow: hidden;
        }
        .roadmap-progress-fill {
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg, #16324F, #E3A73C, #3E7C59);
          background-size: 200% auto;
          border-radius: 5px;
          animation: shimmer 3s linear infinite;
        }

        /* ========================
           MOBILE RESPONSIVE
        ======================== */
        @media (max-width: 640px) {
          .roadmap-wrapper { padding: 32px 16px; }
          .roadmap-header h1 { font-size: 1.7rem; }
          .roadmap-timeline {
            padding-left: 50px;
          }
          .roadmap-timeline::before {
            left: 19px;
          }
          .roadmap-circle {
            left: -50px;
            width: 42px;
            height: 42px;
            font-size: 0.75rem;
          }
          .roadmap-card {
            padding: 18px 20px;
          }
          .roadmap-card h3 {
            font-size: 1rem;
          }
          .roadmap-card p {
            font-size: 0.88rem;
            padding-left: 36px;
          }
          .roadmap-card-icon {
            font-size: 1.5rem;
          }
          .step-number-badge {
            font-size: 0.65rem;
            padding: 2px 8px;
          }
        }

        @media (max-width: 400px) {
          .roadmap-timeline {
            padding-left: 0;
          }
          .roadmap-timeline::before {
            left: 21px;
          }
          .roadmap-circle {
            position: relative;
            left: 0;
            top: 0;
            margin-bottom: 12px;
            width: 46px;
            height: 46px;
          }
          .roadmap-step {
            padding-left: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .roadmap-card {
            width: 100%;
          }
          .roadmap-card:hover {
            transform: translateY(-4px);
          }
        }
      `}</style>

      <div className="roadmap-wrapper">
        <div className="roadmap-container">
          {/* Header */}
          <div className="roadmap-header">
            <div className="roadmap-badge">
              <span>🛣️</span> Career Roadmap
            </div>
            <h1>{title}</h1>
            <p>Follow a simple step-by-step career journey from school to success.</p>
          </div>

          {/* Timeline */}
          <div className="roadmap-timeline">
            {steps.map((step, index) => (
              <div className="roadmap-step" key={step.number}>
                <div className="roadmap-circle">{step.number}</div>
                <div className="roadmap-card">
                  <div className="roadmap-card-header">
                    <span className="roadmap-card-icon">{step.icon}</span>
                    <h3>{step.title}</h3>
                    <span className="step-number-badge">Step {step.number}</span>
                  </div>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress */}
          <div className="roadmap-progress">
            <div className="roadmap-progress-label">
              <span>Journey Progress</span>
              <strong>0% → 100%</strong>
            </div>
            <div className="roadmap-progress-bar">
              <div className="roadmap-progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerRoadmap;