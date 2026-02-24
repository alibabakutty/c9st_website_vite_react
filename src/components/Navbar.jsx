import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud } from 'lucide-react';
import tallyLogo from '../assets/tallylogo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-brand">
          <div className="logo">
            <Cloud className="logo-icon" size={24} color="#ffffff" />
            <span className="logo-text">Cloud 9 Soft Technologies</span>
          </div>
        </div>

        <div className="nav-links desktop-only">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions desktop-only">
          <div className="nav-contact-info">
            <div className="contact-name">Tally Perumal</div>
            <div className="contact-number">+91-9940013931</div>
          </div>
          <div className="nav-tally-logo">
            <img
              src={tallyLogo}
              alt="Tally Logo"
            />
          </div>
        </div>

        <div className="mobile-only mobile-toggle-container">
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel animate-fade-in">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <div className="mobile-contact-info" style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}>
            <div style={{ fontWeight: '600', marginBottom: '0.3rem' }}>Tally Perumal</div>
            <div style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Contact No: 9940013931</div>
            <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '4px', display: 'inline-block' }}>
              <img
                src={tallyLogo}
                alt="Tally Logo"
                style={{ height: '26px' }}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
