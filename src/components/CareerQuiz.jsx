import React, { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    question: "Which subjects do you enjoy the most?",
    options: [
      { text: "Math, Physics, Problem Solving", type: "science", icon: "🔢" },
      { text: "Accounts, Economics, Business", type: "commerce", icon: "📊" },
      { text: "History, Literature, Psychology", type: "arts", icon: "📖" },
      { text: "Design, Drawing, Creativity", type: "design", icon: "🎨" },
    ],
  },
  {
    id: 2,
    question: "What kind of work excites you?",
    options: [
      { text: "Building apps, coding, tech innovation", type: "science", icon: "💻" },
      { text: "Managing money, stock market, business", type: "commerce", icon: "💰" },
      { text: "Helping people, teaching, counseling", type: "arts", icon: "🤝" },
      { text: "Creating visuals, UI/UX, branding", type: "design", icon: "✏️" },
    ],
  },
  {
    id: 3,
    question: "How do you prefer to work?",
    options: [
      { text: "Alone with logic & data", type: "science", icon: "🧠" },
      { text: "With numbers & financial reports", type: "commerce", icon: "📈" },
      { text: "With people & communities", type: "arts", icon: "👥" },
      { text: "With colors, tools & imagination", type: "design", icon: "🖌️" },
    ],
  },
  {
    id: 4,
    question: "Pick a dream workspace:",
    options: [
      { text: "Tech company / Research lab", type: "science", icon: "🏢" },
      { text: "Bank / Corporate office", type: "commerce", icon: "🏦" },
      { text: "School / Hospital / NGO", type: "arts", icon: "🏥" },
      { text: "Studio / Agency / Freelance", type: "design", icon: "🎬" },
    ],
  },
  {
    id: 5,
    question: "What is your strongest skill?",
    options: [
      { text: "Analytical thinking & coding", type: "science", icon: "⚡" },
      { text: "Negotiation & leadership", type: "commerce", icon: "🎯" },
      { text: "Communication & empathy", type: "arts", icon: "💬" },
      { text: "Visual storytelling & aesthetics", type: "design", icon: "🌈" },
    ],
  },
  {
    id: 6,
    question: "Which activity sounds most fun?",
    options: [
      { text: "Building a robot or solving puzzles", type: "science", icon: "🤖" },
      { text: "Starting a small business", type: "commerce", icon: "🚀" },
      { text: "Volunteering or writing a book", type: "arts", icon: "📚" },
      { text: "Designing a poster or app interface", type: "design", icon: "📱" },
    ],
  },
  {
    id: 7,
    question: "What motivates you the most?",
    options: [
      { text: "Creating something new with technology", type: "science", icon: "🔬" },
      { text: "Earning money & financial freedom", type: "commerce", icon: "💵" },
      { text: "Making a difference in society", type: "arts", icon: "🌍" },
      { text: "Seeing your creative vision come alive", type: "design", icon: "✨" },
    ],
  },
  {
    id: 8,
    question: "Choose a role model field:",
    options: [
      { text: "Scientists, Engineers, Hackers", type: "science", icon: "👨‍🔬" },
      { text: "Entrepreneurs, Investors, Bankers", type: "commerce", icon: "👔" },
      { text: "Teachers, Doctors, Writers", type: "arts", icon: "👩‍⚕️" },
      { text: "Artists, Architects, Filmmakers", type: "design", icon: "👨‍🎨" },
    ],
  },
];

const careerPlans = {
  science: {
    stream: "Science (PCM)",
    career: "Software Engineer",
    course: "B.Tech CSE / B.Sc CS",
    exam: "JEE Mains / GATE",
    duration: "4 Years",
    emoji: "💻",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    steps: [
      { title: "Complete 12th Science (PCM)", desc: "Focus on Physics, Chemistry, and Mathematics with strong problem-solving skills.", icon: "📚" },
      { title: "Crack JEE / Entrance Exams", desc: "Prepare for JEE Mains/Advanced or state-level engineering entrance exams.", icon: "📝" },
      { title: "Join B.Tech / B.Sc CS", desc: "Enroll in a reputed college for Computer Science or related branch.", icon: "🎓" },
      { title: "Learn Programming Languages", desc: "Master Python, Java, C++, JavaScript, and data structures & algorithms.", icon: "💻" },
      { title: "Build Projects & Internships", desc: "Create real-world projects and do internships at tech companies.", icon: "🚀" },
      { title: "Get Placed / Start Career", desc: "Crack campus placements or apply to top tech companies like Google, Amazon, etc.", icon: "💼" },
    ],
  },
  commerce: {
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
  },
  arts: {
    stream: "Arts / Humanities",
    career: "Psychologist",
    course: "BA Psychology + MA",
    exam: "NET / Entrance Tests",
    duration: "5–6 Years",
    emoji: "🧠",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
    steps: [
      { title: "Complete 12th Arts", desc: "Study Psychology, Sociology, and English to build a strong base.", icon: "📚" },
      { title: "Pursue BA in Psychology", desc: "Join a reputed university for Bachelor's in Psychology.", icon: "🎓" },
      { title: "Pursue MA in Psychology", desc: "Specialize in Clinical, Counseling, or Organizational Psychology.", icon: "🧠" },
      { title: "Do Internships", desc: "Work under practicing psychologists at hospitals or clinics.", icon: "🏥" },
      { title: "Get Licensed", desc: "Complete required supervised hours and get your practice license.", icon: "📜" },
      { title: "Start Practice / Job", desc: "Open your own clinic or join hospitals, schools, or corporate firms.", icon: "💼" },
    ],
  },
  design: {
    stream: "Design / Fine Arts",
    career: "UI/UX Designer",
    course: "B.Des / BFA",
    exam: "NID / NIFT / UCEED",
    duration: "4 Years",
    emoji: "🎨",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
    steps: [
      { title: "Complete 12th (Any Stream)", desc: "Develop drawing, sketching, and creative thinking skills.", icon: "📚" },
      { title: "Crack Design Entrance", desc: "Prepare for NID, NIFT, UCEED, or other design entrance exams.", icon: "📝" },
      { title: "Join B.Des / BFA", desc: "Enroll in a top design institute for formal design education.", icon: "🎓" },
      { title: "Master Design Tools", desc: "Learn Figma, Adobe XD, Photoshop, Illustrator, and prototyping tools.", icon: "🛠️" },
      { title: "Build Portfolio", desc: "Create case studies, mock projects, and real client work.", icon: "📁" },
      { title: "Get Hired / Freelance", desc: "Join product companies, agencies, or work as a freelance designer.", icon: "💼" },
    ],
  },
};

/* ========== SHARED GLASS STYLES ========== */
const sharedStyles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
@keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
@keyframes slideOutLeft { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(-40px); } }
@keyframes slideOutRight { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(40px); } }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes floatOrb { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -30px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.95); } }
@keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
@keyframes particleFloat { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; } }
@keyframes logoPop { from { opacity: 0; transform: scale(0.5) rotate(-10deg); } to { opacity: 1; transform: scale(1) rotate(0deg); } }
@keyframes pictureFloat { 0%, 100% { transform: rotateY(-15deg) rotateX(10deg) translateY(0); } 50% { transform: rotateY(-10deg) rotateX(8deg) translateY(-10px); } }
@keyframes bounceEmoji { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-8px) rotate(10deg); } }
@keyframes popIn { from { opacity: 0; transform: scale(0.85) translateY(30px); } to { opacity: 1; transform: scale(1) translateY(0); } }
@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes toastIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes lineGrow { from { height: 0; } to { height: 100%; } }
@keyframes circlePop { 0% { transform: scale(0); opacity: 0; } 60% { transform: scale(1.15); } 100% { transform: scale(1); opacity: 1; } }

