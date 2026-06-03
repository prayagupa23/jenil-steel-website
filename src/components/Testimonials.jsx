import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    { 
      id: 0, 
      text: "It has been a rewarding association between JSW Steel Ltd and Ms. Jenil Steel Pvt. Ltd. over the past 10 years. We value reliable, genuine, and transparent business partnerships, and are proud to have Jenil Steel as a trusted partner supporting our vision of contributing to India's growth story.", 
      author: "Sanjay Agarwal",
      avatar: "https://jenilsteel.com/images/sanjay-agarwal-p-500.jpg" // Executive profile placeholder
    },
    { 
      id: 1, 
      text: "Working with Mr. Jenil Mehta/Jenil Steel Pvt. Ltd. has been a great experience. Their unwavering support and commitment to excellence has helped this partnership grow and reach newer heights. I thank them for being an invaluable partner in this inspiring journey towards transforming for good.", 
      author: "Ashit Patni",
      avatar: "https://jenilsteel.com/images/ashit-patni-closeup.png"
    },
    { 
      id: 2, 
      text: "Jenil steel is associated with us for more than 15 years. They are ethical when it comes to business dealings and always honor their commitments.", 
      author: "N.P Venkatesan",
      avatar: ""
    },
    { 
      id: 3, 
      text: "Jenil Steel has been our go-to supplier for 8 years. Quality consistent, rates competitive, delivery always on time.", 
      author: "Rajesh Bhatt",
      avatar: "" // Left blank intentionally - will display initials fallback: "RB"
    },
    { 
      id: 4, 
      text: "500 MT needed urgently. Delivered within 48 hours with all test certificates. Unmatched commitment.", 
      author: "Mehul Patel",
      avatar: "" // Left blank intentionally - will display initials fallback: "MP"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Starts cleanly at the first major JSW quote
  const carouselRef = useRef(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoScrollTimer = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(autoScrollTimer);
  }, [activeIndex]); 

  // Generates fallback text initials for slides without photo URLs
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        
        <div className="section-header">
          <div className="sub-title-wrapper">
            <span className="line"></span>
            <span className="sub-title">TESTIMONIALS</span>
          </div>
        </div>

        <div className="carousel-outer-wrapper">
          
          <button onClick={handlePrev} className="scroll-btn prev" aria-label="Previous testimonial">❮</button>
          
          <ul className="carousel" ref={carouselRef}>
            {testimonialsData.map((item, index) => {
              const isSnapped = index === activeIndex;
              return (
                <li 
                  key={item.id} 
                  className={`carousel-item ${isSnapped ? 'snapped' : 'not-snapped'}`}
                >
                  <div className="item-content-box">
                    
                    {/* Circle Image Frame Container */}
                    <div className="avatar-wrapper">
                      {item.avatar ? (
                        <img 
                          src={item.avatar} 
                          alt={`${item.author} profile`} 
                          className="avatar-img"
                        />
                      ) : (
                        <div className="avatar-placeholder">
                          {getInitials(item.author)}
                        </div>
                      )}
                    </div>

                    <p className="quote-paragraph">“{item.text}”</p>
                    <cite className="author-citation">— {item.author}</cite>
                  </div>
                </li>
              );
            })}
          </ul>

          <button onClick={handleNext} className="scroll-btn next" aria-label="Next testimonial">❯</button>

          {/* Dots Navigation Trail */}
          <div className="scroll-marker-group-surrogate">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`scroll-marker-dot ${index === activeIndex ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;