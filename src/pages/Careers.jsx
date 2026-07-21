import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import "./Careers.css";

import jswLogo from "../assets/images/jsw-logo-jv.webp";
import rinlLogo from "../assets/images/Rashtriya_Ispat_Nigam.svg.png";
import tataLogo from "../assets/images/tata-steel-logo.png";

const employeeTestimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Senior Sales Manager",
    tenure: "5 years at Jenil Steel",
    content: "Jenil Steel has provided an empowering environment for career growth. The culture balances high operational standards with incredible support across all teams.",
    companyLogo: jswLogo,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Quality Control Head",
    tenure: "3 years at Jenil Steel",
    content: "Working here has been truly rewarding. Integrity and quality aren't just buzzwords—they are embedded into our daily workflows and client commitments.",
    companyLogo: rinlLogo,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Warehouse Manager",
    tenure: "4 years at Jenil Steel",
    content: "The level of cross-departmental collaboration is unmatched. Continuous operational improvement is deeply valued, and individual achievements never go unnoticed.",
    companyLogo: tataLogo,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

// Industrial Vector Icons
const Icons = {
  Home: () => (
    <svg className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Growth: () => (
    <svg className="svg-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20"/>
      <path d="m6 16 6-6 4 4 6-8"/>
      <path d="M18 6h4v4"/>
    </svg>
  ),
  Shield: () => (
    <svg className="svg-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Clock: () => (
    <svg className="svg-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Cpu: () => (
    <svg className="svg-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>
    </svg>
  )
};

function CareersHero() {
  return (
    <section className="careers-hero">
      <div className="hero-bg-careers">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80](https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          alt="Industrial Office Setup"
          className="hero-bg-img-careers"
        />
        <div className="hero-overlay-careers" />
      </div>
      
      <div className="hero-content-careers">
        <nav className="hero-breadcrumbs-careers">
          <a href="/" className="breadcrumb-link-careers">
            <svg className="breadcrumb-home-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Home
          </a>
          <span className="breadcrumb-separator-careers">|</span>
          <span className="breadcrumb-current-careers">Careers</span>
        </nav>
        
        <h1 className="hero-heading-careers">
          Build Your <span className="hero-heading-accent-careers">Career Future</span>
        </h1>
      </div>
    </section>
  );
}

function EmployeeTestimonialCard({ testimonial, index }) {
  return (
    <motion.div 
      className="testimonial-card interactive-hover"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className="testimonial-info">
          <h4 className="testimonial-name">{testimonial.name}</h4>
          <p className="testimonial-role">{testimonial.role}</p>
          <p className="testimonial-tenure">{testimonial.tenure}</p>
        </div>
      </div>
      
      <div className="testimonial-quote">
        <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <p className="testimonial-content">"{testimonial.content}"</p>
      </div>
    </motion.div>
  );
}

function EmployeeTestimonialsSection() {
  return (
    <section className="employee-testimonials-section">
      <div className="container">
        <div className="section-header centered">
          <div className="section-label centered-label">
            <span className="label-line" />
            OUR PEOPLE
            <span className="label-line" />
          </div>
          
          <h2 className="section-title">
            Life at <span className="accent-text">Jenil Steel</span>
          </h2>
          
          <p className="section-subtitle">
            Hear firsthand insights on culture, leadership, and professional advancement from our team.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {employeeTestimonials.map((testimonial, index) => (
            <EmployeeTestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyJoinUs() {
  const benefits = [
    {
      icon: <Icons.Growth />,
      title: "Career Advancement",
      desc: "Structured advancement pathways and skill-building programs for engineering professionals."
    },
    {
      icon: <Icons.Shield />,
      title: "Health & Safety",
      desc: "Strict adherence to industrial safety standards alongside robust family health protection."
    },
    {
      icon: <Icons.Clock />,
      title: "Balanced Environment",
      desc: "Streamlined operational schedules and a respectful, collaborative culture."
    },
    {
      icon: <Icons.Cpu />,
      title: "Industrial Tech",
      desc: "Work alongside advanced metallurgy equipment, ERP logistics systems, and modern facilities."
    }
  ];
  
  return (
    <section className="why-join-us-section">
      <div className="container">
        <div className="section-header centered">
          <div className="section-label centered-label">
            <span className="label-line" />
            BENEFITS
            <span className="label-line" />
          </div>
          
          <h2 className="section-title">
            Why Choose <span className="accent-text">Our Team</span>
          </h2>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="benefit-card interactive-hover"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Careers() {
  return (
    <div className="careers-page">
      <CareersHero />
      <EmployeeTestimonialsSection />
      <WhyJoinUs />
      <Footer />
    </div>
  );
}