// SignatureStats.js
import React from 'react';
import './SignatureStats.css'; // Import your CSS file for styling

function SignatureStats() {
  return (
    <div className="signature-stats">
      <div className="stat">
        <h2>Users Trust Our Signature Verification System</h2>
      </div>
      <div className="stat">
        <h1 className="big-number">65.5K+</h1>
        <p className="stat-label">Documents Verified Daily</p>
      </div>
      <div className="stat">
        <h1 className="big-number">53%</h1>
        <p className="stat-label">of Documents Verified are Genuine</p>
      </div>
      <div className="stat">
        <h1 className="big-number">4M</h1>
        <p className="stat-label">Signatures Verified Per Month</p>
      </div>
      <div className="stat">
        <h1 className="big-number">238K</h1>
        <p className="stat-label">Documents Shared Per Month</p>
      </div>
    </div>
  );
}

export default SignatureStats;
