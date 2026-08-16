import React from 'react';

const CareerCard = ({ path, onClick, streamColor }) => {
  return (
    <div 
      className="career-card"
      onClick={() => onClick(path)}
      style={{ '--stream-color': streamColor }}
    >
      <div className="career-card-header">
        <span className="career-icon">{path.icon}</span>
        <div className="career-card-badge">{path.duration}</div>
      </div>
      
      <h3 className="career-title">{path.title}</h3>
      <p className="career-desc">{path.description}</p>
      
      <div className="career-salary">
        <span className="salary-label">Starting Salary:</span>
        <span className="salary-value">{path.avgSalary}</span>
      </div>
      
      <div className="career-tags">
        {path.specializations.slice(0, 3).map((spec, idx) => (
          <span key={idx} className="career-tag">{spec}</span>
        ))}
        {path.specializations.length > 3 && (
          <span className="career-tag more">+{path.specializations.length - 3}</span>
        )}
      </div>
      
      <div className="career-card-footer">
        <span className="view-details">
          View Details <span>→</span>
        </span>
      </div>
    </div>
  );
};

export default CareerCard;