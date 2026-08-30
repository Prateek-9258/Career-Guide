import React, { useState, useEffect, useRef } from 'react';
import CareerCard from './CareerCard';
import { careerStreams } from '../data/careers';

const CareerGrid = ({ onSelectCareer }) => {
  const [activeStream, setActiveStream] = useState('all');
  const sectionRef = useRef(null);

  const streams = Array.isArray(careerStreams) ? careerStreams : [];

  const filteredStreams =
    activeStream === 'all'
      ? streams
      : streams.filter((stream) => stream.id === activeStream);

  const streamTabs = [
    { id: 'all', label: 'All Streams', icon: '🌟' },
    ...streams.map((stream) => ({
      id: stream.id,
      label: stream.name,
      icon: stream.icon,
    })),
  ];

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      '.stream-block, .career-card'
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeStream, filteredStreams]);

  const handleSelectCareer = (path) => {
    if (typeof onSelectCareer === 'function') {
      onSelectCareer(path);
    }
  };

  return (
    <section className="career-grid-section" ref={sectionRef}>
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title">
          <span>🎓</span>
          Career Streams & Paths
        </h2>
        <p className="section-subtitle">
          Explore career options based on your stream, interests and skills.
        </p>
      </div>

      {/* Stream Tabs */}
      <div className="stream-tabs">
        {streamTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`stream-tab ${
              activeStream === tab.id ? 'active' : ''
            }`}
            onClick={() => setActiveStream(tab.id)}
            aria-pressed={activeStream === tab.id}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Streams */}
      <div className="streams-container">
        {filteredStreams.length === 0 ? (
          <div className="empty-career-state">
            <div className="empty-icon">🔍</div>
            <h3>No Career Paths Found</h3>
            <p>There are currently no career paths available for this stream.</p>
          </div>
        ) : (
          filteredStreams.map((stream) => {
            const paths = Array.isArray(stream.paths) ? stream.paths : [];

            return (
              <div
                key={stream.id}
                className="stream-block"
                id={`stream-${stream.id}`}
                style={{
                  '--stream-color': stream.color || '#3b82f6',
                  '--stream-color-light': (stream.color || '#3b82f6') + 'cc',
                  '--stream-color-glow':
                    (stream.color || '#3b82f6') + '15',
                }}
              >
                {/* Stream Header */}
                <div
                  className="stream-header"
                  style={{
                    borderLeftColor: stream.color || '#3b82f6',
                  }}
                >
                  <div
                    className="stream-icon-wrapper"
                    style={{
                      backgroundColor: `${stream.color || '#3b82f6'}20`,
                      color: stream.color || '#3b82f6',
                    }}
                  >
                    <span>{stream.icon || '🎓'}</span>
                  </div>
                  <div className="stream-info">
                    <h3>{stream.name}</h3>
                    <p>
                      {stream.description ||
                        'Explore career opportunities in this stream.'}
                    </p>
                  </div>
                </div>

                {/* Career Cards */}
                {paths.length > 0 ? (
                  <div className="career-cards-grid">
                    {paths.map((path) => (
                      <CareerCard
                        key={path.id}
                        path={path}
                        streamColor={stream.color || '#3b82f6'}
                        onClick={handleSelectCareer}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="empty-paths">
                    <p>No career paths available yet.</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default CareerGrid;