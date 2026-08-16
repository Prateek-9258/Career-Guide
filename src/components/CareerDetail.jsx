import React from 'react';
import './CareerDetail.css'

const CareerDetail = ({ path, streamColor, onBack }) => {
  if (!path) return null;

  return (
    <section className="career-detail-section">
      <button className="back-btn" onClick={onBack}>
        <span>←</span> Back to Career Paths
      </button>

      <div className="career-detail-header" style={{ borderLeftColor: streamColor }}>
        <div className="career-detail-icon">{path.icon}</div>
        <div className="career-detail-title">
          <h2>{path.title}</h2>
          <p>{path.description}</p>
        </div>
      </div>

      <div className="career-detail-grid">
        {/* Overview Card */}
        <div className="detail-card">
          <h3>📋 Overview</h3>
          <div className="detail-info">
            <div className="info-item">
              <span className="info-label">Duration</span>
              <span className="info-value">{path.duration}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Avg Salary</span>
              <span className="info-value">{path.avgSalary}</span>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div className="detail-card">
          <h3>🛠️ Skills Required</h3>
          <div className="tags-container">
            {path.skills.map((skill, idx) => (
              <span key={idx} className="tag skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        {/* Specializations Card */}
        <div className="detail-card">
          <h3>🎯 Specializations</h3>
          <div className="tags-container">
            {path.specializations.map((spec, idx) => (
              <span key={idx} className="tag spec-tag">{spec}</span>
            ))}
          </div>
        </div>

        {/* Entrance Exams Card */}
        <div className="detail-card">
          <h3>📝 Entrance Exams</h3>
          <div className="tags-container">
            {path.entranceExams.map((exam, idx) => (
              <span key={idx} className="tag exam-tag">{exam}</span>
            ))}
          </div>
        </div>

        {/* Top Colleges Card - FIXED */}
        <div className="detail-card colleges-card">
          <h3>🏛️ Top Colleges</h3>
          <div className="colleges-list">
            {path.topColleges.map((college, idx) => (
              <div key={idx} className="college-detail-item">
                <img 
                  src={college.image} 
                  alt={college.name}
                  className="college-thumb"
                  onError={(e) => { e.target.style.display = 'none'; }}
                  loading="lazy"
                />
                <div className="college-detail-info">
                  <span className="college-detail-name">{college.name}</span>
                  <span className="college-detail-meta">📍 {college.location} • 🏆 {college.ranking} • 📅 {college.established}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scope Card */}
        <div className="detail-card full-width">
          <h3>🌍 Career Scope</h3>
          <p className="scope-text">{path.scope}</p>
        </div>

        {/* Pros & Cons */}
        <div className="detail-card">
          <h3> Pros</h3>
          <ul className="pros-list">
            {path.pros.map((pro, idx) => (
              <li key={idx}>{pro}</li>
            ))}
          </ul>
        </div>

        <div className="detail-card">
          <h3>Cons</h3>
          <ul className="cons-list">
            {path.cons.map((con, idx) => (
              <li key={idx}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CareerDetail;