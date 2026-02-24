import React from 'react';
import { ArrowRight, Code, Database, Server } from 'lucide-react';
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
                    <div className="badge glass-panel">Innovating the Future</div>
                    <h5 className="hero-title">
                        Experience Business Beyond Limits<br />
                        <span className="text-gradient">At Cloud 9</span>
                    </h5>
                    <p className="hero-subtitle delay-100">
                        Your partner in Accounting Management. We specialize in providing comprehensive Tally solutions that help businesses achieve greater efficiency, accuracy, and growth.
                    </p>
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
                    <div className="floating-card glass-panel card-1">
                        <Code color="var(--accent-primary)" size={32} />
                        <p>Tally Developer</p>
                    </div>
                    <div className="floating-card glass-panel card-2">
                        <Database color="var(--accent-secondary)" size={32} />
                        <p>Tally Integration</p>
                    </div>
                    <div className="floating-card glass-panel card-3">
                        <Server color="#00ffcc" size={32} />
                        <p>Tally on AWS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
