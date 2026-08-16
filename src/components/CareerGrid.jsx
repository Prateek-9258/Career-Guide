import React, { useState } from 'react';
import CareerCard from './CareerCard';
import { careerStreams } from '../data/careers';

const CareerGrid = ({ onSelectCareer }) => {
  const [activeStream, setActiveStream] = useState('all');

  const filteredStreams = activeStream === 'all' 
    ? careerStreams 
    : careerStreams.filter(s => s.id === activeStream);

  const streamTabs = [
    { id: 'all', label: 'All Streams', icon: '🌟' },
    ...careerStreams.map(s => ({ id: s.id, label: s.name, icon: s.icon }))
  ];

  return (
    <section className="career-grid-section">
      <div className="section-header">
        <h2 className="section-title">
          <span>🎓</span> Career Streams & Paths
        </h2>
        <p className="section-subtitle">
          Explore the best career options based on your stream
        </p>
      </div>

      <div className="stream-tabs">
        {streamTabs.map((tab) => (
          <button
            key={tab.id}
            className={`stream-tab ${activeStream === tab.id ? 'active' : ''}`}
            onClick={() => setActiveStream(tab.id)}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="streams-container">
        {filteredStreams.map((stream) => (
          <div key={stream.id} className="stream-block" id={`stream-${stream.id}`}>
            <div className="stream-header" style={{ borderLeftColor: stream.color }}>
              <div className="stream-icon-wrapper" style={{ backgroundColor: stream.color + '20', color: stream.color }}>
                <span>{stream.icon}</span>
              </div>
              <div className="stream-info">
                <h3>{stream.name}</h3>
                <p>{stream.description}</p>
              </div>
            </div>
            
            <div className="career-cards-grid">
              {stream.paths.map((path) => (
                <CareerCard 
                  key={path.id}
                  path={path}
                  streamColor={stream.color}
                  onClick={onSelectCareer}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerGrid;