import React from 'react';
import { ShieldCheck, Clock, IndianRupee, Headphones } from 'lucide-react';
import './JenilAdvantage.css';

const JenilAdvantage = () => {
  const advantages = [
    {
      id: 1,
      icon: <ShieldCheck className="advantage-icon" />,
      title: 'Certified Quality',
      description: 'BIS certified with test certificates.',
    },
    {
      id: 2,
      icon: <Clock className="advantage-icon" />,
      title: 'Timely Delivery',
      description: 'Own fleet ensures on-time arrival.',
    },
    {
      id: 3,
      icon: <IndianRupee className="advantage-icon" />,
      title: 'Best Pricing',
      description: 'Direct from mills, transparent billing.',
    },
    {
      id: 4,
      icon: <Headphones className="advantage-icon" />,
      title: 'Expert Support',
      description: 'Dedicated managers end-to-end.',
    },
  ];

  return (
    <section className="jenil-advantage-section">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <div className="sub-title-wrapper">
            <span className="line"></span>
            <span className="sub-title">WHY JENIL STEEL</span>
          </div>
          <h2 className="main-title">
            The <span className="highlight">Jenil</span> advantage
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="advantages-grid">
          {advantages.map((item) => (
            <div key={item.id} className="advantage-card">
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JenilAdvantage;