.glass-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: linear-gradient(135deg, #0a0f1a 0%, #0f172a 40%, #16324F 100%);
  overflow: hidden;
}
.glass-bg::before, .glass-bg::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: floatOrb 8s ease-in-out infinite;
}
.glass-bg::before {
  width: 400px; height: 400px;
  background: radial-gradient(circle, #E3A73C, transparent 70%);
  top: -10%; left: -5%;
}
.glass-bg::after {
  width: 350px; height: 350px;
  background: radial-gradient(circle, #3b82f6, transparent 70%);
  bottom: -10%; right: -5%;
  animation-delay: 4s;
}
.glass-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(2px);
  animation: particleFloat linear infinite;
}
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 28px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.05);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.glass-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #E3A73C, #F2C879, #E3A73C, transparent);
  background-size: 200% auto;
  animation: shimmer 2.5s linear infinite;
}
.glass-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Space Grotesk', sans-serif;
}
.glass-btn-gold {
  background: linear-gradient(135deg, #E3A73C, #F2C879);
  color: #0f172a;
  box-shadow: 0 8px 24px rgba(227, 167, 60, 0.3);
  position: relative;
  overflow: hidden;
}
.glass-btn-gold::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.6s ease;
}
.glass-btn-gold:hover::after { left: 100%; }
.glass-btn-gold:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(227, 167, 60, 0.4); }
.glass-btn-gold:active { transform: translateY(0) scale(0.98); }
.glass-btn-gold:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
.glass-btn-ghost {
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.8);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(4px);
}
.glass-btn-ghost:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.25); color: white; transform: translateY(-1px); }
.glass-btn-ghost:disabled { opacity: 0.3; cursor: not-allowed; transform: none; }
.glass-input {
  padding: 14px 18px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  color: white;
  transition: all 0.3s ease;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}
