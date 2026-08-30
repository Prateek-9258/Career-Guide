import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({
  activeSection,
  setActiveSection,
  user,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef(null);

  const mainNavItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'streams', label: 'Career Streams', icon: '📚' },
    { id: 'quiz', label: 'Career Quiz', icon: '🎯' },
    { id: 'colleges', label: 'Top Colleges', icon: '🏛️' },
  ];

  const moreNavItems = [
    { id: 'exams', label: 'Entrance Exams', icon: '📝' },
    { id: 'comparison', label: 'Compare', icon: '⚖️' },
    { id: 'articles', label: 'Articles', icon: '📰' },
  ];

  const allNavItems = [...mainNavItems, ...moreNavItems];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setShowMore(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    setShowProfile(false);
    setShowMore(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    onLogout();
    setShowProfile(false);
    setMobileMenuOpen(false);
  };

  const isMoreActive = moreNavItems.some(item => item.id === activeSection);

  return (
    <>
      <style>{`
        .navbar {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        /* ===== LOGO ===== */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          background: none;
          border: none;
          font-family: var(--font-display, 'Space Grotesk', sans-serif);
          flex-shrink: 0;
          padding: 0;
          text-decoration: none;
        }
        .logo-icon {
          font-size: 1.8rem;
          line-height: 1;
          flex-shrink: 0;
        }
        .logo-text {
          font-size: 1.35rem;
          font-weight: 800;
          color: #16324F;
          background: linear-gradient(135deg, #16324F, #0B1F33);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }

        /* ===== DESKTOP NAV ===== */
        .nav-links-desktop {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 4px;
          margin: 0;
          padding: 0;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 9px 16px;
          border-radius: 50px;
          border: none;
          background: transparent;
          color: #5C6B7A;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .nav-link:hover {
          background: #f1f5f9;
          color: #16324F;
        }
        .nav-link.active {
          background: #16324F;
          color: white;
        }
        .nav-icon {
          font-size: 1.1rem;
          line-height: 1;
        }

        /* ===== MORE DROPDOWN ===== */
        .nav-more-wrapper {
          position: relative;
        }
        .nav-more-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 9px 16px;
          border-radius: 50px;
          border: none;
          background: transparent;
          color: #5C6B7A;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .nav-more-btn:hover {
          background: #f1f5f9;
          color: #16324F;
        }
        .nav-more-btn.active {
          background: #16324F;
          color: white;
        }
        .nav-more-btn .chevron {
          font-size: 0.65rem;
          transition: transform 0.3s ease;
          margin-left: 2px;
        }
        .nav-more-btn.open .chevron {
          transform: rotate(180deg);
        }
        .nav-more-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          padding: 8px;
          min-width: 210px;
          z-index: 1001;
          animation: dropdownPop 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid #e2e8f0;
          list-style: none;
          margin: 0;
        }
        @keyframes dropdownPop {
          from { opacity: 0; transform: translateY(-10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .nav-more-dropdown .nav-link {
          width: 100%;
          justify-content: flex-start;
          border-radius: 12px;
          margin-bottom: 2px;
          padding: 10px 14px;
        }
        .nav-more-dropdown .nav-link:last-child {
          margin-bottom: 0;
        }

        /* ===== USER PROFILE ===== */
        .nav-user {
          position: relative;
          flex-shrink: 0;
        }
        .user-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: #f1f5f9;
          border: 2px solid #e2e8f0;
          border-radius: 50px;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          color: #16324F;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .user-btn:hover {
          border-color: #16324F;
        }
        .user-avatar {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #16324F, #0B1F33);
          color: white;
          border-radius: 50%;
          font-size: 0.8rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .user-name {
          max-width: 90px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .profile-arrow {
          font-size: 0.7rem;
          color: #94a3b8;
          flex-shrink: 0;
        }
        .user-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          padding: 16px;
          min-width: 220px;
          z-index: 1001;
          animation: dropdownPop 0.25s ease;
          border: 1px solid #e2e8f0;
        }
        .user-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 12px;
        }
        .user-avatar-large {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #16324F, #0B1F33);
          color: white;
          border-radius: 50%;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .user-dropdown-name {
          font-weight: 700;
          font-size: 1rem;
          color: #1e293b;
          font-family: var(--font-display, 'Space Grotesk', sans-serif);
        }
        .user-dropdown-email {
          font-size: 0.8rem;
          color: #94a3b8;
          margin-top: 2px;
        }
        .dropdown-link {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 12px;
          background: none;
          border: none;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
          margin-bottom: 4px;
        }
        .dropdown-link:hover {
          background: #f1f5f9;
          color: #16324F;
        }
        .logout-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 12px;
          background: #fef2f2;
          color: #dc2626;
          border: none;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 4px;
        }
        .logout-btn:hover {
          background: #fee2e2;
        }

        /* ===== MOBILE MENU BUTTON ===== */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #16324F;
          padding: 6px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .mobile-menu-btn:hover {
          background: #f1f5f9;
        }

        /* ===== MOBILE NAV ===== */
        .mobile-nav-overlay {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(4px);
          z-index: 999;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .mobile-nav {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: white;
          z-index: 1000;
          padding: 16px 20px 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          animation: slideDown 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          max-height: calc(100vh - 64px);
          overflow-y: auto;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin: 0;
          padding: 0;
        }
        .mobile-nav .nav-link {
          width: 100%;
          justify-content: flex-start;
          padding: 14px 16px;
          font-size: 1rem;
          border-radius: 12px;
        }
        .mobile-nav-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 8px 0;
          list-style: none;
        }
        .mobile-nav-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          margin-bottom: 8px;
          background: #f8fafc;
          border-radius: 12px;
          list-style: none;
        }
        .mobile-nav-profile .user-avatar {
          width: 36px;
          height: 36px;
          font-size: 1rem;
        }
        .mobile-nav-profile-info {
          display: flex;
          flex-direction: column;
        }
        .mobile-nav-profile-info strong {
          font-size: 0.95rem;
          color: #1e293b;
        }
        .mobile-nav-profile-info span {
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .mobile-logout-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px;
          background: #fef2f2;
          color: #dc2626;
          border: none;
          border-radius: 12px;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 8px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .nav-links-desktop { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-nav-overlay { display: block !important; }
          .mobile-nav { display: block !important; }
          .nav-user { display: none !important; }
        }
        @media (min-width: 1025px) {
          .mobile-nav-overlay { display: none !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <button className="nav-logo" onClick={() => handleNavigation('home')}>
            <span className="logo-icon">🎓</span>
            <span className="logo-text">CareerGuide</span>
          </button>

          {/* Desktop Navigation */}
          <ul className="nav-links-desktop">
            {mainNavItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavigation(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}

            {/* More Dropdown */}
            <li className="nav-more-wrapper" ref={moreRef}>
              <button
                className={`nav-more-btn ${isMoreActive ? 'active' : ''} ${showMore ? 'open' : ''}`}
                onClick={() => setShowMore(!showMore)}
              >
                <span>⋮</span>
                <span>More</span>
                <span className="chevron">▼</span>
              </button>
              {showMore && (
                <ul className="nav-more-dropdown">
                  {moreNavItems.map((item) => (
                    <li key={item.id}>
                      <button
                        className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => handleNavigation(item.id)}
                      >
                        <span className="nav-icon">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Desktop User */}
          {user && (
            <div className="nav-user">
              <button className="user-btn" onClick={() => setShowProfile(!showProfile)}>
                <span className="user-avatar">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </span>
                <span className="user-name">{user.name || 'User'}</span>
                <span className="profile-arrow">{showProfile ? '▲' : '▼'}</span>
              </button>

              {showProfile && (
                <div className="user-dropdown">
                  <div className="user-info">
                    <span className="user-avatar-large">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </span>
                    <p className="user-dropdown-name">{user.name || 'User'}</p>
                    <p className="user-dropdown-email">{user.email || 'Guest User'}</p>
                  </div>
                  <button className="logout-btn" onClick={handleLogout}>
                    <span>🚪</span> Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <ul className="mobile-nav-list">
            {user && (
              <>
                <li className="mobile-nav-profile">
                  <span className="user-avatar">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                  <div className="mobile-nav-profile-info">
                    <strong>{user.name || 'User'}</strong>
                    <span>{user.email || 'Guest'}</span>
                  </div>
                </li>
                <li className="mobile-nav-divider" />
              </>
            )}

            {allNavItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavigation(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}

            {user && (
              <>
                <li className="mobile-nav-divider" />
                <li>
                  <button className="mobile-logout-btn" onClick={handleLogout}>
                    <span>🚪</span> Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;