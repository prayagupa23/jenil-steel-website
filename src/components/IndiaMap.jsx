import React, { useState } from "react";
import "./IndiaMap.css";

// Precise coordinate charting mapping your required industrial hubs
const INDUSTRIAL_HUBS = [
  { name: "Mumbai", x: 140, y: 390, state: "Maharashtra" },
  { name: "Pune", x: 165, y: 415, state: "Maharashtra" },
  { name: "Ahmedabad", x: 125, y: 280, state: "Gujarat" },
  { name: "Surat", x: 130, y: 325, state: "Gujarat" },
  { name: "Vadodara", x: 140, y: 305, state: "Gujarat" },
  { name: "Delhi NCR", x: 235, y: 155, state: "Delhi Region" },
  { name: "Jaipur", x: 190, y: 195, state: "Rajasthan" },
  { name: "Indore", x: 210, y: 295, state: "Madhya Pradesh" },
  { name: "Raipur", x: 345, y: 340, state: "Chhattisgarh" },
  { name: "Bokaro", x: 440, y: 275, state: "Jharkhand" },
  { name: "Jamshedpur", x: 450, y: 295, state: "Jharkhand" },
  { name: "Rourkela", x: 415, y: 315, state: "Odisha" },
  { name: "Hyderabad", x: 265, y: 450, state: "Telangana" },
  { name: "Bengaluru", x: 230, y: 530, state: "Karnataka" },
  { name: "Chennai", x: 285, y: 535, state: "Tamil Nadu" },
  { name: "Kolkata", x: 485, y: 285, state: "West Bengal" }
];

function IndiaMap() {
  const [hoveredHub, setHoveredHub] = useState(null);

  return (
    <div className="industrial-map-box">
      <div className="map-hud-header">
        <span className="hud-indicator-dot"></span>
        <span className="hud-header-title">NATIONAL_SUPPLY_NETWORK_MATRIX</span>
      </div>

      <div className="svg-container">
        <svg viewBox="0 0 600 650" className="india-vector-svg">
          {/* Abstract background geographic path lines to represent landmass context */}
          <path 
            d="M 235 50 L 320 80 L 330 130 L 290 170 L 350 210 L 485 240 L 530 285 L 470 340 L 400 420 L 300 560 L 285 590 L 230 540 L 150 420 L 110 320 L 90 270 L 150 200 Z" 
            className="map-base-landmass"
          />

          {/* Integrated industrial network grid lines interconnecting major centers */}
          <g className="map-grid-pipelines">
            <line x1="125" y1="280" x2="140" y2="390" className="pipeline-link" /> {/* Ahmedabad - Mumbai */}
            <line x1="140" y1="390" x2="165" y2="415" className="pipeline-link" /> {/* Mumbai - Pune */}
            <line x1="125" y1="280" x2="235" y2="155" className="pipeline-link" /> {/* Ahmedabad - Delhi */}
            <line x1="235" y1="155" x2="190" y2="195" className="pipeline-link" /> {/* Delhi - Jaipur */}
            <line x1="450" y1="295" x2="485" y2="285" className="pipeline-link" /> {/* Jamshedpur - Kolkata */}
            <line x1="265" y1="450" x2="230" y2="530" className="pipeline-link" /> {/* Hyderabad - Bengaluru */}
            <line x1="230" y1="530" x2="285" y2="535" className="pipeline-link" /> {/* Bengaluru - Chennai */}
          </g>

          {/* Render all interactive industrial hub nodes */}
          {INDUSTRIAL_HUBS.map((hub) => (
            <g 
              key={hub.name}
              className={`map-hub-node ${hoveredHub?.name === hub.name ? "is-hovered" : ""}`}
              onMouseEnter={() => setHoveredHub(hub)}
              onMouseLeave={() => setHoveredHub(null)}
              transform={`translate(${hub.x}, ${hub.y})`}
            >
              {/* Pulsing ring animation layer */}
              <circle cx="0" cy="0" r="10" className="node-radar-pulse" />
              {/* Solid core center anchor point */}
              <circle cx="0" cy="0" r="4.5" className="node-core-dot" />
              
              {/* Hub Label Typography */}
              <text x="10" y="4" className="node-text-label">
                {hub.name}
              </text>
            </g>
          ))}
        </svg>

        {/* Dynamic Data Readout Panel Footnote */}
        <div className="map-readout-terminal">
          {hoveredHub ? (
            <p>
              TERMINAL // NODE: <strong className="txt-orange">{hoveredHub.name.toUpperCase()}</strong> HUB | REGION: <span className="txt-white">{hoveredHub.state.toUpperCase()}</span>
            </p>
          ) : (
            <p>TERMINAL // HOVER OVER AN INDUSTRIAL NODE TO INITIALIZE DATA SUPPLY READOUT</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default IndiaMap;