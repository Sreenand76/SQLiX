import { useState } from 'react';
import './App.css';

export default function App() {
  const [mode, setMode] = useState('VULNERABLE');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const toggleMode = async () => {
    const newMode = mode === 'VULNERABLE' ? 'SECURE' : 'VULNERABLE';
    try {

      setMode(newMode);
      setMessage(`Mode switched to ${newMode}`);
    } catch (err) {
      setMessage('Failed to toggle mode');
    }
  };

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const text = await res.text();
      setMessage(res.ok ? `Success! ${text}` : 'Login failed');
    } catch (err) {
      setMessage('Server error');
    }
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <h1 className="app-title">SQL Injection Demo</h1>

        <div className="mode-toggle-container">
          <button
            onClick={toggleMode}
            className={`mode-toggle ${mode.toLowerCase()}`}
          >
            {mode} Mode
            <span className="mode-indicator"></span>
          </button>
        </div>

        <div className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Try: admin' --"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Leave empty in vulnerable mode"
            />
          </div>

          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>

        <div className="query-visualization">
          <h3>Generated SQL Query:</h3>
          <code>
            {mode === 'VULNERABLE'
              ? `SELECT * FROM users WHERE username='${username}' AND password='${password}'`
              : '[Parameterized Query - Secure]'}
          </code>
        </div>
        {message && (
          <div className={`message ${message.includes('Success') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <div className="hint-box">
          {mode === 'VULNERABLE' ? (
            <>
              <span className="hint-icon">💡</span>
              <p>Try this SQL injection: <code>admin' --</code></p>
            </>
          ) : (
            <>
              <span className="hint-icon">🔒</span>
              <p>Secure mode prevents SQL injection attacks</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}