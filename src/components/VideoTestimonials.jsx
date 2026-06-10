import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react'; // Added Play icon back
import './VideoTestimonials.css';
import videoTestimonials from '../assets/videoTestimonial1.mp4';

import bedmuthaLogo from '../assets/images/bedmutha.png'; 

const VideoTestimonials = () => {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const dataset = [
    {
      id: 1,
      videoThumbnail: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
      quote: "I will rate Jenil Steel with all 5 stars for their integrity, dedication, sensitivity towards customer requirement and transparency. They have been our supplier since 1988 and they not only supply raw materials but also help us with industry insights and updates.",
      name: "Vijay Bedmutha",
      designation: "CMD, Bedmutha Industries Ltd",
      logo: bedmuthaLogo, 
      trustBadge: "TRUSTED PARTNER SINCE 1988",
      bgWatermark: "INTEGRITY"
    },
    {
      id: 2,
      videoThumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
      quote: "An exceptional partner in our infrastructure journey. Their adherence to international quality protocols combined with direct mill-floor billing transacts into unmatched transparency on high-volume structural lots.",
      name: "A. K. Srivastava",
      designation: "Director of Procurement",
      logo: bedmuthaLogo,
      trustBadge: "15+ YEARS REGULAR ASSOCIATION",
      bgWatermark: "PARTNERSHIP"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = dataset[currentIndex];

  React.useEffect(() => {
    setIsPlaying(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [currentIndex]);  

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === dataset.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? dataset.length - 1 : prev - 1));
  };

  return (
    <section className="b2b-testimonial-section">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.bgWatermark}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.03, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-giant-watermark"
        >
          {current.bgWatermark}
        </motion.div>
      </AnimatePresence>

      <div className="b2b-container">
        <div className="b2b-header-wrapper">
          <span className="b2b-label-line"></span>
          <span className="b2b-section-label">HEAR FROM OUR CUSTOMERS</span>
        </div>

        <div className="b2b-split-grid">
          
          {/* =========================================================
             LEFT NODE: VIDEO CARD CONTAINER (With Play Buttons Restored)
             ========================================================= */}
          <div className="b2b-video-column">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="video-box-card group"
              >
                <video
                  className="video-media-asset"
                  src={videoTestimonials}
                  controls
                  preload="metadata"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ==========================================
             RIGHT NODE: EDITORIAL DETAILS
             ========================================== */}
          <div className="b2b-content-column">
            <div className="structural-quote-mark">“</div>
            <div className="content-fluid-flow">
              
              <div className="rating-star-cluster">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-element-vector" fill="currentColor" />
                ))}
              </div>

              <div className="quote-text-viewport-box">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    className="b2b-quote-paragraph"
                  >
                    “{current.quote}”
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="badge-row-housing">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentIndex}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    className="premium-industrial-badge"
                  >
                    <span className="badge-steel-dot"></span>
                    <span className="badge-text-string">{current.trustBadge}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="b2b-corporate-footer-row">
                <AnimatePresence mode="wait">
                  <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="meta-identity-card">
                    <h4 className="meta-user-name">{current.name}</h4>
                    <p className="meta-user-role">{current.designation}</p>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div key={currentIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="corporate-logo-frame">
                    <img src={current.logo} alt="Corporate Entity Verification" className="b2b-logo-img" />
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            <div className="b2b-navigation-control-deck">
              <div className="arrows-cluster">
                <button onClick={handlePrev} className="nav-arrow-trigger"><ChevronLeft /></button>
                <button onClick={handleNext} className="nav-arrow-trigger"><ChevronRight /></button>
              </div>

              <div className="timeline-dots-rail">
                {dataset.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`timeline-dot ${dotIdx === currentIndex ? 'active-dot' : ''}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;