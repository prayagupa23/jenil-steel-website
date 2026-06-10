import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/ourReach.mp4';
import jswLogo from '../assets/images/jsw-logo-jv.webp';
import rinlLogo from '../assets/images/Rashtriya_Ispat_Nigam.svg.png';
// import sailLogo '../assets/images/sail.png';
import tataLogo from '../assets/images/tata-steel-logo.png';
import legacyImage from '../assets/images/legacy.png';
import JenilAdvantage from '../components/JenilAdvantage';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import VideoTestimonials from '../components/VideoTestimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const stats = [
  { value: 75, suffix: '+', label: 'YEARS EXPERIENCE' },
  { value: 5000, suffix: '+', label: 'TRUSTED CUSTOMERS' },
  { value: 100, suffix: '', label: 'ISO QUALITY ASSURED' },
  { value: 1, suffix: '', label: 'INDIA NATIONWIDE REACH' },
];

const logos = [jswLogo, rinlLogo, tataLogo];

const legacyStats = [
  { value: 75, suffix: '+', label: 'YEARS IN INDUSTRY' },
  { value: 5000, suffix: '+', label: 'PROJECTS DELIVERED' },
  { value: 200, suffix: '+', label: 'ACTIVE CLIENTS' },
  { value: 12, suffix: '+', label: 'PRODUCT CATEGORIES' },
];

function Counter({ value, suffix, cycle }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const duration = 2000;
    let frameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [cycle, value]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

function Home() {
  const [countCycle, setCountCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountCycle((prev) => prev + 1);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleCommitmentMove = (event) => {
    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    element.style.setProperty('--commitment-x', `${x}%`);
    element.classList.add('is-active');
  };

  const handleCommitmentLeave = (event) => {
    event.currentTarget.classList.remove('is-active');
  };

  return (
    <main className="home-page">
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* <p className="hero-tagline">ESTABLISHED 1948</p> */}
          <h1>
            Trust.
            <br />
            Reliability.
            <br />
            <span
              className="commitment-interactive"
              onMouseMove={handleCommitmentMove}
              onMouseLeave={handleCommitmentLeave}
            >
              Commitment.
            </span>
          </h1>
          <p className="hero-subtext">
            Jenil Steel Pvt. Ltd. — your one stop steel solutions partner.
            Premium TMT bars, structural steel, and integrated solutions for
            construction that stands the test of time.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary btn-creative">
              <span>Explore Products</span>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="stats">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <h3>
              {item.label === 'INDIA NATIONWIDE REACH' ? (
                'India'
              ) : (
                <Counter
                  key={`${item.label}-${countCycle}`}
                  value={item.value}
                  suffix={item.suffix}
                  cycle={countCycle}
                />
              )}
            </h3>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="legacy-section">
        <div className="legacy-inner">
          <div className="legacy-content">
            <p className="legacy-eyebrow">LEGACY &amp; LEADERSHIP</p>
            <h2 className="legacy-heading">
              Forging Industrial Excellence Since 1948
            </h2>
            <p className="legacy-text">
              Founded on the principles of integrity and engineering excellence,
              Jenil Steel has evolved from a local trading house into a national
              steel powerhouse. Our legacy is built on precision engineering and
              long-term infrastructure partnerships.
            </p>
            <p className="legacy-text">
              Our mission remains unchanged: to provide the backbone of progress
              for the industries that shape our future.
            </p>
            <div className="legacy-stats-grid">
              {legacyStats.map((item) => (
                <article key={item.label} className="legacy-stat">
                  <h3>
                    <Counter
                      key={`legacy-${item.label}-${countCycle}`}
                      value={item.value}
                      suffix={item.suffix}
                      cycle={countCycle}
                    />
                  </h3>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="legacy-visual">
            <span className="legacy-corner legacy-corner-tl" aria-hidden="true" />
            <span className="legacy-corner legacy-corner-br" aria-hidden="true" />
            <div className="legacy-image-wrap">
              <img src={legacyImage} alt="Jenil Steel leadership in industrial facility" />
            </div>
          </div>
        </div>
      </section>
      
      <JenilAdvantage/>

      <section className="clients-strip">
        <p className="clients-title">Companies We Work With</p>
        
        {/* Add this wrapper to handle the left & right fade gradient */}
        <div className="marquee-fade-container">
          <div className="marquee-track">
            <div className="marquee-content">
              {[...logos, ...logos, ...logos].map((logo, idx) => (
                <div className="client-logo" key={`${logo}-${idx}`}>
                  <img src={logo} alt="Customer logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr className="custom-line" />
      <HowWeWork/>
      <Testimonials/>
      <VideoTestimonials/>
      <CTASection/>
      <Footer/>

    </main>
  );
}

export default Home;
