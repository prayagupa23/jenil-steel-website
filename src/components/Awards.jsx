// Awards.jsx
import React from "react";
import "./Awards.css";

import award1 from "../assets/webp_awards/award1.webp";
import award2 from "../assets/webp_awards/award2.webp";
import award4 from "../assets/webp_awards/award4.webp";
import award5 from "../assets/webp_awards/award5.webp";
import award6 from "../assets/webp_awards/award6.webp";
import award7 from "../assets/webp_awards/award7.webp";
import award8 from "../assets/webp_awards/award8.webp";
import award17 from "../assets/webp_awards/award17.webp";
import award18 from "../assets/webp_awards/award18.webp";
import award19 from "../assets/webp_awards/award19.webp";
import award20 from "../assets/webp_awards/award20.webp";
import award21 from "../assets/webp_awards/award21.webp";
import award22 from "../assets/webp_awards/award22.webp";

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
                <img src={src} alt={`${label} received by Jenil Steel`} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
