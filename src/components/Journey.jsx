import React from 'react';
import { Award, Users, BookOpen, HeadphonesIcon } from 'lucide-react';
import './Journey.css';

const Journey = () => {
    return (
        <section id="journey" className="journey-section">
            <div className="container">
                <div className="section-header text-center animate-fade-in">
                    <div className="badge glass-panel">Our Story</div>
                    <h2 className="section-title">
                        Our Success <span className="text-gradient">Journey</span>
                    </h2>
                </div>

                <div className="journey-content-wrapper">
                    <div className="journey-text glass-panel animate-fade-in delay-100">
                        <p>
                            At CLOUD9 SOFT Technologies, our journey with Tally Accounts Software has been marked by innovation, dedication, and a commitment to empowering businesses with seamless financial management solutions. Starting with a vision to simplify accounting processes, we have continually evolved to provide customized, efficient, and user-friendly Tally solutions.
                        </p>
                        <p>
                            The success story began with a small team of enthusiastic entrepreneurs. Since inception, we were successful in rendering unique and customized services to a variety of segments across verticals. Being recognized by Tally Solutions Pvt Ltd., as a <strong>"3 Star Service and Implementation (3* SI)"</strong> partner, we made a visible impact in the Chennai region & Overseas locations.
                        </p>

                        <div className="stats-row">
                            <div className="stat-item">
                                <h4 className="text-gradient">18+</h4>
                                <span>Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <h4 className="text-gradient">4500+</h4>
                                <span>Happy Customers</span>
                            </div>
                            <div className="stat-item">
                                <h4 className="text-gradient">20+</h4>
                                <span>Expert Team</span>
                            </div>
                        </div>

                        <p className="mt-4">
                            We support customers across Chennai, India, Uganda, Zambia, Nigeria, etc. Our exceptional presence spans Corporate finance, SME consultation, and Labour acts. We are driven by the values of Integrity, Dedication, Authenticity, and Reliability.
                        </p>
                    </div>

                    <div className="support-features animate-fade-in delay-200">
                        <h3>Comprehensive Support</h3>
                        <div className="support-grid">
                            <div className="support-card glass-panel">
                                <Award className="support-icon" />
                                <h4>Installation & Setup</h4>
                                <p>Configuration of Tally software to match specific business needs.</p>
                            </div>
                            <div className="support-card glass-panel">
                                <BookOpen className="support-icon" />
                                <h4>User Training</h4>
                                <p>Training sessions to help users understand features and utilize Tally effectively.</p>
                            </div>
                            <div className="support-card glass-panel">
                                <HeadphonesIcon className="support-icon" />
                                <h4>Troubleshooting</h4>
                                <p>Prompt assistance to resolve any issues, from error messages to connectivity.</p>
                            </div>
                            <div className="support-card glass-panel">
                                <Users className="support-icon" />
                                <h4>Custom Solutions</h4>
                                <p>Tailored enhancements fitting different industries and unique requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
