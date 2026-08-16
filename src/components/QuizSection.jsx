import React, { useState } from 'react';
import { quizQuestions, careerStreams } from '../data/careers';

const QuizSection = ({ onExploreStream }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (stream) => {
    const newAnswers = [...answers, stream];
    setAnswers(newAnswers);
    setSelectedOption(null);
    
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendedStream = () => {
    const counts = {};
    answers.forEach(a => { counts[a] = (counts[a] || 0) + 1; });
    const maxCount = Math.max(...Object.values(counts));
    const topStreams = Object.keys(counts).filter(k => counts[k] === maxCount);
    return topStreams[0] || 'science';
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedOption(null);
  };

  const recommendedStreamId = getRecommendedStream();
  const recommendedStream = careerStreams.find(s => s.id === recommendedStreamId);

  if (showResult) {
    return (
      <section className="quiz-section">
        <div className="quiz-result">
          <div className="result-trophy">🏆</div>
          <h2>Best Stream For You!</h2>
          
          <div className="result-card" style={{ borderColor: recommendedStream.color }}>
            <span className="result-icon">{recommendedStream.icon}</span>
            <h3>{recommendedStream.name}</h3>
            <p>{recommendedStream.description}</p>
            
            <div className="result-paths">
              <h4>Top Career Paths:</h4>
              <div className="result-path-tags">
                {recommendedStream.paths.slice(0, 4).map((path) => (
                  <span key={path.id} className="result-tag">
                    {path.icon} {path.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="result-actions">
            <button 
              className="btn btn-primary"
              onClick={() => onExploreStream(recommendedStreamId)}
            >
              <span>📖</span> Explore This Stream
            </button>
            <button 
              className="btn btn-secondary"
              onClick={resetQuiz}
            >
              <span>🔄</span> Retake Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQ];

  return (
    <section className="quiz-section">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2><span>🎯</span> Career Quiz</h2>
          <p>Find your best stream with 5 simple questions!</p>
        </div>

        <div className="quiz-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQ + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">Question {currentQ + 1} of {quizQuestions.length}</span>
        </div>

        <div className="quiz-question-card">
          <h3 className="question-text">{question.question}</h3>
          
          <div className="quiz-options">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                className={`quiz-option ${selectedOption === idx ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedOption(idx);
                  setTimeout(() => handleAnswer(option.stream), 400);
                }}
              >
                <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;