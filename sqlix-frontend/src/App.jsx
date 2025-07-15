import { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ColdStartToast from './ColdStartToast';

export default function App() {
  const [mode, setMode] = useState('VULNERABLE');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const toggleMode = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/toggle`, { method: 'POST' });
      const newMode = await res.text();
      setMode(newMode);

      toast.success(`Switched to ${newMode} mode`);
    } catch (err) {
      toast.error('Failed to toggle mode');
    }
  };

  const handleLogin = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const text = await res.text();
      const cleanText = text.trim().toLowerCase();

      if (res.ok && !cleanText.includes('invalid')) {
        toast.success(`${text}`);
      } else {
        toast.error(`${text}`);
      }
    } catch (err) {
      toast.error('Server error');
    }
  };

  return (
    <>
     <ColdStartToast />
      <button className="details-btn" onClick={() => setShowModal(true)}>
        How It Works ?
      </button>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>SQL Injection Explained</h2>
            <p style={{ marginBottom: "10px" }}>These inputs exploit how user data is directly injected into SQL queries in <strong>VULNERABLE</strong> mode.</p>

            <ul>
              <li>
                <strong>Input:</strong> <code>admin' --</code><br />
                <strong>Query:</strong><br />
                <code>SELECT * FROM users WHERE username='admin' --' AND password=''</code><br />
                <strong>How it works:</strong><br />
                <em>The double dash (<code>--</code>) starts a comment, removing the password check. Logs in as admin without verifying password.</em>
              </li>
              <br />

              <li>
                <strong>Input:</strong> <code>' OR '1'='1' --</code><br />
                <strong>Query:</strong><br />
                <code>SELECT * FROM users WHERE username='' OR '1'='1' --' AND password=''</code><br />
                <strong>How it works:</strong><br />
                <em>The condition is always true and the comment ignores the password clause, resulting in login bypass.</em>
              </li>
              <br />

              <li>
                <strong>Input:</strong> <code>' OR 1=1 --</code><br />
                <strong>Query:</strong><br />
                <code>SELECT * FROM users WHERE username='' OR 1=1 --' AND password=''</code><br />
                <strong>How it works:</strong><br />
                <em>Boolean logic always evaluates true, comment skips password check, allowing access.</em>
              </li>
            </ul>

            <p style={{ marginTop: '1rem' }}>
              <strong>Note:</strong> These attacks only work when SQL is built with string concatenation (i.e., in <code>VULNERABLE</code> mode). In <code>SECURE</code> mode, the backend uses <strong>prepared statements</strong> which prevent such injection.
            </p>

            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}


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

          {/* SQL Query Display */}
          {mode === 'VULNERABLE' && (
            <div className="query-preview" style={{ marginBottom: "20px" }}>
              <label>Generated SQL Query:</label>
              <pre className="query-box">
                SELECT * FROM users WHERE username='{username}' AND password='{password}'
              </pre>
            </div>
          )}
          {mode !== 'VULNERABLE' && (
            <div className="query-preview secure" style={{ marginBottom: "20px" }}>
              <label>Generated SQL Query:</label>
              <pre className="query-box">[Parameterized Query - Secure]</pre>
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
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}