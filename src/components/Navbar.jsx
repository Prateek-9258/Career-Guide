import React, { useState } from 'react';

const Navbar = ({ activeSection, setActiveSection, user, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'streams', label: 'Career Streams', icon: '📚' },
    { id: 'quiz', label: 'Career Quiz', icon: '🎯' },
    { id: 'exams', label: 'Entrance Exams', icon: '📝' },
    { id: 'colleges', label: 'Top Colleges', icon: '🏛️' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => setActiveSection('home')}>
          <span className="logo-icon">🎓</span>
          <span className="logo-text">CareerGuide</span>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {user && (
          <div className="nav-user">
            <button 
              className="user-btn"
              onClick={() => setShowProfile(!showProfile)}
            >
              <span className="user-avatar">{user.name.charAt(0).toUpperCase()}</span>
              <span className="user-name">{user.name}</span>
            </button>
            
            {showProfile && (
              <div className="user-dropdown">
                <div className="user-info">
                  <span className="user-avatar-large">{user.name.charAt(0).toUpperCase()}</span>
                  <p className="user-dropdown-name">{user.name}</p>
                  <p className="user-dropdown-email">{user.email}</p>
                </div>
                <button className="logout-btn" onClick={() => { onLogout(); setShowProfile(false); }}>
                  <span>🚪</span> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;