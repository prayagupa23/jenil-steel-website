import React from 'react';
import './ProcessWorkflow.css';

const ProcessWorkflow = () => {
  const steps = [
    { num: '01', title: 'Enquiry', desc: 'Share your requirement via call or form.' },
    { num: '02', title: 'Quotation', desc: 'Competitive pricing within hours.' },
    { num: '03', title: 'Processing', desc: 'Quality check, weighing, loading.' },
    { num: '04', title: 'Delivery', desc: 'With test certificates & GST invoice.' },
  ];

  return (
    <section className="workflow-section">
      <div className="workflow-container">
        
        {/* Animated Connecting Line SVG - Hidden on mobile */}
        <div className="workflow-svg-line-container">
          <svg className="workflow-svg" viewBox="0 0 100 10" preserveAspectRatio="none">
            {/* Base static dark gradient path */}
            <line x1="0" y1="5" x2="100" y2="5" className="base-track-line" />
            {/* The animated pulse path overlay */}
            <line x1="0" y1="5" x2="100" y2="5" className="pulse-animated-line" />
          </svg>
        </div>

        {/* Steps Grid Grid */}
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-node-item">
              
              {/* Geometric Node Element */}
              <div className="circle-node-wrapper">
                <div className="inner-number">{step.num}</div>
                <span className="accent-orbit-dot"></span>
              </div>

              {/* Text Layout blocks */}
              <h3 className="step-node-title">{step.title}</h3>
              <p className="step-node-desc">{step.desc}</p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessWorkflow;