import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('72');
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    const hInMeters = parseFloat(height) / 100;
    const wInKg = parseFloat(weight);

    if (hInMeters > 0 && wInKg > 0) {
      const bmi = (wInKg / (hInMeters * hInMeters)).toFixed(1);
      setBmiResult(bmi);

      if (bmi < 18.5) {
        setStatus('Underweight (Focus on Lean Mass Gain)');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setStatus('Optimal Fit Range (Maintain & Build)');
      } else if (bmi >= 25 && bmi < 29.9) {
        setStatus('Overweight (Ideal for Iron Fat Loss Plan)');
      } else {
        setStatus('Obese (High Priority Transformation Needed)');
      }
    }
  };

  return (
    <section id="bmi" className="bmi-section">
      <div className="container">
        <div className="bmi-container">
          <div className="bmi-info">
            <div className="section-title-badge">FITNESS EVALUATION</div>
            <h2>CALCULATE YOUR <span>BMI INDEX</span></h2>
            <p>
              Body Mass Index (BMI) is a starting indicator of healthy weight relative to your height. Use our instant tool to discover your target baseline.
            </p>

            <table className="bmi-table">
              <thead>
                <tr>
                  <th>BMI Range</th>
                  <th>Classification</th>
                  <th>Fitness Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Below 18.5</td>
                  <td>Underweight</td>
                  <td>Hypertrophy Strength Program</td>
                </tr>
                <tr>
                  <td>18.5 – 24.9</td>
                  <td>Normal Weight</td>
                  <td>Body Recomposition & Power</td>
                </tr>
                <tr>
                  <td>25.0 – 29.9</td>
                  <td>Overweight</td>
                  <td>HIIT Fat Burn Surge</td>
                </tr>
                <tr>
                  <td>30.0 +</td>
                  <td>Obese</td>
                  <td>Personalized VIP Coaching</td>
                </tr>
              </tbody>
            </table>
          </div>

          <form className="bmi-form" onSubmit={calculateBMI}>
            <div className="input-row">
              <div className="input-group">
                <label>HEIGHT (CM)</label>
                <input 
                  type="number" 
                  className="bmi-input" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)} 
                  placeholder="e.g. 175"
                  required 
                />
              </div>
              <div className="input-group">
                <label>WEIGHT (KG)</label>
                <input 
                  type="number" 
                  className="bmi-input" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)} 
                  placeholder="e.g. 70"
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn-calc-bmi">
              CALCULATE BMI NOW
            </button>

            {bmiResult && (
              <div className="bmi-result-box">
                <div className="bmi-number">{bmiResult}</div>
                <div className="bmi-status">{status}</div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
