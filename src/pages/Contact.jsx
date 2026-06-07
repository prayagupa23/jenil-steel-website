import React, { useState } from "react";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formState);
    // Add your backend link or submission logic here
  };

  return (
    <div className="contact-page">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="hero-bg-contact">
          <img
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1800&q=80"
            alt="Industrial Architecture"
            className="hero-bg-img-contact"
          />
          <div className="hero-overlay-contact" />
        </div>
        <div className="hero-content-contact">
          <nav className="hero-breadcrumbs-contact">
            <a href="/" className="breadcrumb-link-contact">
              <svg className="breadcrumb-home-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Home
            </a>
            <span className="breadcrumb-separator-contact">|</span>
            <span className="breadcrumb-current-contact">Contact Us</span>
          </nav>
          <h1 className="hero-heading-contact">
            Let's build <span className="hero-heading-accent-contact">together</span>
          </h1>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <section className="contact-interface-section animate-fade-up">
        <div className="contact-interface-card">
          
          {/* Left Panel: Deep Brand Info Card */}
          <div className="contact-info-panel">
            <div className="info-panel-overlay" />
            <div className="info-panel-content">
              <div className="info-tag-line">
                <span className="info-accent-dash"></span>
                Connect With Us
              </div>
              <h2 className="info-title">Have a project in mind? Let's discuss.</h2>
              <p className="info-desc">
                Get in touch with our technical sales and logistics experts to secure reliable steel supply lines for your operations.
              </p>

              <div className="info-details-list">
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Call Us Directly</h4>
                    <p>+91 xxxxx xxxxx</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email Inquiries</h4>
                    <p>info@jenilsteel.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Headquarters</h4>
                    <p>Plot No. 45, GIDC, Ahmedabada</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Artistic Giant Ghost Watermark Number */}
            <div className="info-panel-watermark">WORK</div>
          </div>

          {/* Right Panel: Premium Creative Form */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="creative-form">
              <div className="form-row">
                <div className="input-group">
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formState.name} 
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label>Your Name</label>
                  <span className="input-bar"></span>
                </div>
                <div className="input-group">
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formState.email} 
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label>Email Address</label>
                  <span className="input-bar"></span>
                </div>
              </div>

              <div className="input-group">
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  value={formState.subject} 
                  onChange={handleChange}
                  placeholder=" "
                />
                <label>Subject Topic</label>
                <span className="input-bar"></span>
              </div>

              <div className="input-group textarea-group">
                <textarea 
                  name="message" 
                  required 
                  value={formState.message} 
                  onChange={handleChange}
                  placeholder=" "
                  rows="5"
                ></textarea>
                <label>Tell us about your requirements...</label>
                <span className="input-bar"></span>
              </div>

              <button type="submit" className="contact-submit-btn">
                <span>Send Message</span>
                <svg className="btn-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;