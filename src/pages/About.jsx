// About.jsx

import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import jswLogo from "../assets/images/jsw-logo-jv.webp";
import rinlLogo from "../assets/images/Rashtriya_Ispat_Nigam.svg.png";
import tataLogo from "../assets/images/tata-steel-logo.png";
import "./About.css";
import about1 from '../assets/images/about1.png';
import { useInView } from "react-intersection-observer";

const logos = [jswLogo, rinlLogo, tataLogo];

function AnimatedCounter({ end, duration = 2 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const durationMs = duration * 1000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const currentCount = Math.min(
        Math.floor((progress / durationMs) * end),
        end
      );

      setCount(currentCount);

      if (progress < durationMs) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  const formattedCount = count.toLocaleString();

  return <span ref={ref}>{formattedCount}</span>;
}

function HeroSection() {
  return (
    <section className="hero-section-about">
      <div className="hero-bg-about">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1800&q=80"
          alt="Steel factory"
          className="hero-bg-img-about"
        />
        <div className="hero-overlay-about" />
      </div>

      <div className="blueprint-grid-about">
        <div className="grid-inner-about" />
      </div>

      <div className="hero-content-about">
        <nav className="hero-breadcrumbs-about">
          <a href="/" className="breadcrumb-link-about">
            <svg 
              className="breadcrumb-home-svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg> Home
          </a>
          <span className="breadcrumb-separator-about">|</span>
          <span className="breadcrumb-current-about">About</span>
        </nav>        
        <h1 className="hero-heading-about">
          ABOUT
          <span className="hero-heading-accent-about">
            US
          </span>
        </h1>
      </div>
    </section>
  );
}

function AboutContent() {
  return (
    <section className="about-section-about">
      <div className="blueprint-grid-about">
        <div className="grid-inner-about" />
      </div>

      <div className="about-container-about">
        <div className="about-left-about">
          <div className="section-label-about">
            <span className="label-line-about" />
            WHO WE ARE
          </div>

          <h2 className="about-heading-about">
            Our commitment
            <br />
            <span className="accent-text-about">
              to excellence.
            </span>
          </h2>

          <p className="about-body-about">
            Since 1948, our family has been delivering trust through steel. Jenil Steel Pvt. Ltd. carries forward a legacy of quality, transparency, and customer satisfaction that has been the cornerstone of our journey for over seven decades.
          </p>

          <p className="about-body-about">
            We specialize in TMT bars, structural steel, MS angles, channels, beams, and a comprehensive range of steel products. With a state-of-the-art warehousing facility spanning over 50,000 sq. ft. and a dedicated logistics network, we ensure timely delivery across the region.
          </p>

          <div className="about-divider-about" />
        </div>

        <div className="about-right-about">
          <div className="about-img-primary-about">
            <div className="img-inner-wrapper">
              <img
                src={about1}
                alt="Steel warehouse"
              />
              <div className="img-overlay-about" />
            </div>
          </div>

          <div className="stats-row-about">
            <div className="stat-card-about">
              <span className="stat-number-about">
                <AnimatedCounter end={18} />+
              </span>
              <span className="stat-label-about">
                Years Experience
              </span>
            </div>

            <div className="stat-card-about">
              <span className="stat-number-about">
                <AnimatedCounter
                  end={50000}
                  duration={3}
                />
                +
              </span>
              <span className="stat-label-about">
                MT Capacity
              </span>
            </div>

            <div className="stat-card-about">
              <span className="stat-number-about">
                <AnimatedCounter
                  end={2500}
                  duration={2.5}
                />
                +
              </span>
              <span className="stat-label-about">
                Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsStrip() {
  return (
    <section className="clients-strip-about">
      <p className="clients-title-about">
        Companies We Work With
      </p>

      <div className="marquee-fade-container-about">
        <div className="marquee-track-about">
          <div className="marquee-content-about">
            {[...logos, ...logos, ...logos].map(
              (logo, idx) => (
                <div
                  className="client-logo-about"
                  key={`${logo}-${idx}`}
                >
                  <img
                    src={logo}
                    alt="Customer logo"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <HeroSection />
      <AboutContent />
      <ClientsStrip />
      <Footer />
    </div>
  );
}