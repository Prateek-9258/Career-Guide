import React, { useState, useEffect } from 'react';

import { careerStreams } from './data/careers';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CareerGrid from './components/CareerGrid';
import CareerDetail from './components/CareerDetail';
import CareerQuiz from './components/CareerQuiz';
import EntranceExams from './components/EntranceExams';
import TopColleges from './components/TopColleges';
import Footer from './components/Footer';
import Login from './components/Login';

import CareerArticles from './components/CareerArticles';
import CareerComparison from './components/CareerComparison';
import MyCareerPlan from './components/MyCareerPlan';
import CareerRoadmap from './components/CareerRoadmap';


const App = () => {

  const [activeSection, setActiveSection] = useState('home');
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // NEW: Quiz se aaya plan yahan store hoga
  const [userPlan, setUserPlan] = useState(null);


  // --------------------------------
  // LOAD SAVED PLAN ON STARTUP
  // --------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("careerGuidePlan");
    if (saved) {
      try {
        setUserPlan(JSON.parse(saved));
      } catch (e) {
        console.error("Invalid saved plan", e);
      }
    }
  }, []);


  // --------------------------------
  // GET STREAM COLOR
  // --------------------------------
  const getStreamColor = (career) => {
    if (!career) {
      return '#3b82f6';
    }
    for (const stream of careerStreams) {
      if (stream.paths.some(path => path.id === career.id)) {
        return stream.color;
      }
    }
    return '#3b82f6';
  };


  // --------------------------------
  // LOGIN
  // --------------------------------
  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setActiveSection('home');
  };


  // --------------------------------
  // GUEST LOGIN
  // --------------------------------
  const handleGuest = () => {
    setUser({
      name: 'Guest',
      email: ''
    });
    setIsLoggedIn(true);
    setActiveSection('home');
  };


  // --------------------------------
  // LOGOUT
  // --------------------------------
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setActiveSection('home');
    setSelectedCareer(null);
  };


  // --------------------------------
  // SELECT CAREER
  // --------------------------------
  const handleSelectCareer = (career) => {
    setSelectedCareer(career);
    setActiveSection('detail');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  // --------------------------------
  // BACK FROM DETAIL
  // --------------------------------
  const handleBack = () => {
    setSelectedCareer(null);
    setActiveSection('streams');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  // --------------------------------
  // EXPLORE STREAM
  // --------------------------------
  const handleExploreStream = (streamId) => {
    setActiveSection('streams');
    setTimeout(() => {
      const element = document.getElementById(`stream-${streamId}`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 150);
  };


  // --------------------------------
  // NAVIGATION
  // --------------------------------
  const handleNavigation = (section) => {
    setSelectedCareer(null);
    setActiveSection(section);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  // --------------------------------
  // QUIZ COMPLETE HANDLER
  // --------------------------------
  const handleQuizComplete = (plan) => {
    setUserPlan(plan);
    localStorage.setItem("careerGuidePlan", JSON.stringify(plan));
    setActiveSection('career-plan');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // --------------------------------
  // RETAKE QUIZ
  // --------------------------------
  const handleRetakeQuiz = () => {
    localStorage.removeItem("careerGuidePlan");
    setUserPlan(null);
    setActiveSection('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // --------------------------------
  // RENDER PAGES
  // --------------------------------
  const renderSection = () => {
    switch (activeSection) {

      case 'home':
        return <Hero setActiveSection={handleNavigation} />;

      case 'streams':
        return <CareerGrid onSelectCareer={handleSelectCareer} />;

      case 'detail':
        return (
          <CareerDetail
            path={selectedCareer}
            streamColor={getStreamColor(selectedCareer)}
            onBack={handleBack}
          />
        );

      case 'quiz':
        return <CareerQuiz onComplete={handleQuizComplete} onNavigateToSection={handleNavigation} />;

      case 'exams':
        return <EntranceExams />;

      case 'colleges':
        return <TopColleges />;

      case 'articles':
        return <CareerArticles />;

      case 'comparison':
        return <CareerComparison />;

      case 'career-plan':
        return (
          <>
            {userPlan && (
              <div style={{
                background: 'white',
                borderBottom: '1px solid #e2e8f0',
                padding: '12px 20px',
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  💡 Want to explore a different path?
                </span>
                <button
                  onClick={handleRetakeQuiz}
                  style={{
                    background: 'none',
                    border: '2px solid #e2e8f0',
                    color: '#6366f1',
                    padding: '8px 20px',
                    borderRadius: '10px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#6366f1';
                    e.target.style.background = '#f5f3ff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.background = 'none';
                  }}
                >
                  Retake Quiz
                </button>
              </div>
            )}
            <MyCareerPlan plan={userPlan} />
          </>
        );

      case 'roadmap':
        return <CareerRoadmap />;

      default:
        return <Hero setActiveSection={handleNavigation} />;
    }
  };


  return (
    <div className="app">
      {!isLoggedIn && (
        <Login
          onLogin={handleLogin}
          onGuest={handleGuest}
        />
      )}

      <div className={`app-content ${!isLoggedIn ? 'blurred' : ''}`}>
        <Navbar
          activeSection={activeSection}
          setActiveSection={handleNavigation}
          user={user}
          onLogout={handleLogout}
        />

        <main className="main-content">
          {renderSection()}
        </main>

        <Footer
          setActiveSection={handleNavigation}
        />
      </div>
    </div>
  );

};


export default App;