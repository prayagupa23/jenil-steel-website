import React from 'react';
import './Awards.css';

export default function AwardsSection() {
    return (
        <section id="trophy-marquee-section-awards">
            <div className="trophy-bg-particles-awards"></div>
            
            {/* Section Header */}
            <div className="trophy-header-container-awards">
                <span className="trophy-subtitle-awards">RECOGNITION OF EXCELLENCE</span>
                <h2 className="trophy-title-awards">OUR ACCOLADES & MILESTONES</h2>
                <div className="trophy-accent-line-awards"></div>
            </div>

            {/* Infinite Marquee Track Container */}
            <div className="marquee-viewport-awards">
                <div className="marquee-track-awards">
                    
                    {/* Original Set of Awards */}
                    <div className="trophy-item-card-awards">
                        <div className="trophy-display-circle-awards">
                            <div className="ring-glow-effect-awards"></div>
                            <img src="assets/award1.png" alt="Award Trophy" className="trophy-img-awards" />
                        </div>
                        <h3 className="trophy-name-awards">Best Channel Partner</h3>
                        <p className="trophy-desc-awards">JSW Primary Distribution</p>
                    </div>

                    <div className="trophy-item-card-awards">
                        <div className="trophy-display-circle-awards">
                            <div className="ring-glow-effect-awards"></div>
                            <img src="assets/award2.png" alt="Award Trophy" className="trophy-img-awards" />
                        </div>
                        <h3 className="trophy-name-awards">Excellence in Logistics</h3>
                        <p className="trophy-desc-awards">Maharashtra Infrastructure</p>
                    </div>

                    <div className="trophy-item-card-awards">
                        <div className="trophy-display-circle-awards">
                            <div className="ring-glow-effect-awards"></div>
                            <img src="assets/award3.png" alt="Award Trophy" className="trophy-img-awards" />
                        </div>
                        <h3 className="trophy-name-awards">Industry Pioneer Award</h3>
                        <p className="trophy-desc-awards">83 Years of Legacy</p>
                    </div>

                    <div className="trophy-item-card-awards">
                        <div className="trophy-display-circle-awards">
                            <div className="ring-glow-effect-awards"></div>
                            <img src="assets/award4.png" alt="Award Trophy" className="trophy-img-awards" />
                        </div>
                        <h3 className="trophy-name-awards">Quality Leadership</h3>
                        <p className="trophy-desc-awards">Structural Safety Standard</p>
                    </div>

                    <div className="trophy-item-card-awards">
                        <div className="trophy-display-circle-awards">
                            <div className="ring-glow-effect-awards"></div>
                            <img src="assets/award5.png" alt="Award Trophy" className="trophy-img-awards" />
                        </div>
                        <h3 className="trophy-name-awards">Trust & Integrity Award</h3>
                        <p className="trophy-desc-awards">Wholesale Procurement</p>
                    </div>

                    {/* Seamless Duplicate Set for Infinite Loop Loopback */}
                    <div className="trophy-item-card-awards" aria-hidden="true">
                        <div className="trophy-display-circle-awards">
                            <div className="ring-glow-effect-awards"></div>
                            <img src="assets/award1.png" alt="" className="trophy-img-awards" />
                        </div>
                        <h3 className="trophy-name-awards">Best Channel Partner</h3>
                        <p className="trophy-desc-awards">JSW Primary Distribution</p>
                    </div>

                    <div className="trophy-item-card-awards" aria-hidden="true">
                        <div className="trophy-display-circle-awards">
                            <div className="ring-glow-effect-awards"></div>
                            <img src="assets/award2.png" alt="" className="trophy-img-awards" />
                        </div>
                        <h3 className="trophy-name-awards">Excellence in Logistics</h3>
                        <p className="trophy-desc-awards">Maharashtra Infrastructure</p>
                    </div>

                    <div className="trophy-item-card-awards" aria-hidden="true">
                        <div className="trophy-display-circle-awards">
                            <div className="ring-glow-effect-awards"></div>
                            <img src="assets/award3.png" alt="" className="trophy-img-awards" />
                        </div>
                        <h3 className="trophy-name-awards">Industry Pioneer Award</h3>
                        <p className="trophy-desc-awards">83 Years of Legacy</p>
                    </div>

                    <div className="trophy-item-card-awards" aria-hidden="true">
                        <div className="trophy-display-circle-awards">
                            <div className="ring-glow-effect-awards"></div>
                            <img src="assets/award4.png" alt="" className="trophy-img-awards" />
                        </div>
                        <h3 className="trophy-name-awards">Quality Leadership</h3>
                        <p className="trophy-desc-awards">Structural Safety Standard</p>
                    </div>

                    <div className="trophy-item-card-awards" aria-hidden="true">
                        <div className="trophy-display-circle-awards">
                            <div className="ring-glow-effect-awards"></div>
                            <img src="assets/award5.png" alt="" className="trophy-img-awards" />
                        </div>
                        <h3 className="trophy-name-awards">Trust & Integrity Award</h3>
                        <p className="trophy-desc-awards">Wholesale Procurement</p>
                    </div>

                </div>
            </div>
        </section>
    );
}