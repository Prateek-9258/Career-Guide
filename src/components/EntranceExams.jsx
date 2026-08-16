import React, { useState } from 'react';
import { examCalendar } from '../data/careers';

const EntranceExams = () => {
  const [filter, setFilter] = useState('all');

  const filteredExams = filter === 'all' 
    ? examCalendar 
    : examCalendar.filter(e => e.stream === filter || e.stream === 'All');

  const filters = [
    { id: 'all', label: 'All Exams', color: '#6366f1' },
    { id: 'Science', label: 'Science', color: '#3b82f6' },
    { id: 'Commerce', label: 'Commerce', color: '#10b981' },
    { id: 'Arts', label: 'Arts', color: '#f59e0b' },
  ];

  return (
    <section className="exams-section">
      <div className="section-header">
        <h2 className="section-title">
          <span>📝</span> Entrance Exam Calendar
        </h2>
        <p className="section-subtitle">
          Major entrance exams after 12th grade and their months
        </p>
      </div>

      <div className="filter-tabs">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`filter-tab ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
            style={{ '--filter-color': f.color }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="exams-table-container">
        <table className="exams-table">
          <thead>
            <tr>
              <th>Exam Name</th>
              <th>Month(s)</th>
              <th>Stream</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredExams.map((exam, idx) => (
              <tr key={idx} className="exam-row">
                <td className="exam-name">
                  <span className="exam-icon">📋</span>
                  {exam.name}
                </td>
                <td className="exam-month">
                  <span className="month-badge">{exam.months}</span>
                </td>
                <td>
                  <span className={`stream-badge ${exam.stream.toLowerCase().replace(' ', '-')}`}>
                    {exam.stream}
                  </span>
                </td>
                <td>
                  <span className="status-badge active">Active</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="exam-tips">
        <h3><span>💡</span> Preparation Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-icon">📅</span>
            <h4>Start Early</h4>
            <p>Start preparing for entrance exams alongside your 12th grade. 1-2 years of preparation is ideal.</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">📚</span>
            <h4>Master NCERT</h4>
            <p>Most entrance exams are NCERT-based. Clear your NCERT concepts first, then move to advanced books.</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">📝</span>
            <h4>Mock Tests</h4>
            <p>Take regular mock tests. This helps with time management and identifying weak areas.</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">🎯</span>
            <h4>Previous Year Papers</h4>
            <p>Solve last 5-10 years of papers. You will understand the pattern and important topics.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntranceExams;