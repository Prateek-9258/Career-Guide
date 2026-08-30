import React from 'react';

const CareerCard = ({ path, streamColor = '#3b82f6', onClick }) => {
  if (!path) {
    return null;
  }

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick(path);
    }
  };

  // Helper to lighten color for CSS variables
  const lighten = (hex, opacity) => {
    return hex + Math.round(opacity * 255).toString(16).padStart(2, '0');
  };

  return (
    <article
      className="career-card"
      onClick={handleClick}
      style={{
        '--stream-color': streamColor,
        '--stream-color-light': lighten(streamColor, 0.7),
        '--stream-color-glow': lighten(streamColor, 0.06),
      }}
    >
      <div className="career-card-header">
        <div
          className="career-icon"
          style={{
            backgroundColor: `${streamColor}18`,
          }}
        >
          {path.icon || '🎓'}
        </div>
        <span className="career-card-badge">
          {path.category || 'Career'}
        </span>
      </div>

      <h4 className="career-title">
        {path.title || 'Career Path'}
      </h4>

      <p className="career-desc">
        {path.description || 'Explore this career option.'}
      </p>

      <div className="career-salary">
        <span className="salary-label">Avg. Starting Salary</span>
        <span className="salary-value">
          {path.avgSalary || 'Varies'}
        </span>
      </div>

      <div className="career-tags">
        {(path.tags || []).slice(0, 2).map((tag, i) => (
          <span key={i} className="career-tag">{tag}</span>
        ))}
        {(path.tags || []).length > 2 && (
          <span className="career-tag more">+{path.tags.length - 2}</span>
        )}
      </div>

      <div className="career-card-footer">
        <span className="view-details">View Details →</span>
      </div>
    </article>
  );
};

export default CareerCard;