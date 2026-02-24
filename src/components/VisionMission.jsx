import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import './VisionMission.css';

const VisionMission = () => {
    return (
        <section id="vision-mission" className="vision-mission-section">
            <div className="container">
                <div className="section-header text-center animate-fade-in">
                    <div className="badge glass-panel">Our Purpose</div>
                    <h2 className="section-title">
                        Vision & <span className="text-gradient">Mission</span>
                    </h2>
                </div>

                <div className="vision-mission-grid">
                    <div className="vm-card glass-panel animate-fade-in delay-100">
                        <div className="vm-icon-wrapper">
                            <Eye size={40} className="vm-icon" />
                        </div>
                        <h3>Our Vision</h3>
                        <p>
                            To empower businesses with efficient, customized Tally solutions that improve operational efficiency and drive business growth. To be the leading provider of Tally-based services, helping businesses of all sizes optimize their operations and achieve success through technology.
                        </p>
                    </div>

                    <div className="vm-card glass-panel animate-fade-in delay-200">
                        <div className="vm-icon-wrapper">
                            <Target size={40} className="vm-icon" />
                        </div>
                        <h3>Our Mission</h3>
                        <p>
                            To revolutionize business operations by providing innovative, reliable, and user-friendly Tally Accounts software solutions. We aim to empower businesses of all sizes with advanced accounting tools, driving growth, efficiency, and transparency while fostering trust and customer satisfaction.
                        </p>
                    </div>

                    <div className="vm-card glass-panel animate-fade-in delay-300">
                        <div className="vm-icon-wrapper">
                            <ShieldCheck size={40} className="vm-icon" />
                        </div>
                        <h3>Why Choose Us</h3>
                        <p>
                            Choosing CLOUD9 SOFT Technologies for Tally Software ensures that your business benefits from a seamless, efficient, and customized financial management experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
