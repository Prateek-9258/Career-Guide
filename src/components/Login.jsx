import React, { useState } from 'react';

const Login = ({ onLogin, onGuest }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (isRegister) {
        if (!formData.name || !formData.email || !formData.password) {
          setError('Please fill all fields');
          setLoading(false);
          return;
        }
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        if (formData.password.length < 6) {
          setError('Password must be at least 6 characters');
          setLoading(false);
          return;
        }
        onLogin({ name: formData.name, email: formData.email });
      } else {
        if (!formData.email || !formData.password) {
          setError('Please enter email and password');
          setLoading(false);
          return;
        }
        onLogin({ name: 'Student', email: formData.email });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <div className="login-left">
          <div className="login-brand">
            <span className="login-brand-icon">🎓</span>
            <h2>CareerGuide</h2>
          </div>
          <h1 className="login-title">
            {isRegister ? 'Create Your Account' : 'Welcome Back!'}
          </h1>
          <p className="login-subtitle">
            {isRegister 
              ? 'Join thousands of students finding their perfect career path.' 
              : 'Login to explore 50+ career paths, top colleges, and entrance exams.'}
          </p>
          
          <div className="login-features">
            <div className="login-feature">
              <span>🎯</span>
              <p>Career Quiz to find your stream</p>
            </div>
            <div className="login-feature">
              <span>📚</span>
              <p>50+ Career Paths Explained</p>
            </div>
            <div className="login-feature">
              <span>🏛️</span>
              <p>Top Colleges & Entrance Exams</p>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-card">
            <h3>{isRegister ? 'Sign Up' : 'Login'}</h3>
            
            {error && <div className="login-error">{error}</div>}

            <form onSubmit={handleSubmit} className="login-form">
              {isRegister && (
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              {isRegister && (
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              )}

              <button type="submit" className="login-submit-btn" disabled={loading}>
                {loading ? (
                  <span className="login-spinner"></span>
                ) : (
                  <>
                    <span>{isRegister ? '🚀' : '🔓'}</span>
                    {isRegister ? 'Create Account' : 'Login'}
                  </>
                )}
              </button>
            </form>

            <div className="login-divider">
              <span>OR</span>
            </div>

            <button className="guest-btn" onClick={onGuest}>
              <span>👤</span> Continue as Guest
            </button>

            <p className="login-toggle">
              {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button 
                type="button" 
                className="toggle-link"
                onClick={() => {
                  setIsRegister(!isRegister);
                  setError('');
                }}
              >
                {isRegister ? 'Login' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;