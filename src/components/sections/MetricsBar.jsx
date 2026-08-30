import React from 'react';

export default function MetricsBar() {
  const metrics = [
    { value: '7+', label: 'Core Digital Capabilities' },
    { value: '14 Days', label: 'Average Turnkey Delivery' },
    { value: '99.9%', label: 'Autonomous System Reliability' },
    { value: '100%', label: 'Deterministic Code & Zero Tech Debt' },
  ];

  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="metric-item">
              <h3>{m.value}</h3>
              <p>{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
