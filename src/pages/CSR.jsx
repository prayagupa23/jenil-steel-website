import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "./CSR.css";

// Local image carousel imports
import csr1 from "../assets/images/csr1.png";
import csr2 from "../assets/images/csr2.jpg";
import csr3 from "../assets/images/csr3.jpg";
import csr4 from "../assets/images/csr4.jpg";
import csr5 from "../assets/images/csr5.jpg";
import csr6 from "../assets/images/csr6.jpg";
import csr7 from "../assets/images/csr7.jpg";
import csr8 from "../assets/images/csr8.jpg";
import csrMain from "../assets/images/csr_main.jpeg";

const CAROUSEL_IMAGES = [csr1, csr2, csr3, csr4, csr5, csr6, csr7, csr8];

function CSR() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Smooth automatic carousel loop running every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  return (
    <div className="csr-page">
      
      {/* STANDARD SITEWIDE HERO BANNER */}
      <section className="csr-hero">
        <div className="hero-bg-csr">
          <img
            src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=1800&q=80"
            alt="Corporate Social Responsibility"
            className="hero-bg-img-csr"
          />
          <div className="hero-overlay-csr" />
        </div>
        <div className="hero-content-csr">
          <nav className="hero-breadcrumbs-csr">
            <a href="/" className="breadcrumb-link-csr">
              <svg className="breadcrumb-home-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Home
            </a>
            <span className="breadcrumb-separator-csr">|</span>
            <span className="breadcrumb-current-csr">CSR Activities</span>
          </nav>
          <h1 className="hero-heading-csr">
            Giving back to the <span className="hero-heading-accent-csr">community</span>
          </h1>
        </div>
      </section>

      <section className="about-industry-container animate-fade-in-up">
        <div className="about-industry-content">
          
          {/* Left Side: Worker Image with Zoom Frame */}
          <div className="about-industry-image-wrapper">
            <div className="about-industry-image-frame">
              <img 
                src={csrMain} 
                alt="Worker in industrial factory" 
                className="about-industry-main-img"
              />
            </div>
          </div>

          {/* Right Side: Text details */}
          <div className="about-industry-text-wrapper">
            <div className="csr-orange-accent-line" />
            <h2 className="about-industry-heading">
              CSR Committee
            </h2>
            <ul className="about-industry-subtext">
              <li>Wire Rods - high-quality reinforcement for construction and industrial applications</li>
              <li>TMT Bars - thermo-mechanically treated bars with superior strength and ductility</li>
              <li>Billets - semi-finished steel for further processing and forging</li>
              <li>Beams - structural load-bearing sections for large-scale infrastructure projects</li>
              <li>Channels, Angles &amp; Flats - versatile structural profiles for fabrication and engineering</li>
              <li>Other structural steel solutions tailored to meet diverse industrial requirements</li>
            </ul>
          </div>
          
        </div>
      </section>

      {/* MASTER SECTION: GIVING BACK TO SOCIETY (Two-Column Layout) */}
      <section className="csr-master-society-section">
        
        {/* Section Header Title Block on Top */}
        <div className="society-section-header">
          <div className="csr-orange-accent-line" />
          <h2 className="society-section-main-title">Giving Back to Society</h2>
        </div>

        <div className="society-split-grid">
          
          {/* LEFT COLUMN: REDUCED SIZE COMPACT SLIDER */}
          <div className="society-slider-column">
            <div className="carousel-viewscreen">
              {CAROUSEL_IMAGES.map((imgSrc, index) => (
                <div 
                  className={`carousel-slide-panel ${index === currentSlide ? "active-slide" : ""}`}
                  key={index}
                >
                  <img src={imgSrc} alt={`Community support slide ${index + 1}`} />
                </div>
              ))}
              <div className="carousel-tint-overlay" />

              {/* Navigation Controls */}
              <button className="carousel-arrow-btn arrow-left" onClick={handlePrevSlide} aria-label="Previous Slide">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </button>
              <button className="carousel-arrow-btn arrow-right" onClick={handleNextSlide} aria-label="Next Slide">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: EDITORIAL "WHY CSR" TEXT ANALYSIS */}
          <div className="society-why-csr-column">
            <div className="editorial-wrapper">
              <h3 className="why-csr-title">Why CSR</h3>
              
              <p className="editorial-lead-paragraph">
                Any and every business operates in a society, within the community and not in isolation. Hence, the society we function must also be a society that benefits and grows.
              </p>
              
              <p className="editorial-body-paragraph">
                CSR is beneficial for any business unit as it helps them attain a positive brand image, improve their customer’s perception & increase customer loyalty; build strong stakeholder connections and recognition at District, State, National and International levels; contribute towards the UN Global goals or SDG’s and assure overall adherence to the legality of the act.
              </p>
              
              <p className="editorial-body-paragraph">
                The various activities that are carried out in CSR are mentioned in Schedule VII of the Section 135 of the Companies Act, 2013. Some include eradicating hunger, poverty, promoting preventive healthcare, sanitation, gender equality, reduced inequalities, initiatives for education, employment, skilling, sports and many more.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CREATIVE LIGHT-THEMED INITIATIVES SECTION */}
      <section className="csr-initiatives-section">
        <div className="csr-split-container">
          
          {/* Left Column: Heading & Introduction Block */}
          <div className="csr-intro-column">
            <div className="csr-orange-accent-line" />
            <h2 className="csr-section-title">CSR Initiatives</h2>
            <p className="csr-section-desc">
              Jenil Steel firmly believes in giving back to the society. This principle forms a strong base for all the activities that our JSPL stands for and undertakes. We have bifurcated our CSR Initiatives into key developmental structures.
            </p>
          </div>

          {/* Right Column: High-End Interactive List Items Grid */}
          <div className="csr-cards-column">
            
            <div className="csr-interactive-row-card">
              <div className="card-indicator-dot" />
              <div className="card-content-block">
                <h3>Education Initiatives</h3>
                <p>Creating sustainable learning pathways and educational framework development for regional schools.</p>
              </div>
              <div className="card-hover-border-accent" />
            </div>

            <div className="csr-interactive-row-card">
              <div className="card-indicator-dot" />
              <div className="card-content-block">
                <h3>Food and Medical Initiatives</h3>
                <p>Deploying targeted nutrition programs and continuous local healthcare camp infrastructures.</p>
              </div>
              <div className="card-hover-border-accent" />
            </div>

            <div className="csr-interactive-row-card">
              <div className="card-indicator-dot" />
              <div className="card-content-block">
                <h3>Initiatives for Supporting Old Age Center</h3>
                <p>Providing financial security, dedicated resource supply, and essential care validation protocols.</p>
              </div>
              <div className="card-hover-border-accent" />
            </div>

          </div>

        </div>
      </section>

{/* 4. DETAILS GRID LAYOUT BASED ON image_445d7d.png */}
      <section className="csr-details-grid-section">
        <div className="csr-cards-grid-layout">
          
          {/* Card 1 */}
          <div className="csr-display-grid-card">
            <div className="grid-card-image-box">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80" alt="Education & Skill Development" />
            </div>
            <div className="grid-card-body">
              <div className="grid-card-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
              <h3 className="grid-card-title">Education & Skill Development</h3>
              <p className="grid-card-desc">Supporting local schools, scholarships, and vocational training.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="csr-display-grid-card">
            <div className="grid-card-image-box">
              <img src="https://media.gettyimages.com/id/940636920/photo/fit-woman-holding-a-yoga-mat-at-the-beach.jpg?s=612x612&w=0&k=20&c=RL3gBGHDTyaL6IF8degZVasZyC_R0HaazgeDur4x9ko=" alt="Healthcare & Wellness" />
            </div>
            <div className="grid-card-body">
              <div className="grid-card-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="grid-card-title">Healthcare & Wellness</h3>
              <p className="grid-card-desc">Free health camps, blood donation drives, and medical support.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="csr-display-grid-card">
            <div className="grid-card-image-box">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80" alt="Environment & Sustainability" />
            </div>
            <div className="grid-card-body">
              <div className="grid-card-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="grid-card-title">Environment & Sustainability</h3>
              <p className="grid-card-desc">Tree plantation drives, rainwater harvesting, sustainable practices.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="csr-display-grid-card">
            <div className="grid-card-image-box">
              <img src="https://cws-india.org/wp-content/uploads/2021/02/Community-Welfare-School-5-1024x768.jpg" alt="Community Welfare" />
            </div>
            <div className="grid-card-body">
              <div className="grid-card-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="grid-card-title">Community Welfare</h3>
              <p className="grid-card-desc">Supporting festivals, calamity relief, and local infrastructure.</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="csr-display-grid-card">
            <div className="grid-card-image-box">
              <img src="https://www.smilefoundationindia.org/wp-content/uploads/2023/07/Shyama-e1689920384972.png" alt="Women Empowerment" />
            </div>
            <div className="grid-card-body">
              <div className="grid-card-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <h3 className="grid-card-title">Women Empowerment</h3>
              <p className="grid-card-desc">Self-help groups, female education, and employment opportunities.</p>
            </div>
          </div>

          {/* Card 6 */}
          {/* <div className="csr-display-grid-card">
            <div className="grid-card-image-box">
              <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80" alt="Sports & Youth" />
            </div>
            <div className="grid-card-body">
              <div className="grid-card-svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path>
                  <path d="M12 2a4 4 0 0 1 4 4v4H8V6a4 4 0 0 1 4-4z"></path>
                </svg>
              </div>
              <h3 className="grid-card-title">Sports & Youth</h3>
              <p className="grid-card-desc">Sponsoring tournaments and supporting athletes from rural areas.</p>
            </div>
          </div> */}

        </div>

        {/* RECYCLING COUNT-UP METRICS DISPLAY PANEL */}
        <div className="csr-counters-flex-container">
          
          <div className="csr-ticker-box">
            <div className="ticker-numeric-display">
              {/* Empty spans prevent value duplication */}
              <span className="ticker-register register-500"></span>
              <span className="ticker-orange-suffix">+</span>
            </div>
            <p className="ticker-meta-label">STUDENTS</p>
          </div>

          <div className="csr-ticker-box">
            <div className="ticker-numeric-display">
              <span className="ticker-register register-20"></span>
              <span className="ticker-orange-suffix">+</span>
            </div>
            <p className="ticker-meta-label">HEALTH CAMPS</p>
          </div>

          <div className="csr-ticker-box">
            <div className="ticker-numeric-display">
              <span className="ticker-register register-5000"></span>
              <span className="ticker-orange-suffix">+</span>
            </div>
            <p className="ticker-meta-label">TREES PLANTED</p>
          </div>

          <div className="csr-ticker-box">
            <div className="ticker-numeric-display">
              <span className="ticker-register register-10"></span>
              <span className="ticker-orange-suffix">+</span>
            </div>
            <p className="ticker-meta-label">VILLAGES</p>
          </div>

        </div>
      </section>      

      <Footer />
    </div>
  );
}

export default CSR;