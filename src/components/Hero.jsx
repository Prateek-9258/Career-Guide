import React from 'react';

const Hero = ({ setActiveSection }) => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="floating-shape shape-1">🎓</div>
        <div className="floating-shape shape-2">📚</div>
        <div className="floating-shape shape-3">🚀</div>
        <div className="floating-shape shape-4">💡</div>
        <div className="floating-shape shape-5">⭐</div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span>🎯</span> After 12th Grade Roadmap
        </div>
        
        <h1 className="hero-title">
          Choose Your <span className="highlight">Perfect Career</span> <br />
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
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Career Paths</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Top Colleges</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Entrance Exams</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;