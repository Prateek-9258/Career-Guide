import React, { useState } from 'react';

const Login = ({ onLogin, onGuest }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (isRegister) {
        if (!formData.name || !formData.email || !formData.password) {
          setError('Please fill all fields');
          setLoading(false);
          return;
        }
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        if (formData.password.length < 6) {
          setError('Password must be at least 6 characters');
          setLoading(false);
          return;
        }
        onLogin({ name: formData.name, email: formData.email });
      } else {
        if (!formData.email || !formData.password) {
          setError('Please enter email and password');
          setLoading(false);
          return;
        }
        onLogin({ name: 'Student', email: formData.email });
      }
      setLoading(false);
    }, 1000);
  };

  const toggleMode = () => {
    setIsFlipped(!isFlipped);
    setTimeout(() => setIsRegister(!isRegister), 200);
    setError('');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        /* ========== BACKGROUND & PARTICLES ========== */
        .login-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0f1a 0%, #0f172a 40%, #16324F 100%);
          padding: 20px;
          overflow: hidden;
          animation: fadeIn 0.6s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Floating glass orbs */
        .login-overlay::before,
        .login-overlay::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          animation: floatOrb 8s ease-in-out infinite;
        }
        .login-overlay::before {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #E3A73C, transparent 70%);
          top: -10%;
          left: -5%;
          animation-delay: 0s;
        }
        .login-overlay::after {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, #3b82f6, transparent 70%);
          bottom: -10%;
          right: -5%;
          animation-delay: 4s;
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        /* Small floating particles */
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(2px);
          animation: particleFloat linear infinite;
        }
        .p1 { width: 8px; height: 8px; top: 20%; left: 10%; animation-duration: 12s; }
        .p2 { width: 12px; height: 12px; top: 60%; left: 85%; animation-duration: 15s; animation-delay: 2s; }
        .p3 { width: 6px; height: 6px; top: 80%; left: 30%; animation-duration: 10s; animation-delay: 4s; }
        .p4 { width: 10px; height: 10px; top: 15%; left: 70%; animation-duration: 18s; animation-delay: 1s; }
        @keyframes particleFloat {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }

        /* ========== MAIN GLASS CONTAINER ========== */
        .login-glass-container {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          max-width: 1000px;
          width: 100%;
          min-height: 580px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          box-shadow:
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          overflow: hidden;
          animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ========== LEFT PANEL (BRAND + PICTURE) ========== */
        .login-brand-panel {
          position: relative;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(180deg, rgba(22, 50, 79, 0.4) 0%, rgba(11, 31, 51, 0.6) 100%);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        /* Decorative glow behind picture */
        .brand-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(227, 167, 60, 0.15), transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }

        /* Logo */
        .login-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
        }
        .logo-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #E3A73C, #F2C879);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          box-shadow: 0 8px 24px rgba(227, 167, 60, 0.3);
          animation: logoPop 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }
        @keyframes logoPop {
          from { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .logo-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.5px;
        }
        .logo-text span {
          color: #E3A73C;
        }

        /* Headline */
        .brand-headline {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: white;
          line-height: 1.2;
          margin-bottom: 12px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
          animation: fadeSlide 0.8s ease 0.4s both;
        }
        .brand-sub {
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 32px;
          animation: fadeSlide 0.8s ease 0.5s both;
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* 3D Picture / Illustration */
        .brand-picture {
          position: relative;
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 800px;
          margin-top: auto;
          animation: fadeSlide 0.8s ease 0.6s both;
        }
        .picture-card-3d {
          position: relative;
          width: 160px;
          height: 110px;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          box-shadow:
            0 20px 40px rgba(0,0,0,0.3),
            inset 0 1px 1px rgba(255,255,255,0.2);
          transform: rotateY(-15deg) rotateX(10deg);
          animation: pictureFloat 4s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        .picture-card-3d::before {
          content: '';
          position: absolute;
          inset: -10px;
          background: linear-gradient(135deg, rgba(227,167,60,0.2), transparent 60%);
          border-radius: 20px;
          transform: translateZ(-30px);
          filter: blur(15px);
        }
        .picture-card-3d::after {
          content: '🎓';
          position: absolute;
          top: -25px;
          right: -20px;
          font-size: 2.5rem;
          filter: drop-shadow(0 5px 10px rgba(0,0,0,0.3));
          animation: bounceEmoji 2s ease-in-out infinite;
        }
        @keyframes pictureFloat {
          0%, 100% { transform: rotateY(-15deg) rotateX(10deg) translateY(0); }
          50% { transform: rotateY(-10deg) rotateX(8deg) translateY(-10px); }
        }
        @keyframes bounceEmoji {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(10deg); }
        }

        /* Feature pills */
        .brand-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }
        .brand-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.85);
          backdrop-filter: blur(4px);
          animation: fadeSlide 0.8s ease both;
        }
        .brand-feature:nth-child(1) { animation-delay: 0.55s; }
        .brand-feature:nth-child(2) { animation-delay: 0.65s; }
        .brand-feature:nth-child(3) { animation-delay: 0.75s; }
        .brand-feature span { font-size: 1.2rem; }

        /* ========== RIGHT PANEL (3D FLIP FORM) ========== */
        .login-form-panel {
          position: relative;
          padding: 40px 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1500px;
        }

        .login-scene {
          width: 100%;
          max-width: 380px;
          height: 100%;
          min-height: 480px;
          position: relative;
        }

        .login-flipper {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .login-flipper.flipped {
          transform: rotateY(180deg);
        }

        /* Glass Card Face */
        .login-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          box-shadow:
            0 20px 40px rgba(0,0,0,0.3),
            inset 0 1px 1px rgba(255,255,255,0.1);
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        /* Top gold line */
        .login-face::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #E3A73C, #F2C879, #E3A73C, transparent);
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .login-face-back {
          transform: rotateY(180deg);
        }

        /* Icon */
        .login-top-icon {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 6px;
          animation: floatIcon 3s ease-in-out infinite;
          filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3));
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .login-face h2 {
          font-family: 'Space Grotesk', sans-serif;
          text-align: center;
          font-size: 1.6rem;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .login-face .sub {
          text-align: center;
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
          margin-bottom: 24px;
        }

        /* Error */
        .login-error {
          background: rgba(220, 38, 38, 0.15);
          color: #fca5a5;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 16px;
          border: 1px solid rgba(220, 38, 38, 0.3);
          backdrop-filter: blur(4px);
          animation: shake 0.4s ease;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }

        /* Form */
        .login-form { display: flex; flex-direction: column; gap: 14px; }

        .form-group { display: flex; flex-direction: column; gap: 5px; }
        .form-group label {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255,255,255,0.65);
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }
        .form-group input {
          padding: 12px 16px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          font-family: inherit;
          font-size: 0.95rem;
          color: white;
          transition: all 0.3s ease;
          outline: none;
          backdrop-filter: blur(4px);
        }
        .form-group input::placeholder { color: rgba(255,255,255,0.35); }
        .form-group input:focus {
          border-color: #E3A73C;
          background: rgba(255,255,255,0.1);
          box-shadow: 0 0 0 4px rgba(227, 167, 60, 0.15);
        }

        .password-input-wrapper { position: relative; }
        .password-input-wrapper input { width: 100%; padding-right: 46px; }
        .toggle-password {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 0.3s;
          padding: 4px;
          color: white;
        }
        .toggle-password:hover { opacity: 1; }

        /* Submit Button */
        .login-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px;
          background: linear-gradient(135deg, #E3A73C, #F2C879);
          color: #0f172a;
          border: none;
          border-radius: 12px;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 4px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(227, 167, 60, 0.3);
        }
        .login-submit-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s ease;
        }
        .login-submit-btn:hover::after { left: 100%; }
        .login-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(227, 167, 60, 0.4);
        }
        .login-submit-btn:active { transform: translateY(0) scale(0.98); }
        .login-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .login-spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(15, 23, 42, 0.3);
          border-top-color: #0f172a;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Divider */
        .login-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 16px 0;
          color: rgba(255,255,255,0.4);
          font-size: 0.8rem;
          font-weight: 600;
        }
        .login-divider::before, .login-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.1);
        }

        /* Guest Button */
        .guest-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px;
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .guest-btn:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.25);
          color: white;
          transform: translateY(-1px);
        }

        /* Toggle */
        .login-toggle {
          text-align: center;
          margin-top: auto;
          padding-top: 16px;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.5);
        }
        .toggle-link {
          background: none;
          border: none;
          color: #E3A73C;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: all 0.3s;
        }
        .toggle-link:hover { color: #F2C879; }

        /* Mini icons */
        .login-features-mini {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .login-features-mini span {
          font-size: 1.3rem;
          opacity: 0.5;
          transition: all 0.3s;
          cursor: default;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        .login-features-mini span:hover { opacity: 1; transform: scale(1.2) translateY(-2px); }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 900px) {
          .login-glass-container {
            grid-template-columns: 1fr;
            max-width: 460px;
          }
          .login-brand-panel {
            display: none;
          }
          .login-form-panel {
            padding: 32px 28px;
          }
        }
        @media (max-width: 480px) {
          .login-overlay { padding: 16px; }
          .login-glass-container { border-radius: 20px; min-height: auto; }
          .login-form-panel { padding: 24px 20px; }
          .login-face { padding: 28px 22px; }
          .login-face h2 { font-size: 1.35rem; }
          .login-scene { min-height: 520px; }
        }
      `}</style>

      <div className="login-overlay">
        {/* Floating Particles */}
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>

        <div className="login-glass-container">
          {/* LEFT: Brand + Picture */}
          <div className="login-brand-panel">
            <div className="brand-glow"></div>
            
            <div>
              <div className="login-logo">
                <div className="logo-icon">🧭</div>
                <div className="logo-text">Career<span>Guide</span></div>
              </div>

              <h1 className="brand-headline">Shape Your<br/>Future Today</h1>
              <p className="brand-sub">
                Discover the perfect career path, explore top colleges, and find your true calling with AI-powered guidance.
              </p>

              <div className="brand-features">
                <div className="brand-feature">
                  <span>🎯</span> Smart Career Quiz
                </div>
                <div className="brand-feature">
                  <span>🏛️</span> Top Colleges Database
                </div>
                <div className="brand-feature">
                  <span>📈</span> Future Scope Analysis
                </div>
              </div>
            </div>

            {/* 3D Floating Picture */}
            <div className="brand-picture">
              <div className="picture-card-3d">🚀</div>
            </div>
          </div>

          {/* RIGHT: 3D Flip Form */}
          <div className="login-form-panel">
            <div className="login-scene">
              <div className={`login-flipper ${isFlipped ? 'flipped' : ''}`}>
                
                {/* FRONT — LOGIN */}
                <div className="login-face login-face-front">
                  <div className="login-top-icon">🔐</div>
                  <h2>Welcome Back</h2>
                  <p className="sub">Sign in to continue your journey</p>

                  {error && <div className="login-error">{error}</div>}

                  <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <div className="password-input-wrapper">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          placeholder="Enter password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <button
                          type="button"
                          className="toggle-password"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? '🙈' : '👁️'}
                        </button>
                      </div>
                    </div>

                    <button type="submit" className="login-submit-btn" disabled={loading}>
                      {loading ? <span className="login-spinner"></span> : <>🔓 Sign In</>}
                    </button>
                  </form>

                  <div className="login-divider"><span>OR</span></div>

                  <button className="guest-btn" onClick={onGuest}>
                    👤 Continue as Guest
                  </button>

                  <div className="login-features-mini">
                    <span title="Career Quiz">🎯</span>
                    <span title="50+ Paths">📚</span>
                    <span title="Top Colleges">🏛️</span>
                  </div>

                  <p className="login-toggle">
                    New here?{' '}
                    <button type="button" className="toggle-link" onClick={toggleMode}>
                      Create Account →
                    </button>
                  </p>
                </div>

                {/* BACK — REGISTER */}
                <div className="login-face login-face-back">
                  <div className="login-top-icon">🚀</div>
                  <h2>Get Started</h2>
                  <p className="sub">Create your free account</p>

                  {error && <div className="login-error">{error}</div>}

                  <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <div className="password-input-wrapper">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          placeholder="Min 6 characters"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <button
                          type="button"
                          className="toggle-password"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? '🙈' : '👁️'}
                        </button>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Repeat password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="login-submit-btn" disabled={loading}>
                      {loading ? <span className="login-spinner"></span> : <>🚀 Create Account</>}
                    </button>
                  </form>

                  <div className="login-features-mini">
                    <span title="Career Quiz">🎯</span>
                    <span title="50+ Paths">📚</span>
                    <span title="Top Colleges">🏛️</span>
                  </div>

                  <p className="login-toggle">
                    Already have an account?{' '}
                    <button type="button" className="toggle-link" onClick={toggleMode}>
                      ← Sign In
                    </button>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;