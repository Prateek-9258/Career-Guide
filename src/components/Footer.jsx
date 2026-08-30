import React from 'react';

const Footer = ({ setActiveSection }) => {
  const handleNav = (section) => {
    if (setActiveSection) {
      setActiveSection(section);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(180deg, #0B1F33 0%, #16324F 100%);
          color: white;
          padding: 60px 24px 0;
          margin-top: 80px;
          position: relative;
          overflow: hidden;
        }
        .footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #E3A73C, #F2C879, #3E7C59, #E3A73C);
          background-size: 300% auto;
          animation: footerShimmer 4s linear infinite;
        }
        @keyframes footerShimmer {
          0% { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display, 'Space Grotesk', sans-serif);
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-align: left;
        }
        .footer-logo-icon {
          font-size: 2rem;
        }
        .footer-brand p {
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
          line-height: 1.7;
          max-width: 320px;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }
        .footer-socials a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.15);
        }
        .footer-socials a:hover {
          background: #E3A73C;
          transform: translateY(-3px);
          border-color: #E3A73C;
        }
        .footer-col h4 {
          font-family: var(--font-display, 'Space Grotesk', sans-serif);
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: white;
          position: relative;
          padding-bottom: 10px;
        }
        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 32px;
          height: 3px;
          background: #E3A73C;
          border-radius: 2px;
        }
        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col button {
          color: rgba(255,255,255,0.65);
          font-size: 0.9rem;
          background: none;
          border: none;
          font-family: inherit;
          cursor: pointer;
          text-align: left;
          padding: 4px 0;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-col button:hover {
          color: #E3A73C;
          transform: translateX(4px);
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-bottom p {
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
        }
        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }
        .footer-bottom-links a {
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-bottom-links a:hover { color: #E3A73C; }

        @media (max-width: 900px) {
          .footer-content { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 600px) {
          .footer-content { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-brand">
            <button className="footer-logo" onClick={() => handleNav('home')}>
              <span className="footer-logo-icon">🎓</span>
              CareerGuide
            </button>
            <p>
              Your trusted companion for discovering the perfect career path. 
              Explore 50+ career options, top colleges, and entrance exams all in one place.
            </p>
            <div className="footer-socials">
              <a href="#" title="Twitter / X">𝕏</a>
              <a href="#" title="Instagram">📷</a>
              <a href="#" title="LinkedIn">💼</a>
              <a href="#" title="YouTube">▶️</a>
            </div>
          </div>

          {/* Explore */}
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><button onClick={() => handleNav('streams')}>📚 Career Streams</button></li>
              <li><button onClick={() => handleNav('quiz')}>🎯 Career Quiz</button></li>
              <li><button onClick={() => handleNav('colleges')}>🏛️ Top Colleges</button></li>
              <li><button onClick={() => handleNav('exams')}>📝 Entrance Exams</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><button onClick={() => handleNav('roadmap')}>🗺️ Roadmaps</button></li>
              <li><button onClick={() => handleNav('comparison')}>⚖️ Compare Careers</button></li>
              <li><button onClick={() => handleNav('articles')}>📰 Articles</button></li>
              <li><button onClick={() => handleNav('career-plan')}>⭐ My Plan</button></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><button onClick={() => handleNav('home')}>❓ Help Center</button></li>
              <li><button onClick={() => handleNav('home')}>📧 Contact Us</button></li>
              <li><button onClick={() => handleNav('home')}>🔒 Privacy Policy</button></li>
              <li><button onClick={() => handleNav('home')}>📋 Terms of Use</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 CareerGuide. Built for students, by students.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;