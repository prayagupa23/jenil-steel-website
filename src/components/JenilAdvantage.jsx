import React from 'react';
import { BadgeCheck, Boxes, Factory, Truck } from 'lucide-react';
import './JenilAdvantage.css';

const JenilAdvantage = () => {
  const advantages = [
    {
      id: 1,
      icon: <BadgeCheck className="advantage-icon" />,
      title: 'Quality',
      description:
        'Rigorously tested products from the best suppliers.',
    },
    {
      id: 2,
      icon: <Boxes className="advantage-icon" />,
      title: 'Quantity',
      description:
        'Deep stock reserves to meet every customer demand.',
    },
    {
      id: 3,
      icon: <Factory className="advantage-icon" />,
      title: 'Stable Supply',
      description:
        'A robust supply chain built on 75+ years of trust.',
    },
    {
      id: 4,
      icon: <Truck className="advantage-icon" />,
      title: 'Just-In-Time Delivery',
      description:
        'Steel delivered exactly when you need it.',
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
            The <span className="highlight">Jenil</span> Advantage
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="advantages-grid">
          {advantages.map((item) => (
            <div key={item.id} className="advantage-card">
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3 className="card-title-adv">{item.title}</h3>
              <p className="card-description-adv">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JenilAdvantage;