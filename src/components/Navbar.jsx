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
      <div className="container nav-content">
        <div className="logo">
          <Cloud className="logo-icon" size={24} color="#ffffff" />
          <span className="logo-text">Cloud 9 Soft Technologies</span>
        </div>

        <div className="nav-links desktop-only">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="nav-contact-info" style={{ textAlign: 'right', color: '#ffffff', fontSize: '0.85rem', lineHeight: '1.4' }}>
            <div style={{ fontWeight: '600', letterSpacing: '0.5px' }}>Tally Perumal</div>
            <div>+91-99400 13931</div>
          </div>
          <div style={{ background: '#ffffff', padding: '0.2rem 0.4rem', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
            <img
              src={tallyLogo}
              alt="Tally Logo"
              style={{ height: '24px' }}
            />
          </div>
        </div>

        <button
          className="mobile-toggle mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
