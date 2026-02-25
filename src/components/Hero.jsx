import React from 'react';
import { ArrowRight, Code, Database, Server } from 'lucide-react';
import heroImage from '../assets/about_professional.png';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="glow-orb primary"></div>
                <div className="glow-orb secondary"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>
                        Transform Business with<br />
                        <span className="text-gradient">Tally Solutions</span>
                    </h1>

                    <div className="hero-features delay-100">
                        <div className="hero-feature-item">
                            <div className="feature-icon-wrapper">
                                <Code size={20} color="var(--accent-primary)" />
                            </div>
                            <div className="feature-text">
                                <strong>Customization & Integration:</strong> Advanced customization of Tally software to suit unique requirements, ensuring seamless integration.
                            </div>
                        </div>
                        <div className="hero-feature-item">
                            <div className="feature-icon-wrapper">
                                <Server size={20} color="var(--accent-secondary)" />
                            </div>
                            <div className="feature-text">
                                <strong>End-to-End Solutions:</strong> Comprehensive Tally ERP 9 and Tally Prime services for accurate financial management.
                            </div>
                        </div>
                        <div className="hero-feature-item">
                            <div className="feature-icon-wrapper">
                                <Database size={20} color="#00ffcc" />
                            </div>
                            <div className="feature-text">
                                <strong>User Training & Support:</strong> Empowering users through hands-on training and dedicated support to maximize potential.
                            </div>
                        </div>
                    </div>

                    <div className="hero-cta delay-200">
                        <a href="#services" className="btn btn-primary">
                            Explore Our Services <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Book a Consultation
                        </a>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in delay-300">
                    <img
                        src={heroImage}
                        alt="Tally Solutions Illustration"
                        className="hero-illustration"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
