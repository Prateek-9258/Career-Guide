import React, { useState } from 'react';
import { careerStreams } from './data/careers';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CareerGrid from './components/CareerGrid';
import CareerDetail from './components/CareerDetail';
import QuizSection from './components/QuizSection';
import EntranceExams from './components/EntranceExams';
import TopColleges from './components/TopColleges';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Find stream color for selected career
  const getStreamColor = (career) => {
    if (!career) return '#3b82f6';
    for (const stream of careerStreams) {
      if (stream.paths.some(p => p.id === career.id)) {
        return stream.color;
      }
    }
    return '#3b82f6';
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleGuest = () => {
    setUser({ name: 'Guest', email: '' });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setActiveSection('home');
    setSelectedCareer(null);
  };

  const handleSelectCareer = (career) => {
    setSelectedCareer(career);
    setActiveSection('detail');
  };

  const handleBack = () => {
    setSelectedCareer(null);
    setActiveSection('streams');
  };

  const handleExploreStream = (streamId) => {
    setActiveSection('streams');
    setTimeout(() => {
      const el = document.getElementById(`stream-${streamId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />;
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
        return <QuizSection onExploreStream={handleExploreStream} />;
      case 'exams':
        return <EntranceExams />;
      case 'colleges':
        return <TopColleges />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="app">
      {!isLoggedIn && (
        <Login onLogin={handleLogin} onGuest={handleGuest} />
      )}

      <div className={`app-content ${!isLoggedIn ? 'blurred' : ''}`}>
        <Navbar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          user={user}
          onLogout={handleLogout}
        />
        <main className="main-content">
          {renderSection()}
        </main>
        <Footer setActiveSection={setActiveSection} />
      </div>
    </div>
  );
};

export default App;