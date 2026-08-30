import React, { useEffect, useRef } from 'react';

const Hero = ({ setActiveSection }) => {
  const heroWrapRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const wrap = heroWrapRef.current;
    const content = heroContentRef.current;
    if (!wrap || !content) return;

    const handleMouseMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      content.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
    };

    const handleMouseLeave = () => {
      content.style.transform = 'rotateY(0deg) rotateX(0deg)';
    };

    wrap.addEventListener('mousemove', handleMouseMove);
    wrap.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrap.removeEventListener('mousemove', handleMouseMove);
      wrap.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero" ref={heroWrapRef}>
      <div className="hero-bg">
        <div className="ring-mid"></div>
        <div className="particle" style={{ width: 6, height: 6, top: '15%', left: '10%', '--dur': '9s', '--delay': '0s' }}></div>
        <div className="particle" style={{ width: 4, height: 4, top: '25%', left: '85%', '--dur': '11s', '--delay': '1s' }}></div>
        <div className="particle" style={{ width: 8, height: 8, top: '70%', left: '15%', '--dur': '8s', '--delay': '2s' }}></div>
        <div className="particle" style={{ width: 5, height: 5, top: '80%', left: '75%', '--dur': '10s', '--delay': '0.5s' }}></div>
        <div className="particle" style={{ width: 3, height: 3, top: '40%', left: '50%', '--dur': '12s', '--delay': '3s' }}></div>
        <div className="particle" style={{ width: 7, height: 7, top: '60%', left: '90%', '--dur': '7s', '--delay': '1.5s' }}></div>
        <div className="particle" style={{ width: 4, height: 4, top: '10%', left: '60%', '--dur': '9s', '--delay': '2.5s' }}></div>
        <div className="floating-shape shape-1">🎓</div>
        <div className="floating-shape shape-2">📚</div>
        <div className="floating-shape shape-3">🚀</div>
        <div className="floating-shape shape-4">💡</div>
        <div className="floating-shape shape-5">⭐</div>
        <div className="floating-shape shape-6">🔬</div>
      </div>

      <div className="hero-content" ref={heroContentRef}>
        <div className="hero-left">
          <div className="hero-badge">
            <span>🎯</span> After 12th Grade Roadmap
          </div>

          <h1 className="hero-title">
            Choose Your <span className="highlight">Perfect Career</span><br />
            Path Today!
          </h1>

          <p className="hero-subtitle">
            Science, Commerce, or Arts — every stream has unlimited opportunities.
            We will guide you to the right path! Career paths, colleges, entrance exams — everything in one place.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => setActiveSection('quiz')}
            >
              <span>🎯</span> Take Career Quiz
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setActiveSection('streams')}
            >
              <span>📖</span> Explore Careers
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Career Paths</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100+</span>
              <span className="stat-label">Top Colleges</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">30+</span>
              <span className="stat-label">Entrance Exams</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrap">
            <div className="hero-orbit">
              <div className="orbit-dot orbit-dot-1"></div>
              <div className="orbit-dot orbit-dot-2"></div>
            </div>
            <div className="hero-orbit-2">
              <div className="orbit-dot orbit-dot-3"></div>
            </div>
            <img
              className="hero-3d-image"
              src="https://kimi-web-img.kimi.ai/img/cdn3d.iconscout.com/e197f53319eb27e3ceebc173bd204fa602857bf7.png"
              alt="Student Learning"
            />
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => setActiveSection('streams')}>
        <span>Scroll to explore</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;