// Insights.js
import React from 'react';
import './Insights.css'; // Import your CSS file for styling

function Insights() {
  return (
    <div className="insights">
      <h3>Insights</h3>
      <p>Gain insights into the technology and methodology behind our system.</p>
      <div className="visualization">
        <div className="signature-container">
          <div className="signature genuine"></div>
          <p>Genuine Signature</p>
        </div>
        <div className="arrow"></div>
        <div className="neural-network"></div>
        <div className="arrow"></div>
        <div className="result-container">
          <div className="result genuine"></div>
          <p>Genuine Result</p>
        </div>
      </div>
    </div>
  );
}

export default Insights;
