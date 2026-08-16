import React, { useState } from 'react';
import { careerStreams } from '../data/careers';

const TopColleges = () => {
  const [activeStream, setActiveStream] = useState('science');
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [imageError, setImageError] = useState({});

  const currentStream = careerStreams.find(s => s.id === activeStream);

  // Flatten all colleges from all paths in current stream
  const allColleges = currentStream ? currentStream.paths.flatMap(path => 
    path.topColleges.map(college => ({
      ...college,
      course: path.title,
      icon: path.icon,
      color: currentStream.color,
      pathId: path.id
    }))
  ) : [];

  // Remove duplicates by college name
  const uniqueColleges = allColleges.filter((college, index, self) => 
    index === self.findIndex(c => c.name === college.name)
  );

  const handleImageError = (idx) => {
    setImageError(prev => ({ ...prev, [idx]: true }));
  };

  const closeModal = () => {
    setSelectedCollege(null);
  };

  return (
    <section className="colleges-section">
      <div className="section-header">
        <h2 className="section-title">
          <span>🏛️</span> Top Colleges in India
        </h2>
        <p className="section-subtitle">
          Best colleges for every stream — click any card for full details!
        </p>
      </div>

      {/* Stream Tabs */}
      <div className="stream-tabs colleges-tabs">
        {careerStreams.map((stream) => (
          <button
            key={stream.id}
            className={`stream-tab ${activeStream === stream.id ? 'active' : ''}`}
            onClick={() => {
              setActiveStream(stream.id);
              setSelectedCollege(null);
              setImageError({}); // Reset image errors on tab switch
            }}
          >
            <span>{stream.icon}</span>
            <span>{stream.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Colleges Grid */}
      <div className="colleges-grid">
        {uniqueColleges.map((college, idx) => (
          <div 
            key={`${activeStream}-${idx}`} 
            className="college-card"
            style={{ '--college-color': college.color }}
            onClick={() => setSelectedCollege(college)}
          >
            <div className="college-image-wrapper">
              {!imageError[idx] ? (
                <img 
                  src={college.image} 
                  alt={college.name}
                  className="college-image"
                  onError={() => handleImageError(idx)}
                  loading="lazy"
                />
              ) : (
                <div className="college-image-fallback">
                  <span className="fallback-icon">{college.icon}</span>
                  <p className="fallback-name">{college.name}</p>
                </div>
              )}
              <div className="college-image-overlay">
                <span className="college-rank">{college.ranking}</span>
              </div>
            </div>

            <div className="college-card-body">
              <h4 className="college-name">{college.name}</h4>
              <p className="college-location">📍 {college.location}</p>
              <p className="college-course">{college.icon} {college.course}</p>
              <div className="college-meta">
                <span className="college-meta-item">📅 Est. {college.established}</span>
                <span className="college-meta-item">🌐 {college.website}</span>
              </div>
              <div className="college-click-hint">
                <span>👆 Click for details</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="college-note">
        <span>ℹ️</span>
        <p>
          <strong>Note:</strong> This list is indicative. Rankings change every year. 
          Please check official NIRF rankings and college websites for the latest information.
        </p>
      </div>

      {/* College Detail Modal */}
      {selectedCollege && (
        <div className="college-modal-overlay" onClick={closeModal}>
          <div className="college-modal" onClick={(e) => e.stopPropagation()}>
            <button className="college-modal-close" onClick={closeModal}>✕</button>

            <div className="college-modal-header">
              <div className="college-modal-image-wrapper">
                {!imageError[`modal-${selectedCollege.name}`] ? (
                  <img 
                    src={selectedCollege.image} 
                    alt={selectedCollege.name}
                    className="college-modal-image"
                    onError={() => setImageError(prev => ({ ...prev, [`modal-${selectedCollege.name}`]: true }))}
                  />
                ) : (
                  <div className="college-modal-image-fallback">
                    <span>{selectedCollege.icon}</span>
                  </div>
                )}
                <div className="college-modal-rank">{selectedCollege.ranking}</div>
              </div>

              <div className="college-modal-info">
                <h2>{selectedCollege.name}</h2>
                <p className="college-modal-location">📍 {selectedCollege.location}</p>
                <div className="college-modal-badges">
                  <span className="college-modal-badge" style={{ background: selectedCollege.color + '20', color: selectedCollege.color }}>
                    {selectedCollege.icon} {selectedCollege.course}
                  </span>
                  <span className="college-modal-badge established">
                    📅 Established: {selectedCollege.established}
                  </span>
                  <span className="college-modal-badge ranking">
                    🏆 Ranking: {selectedCollege.ranking}
                  </span>
                </div>
              </div>
            </div>

            <div className="college-modal-body">
              <div className="college-modal-section">
                <h3>🎓 About the College</h3>
                <p>
                  {selectedCollege.name} is one of the premier institutions for {selectedCollege.course} in India. 
                  Located in {selectedCollege.location}, it has been a center of excellence since {selectedCollege.established}. 
                  The college is ranked {selectedCollege.ranking} in India and offers world-class education, 
                  state-of-the-art facilities, and excellent placement opportunities.
                </p>
              </div>

              <div className="college-modal-section">
                <h3>📋 Key Highlights</h3>
                <div className="college-modal-highlights">
                  <div className="highlight-item">
                    <span>🏛️</span>
                    <div>
                      <strong>Institution Type</strong>
                      <p>Government / Autonomous</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span>📚</span>
                    <div>
                      <strong>Course Offered</strong>
                      <p>{selectedCollege.course}</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span>🎯</span>
                    <div>
                      <strong>NIRF Ranking</strong>
                      <p>{selectedCollege.ranking} in India</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span>💼</span>
                    <div>
                      <strong>Placement Rate</strong>
                      <p>85-95% (Approx)</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span>🌐</span>
                    <div>
                      <strong>Website</strong>
                      <p>{selectedCollege.website}</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span>📍</span>
                    <div>
                      <strong>Location</strong>
                      <p>{selectedCollege.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="college-modal-section">
                <h3>📝 Entrance Exams</h3>
                <div className="college-modal-exams">
                  {currentStream.paths.find(p => p.id === selectedCollege.pathId)?.entranceExams.map((exam, i) => (
                    <span key={i} className="college-exam-tag">{exam}</span>
                  )) || <span>Check official website for entrance details</span>}
                </div>
              </div>

              <div className="college-modal-section">
                <h3>💡 Why Choose This College?</h3>
                <ul className="college-modal-list">
                  <li>⭐ Top-ranked institution with excellent academic reputation</li>
                  <li>🏆 Highly qualified faculty and research opportunities</li>
                  <li>💼 Strong industry connections and placement support</li>
                  <li>🏛️ State-of-the-art infrastructure and modern labs</li>
                  <li>🌍 Vibrant campus life with diverse student community</li>
                  <li>📚 Well-stocked library and digital learning resources</li>
                </ul>
              </div>

              <div className="college-modal-actions">
                <a 
                  href={`https://${selectedCollege.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="college-modal-btn primary"
                >
                  <span>🌐</span> Visit Official Website
                </a>
                <button className="college-modal-btn secondary" onClick={closeModal}>
                  <span>🔙</span> Back to Colleges
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TopColleges;