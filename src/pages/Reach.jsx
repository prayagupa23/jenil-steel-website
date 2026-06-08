import React from "react";
import Footer from "../components/Footer";
import "./Reach.css";
import jswLogo from "../assets/images/jsw-logo-jv.webp";
import rinlLogo from "../assets/images/Rashtriya_Ispat_Nigam.svg.png";
import tataLogo from "../assets/images/tata-steel-logo.png";

const logos = [jswLogo, rinlLogo, tataLogo];

function ClientsStrip() {
  return (
    <section className="clients-strip-services">
      <p className="clients-title-services">Companies We Work With</p>
      <div className="marquee-fade-container-services">
        <div className="marquee-track-services">
          <div className="marquee-content-services">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div className="client-logo-services" key={`${logo}-${idx}`}>
                <img src={logo} alt="Customer logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reach() {
  return (
    <div className="reach-page">
      {/* STANDARD HERO BANNER STYLE */}
      <section className="reach-hero">
        <div className="hero-bg-reach">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&q=80"
            alt="Global Logistics Hub"
            className="hero-bg-img-reach"
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
            Our Presence & <span className="hero-heading-accent-reach">Logistics</span>
          </h1>
        </div>
      </section>

      {/* MOLTEN DIVIDER SEGMENT */}
      <div className="molten-divider">
      </div>

      {/* MAIN TEXT SECTIONS SECTION */}
      <section className="reach-content-wrapper">
        
        {/* SECTION 1: FAST DELIVERY (Image Left, Content Right) */}
        <div className="reach-split-row animate-fade-up">
          <div className="reach-image-column">
            <div className="reach-image-frame">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" 
                alt="Fleet of delivery trucks" 
                className="reach-split-img"
              />
            </div>
            <div className="image-overlay"></div>
          </div>
          
          <div className="reach-text-column">
            <div className="reach-tag-line">
              <span className="reach-dash-accent" /> TIMELY LOGISTICS
            </div>
            <h2 className="reach-section-title">Fast Delivery</h2>
            <p className="reach-section-desc">
              We recognize the paramount importance of timely delivery and its impact on our customers' operations. 
              To ensure a seamless experience, we have meticulously built a strong fleet of delivery trucks, 
              equipped to handle various order sizes and specifications. Our commitment to exceptional customer service 
              extends to every aspect of our operations, including reliable and punctual deliveries.
            </p>
          </div>
        </div>

        {/* SECTION 2: RELIABLE SUPPLY (Content Left, Image Right) */}
        <div className="reach-split-row alternate-row animate-fade-up">
          <div className="reach-text-column">
            <div className="reach-tag-line">
              <span className="reach-dash-accent" /> INDUSTRIAL INTEGRITY
            </div>
            <h2 className="reach-section-title">Reliable Supply</h2>
            <p className="reach-section-desc">
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
                  alt="Industrial steel inventory structures" 
                  className="reach-split-img"
                />
              </div>
              <div className="image-overlay"></div>
            </div>
        </div>

      </section>
      <ClientsStrip/>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Reach;