import React, { useEffect, useRef } from 'react';
import './CareerDetail.css';

const CareerDetail = ({ path, streamColor = '#3b82f6', onBack }) => {
  const gridRef = useRef(null);

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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document
      .querySelectorAll(
        '.reveal-3d, .reveal-left, .reveal-right, .reveal-zoom, .reveal-flip, .reveal-college, .reveal-colleges-card'
      )
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [path]);

  // 3D pointer-tilt for college cards — the focal element of this view
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    const rotateY = (relX - 0.5) * 14; // left/right tilt
    const rotateX = (0.5 - relY) * 10; // up/down tilt
    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
    card.style.setProperty('--glow-x', `${relX * 100}%`);
    card.style.setProperty('--glow-y', `${relY * 100}%`);
  };

  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  if (!path) {
    return (
      <section className="career-detail-section">
        <div className="detail-card reveal-3d">
          <h3>Career Not Found</h3>
          <p>Please select a valid career path.</p>
          {onBack && (
            <button className="back-btn" onClick={onBack}>
              ← Back to Career Paths
            </button>
          )}
        </div>
      </section>
    );
  }

  const skills = Array.isArray(path.skills) ? path.skills : [];
  const specializations = Array.isArray(path.specializations) ? path.specializations : [];
  const entranceExams = Array.isArray(path.entranceExams) ? path.entranceExams : [];
  const topColleges = Array.isArray(path.topColleges) ? path.topColleges : [];
  const pros = Array.isArray(path.pros) ? path.pros : [];
  const cons = Array.isArray(path.cons) ? path.cons : [];

  return (
    <section className="career-detail-section">
      {/* Back Button */}
      {onBack && (
        <button className="back-btn" onClick={onBack} type="button">
          <span>←</span>
          Back to Career Paths
        </button>
      )}

      {/* Header */}
      <div
        className="career-detail-header"
        style={{ borderLeftColor: streamColor }}
      >
        <div
          className="career-detail-icon"
          style={{ backgroundColor: `${streamColor}20` }}
        >
          {path.icon || '🎓'}
        </div>
        <div className="career-detail-title">
          <h2>{path.title || 'Career Path'}</h2>
          <p>
            {path.description ||
              'Explore this career option and learn about its opportunities.'}
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="career-detail-grid" ref={gridRef}>
        {/* Overview */}
        <div className="detail-card reveal-3d stagger-1">
          <h3>📋 Overview</h3>
          <div className="detail-info">
            <div className="info-item">
              <span className="info-label">Duration</span>
              <span className="info-value">
                {path.duration || 'Not specified'}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Starting Salary</span>
              <span className="info-value">
                {path.avgSalary || 'Varies by role'}
              </span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="detail-card reveal-3d stagger-2">
          <h3>🛠️ Skills Required</h3>
          {skills.length > 0 ? (
            <div className="tags-container">
              {skills.map((skill, index) => (
                <span key={`${skill}-${index}`} className="tag skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="empty-text">Skills information will be added soon.</p>
          )}
        </div>

        {/* Specializations */}
        <div className="detail-card reveal-3d stagger-3">
          <h3>🎯 Specializations</h3>
          {specializations.length > 0 ? (
            <div className="tags-container">
              {specializations.map((spec, index) => (
                <span key={`${spec}-${index}`} className="tag spec-tag">
                  {spec}
                </span>
              ))}
            </div>
          ) : (
            <p className="empty-text">Specializations information will be added soon.</p>
          )}
        </div>

        {/* Entrance Exams */}
        <div className="detail-card reveal-3d stagger-4">
          <h3>📝 Entrance Exams</h3>
          {entranceExams.length > 0 ? (
            <div className="tags-container">
              {entranceExams.map((exam, index) => (
                <span key={`${exam}-${index}`} className="tag exam-tag">
                  {exam}
                </span>
              ))}
            </div>
          ) : (
            <p className="empty-text">No specific entrance exam information available.</p>
          )}
        </div>

        {/* Top Colleges — focal, 3D tilt card set */}
        <div className="detail-card colleges-card reveal-colleges-card stagger-5">
          <span className="colleges-badge">🏆 Top Picks</span>
          <h3>🏛️ Top Colleges / Institutes</h3>
          {topColleges.length > 0 ? (
            <div className="colleges-list">
              {topColleges.map((college, index) => (
                <div
                  key={`${college.name}-${index}`}
                  className="college-detail-item reveal-college"
                  style={{ '--i': index }}
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                >
                  <div className="college-shine" />
                  <div className="cd-college-image-wrapper">
                    {college.image ? (
                      <img
                        src={college.image}
                        alt={college.name || 'College'}
                        className="cd-college-thumb"
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                          const fallback =
                            event.currentTarget.parentElement?.querySelector(
                              '.cd-college-image-fallback'
                            );
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div
                      className="cd-college-image-fallback"
                      style={{ display: college.image ? 'none' : 'flex' }}
                    >
                      🏛️
                    </div>
                  </div>
                  <div className="college-detail-info">
                    <span className="college-detail-name">
                      {college.name || 'College'}
                    </span>
                    <span className="college-detail-meta">
                      📍 {college.location || 'Location not available'}
                    </span>
                    <span className="college-detail-meta">
                      🏆 Ranking: {college.ranking || 'N/A'}
                      {' • '}
                      📅 Established: {college.established || 'N/A'}
                    </span>
                    {college.website && (
                      <span className="college-website">🌐 {college.website}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-text">College information will be added soon.</p>
          )}
        </div>

        {/* Career Scope */}
        <div className="detail-card full-width reveal-3d stagger-4">
          <h3>🌍 Career Scope</h3>
          <p className="scope-text">
            {path.scope ||
              'This career offers opportunities across multiple industries and organizations.'}
          </p>
        </div>

        {/* Pros */}
        <div className="detail-card reveal-left stagger-5">
          <h3>✅ Pros</h3>
          {pros.length > 0 ? (
            <ul className="pros-list">
              {pros.map((pro, index) => (
                <li key={`${pro}-${index}`}>{pro}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-text">Pros information will be added soon.</p>
          )}
        </div>

        {/* Cons */}
        <div className="detail-card reveal-right stagger-6">
          <h3>⚠️ Cons</h3>
          {cons.length > 0 ? (
            <ul className="cons-list">
              {cons.map((con, index) => (
                <li key={`${con}-${index}`}>{con}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-text">Cons information will be added soon.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerDetail;