// Awards.jsx
import React from "react";
import "./Awards.css";

import award1 from "../assets/awards/award1.png";
import award2 from "../assets/awards/award2.png";
import award4 from "../assets/awards/award4.png";
import award5 from "../assets/awards/award5.png";
import award6 from "../assets/awards/award6.png";
import award7 from "../assets/awards/award7.png";
import award8 from "../assets/awards/award8.png";
import award17 from "../assets/awards/award17.png";
import award18 from "../assets/awards/award18.png";
import award19 from "../assets/awards/award19.png";
import award20 from "../assets/awards/award20.png";
import award21 from "../assets/awards/award21.png";
import award22 from "../assets/awards/award22.png";

const DEFAULT_AWARDS = [
  award1,
  award2,
  award4,
  award5,
  award6,
  award7,
  award8,
  award17,
  award18,
  award19,
  award20,
  award21,
  award22,
];

export default function Awards({
  label = "RECOGNITION",
  title = "Awards & Recognition.",
  description = "Our commitment to quality and excellence has been recognized through various awards and industry achievements over the years.",
  images = DEFAULT_AWARDS,
}) {
  return (
    <section className="awards-section" id="awards">
      <div className="awards-header">
        <span className="awards-label">{label}</span>
        <h2 className="awards-heading">
          {title.split(" & ")[0]} &amp;{" "}
          <span className="awards-accent">{title.split(" & ")[1]}</span>
        </h2>
        <p className="awards-desc">{description}</p>
      </div>

      <div className="awards-marquee-fade">
        <div className="awards-marquee-track">
          <div className="awards-marquee-content">
            {[...images, ...images].map((src, idx) => (
              <figure
                className="awards-item"
                key={`${idx}`}
                aria-hidden={idx >= images.length ? "true" : undefined}
              >
                <img src={src} alt={`${label} received by Jenil Steel`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
