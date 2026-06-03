// HowWeWork.jsx
import React from 'react';
import './HowWeWork.css';
import ProcessWorkflow from './ProcessWorkflow.jsx';

const HowWeWork = () => {
    return (
        <section className = "how-we-work-section">
            <div className="container">
                {/* Header Section */}
                <div className="section-header">
                    <div className="sub-title-wrapper">
                        <span className="line"></span>
                        <span className="sub-title-for-process">HOW WE WORK</span>
                    </div>
                    <h2 className="main-title-for-process">
                        Simple. <span className="highlight">Reliable.</span> Fast.
                    </h2>
                </div>
                <ProcessWorkflow/>
            </div>
        </section>
    );
}

export default HowWeWork;