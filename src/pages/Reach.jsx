import React from "react";
import Footer from "../components/Footer";
import "./Reach.css";
import "./Services.css"
import truckVideo from "../assets/ourReach.mp4"; 
import indiaMapImg from "../assets/images/map.jpeg"; 
import fastDelivery from '../assets/images/truck.png';
import usp from '../assets/images/usp.jpeg';
import logistics from '../assets/images/logistics.png';
import productDev from '../assets/images/product_dev.png';
import productMix from '../assets/images/product_mix.png';
import tailoredSol from '../assets/images/tailored_solution.png';
import sizeMax from '../assets/images/sizeMax.jpeg'

function OurReach() {
  return (
    <div className="reach-page">
      
      {/* 1. HERO BANNER WITH VIDEO BACKGROUND */}
      <section className="reach-hero">
        <div className="hero-bg-reach">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="hero-bg-video-reach"
            src={truckVideo}
          />
          <div className="hero-overlay-reach" />
        </div>
        <div className="hero-content-reach">
          <nav className="hero-breadcrumbs-reach">
            <a href="/" className="breadcrumb-link-reach">
              <svg className="breadcrumb-home-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Home
            </a>
            <span className="breadcrumb-separator-reach">|</span>
            <span className="breadcrumb-current-reach">Our Reach</span>
          </nav>
          <h1 className="hero-heading-reach">
            Delivering Steel <span className="hero-heading-accent-reach">Across India</span>
          </h1>
          <p className="hero-subheading-reach">
            With over 75 years of industry expertise, Jenil Steel connects leading manufacturers with businesses across India through a reliable and efficient supply network.
          </p>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="reach-stats-section">
        <div className="reach-stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">75+</h3>
            <p className="stat-text">Years of Industry Experience</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">1000+</h3>
            <p className="stat-text">Customers Served</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">Pan-India</h3>
            <p className="stat-text">Supply Network</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">Trusted</h3>
            <p className="stat-text">Partnerships with Leading Steel Manufacturers</p>
          </div>
        </div>
      </section>

      {/* 3. EXPANDED MAP CONNECTIONS GRID SECTION */}
      <section className="reach-map-split-container">
        
        {/* Left Column: Pulsing Map Image Panel */}
        <div className="industrial-map-image-card">
          <div className="map-card-hud-header">
            <span className="hud-status-dot"></span>
            <span className="hud-status-title">NATIONAL_LOGISTICS_INFRASTRUCTURE_MATRIX</span>
          </div>
          <div className="map-graphic-frame">
            <img 
              src={indiaMapImg} 
              alt="Jenil Steel National Distribution Hub Map" 
              className="india-distribution-map-img"
            />
          </div>
        </div>

        {/* Right Column: Filled Text Content & Hubs Grid */}
        <div className="reach-map-text-content">
          <div className="reach-accent-line" />
          <h2 className="reach-section-title">Key Operating & Supply Hubs</h2>

          
          {/* New content layer to fill out empty vertical spaces inside the card layout */}
          <div className="reach-hubs-distribution-block">
            <p className="reach-section-description">
              From our headquarters in Mumbai, Jenil Steel operates across India's most active steel markets — reaching manufacturers, re-rollers, and businesses in Gujarat, Delhi, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, and West Bengal. Our supply network is built for speed, reliability, and consistency — so the right steel reaches the right place, at the right time.
            </p>
            <ul className="states-list">
              <li className="state-item"><span>•</span> Maharashtra (Mumbai - HQ)</li>
              <li className="state-item"><span>•</span> Gujarat</li>
              <li className="state-item"><span>•</span> Delhi</li>
              <li className="state-item"><span>•</span> Rajasthan</li>
              <li className="state-item"><span>•</span> Madhya Pradesh</li>
              <li className="state-item"><span>•</span> Jharkhand</li>
              <li className="state-item"><span>•</span> Chhattisgarh</li>
              <li className="state-item"><span>•</span> West Bengal</li>
            </ul>
          </div>
        </div>

      </section>

            {/* Our USP Section */}
      <section className="reach-usp-section">
        <div className="reach-usp-container">
          <h2 className="reach-usp-title">Our Reach</h2>
          <div className="reach-usp-content">
            <div className="reach-usp-features">
              <p className="reach-usp-description">
                Our extensive distribution network enables us to efficiently supply quality steel products to customers across major industrial and infrastructure hubs throughout India. By maintaining deep inventory levels and streamlined dispatch systems, we bridge the gap between primary production plants and your project site.
              </p>
              <ul className="reach-usp-points">
                <li>Pan-India Distribution Network</li>
                <li>Ready Stock for Faster Dispatch</li>
                <li>On-Time Delivery Commitment</li>
                <li>Efficient Logistics & Supply Chain</li>
                <li>Serving Infrastructure & Industrial Projects</li>
                <li>Reliable Support from Order to Delivery</li>
              </ul>
            </div>
            <div className="reach-usp-image-wrapper">
              <div className="reach-usp-image-frame">
                <img 
                  src={usp}
                  alt="Steel manufacturing process" 
                  className="reach-usp-main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Horizontal Marquee Section - Our Capabilities */}
      <section className="reach-our-capabilities-section">
        <div className="reach-our-capabilities-header">
          <h3 className="reach-our-usp-title">Our USPs</h3>
        </div>
        
        <div className="reach-marquee-wrapper">
          <div className="reach-marquee-track">
            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={fastDelivery}
                  alt="Timely Delivery" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Timely Delivery</h4>
                <p className="reach-capability-description">Project completion precision and on-schedule efficiency</p>
              </div>
            </div>

            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={logistics}
                  alt="Logistics" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Logistics</h4>
                <p className="reach-capability-description">Supply chain optimization for seamless project execution</p>
              </div>
            </div>

            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={productDev} 
                  alt="Product Development" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Product Development</h4>
                <p className="reach-capability-description">Industry-specific steel innovation tailored</p>
              </div>
            </div>

            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={productMix}
                  alt="Product Mix" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Product Mix</h4>
                <p className="reach-capability-description">High-quality steel range for diverse applications</p>
              </div>
            </div>

            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={tailoredSol}
                  alt="Tailored Solutions" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Tailored Solutions</h4>
                <p className="reach-capability-description">Custom steel solutions for unique client needs</p>
              </div>
            </div>

            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={sizeMax} 
                  alt="Size Max" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Size Max</h4>
                <p className="reach-capability-description">Diverse size options for all project scale needs</p>
              </div>
            </div>

            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={fastDelivery}
                  alt="Timely Delivery" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Timely Delivery</h4>
                <p className="reach-capability-description">Project completion precision and on-schedule efficiency</p>
              </div>
            </div>

            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={logistics}
                  alt="Logistics" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Logistics</h4>
                <p className="reach-capability-description">Supply chain optimization for seamless execution</p>
              </div>
            </div>

            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={productDev}
                  alt="Product Development" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Product Development</h4>
                <p className="reach-capability-description">Industry-specific steel innovation tailored</p>
              </div>
            </div>

            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={productMix}
                  alt="Product Mix" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Product Mix</h4>
                <p className="reach-capability-description">Quality steel range for diverse applications</p>
              </div>
            </div>

            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={tailoredSol}
                  alt="Tailored Solutions" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Tailored Solutions</h4>
                <p className="reach-capability-description">Custom steel solutions for unique needs</p>
              </div>
            </div>

            <div className="reach-capability-card">
              <div className="reach-capability-image-wrapper">
                <img 
                  src={sizeMax}
                  alt="Size Max" 
                  className="reach-capability-image"
                />
              </div>
              <div className="reach-capability-content">
                <h4 className="reach-capability-title">Size Max</h4>
                <p className="reach-capability-description">Diverse size options for all project scales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ALTERNATING CONTENT SECTIONS WITH SIDE IMAGES */}
      {/* <section className="reach-manifesto-split-wrapper">
        <div className="reach-split-row">
          <div className="reach-image-column">
            <div className="reach-image-frame">
              <img 
                src={fastDelivery}
                alt="Delivery fleet logistics" 
                className="reach-split-img"
              />
            </div>
          </div>
          <div className="reach-text-column">
            <div className="reach-tag-line">
              <span className="reach-dash-accent" /> LOGISTICS EFFICIENCY
            </div>
            <h2 className="reach-manifesto-title">Fast Delivery</h2>
            <p className="reach-manifesto-body">
              We recognize the paramount importance of timely delivery and its impact on our customers' operations. 
              To ensure a seamless experience, we have meticulously built a strong fleet of delivery trucks, 
              equipped to handle various order sizes and specifications. Our commitment to exceptional customer service 
              extends to every aspect of our operations, including reliable and punctual deliveries.
            </p>
          </div>
        </div>

        <div className="reach-split-row alternate-row">
          <div className="reach-text-column">
            <div className="reach-tag-line">
              <span className="reach-dash-accent" /> SUPPLY GUARANTEE
            </div>
            <h2 className="reach-manifesto-title">Reliable Supply</h2>
            <p className="reach-manifesto-body">
              We understand the critical role that steel plays in various industries and applications, and we 
              recognize the importance of reliability in meeting our customers' needs. Our commitment to providing a 
              reliable supply of top-quality steel products is rooted in our dedication to customer satisfaction and 
              our passion for contributing to the success of our customers' projects and businesses.
            </p>
          </div>
          <div className="reach-image-column">
            <div className="reach-image-frame">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80" 
                alt="Industrial steel supply stocks" 
                className="reach-split-img"
              />
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}

export default OurReach;