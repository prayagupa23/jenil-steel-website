import { useState, useEffect, useRef } from "react";
import "./CTASection.css";

function CTASection() {

  const [isInside, setIsInside] = useState(false);
  const sectionRef = useRef(null);
  const [hasMoved, setHasMoved] = useState(false);

  // cursor
  const [mousePos, setMousePos] = useState({
      x: 0,
      y: 0,
  });

  const [hoveringButton, setHoveringButton] = useState(false);

  //cursor effects inside the CTA section only
  useEffect(() => {
    const section = sectionRef.current;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      setHasMoved(true);
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []); 

  return (
    <section className="cta-section" ref={sectionRef}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >      
      {/* Grid Background */}
        <div
        className="grid-canvas"
        style={{
          backgroundImage: hasMoved && isInside
            ? `
              radial-gradient(
                circle at ${mousePos.x}px ${mousePos.y}px,
                rgba(234,88,255,.25) 0px,
                transparent 180px
              ),
              linear-gradient(
                to right,
                rgba(26,36,58,.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(26,36,58,.5) 1px,
                transparent 1px
              )
            `
            : `
              linear-gradient(
                to right,
                rgba(26,36,58,.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(26,36,58,.5) 1px,
                transparent 1px
              )
            `,
        }}
        ></div>

      {/* Cursor Effects */}
      {
        isInside && (
          <>
            <div
              className="cursor-glow"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
              }}
            />

            <div
              className={`custom-cursor ${
                hoveringButton ? "cursor-expanded" : ""
              }`}
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
              }}
            />
          </>
        )
      }

      {/* Neon Tube */}
      <div className="neon-wrapper">
        <div className="neon-tube"></div>
        <div className="neon-tube-glow"></div>
      </div>

      {/* Main Content */}
      <main className="cta-content">
        <h2 className="cta-title">
          LET'S BUILD SOMETHING STRONG TOGETHER
        </h2>

        <p className="cta-description">
          Get instant quotes, bulk pricing, and expert consultation.
        </p>

        <div className="cta-buttons">
        <button
        className="quote-btn"
        onMouseEnter={() => setHoveringButton(true)}
        onMouseLeave={() => setHoveringButton(false)}
        >
        REQUEST A QUOTE →
        </button>

        <button
        className="call-btn"
        onMouseEnter={() => setHoveringButton(true)}
        onMouseLeave={() => setHoveringButton(false)}
        >
        CALL NOW
        </button>
        </div>
      </main>
    </section>
  );
}

export default CTASection;