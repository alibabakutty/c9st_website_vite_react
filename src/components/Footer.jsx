import React from 'react';
import { Cloud, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <Cloud size={32} color="var(--accent-primary)" />
                            <span className="logo-text text-gradient">Cloud 9 Soft Technologies</span>
                        </div>
                        <p className="footer-desc">
                            Your trusted partner in Accounting Management. We specialize in providing comprehensive Tally solutions that empower businesses to streamline their operations.
                        </p>
                        <div className="social-icons">
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="https://www.facebook.com/Cloud9tallysolutions" target="_blank" rel="noopener noreferrer" className="social-link"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/cloud9_soft_technoloiges_2025/" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h3>Company</h3>
                        <a href="#about">About Us</a>
                        <a href="#careers">Careers</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-links-group">
                        <h3>Products & Services</h3>
                        <a href="#services">TallyPrime</a>
                        <a href="#services">TallyPrime Server</a>
                        <a href="#services">TallyPrime on AWS</a>
                        <a href="#services">Tally Customization</a>
                    </div>

                    <div className="footer-links-group">
                        <h3>Legal</h3>
                        <a href="#terms">Terms of Service</a>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#cookies">Cookie Policy</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Cloud 9 Soft Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