.glass-input::placeholder { color: rgba(255,255,255,0.35); }
.glass-input:focus {
  border-color: #E3A73C;
  background: rgba(255,255,255,0.08);
  box-shadow: 0 0 0 4px rgba(227, 167, 60, 0.15);
}
.glass-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
}
.glass-logo-icon {
  width: 48px; height: 48px;
  background: linear-gradient(135deg, #E3A73C, #F2C879);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  box-shadow: 0 8px 24px rgba(227, 167, 60, 0.3);
  animation: logoPop 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
}
.glass-logo-text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.5px;
}
.glass-logo-text span { color: #E3A73C; }
.picture-3d {
  position: relative;
  width: 160px; height: 110px;
  background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.2);
  transform: rotateY(-15deg) rotateX(10deg);
  animation: pictureFloat 4s ease-in-out infinite;
  transform-style: preserve-3d;
}
.picture-3d::before {
  content: '';
  position: absolute;
  inset: -10px;
  background: linear-gradient(135deg, rgba(227,167,60,0.2), transparent 60%);
  border-radius: 20px;
  transform: translateZ(-30px);
  filter: blur(15px);
}
.picture-3d::after {
  content: '🎯';
  position: absolute;
  top: -25px; right: -20px;
  font-size: 2.5rem;
  filter: drop-shadow(0 5px 10px rgba(0,0,0,0.3));
  animation: bounceEmoji 2s ease-in-out infinite;
}
@media (max-width: 640px) {
  .glass-logo-text { font-size: 1.2rem; }
  .glass-logo-icon { width: 40px; height: 40px; font-size: 1.3rem; }
  .picture-3d { width: 120px; height: 90px; font-size: 2.5rem; }
  .picture-3d::after { font-size: 2rem; top: -20px; right: -15px; }
}
`;

function CareerQuiz({ onNavigateToSection }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [view, setView] = useState("quiz");
  const [result, setResult] = useState(null);
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    const existing = localStorage.getItem("careerGuidePlan");
    if (existing) setSaved(true);
  }, []);

  const calculateResult = (finalAnswers) => {
    const counts = {};
    finalAnswers.forEach((a) => {
      counts[a] = (counts[a] || 0) + 1;
    });
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    
    if (entries.length === 0) return careerPlans.science;
    
    const winner = entries[0][0];
    return careerPlans[winner] || careerPlans.science;
  };

  const handleOptionClick = (type) => {
    if (isAnimating) return;
    setSelectedOption(type);
  };

  const handleNext = () => {
    if (selectedOption === null || isAnimating) return;
    
    const newAnswers = [...answers, selectedOption];
    setIsAnimating(true);
    setDirection("next");
    
    setTimeout(() => {
      setSelectedOption(null);
      setIsAnimating(false);
      
      if (currentQ < questions.length - 1) {
        setAnswers(newAnswers);
        setCurrentQ(currentQ + 1);
      } else {
        // Last question — show result
        setAnswers(newAnswers);
        const finalResult = calculateResult(newAnswers);
        setResult(finalResult);
        setView("result");
        setCurrentQ(0); // reset for next time
      }
    }, 400);
  };

  const handlePrev = () => {
    if (currentQ === 0 || isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    
    setTimeout(() => {
      const newAnswers = answers.slice(0, -1);
      setAnswers(newAnswers);
      setCurrentQ(currentQ - 1);
      setSelectedOption(answers[answers.length - 1] || null);
      setIsAnimating(false);
    }, 400);
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setAnswers([]);
    setSelectedOption(null);
    setView("quiz");
    setResult(null);
    setDirection("next");
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const finishAndGo = (targetView) => {
    if (selectedOption === null || isAnimating) return;
    const newAnswers = [...answers, selectedOption];
    setIsAnimating(true);
    setDirection("next");
    setTimeout(() => {
      setSelectedOption(null);
      setIsAnimating(false);
      setAnswers(newAnswers);
      const finalResult = calculateResult(newAnswers);
      setResult(finalResult);
      setView(targetView);
      setCurrentQ(0);
    }, 400);
  };

  const finishAndNavigate = (section) => {
    if (selectedOption === null || isAnimating) return;
    const newAnswers = [...answers, selectedOption];
    setIsAnimating(true);
    setDirection("next");
    setTimeout(() => {
      setSelectedOption(null);
      setIsAnimating(false);
      setAnswers(newAnswers);
      const finalResult = calculateResult(newAnswers);
      setResult(finalResult);
      localStorage.setItem("careerGuidePlan", JSON.stringify(finalResult));
      setSaved(true);
      setCurrentQ(0);
      if (onNavigateToSection) {
        onNavigateToSection(section);
      }
    }, 400);
  };

  const savePlan = () => {
    if (result) {
      localStorage.setItem("careerGuidePlan", JSON.stringify(result));
      setSaved(true);
      showToast("Career plan saved successfully!", "success");
    }
  };

  const removePlan = () => {
    localStorage.removeItem("careerGuidePlan");
    setSaved(false);
    showToast("Plan removed from saved items.", "error");
  };

  const progress = ((currentQ + 1) / questions.length) * 100;
  const q = questions[currentQ];

  return (
    <>
      <style>{sharedStyles}</style>

      {/* Background Layer */}
      <div className="glass-bg">
        <div className="glass-particle" style={{ width: 8, height: 8, top: '20%', left: '10%', animationDuration: '12s' }} />
        <div className="glass-particle" style={{ width: 12, height: 12, top: '60%', left: '85%', animationDuration: '15s', animationDelay: '2s' }} />
        <div className="glass-particle" style={{ width: 6, height: 6, top: '80%', left: '30%', animationDuration: '10s', animationDelay: '4s' }} />
        <div className="glass-particle" style={{ width: 10, height: 10, top: '15%', left: '70%', animationDuration: '18s', animationDelay: '1s' }} />
        <div className="glass-particle" style={{ width: 14, height: 14, top: '40%', left: '50%', animationDuration: '20s', animationDelay: '3s' }} />
      </div>

      {/* ======================== QUIZ VIEW ======================== */}
      {view === "quiz" && (
        <div style={{
          position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          <div className="glass-card" style={{ maxWidth: 720, width: '100%', padding: '48px', animationDelay: '0.1s' }}>
            {/* Progress */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: '0.8rem', color: '#E3A73C', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  Career Quiz
                </span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                  {currentQ + 1} / {questions.length}
                </span>
              </div>
              <div style={{ height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #E3A73C, #F2C879)', borderRadius: 4,
                  transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)', position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: 20,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3))', borderRadius: 4
                  }} />
                </div>
              </div>
            </div>

            {/* Question */}
            <div style={{
              animation: `${direction === "next" ? "slideInRight" : "slideInLeft"} 0.4s ease-out`
            }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(227,167,60,0.1)', color: '#E3A73C',
                padding: '6px 16px', borderRadius: 50, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16
              }}>
                <span style={{ fontSize: '1rem' }}>✨</span> Question {currentQ + 1}
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: 32, lineHeight: 1.3 }}>
                {q.question}
              </div>

              {/* 3D Picture Decoration */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28, perspective: 800 }}>
                <div className="picture-3d">🧭</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {q.options.map((opt, idx) => (
                  <button key={idx} onClick={() => handleOptionClick(opt.type)} style={{
                    display: 'flex', alignItems: 'center', gap: 14, padding: '18px 22px',
                    border: `2px solid ${selectedOption === opt.type ? '#E3A73C' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 16, cursor: 'pointer', transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                    background: selectedOption === opt.type ? 'rgba(227,167,60,0.1)' : 'rgba(255,255,255,0.02)',
                    fontSize: '1.05rem', color: '#e2e8f0', fontWeight: 500, textAlign: 'left', fontFamily: 'inherit',
                    position: 'relative', overflow: 'hidden', transform: selectedOption === opt.type ? 'translateX(6px)' : 'translateX(0)',
                    boxShadow: selectedOption === opt.type ? '0 4px 20px rgba(227,167,60,0.15)' : 'none'
                  }}>
                    <span style={{ fontSize: '1.5rem', zIndex: 1, flexShrink: 0 }}>{opt.icon}</span>
                    <span style={{ flex: 1, zIndex: 1 }}>{opt.text}</span>
                    <div style={{
                      width: 26, height: 26, border: `2.5px solid ${selectedOption === opt.type ? '#E3A73C' : 'rgba(255,255,255,0.2)'}`,
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.25s ease',
                      background: selectedOption === opt.type ? '#E3A73C' : 'transparent', zIndex: 1
                    }}>
                      {selectedOption === opt.type && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <button className="glass-btn glass-btn-ghost" onClick={handlePrev} disabled={currentQ === 0 || isAnimating}>
                ← Back
              </button>
              {currentQ === questions.length - 1 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10, width: '100%', maxWidth: 520 }}>
                  <button className="glass-btn glass-btn-gold" onClick={() => finishAndGo("roadmap")} disabled={selectedOption === null || isAnimating}>
                    🛣️ Career Roadmap
                  </button>
                  <button className="glass-btn" onClick={() => finishAndGo("myplan")} disabled={selectedOption === null || isAnimating} style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white', boxShadow: '0 8px 24px rgba(99,102,241,0.3)' }}>
                    📋 My Career Plan
                  </button>
                  <button className="glass-btn" onClick={() => finishAndNavigate("colleges")} disabled={selectedOption === null || isAnimating} style={{ background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)', color: 'white', boxShadow: '0 8px 24px rgba(14,165,233,0.3)' }}>
                    🏛️ Top Colleges
                  </button>
                  <button className="glass-btn" onClick={() => finishAndNavigate("streams")} disabled={selectedOption === null || isAnimating} style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)', color: 'white', boxShadow: '0 8px 24px rgba(16,185,129,0.3)' }}>
                    📚 Career Streams
                  </button>
                </div>
              ) : (
                <button className="glass-btn glass-btn-gold" onClick={handleNext} disabled={selectedOption === null || isAnimating}>
                  Next →
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================== RESULT VIEW ======================== */}
      {view === "result" && (
        <div style={{
          position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          {!result ? (
            <div className="glass-card" style={{ maxWidth: 400, width: '100%', padding: '48px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>⏳</div>
              <h2 style={{ color: 'white', marginBottom: 8 }}>Loading Result...</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)' }}>Please wait while we calculate your career path.</p>
            </div>
          ) : (
            <div className="glass-card" style={{ maxWidth: 560, width: '100%', padding: '48px', textAlign: 'center', animation: 'popIn 0.7s cubic-bezier(0.175,0.885,0.32,1.275)' }}>
              {/* Logo */}
              <div className="glass-logo" style={{ justifyContent: 'center', marginBottom: 24 }}>
                <div className="glass-logo-icon">🧭</div>
                <div className="glass-logo-text">Career<span>Guide</span></div>
              </div>

              <div style={{ fontSize: '5rem', marginBottom: 16, animation: 'float 3s ease-in-out infinite', display: 'inline-block', filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.3))' }}>
                {result.emoji}
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: 8, textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                Your Ideal Career
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', marginBottom: 28 }}>
                Based on your {questions.length} answers, we found your perfect match!
              </p>

              <div style={{
                background: 'rgba(255,255,255,0.04)', borderRadius: 20, padding: 24, marginBottom: 28,
                textAlign: 'left', border: '1px solid rgba(255,255,255,0.06)', animation: 'fadeInUp 0.6s ease-out 0.2s both'
              }}>
                {[
                  { label: 'Career', value: result.career },
                  { label: 'Stream', value: result.stream, badge: true },
                  { label: 'Course', value: result.course },
                  { label: 'Exam', value: result.exam },
                  { label: 'Duration', value: result.duration },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0',
                    borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none'
                  }}>
                    <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 500 }}>{item.label}</span>
                    {item.badge ? (
                      <span style={{
                        background: result.gradient, color: 'white', padding: '4px 14px', borderRadius: 20,
                        fontSize: '0.8rem', fontWeight: 700, boxShadow: `0 2px 10px ${result.color}40`
                      }}>{item.value}</span>
                    ) : (
                      <strong style={{ color: 'white', fontSize: '1rem' }}>{item.value}</strong>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="glass-btn glass-btn-gold" style={{ flex: 1, minWidth: 200, animation: 'fadeInUp 0.5s ease-out 0.3s backwards' }} onClick={() => setView("roadmap")}>
                    🛣️ Career Roadmap
                  </button>
                  <button className="glass-btn glass-btn-ghost" style={{ flex: 1, minWidth: 200, animation: 'fadeInUp 0.5s ease-out 0.4s backwards' }} onClick={() => setView("myplan")}>
                    📋 View My Plan
                  </button>
                </div>
                <button className="glass-btn glass-btn-ghost" style={{ animation: 'fadeInUp 0.5s ease-out 0.5s backwards' }} onClick={handleRestart}>
                  🔄 Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================== ROADMAP VIEW ======================== */}
      {view === "roadmap" && result && (
        <div style={{
          position: 'relative', zIndex: 10, minHeight: '100vh', padding: '50px 20px',
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: 50, animation: 'fadeInUp 0.6s ease-out' }}>
              <div className="glass-logo" style={{ justifyContent: 'center', marginBottom: 20 }}>
                <div className="glass-logo-icon">🧭</div>
                <div className="glass-logo-text">Career<span>Guide</span></div>
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'linear-gradient(135deg, #16324F, #0B1F33)', color: '#E3A73C',
                padding: '8px 20px', borderRadius: 50, fontSize: '0.8rem', fontWeight: 700,
                letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 16,
                boxShadow: '0 4px 15px rgba(22,50,79,0.3)', border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <span>🛣️</span> Career Roadmap
              </div>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: 10, textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                {result.career} Roadmap
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
                Follow this step-by-step journey from school to a successful {result.career.toLowerCase()} career.
              </p>
            </div>

            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: 60 }}>
              <div style={{
                position: 'absolute', left: 24, top: 12, bottom: 12, width: 3,
                background: 'linear-gradient(180deg, #E3A73C 0%, #F2C879 50%, #3E7C59 100%)', borderRadius: 3,
                animation: 'lineGrow 1.2s ease-out 0.3s both'
              }} />

              {result.steps.map((step, index) => (
                <div key={index} style={{
                  position: 'relative', marginBottom: 32, animation: 'fadeInUp 0.5s ease-out both',
                  animationDelay: `${0.2 + index * 0.15}s`
                }}>
                  <div style={{
                    position: 'absolute', left: -60, top: 4, width: 50, height: 50, borderRadius: '50%',
                    background: index === result.steps.length - 1
                      ? 'linear-gradient(135deg, #3E7C59, #2d5c41)'
                      : 'linear-gradient(135deg, #E3A73C, #F2C879)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: index === result.steps.length - 1 ? 'white' : '#0f172a',
                    fontSize: '0.85rem', fontWeight: 700, border: '3px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)', zIndex: 2,
                    animation: `circlePop 0.5s cubic-bezier(0.175,0.885,0.32,1.275) both`,
                    animationDelay: `${0.3 + index * 0.15}s`
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="glass-card" style={{
                    padding: '24px 28px', borderRadius: 16, transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                    cursor: 'default'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                      <span style={{
                        fontSize: '1.8rem', animation: 'float 3s ease-in-out infinite',
                        animationDelay: `${index * 0.5}s`, flexShrink: 0
                      }}>{step.icon}</span>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'white', margin: 0, flex: 1 }}>{step.title}</h3>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(255,255,255,0.06)', color: '#E3A73C', fontSize: '0.7rem', fontWeight: 700,
                        padding: '3px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)'
                      }}>Step {String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, paddingLeft: 40 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="glass-card" style={{ marginTop: 40, padding: 24, animation: 'fadeInUp 0.6s ease-out 1.2s both' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 1 }}>
                  Journey Progress
                </span>
                <strong style={{ fontSize: '1rem', color: '#E3A73C' }}>0% → 100%</strong>
              </div>
              <div style={{ height: 10, background: 'rgba(255,255,255,0.06)', borderRadius: 5, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: '100%', background: 'linear-gradient(90deg, #E3A73C, #F2C879, #3E7C59)',
                  backgroundSize: '200% auto', borderRadius: 5, animation: 'shimmer 3s linear infinite'
                }} />
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 40, flexWrap: 'wrap', animation: 'fadeInUp 0.6s ease-out 1.4s both' }}>
              <button className="glass-btn glass-btn-ghost" onClick={() => setView("result")}>← Back to Result</button>
              <button className="glass-btn glass-btn-gold" onClick={() => setView("myplan")}>📋 View My Plan</button>
              <button className="glass-btn glass-btn-ghost" onClick={handleRestart}>🔄 Retake Quiz</button>
            </div>
          </div>
        </div>
      )}

      {/* ======================== MY PLAN VIEW ======================== */}
      {view === "myplan" && result && (
        <div style={{
          position: 'relative', zIndex: 10, minHeight: '100vh', padding: '40px 20px',
          fontFamily: "'Space Grotesk', sans-serif"
        }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: 40, animation: 'fadeInUp 0.6s ease-out' }}>
              <div className="glass-logo" style={{ justifyContent: 'center', marginBottom: 20 }}>
                <div className="glass-logo-icon">🧭</div>
                <div className="glass-logo-text">Career<span>Guide</span></div>
              </div>
              <div style={{
                fontSize: '4.5rem', display: 'inline-block', animation: 'float 3s ease-in-out infinite', marginBottom: 12
              }}>
                {result.emoji}
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(99,102,241,0.15)', color: '#818cf8',
                padding: '6px 16px', borderRadius: 50, fontSize: '0.75rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16, border: '1px solid rgba(99,102,241,0.25)'
              }}>
                ⭐ My Career Plan
              </div>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: 6 }}>{result.career}</h1>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem' }}>Your personalized roadmap to success</p>
            </div>

            {/* Info Grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14,
              marginBottom: 40, animation: 'fadeInUp 0.7s ease-out 0.1s both'
            }}>
              {[
                { label: 'Stream', value: result.stream },
                { label: 'Course', value: result.course },
                { label: 'Exam', value: result.exam },
                { label: 'Duration', value: result.duration },
              ].map((item, i) => (
                <div key={i} className="glass-card" style={{
                  padding: 20, textAlign: 'center', borderRadius: 16, transition: 'all 0.3s ease', cursor: 'default'
                }}>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 8 }}>
                    {item.label}
                  </div>
                  <div style={{ color: 'white', fontSize: '1rem', fontWeight: 700 }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div style={{ color: 'white', fontSize: '1.3rem', fontWeight: 700, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10, animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
              🗺️ Step-by-Step Journey
            </div>
            <div style={{ position: 'relative', paddingLeft: 36 }}>
              <div style={{
                position: 'absolute', left: 11, top: 0, bottom: 0, width: 3,
                background: 'linear-gradient(180deg, #E3A73C, rgba(255,255,255,0.1))', borderRadius: 3
              }} />
              {result.steps.map((step, idx) => (
                <div key={idx} style={{
                  position: 'relative', marginBottom: 28, animation: 'slideInLeft 0.5s ease-out both',
                  animationDelay: `${0.3 + idx * 0.1}s`
                }}>
                  <div style={{
                    position: 'absolute', left: -29, top: 6, width: 16, height: 16, background: '#E3A73C',
                    borderRadius: '50%', border: '3px solid #0f172a', boxShadow: '0 0 0 3px rgba(227,167,60,0.25)'
                  }} />
                  <div className="glass-card" style={{
                    padding: '22px', borderRadius: 18, transition: 'all 0.3s ease', cursor: 'default'
                  }}>
                    <div style={{ position: 'absolute', right: 16, top: 16, color: 'rgba(255,255,255,0.08)', fontSize: '2.2rem', fontWeight: 800 }}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <span style={{ fontSize: '1.6rem' }}>{step.icon}</span>
                      <span style={{ color: 'white', fontSize: '1.05rem', fontWeight: 700 }}>{step.title}</span>
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', lineHeight: 1.6, paddingLeft: 40 }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 40, flexWrap: 'wrap', animation: 'fadeInUp 1s ease-out 0.9s both' }}>
              <button className="glass-btn glass-btn-ghost" onClick={() => setView("result")}>← Back to Result</button>
              <button className="glass-btn glass-btn-ghost" onClick={() => setView("roadmap")}>🛣️ View Roadmap</button>
              {!saved ? (
                <button className="glass-btn glass-btn-gold" onClick={savePlan}>💾 Save Plan</button>
              ) : (
                <button className="glass-btn" onClick={removePlan} style={{
                  background: 'rgba(239,68,68,0.15)', color: '#fca5a5', border: '1px solid rgba(239,68,68,0.3)'
                }}>🗑️ Remove Plan</button>
              )}
              <button className="glass-btn glass-btn-ghost" onClick={handleRestart}>🔄 Retake Quiz</button>
            </div>
          </div>

          {/* Toast */}
          {toast.show && (
            <div style={{
              position: 'fixed', top: 24, left: '50%', transform: 'translateX(-50%)',
              padding: '14px 28px', borderRadius: 14, fontWeight: 600, fontSize: '0.95rem', zIndex: 9999,
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)', animation: 'toastIn 0.4s ease-out',
              backdropFilter: 'blur(10px)',
              background: toast.type === 'success' ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
              color: toast.type === 'success' ? '#6ee7b7' : '#fca5a5',
              border: `1px solid ${toast.type === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`
            }}>
              {toast.message}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CareerQuiz;