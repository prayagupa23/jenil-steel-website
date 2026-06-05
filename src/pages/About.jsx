// About.jsx

import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import jswLogo from "../assets/images/jsw-logo-jv.webp";
import rinlLogo from "../assets/images/Rashtriya_Ispat_Nigam.svg.png";
import tataLogo from "../assets/images/tata-steel-logo.png";
import "./About.css";
import about1 from '../assets/images/about1.png';
import { useInView as useInViewObs } from "react-intersection-observer";
import { motion } from "framer-motion";

const logos = [jswLogo, rinlLogo, tataLogo];

/* ─── DATA ARRAYS ─── */
const VALUES = [
  {
    icon: '◈',
    title: 'Our Mission',
    desc: 'To provide the highest quality steel products at competitive prices with unmatched service.',
  },
  {
    icon: '◈',
    title: 'Our Vision',
    desc: 'To be the most trusted steel partner in India, known for quality, reliability, and innovation.',
  },
  {
    icon: '◈',
    title: 'Our Values',
    desc: 'Trust, Reliability, and Commitment — the three pillars since 1948.',
  },
  {
    icon: '◈',
    title: 'Trust',
    desc: 'For over two decades, we have built lasting relationships founded on trust and reliability.',
  },
];

const MILESTONES = [
  { year: '1948', title: 'The Foundation', desc: 'The founding family began their journey in the steel trade, establishing roots of trust and reliability.' },
  { year: '2005', title: 'Jenil Steel Founded', desc: 'Jenil Steel Pvt. Ltd. was formally established, carrying forward the legacy into a new era of growth.' },
  { year: '2013', title: 'BIS Certification', desc: 'Achieved BIS certification. Expanded to structural steel, channels, and angles.' },
  { year: '2016', title: 'Major Expansion', desc: '50,000 sq. ft. warehouse, in-house testing lab, weigh bridge, and own delivery fleet.' },
  { year: '2020', title: 'Pvt. Ltd. Incorporation', desc: 'Incorporated as Pvt. Ltd. Crossed 25,000 MT annual sales.' },
  { year: '2024', title: 'Industry Leader', desc: '50,000+ MT capacity, 2,500+ projects, 500+ clients across Gujarat.' }
];

const TEAM_MEMBERS = [
  { id: 0, name: 'Chandresh T Mehta', role: 'Director', details: 'With an expertise of over five decades, Chandresh Mehta has played a pivotal role in driving significant growth, expanding the business by a remarkable fourfold. His exceptional leadership ensures effective utilization of resources, fostering continuous growth and success.', image: 'https://z-cdn-media.chatglm.cn/files/3cbf4b2b-546b-4f91-b7b1-22c398497641.jpg?auth_key=1880034665-bd94b6957e4040d98f5c1c1a516cde6c-0-37231e8e7dccd69cb7a3e40934baaf00' },
  { id: 1, name: 'Bhavnesh J Doshi', role: 'Director', details: 'Leveraging his extensive four-decade experience, Bhavnesh Doshi plays a pivotal role in strategically orchestrating financial activities. He constructively challenges our commercial team, ensuring insightful decision-making.', image: 'https://z-cdn-media.chatglm.cn/files/e50c6d72-4850-4580-b5e4-1ad39c82e34e.jpg?auth_key=1880034665-ec18cd8f390c4ef2aa9044ce59de0157-0-599eed35849935ffa174203a822e3989' },
  { id: 2, name: 'Drashti B Doshi', role: 'Business Strategy Manager', details: 'With a Masters from UK and 6 years in Wealth Management, Drashti excels at creating strategies aligned with company goals and identifying growth opportunities.', image: 'https://z-cdn-media.chatglm.cn/files/09c1192f-8b28-4c6d-b311-c47fe5d6980b.jpg?auth_key=1880034665-22a4ef8c883f4452a32b351e7476c56e-0-af8805c007a5f77d807c60acb4121e04' },
  { id: 3, name: 'Jenil C Mehta', role: 'Business Head', details: 'A forward-thinking entrepreneur with two decades of experience, Jenil transforms the company\'s vision into reality. He holds an Executive FMBA from SP Jain Mumbai.', image: 'https://z-cdn-media.chatglm.cn/files/07cb192e-58a9-47fa-92e5-0e15f6871092.jpg?auth_key=1880034665-992da53f92cd45c1ae7caac4c806c99e-0-3f0f564dd67c17700bbed1b512c0fcc1' }
];

/* ─── ANIMATED GRID BACKGROUND ─── */
function BlueprintGrid() {
  return (
    <div className="blueprint-grid-about" aria-hidden="true">
      <div className="grid-inner-about" />
    </div>
  );
}

