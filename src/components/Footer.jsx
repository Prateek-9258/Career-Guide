import React from 'react';

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span>🎓</span>
            <span>CareerGuide</span>
          </div>
          <p>
            A complete career guidance platform for students after 12th grade. 
            Choose the right career, build a bright future!
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><button onClick={() => setActiveSection('home')}>Home</button></li>
            <li><button onClick={() => setActiveSection('streams')}>Career Streams</button></li>
            <li><button onClick={() => setActiveSection('quiz')}>Career Quiz</button></li>
            <li><button onClick={() => setActiveSection('exams')}>Entrance Exams</button></li>
            <li><button onClick={() => setActiveSection('colleges')}>Top Colleges</button></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Popular Careers</h4>
          <ul>
            <li>Engineering (B.Tech)</li>
            <li>Medical (MBBS)</li>
            <li>Chartered Accountant (CA)</li>
            <li>Law (LLB)</li>
            <li>MBA / BBA</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Tips for Students</h4>
          <ul>
            <li>Identify your interests</li>
            <li>Do proper research</li>
            <li>Prepare for entrance exams</li>
            <li>Talk to counselors</li>
            <li>Take parents advice too</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>🎓 CareerGuide — Best Path After 12th | Made with ❤️ for Students</p>
        <p className="footer-disclaimer">
          Disclaimer: This information is for guidance purposes only. For final decisions, 
          please consult official sources and career counselors.
        </p>
      </div>
    </footer>
  );
};

export default Footer;