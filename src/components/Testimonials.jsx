import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sanjay Agarwal",
    role: "EVP at JSW Steel",
    avatar: "https://jenilsteel.com/images/sanjay-agarwal-p-500.jpg",
    text: "It has been a rewarding association between JSW Steel Ltd and Ms. Jenil Steel Pvt. Ltd. over the past 10 years. We value reliable, genuine, and transparent business partnerships, and are proud to have Jenil Steel as a trusted partner supporting our vision of contributing to India's growth story.",
  },
  {
    id: 2,
    name: "Ashit Patni",
    role: "CMO of ESL Steel Limited",
    avatar: "https://jenilsteel.com/images/ashit-patni-closeup.png",
    text: "Working with Mr. Jenil Mehta/Jenil Steel Pvt. Ltd. has been a great experience. Their unwavering support and commitment to excellence has helped this partnership grow and reach newer heights. I thank them for being an invaluable partner in this inspiring journey towards transforming for good.",
  },
  {
    id: 3,
    name: "N.P Venkatesan",
    role: "Chief Marketing & Sales at Tata Steel Long Products",
    avatar: "https://t4.ftcdn.net/jpg/11/68/50/57/360_F_1168505794_IBCEiafsIrHFJ09e65P2vh5115C1XI7e.jpg",
    text: "Jenil Steel is associated with us for more than 15 years. They are ethical when it comes to business dealings and always honor their commitments.",
  },
  {
    id: 4,
    name: "Rajesh Bhatt",
    role: "Civil Contractor, Ahmedabad",
    avatar: "https://t4.ftcdn.net/jpg/11/68/50/57/360_F_1168505794_IBCEiafsIrHFJ09e65P2vh5115C1XI7e.jpg",
    text: "Jenil Steel has been our go-to supplier for 8 years. Quality consistent, rates competitive, delivery always on time.",
  },
  {
    id: 5,
    name: "Mehul Patel",
    role: "Project Manager, Vadodara",
    avatar: "https://t4.ftcdn.net/jpg/11/68/50/57/360_F_1168505794_IBCEiafsIrHFJ09e65P2vh5115C1XI7e.jpg",
    text: "500 MT needed urgently. Delivered within 48 hours with all test certificates. Unmatched commitment.",
  },
  {
    id: 6,
    name: "Anita Shah",
    role: "Architect, Surat",
    avatar: "https://t4.ftcdn.net/jpg/11/68/50/57/360_F_1168505794_IBCEiafsIrHFJ09e65P2vh5115C1XI7e.jpg",
    text: "I recommend Jenil Steel to all my clients. Product knowledge, transparent billing, and support stand out.",
  },
];

function getVisibleCount() {
  const w = window.innerWidth;

  if (w <= 420) return 1;
  if (w <= 960) return 2;

  return 3;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  const intervalRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
  };

  useEffect(() => {
    startAutoPlay();

    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (index) => {
    setCurrentIndex(index);
    startAutoPlay();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      goTo((currentIndex + 1) % testimonials.length);
    } else {
      goTo(
        (currentIndex - 1 + testimonials.length) %
          testimonials.length
      );
    }
  };

  const getVisible = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      return testimonials[
        (currentIndex + i) % testimonials.length
      ];
    });
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="line"></span>

        <span className="testimonials-label">
          TESTIMONIALS
        </span>

        <h2 className="testimonials-title">
          Hear it from our{" "}
          <span className="highlight-partners">
            partners.
          </span>
        </h2>
      </div>

      <div
        className="testimonials-track"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {getVisible().map((t, i) => (
          <div
            className="testimonial-card"
            key={`${t.id}-${currentIndex}-${i}`}
          >
            <div className="card-top">
              <img
                src={t.avatar}
                alt={t.name}
                className="avatar"
              />
            </div>

            <p className="card-text">
              "{t.text}"
            </p>

            <div className="card-footer">
              <span className="card-name">
                {t.name}
              </span>

              <span className="card-role">
                {t.role}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`dot ${
              i === currentIndex ? "active" : ""
            }`}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}