/* ─── COUNT-UP FUNCTIONALITY ─── */
function AnimatedCounter({ end, duration = 2 }) {
  const { ref, inView } = useInViewObs({
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

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

/* ─── HERO SECTION ─── */
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

      <BlueprintGrid />

      <div className="hero-content-about">
        <nav className="hero-breadcrumbs-about">
          <a href="/" className="breadcrumb-link-about">
            <svg className="breadcrumb-home-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Home
          </a>
          <span className="breadcrumb-separator-about">|</span>
          <span className="breadcrumb-current-about">About</span>
        </nav>
        <h1 className="hero-heading-about">
          ABOUT <span className="hero-heading-accent-about">US</span>
        </h1>
      </div>
    </section>
  );
}

/* ─── ABOUT CONTENT SECTION ─── */
function AboutContent() {
  const { ref, inView } = useInViewObs({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="about-section-about" ref={ref}>
      <BlueprintGrid />

      <div className="about-container-about">
        <div className="about-left-about">
          <div className="section-label-about">
            <span className="label-line-about" style={{ width: inView ? '40px' : '0px', transition: 'width 0.8s ease' }} />
            WHO WE ARE
          </div>

          <h2 className="about-heading-about">
            Our commitment<br />
            <span className="accent-text-about">to excellence.</span>
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
              <img src={about1} alt="Steel warehouse" />
              <div className="img-overlay-about" />
            </div>
          </div>

          <div className="stats-row-about">
            <div className="stat-card-about">
              <span className="stat-number-about"><AnimatedCounter end={18} />+</span>
              <span className="stat-label-about">Years Experience</span>
            </div>
            <div className="stat-card-about">
              <span className="stat-number-about"><AnimatedCounter end={50000} duration={3} />+</span>
              <span className="stat-label-about">MT Capacity</span>
            </div>
            <div className="stat-card-about">
              <span className="stat-number-about"><AnimatedCounter end={2500} duration={2.5} />+</span>
              <span className="stat-label-about">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── VALUES SECTION ─── */
function ValueCard({ value, index, inView }) {
  return (
    <motion.div
      className="value-card-about"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
    >
      <div className="card-shine-about" aria-hidden="true" />
      <div className="card-glow-about" aria-hidden="true" />
      <span className="card-icon-about">{value.icon}</span>
      <div className="card-accent-line-about" />
      <h3 className="card-title-about">{value.title}</h3>
      <p className="card-desc-about">{value.desc}</p>
      <div className="card-corner-about card-corner--tl-about" />
      <div className="card-corner-about card-corner--br-about" />
    </motion.div>
  );
}

function ValuesSection() {
  const [ref, inView] = useInViewObs({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="values-section-about" ref={ref}>
      <BlueprintGrid />
      <div className="section-header-about">
        <div className="section-label-about centered-about">
          <span className="label-line-about" style={{ width: inView ? '40px' : '0px', transition: 'width 0.8s ease 0.2s' }} />
          OUR VALUES
          <span className="label-line-about" style={{ width: inView ? '40px' : '0px', transition: 'width 0.8s ease 0.2s' }} />
        </div>

        <h2 className="section-heading-about">
          Our Mission. <span className="accent-text-about">Our Vision.</span>
        </h2>
      </div>

      <div className="values-grid-about">
        {VALUES.map((v, i) => (
          <ValueCard key={v.title} value={v} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}

/* ─── TIMELINE SECTION (HORIZONTAL TRACK) ─── */
function TimelineSection() {
  const { ref, inView } = useInViewObs({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="timeline-section-about-hz" ref={ref}>
      <BlueprintGrid />
      <div className="section-header-about">
        <div className="section-label-about centered-about">
          <span className="label-line-about" style={{ width: inView ? '40px' : '0px', transition: 'width 0.8s ease' }} />
          OUR JOURNEY
          <span className="label-line-about" style={{ width: inView ? '40px' : '0px', transition: 'width 0.8s ease' }} />
        </div>
        <h2 className="section-heading-about">
          Milestones of <span className="accent-text-about">Our Legacy.</span>
        </h2>
      </div>

      <div className="timeline-hz-wrapper">
        <div className="timeline-hz-track">
          <div className="timeline-hz-spine" style={{ transform: inView ? 'scaleX(1)' : 'scaleX(0)' }} />
          
          {MILESTONES.map((item) => (
            <div key={item.year} className="timeline-hz-item">
              <div className="timeline-hz-node-box">
                <div className="timeline-hz-node">
                  <span className="node-inner-about" />
                </div>
              </div>
              <div className="timeline-hz-content">
                <span className="timeline-hz-year">{item.year}</span>
                <h3 className="timeline-hz-title">{item.title}</h3>
                <p className="timeline-hz-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TEAM SECTION (5S CYCLING AUTOMATIC HOVER) ─── */
function TeamSection() {
  const { ref, inView } = useInViewObs({ threshold: 0.1, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="team-section-about" ref={ref}>
      <BlueprintGrid />
      <div className="section-header-about">
        <div className="section-label-about centered-about">
          <span className="label-line-about" style={{ width: inView ? '40px' : '0px', transition: 'width 0.8s ease' }} />
          OUR TEAM
          <span className="label-line-about" style={{ width: inView ? '40px' : '0px', transition: 'width 0.8s ease' }} />
        </div>
        <h2 className="section-heading-about">
          Expert Team Building <span className="accent-text-about">Industrial Excellence.</span>
        </h2>
      </div>

      <div 
        className="team-grid-about"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setActiveIndex(-1);
        }}
      >
        {TEAM_MEMBERS.map((member, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div 
              key={member.id} 
              className={`team-card-about ${isActive ? 'force-hover' : ''}`}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <div className="team-card-img-wrapper">
                <img src={member.image} alt={member.name} />
                <div className="team-card-overlay-gradient" />
              </div>

              <div className="team-card-info">
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-role">{member.role}</p>
                
                <div className="team-card-details-drawer">
                  <p className="team-card-details-text">{member.details}</p>
                </div>
              </div>
              <div className="team-card-bracket-tr" />
              <div className="team-card-bracket-bl" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── CLIENTS MARQUEE STRIP ─── */
function ClientsStrip() {
  return (
    <section className="clients-strip-about">
      <p className="clients-title-about">Companies We Work With</p>
      <div className="marquee-fade-container-about">
        <div className="marquee-track-about">
          <div className="marquee-content-about">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div className="client-logo-about" key={`${logo}-${idx}`}>
                <img src={logo} alt="Customer logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── MAIN COMPONENT PAGE LAYOUT ─── */
export default function About() {
  return (
    <div className="about-page">
      <HeroSection />
      <AboutContent />
      <ValuesSection />
      <TimelineSection />
      <ClientsStrip />
      <TeamSection />
      <Footer />
    </div>
  );
}