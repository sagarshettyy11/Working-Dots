import React from 'react';

export default function WhyUsSection() {
  const comparisonData = [
    {
      feature: 'Design & Code Alignment',
      others: 'Designers hand off Figma files; developers compromise on fidelity and tokens.',
      workingdots: 'Unified workflow: Figma design tokens mapped directly to clean React components.',
    },
    {
      feature: 'AI & Automations',
      others: 'Generic third-party SaaS wrappers that break without monitoring.',
      workingdots: 'Deterministic n8n, Make & Python pipelines with automated error alerts and retries.',
    },
    {
      feature: 'Delivery Speed & Cost',
      others: '3 - 6 months of agency meetings, account manager markups, and scope creep.',
      workingdots: 'Lean 2 - 3 week structured delivery sprints with direct architect communication.',
    },
    {
      feature: 'WhatsApp Commerce & Suites',
      others: 'Generic e-commerce templates requiring heavy app downloads.',
      workingdots: 'Turnkey WhatsApp catalog, 1-click ordering, and customized restaurant suites.',
    },
    {
      feature: 'Code & Asset Ownership',
      others: 'Proprietary platform lock-in or messy untyped codebases.',
      workingdots: '100% intellectual property ownership, full GitHub repo transfer, and complete docs.',
    },
  ];

  return (
    <section id="why-us" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="section-eyebrow">WHY WORKING DOTS</span>
          </div>
          <h2>Why Choose Working Dots</h2>
          <p>
            Here is how our unified digital studio compares to traditional agencies, software houses, and fragmented freelancers.
          </p>
        </div>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-col">Capability & Delivery</th>
                <th className="other-col">Traditional Agencies / Freelancers</th>
                <th className="workingdots-col">Working Dots Digital Studio</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx}>
                  <td className="feature-col">{row.feature}</td>
                  <td className="other-col">{row.others}</td>
                  <td className="workingdots-col">{row.workingdots}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
