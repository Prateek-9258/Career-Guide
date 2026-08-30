import React, { useState, useEffect } from "react";

function MyCareerPlan({ plan, onBack, onViewRoadmap, onRestart }) {
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const defaultPlan = {
    stream: "Commerce",
    career: "Chartered Accountant",
    course: "B.Com + CA",
    exam: "CA Foundation",
    duration: "4–5 Years",
    emoji: "📊",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
    steps: [
      { title: "Complete 12th Commerce", desc: "Build a strong foundation in accounts, economics, and business studies.", icon: "📚" },
      { title: "Start B.Com / CA Foundation", desc: "Enroll in B.Com and register for CA Foundation exam preparation.", icon: "📝" },
      { title: "Clear CA Intermediate", desc: "Pass both groups of CA Intermediate with dedicated study.", icon: "📖" },
      { title: "Complete Articleship", desc: "Gain 3 years of practical training under a practicing CA.", icon: "⚖️" },
      { title: "Clear CA Final", desc: "Pass both groups of CA Final to become a Chartered Accountant.", icon: "🎓" },
      { title: "Start Professional Career", desc: "Begin your journey as a qualified CA — practice or join a firm.", icon: "💼" },
    ],
  };

  const careerPlan = plan || defaultPlan;

  useEffect(() => {
    if (plan) {
      setSaved(true);
      return;
    }
    const existingPlan = localStorage.getItem("careerGuidePlan");
    if (existingPlan) setSaved(true);
  }, [plan]);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const savePlan = () => {
    localStorage.setItem("careerGuidePlan", JSON.stringify(careerPlan));
    setSaved(true);
    showToast("✓ Career plan saved successfully!", "success");
  };

  const removePlan = () => {
    localStorage.removeItem("careerGuidePlan");
    setSaved(false);
    showToast("Plan removed from saved items.", "error");
  };

  const styles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
    @keyframes toastIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    @keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(227,167,60,0.3); } 50% { box-shadow: 0 0 0 12px rgba(227,167,60,0); } }
    @keyframes lineGrow { from { height: 0; } to { height: 100%; } }
    @keyframes circlePop { 0% { transform: scale(0); opacity: 0; } 60% { transform: scale(1.15); } 100% { transform: scale(1); opacity: 1; } }

    .plan-wrapper {
      font-family: 'Space Grotesk', sans-serif;
      position: relative; z-index: 10; min-height: 100vh; padding: 40px 20px;
      background: linear-gradient(135deg, #0a0f1a 0%, #0f172a 40%, #16324F 100%);
    }
    .plan-container { max-width: 800px; margin: 0 auto; }

    .plan-glass-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 24px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.1);
      position: relative; overflow: hidden;
    }
    .plan-glass-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, transparent, #E3A73C, #F2C879, #E3A73C, transparent);
      background-size: 200% auto; animation: shimmer 2.5s linear infinite;
    }

    .plan-btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      padding: 12px 24px; border-radius: 14px; font-size: 0.95rem; font-weight: 700;
      border: none; cursor: pointer; transition: all 0.3s ease;
      font-family: 'Space Grotesk', sans-serif;
    }
    .plan-btn-gold {
      background: linear-gradient(135deg, #E3A73C, #F2C879); color: #0f172a;
      box-shadow: 0 8px 24px rgba(227, 167, 60, 0.3);
    }
    .plan-btn-gold:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(227, 167, 60, 0.4); }
    .plan-btn-ghost {
      background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.8);
      border: 1px solid rgba(255,255,255,0.12);
    }
    .plan-btn-ghost:hover { background: rgba(255,255,255,0.12); color: white; transform: translateY(-1px); }
    .plan-btn-danger {
      background: rgba(239,68,68,0.15); color: #fca5a5; border: 1px solid rgba(239,68,68,0.3);
    }
    .plan-btn-danger:hover { background: rgba(239,68,68,0.25); transform: translateY(-1px); }

    .plan-timeline-line {
      position: absolute; left: 11px; top: 0; bottom: 0; width: 3px;
      background: linear-gradient(180deg, #E3A73C, rgba(255,255,255,0.1)); border-radius: 3px;
    }

    @media (max-width: 640px) {
      .plan-wrapper { padding: 24px 16px; }
    }
  `;

  const infoItems = [
    { label: "Stream", value: careerPlan.stream },
    { label: "Course", value: careerPlan.course },
    { label: "Exam", value: careerPlan.exam },
    { label: "Duration", value: careerPlan.duration },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="plan-wrapper">
        <div className="plan-container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 40, animation: 'fadeInUp 0.6s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 48, height: 48, background: 'linear-gradient(135deg, #E3A73C, #F2C879)',
                borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', boxShadow: '0 8px 24px rgba(227, 167, 60, 0.3)',
                animation: 'popIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both'
              }}>🧭</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: 'white' }}>
                Career<span style={{ color: '#E3A73C' }}>Guide</span>
              </div>
            </div>
            <div style={{ fontSize: '4rem', display: 'inline-block', animation: 'float 3s ease-in-out infinite', marginBottom: 12, filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.3))' }}>
              {careerPlan.emoji}
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(99,102,241,0.15)', color: '#818cf8',
              padding: '6px 16px', borderRadius: 50, fontSize: '0.75rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16, border: '1px solid rgba(99,102,241,0.25)'
            }}>
              ⭐ My Career Plan
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: 6 }}>{careerPlan.career}</h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem' }}>Your personalized roadmap to success</p>
          </div>

          {/* Info Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 14,
            marginBottom: 40, animation: 'fadeInUp 0.7s ease-out 0.1s both'
          }}>
            {infoItems.map((item, i) => (
              <div key={i} className="plan-glass-card" style={{ padding: 20, textAlign: 'center', borderRadius: 16 }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 8 }}>
                  {item.label}
                </div>
                <div style={{ color: 'white', fontSize: '0.95rem', fontWeight: 700 }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10, animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            🗺️ Step-by-Step Journey
          </div>
          <div style={{ position: 'relative', paddingLeft: 36, marginBottom: 40 }}>
            <div className="plan-timeline-line" />
            {careerPlan.steps.map((step, idx) => (
              <div key={idx} style={{
                position: 'relative', marginBottom: 24, animation: 'slideInLeft 0.5s ease-out both',
                animationDelay: `${0.3 + idx * 0.1}s`
              }}>
                <div style={{
                  position: 'absolute', left: -29, top: 6, width: 18, height: 18, background: '#E3A73C',
                  borderRadius: '50%', border: '3px solid #0f172a', boxShadow: '0 0 0 3px rgba(227,167,60,0.25)',
                  animation: 'pulse 2s infinite', animationDelay: `${idx * 0.3}s`
                }} />
                <div className="plan-glass-card" style={{ padding: '22px', borderRadius: 18 }}>
                  <div style={{ position: 'absolute', right: 16, top: 16, color: 'rgba(255,255,255,0.06)', fontSize: '2.2rem', fontWeight: 800, userSelect: 'none' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: '1.6rem' }}>{step.icon}</span>
                    <span style={{ color: 'white', fontSize: '1.05rem', fontWeight: 700 }}>{step.title}</span>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.92rem', lineHeight: 1.6, paddingLeft: 40 }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', animation: 'fadeInUp 1s ease-out 0.9s both' }}>
            {onBack && (
              <button className="plan-btn plan-btn-ghost" onClick={onBack}>← Back to Result</button>
            )}
            {onViewRoadmap && (
              <button className="plan-btn plan-btn-ghost" onClick={onViewRoadmap}>🛣️ View Roadmap</button>
            )}
            {!saved ? (
              <button className="plan-btn plan-btn-gold" onClick={savePlan}>💾 Save Plan</button>
            ) : (
              <button className="plan-btn plan-btn-danger" onClick={removePlan}>🗑️ Remove Plan</button>
            )}
            {onRestart && (
              <button className="plan-btn plan-btn-ghost" onClick={onRestart}>🔄 Retake Quiz</button>
            )}
          </div>
        </div>

        {/* Toast */}
        {toast.show && (
          <div style={{
            position: 'fixed', top: 24, left: '50%', transform: 'translateX(-50%)',
            padding: '14px 28px', borderRadius: 14, fontWeight: 600, fontSize: '0.95rem', zIndex: 9999,
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)', animation: 'toastIn 0.4s ease-out',
            backdropFilter: 'blur(10px)',
            background: toast.type === 'success' 
              ? 'rgba(16, 185, 129, 0.15)' 
              : 'rgba(239, 68, 68, 0.15)',
            color: toast.type === 'success' ? '#6ee7b7' : '#fca5a5',
            border: `1px solid ${toast.type === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
          }}>
            {toast.message}
          </div>
        )}
      </div>
    </>
  );
}

export default MyCareerPlan;