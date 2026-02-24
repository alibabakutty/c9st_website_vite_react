import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header text-center animate-fade-in">
                    <div className="badge glass-panel">Get in Touch</div>
                    <h2 className="section-title">
                        Let's Build <span className="text-gradient">Together</span>
                    </h2>
                    <p className="section-subtitle">
                        Ready to transform your business? Our team of experts is here to discuss your next big project.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info glass-panel animate-fade-in delay-100">
                        <h3>Contact Information</h3>
                        <p className="info-desc">Fill up the form and our Team will get back to you within 24 hours.</p>

                        <div className="info-list">
                            <div className="info-item">
                                <Phone className="info-icon" style={{ minWidth: '24px' }} />
                                <span>+91 - 99400 13931<br />+91 - 95000 77184</span>
                            </div>
                            <div className="info-item">
                                <Mail className="info-icon" style={{ minWidth: '24px' }} />
                                <span>tallyperumal@gmail.com</span>
                            </div>
                            <div className="info-item">
                                <MapPin className="info-icon" style={{ minWidth: '24px' }} />
                                <span>S1, Plot No: 166, Nedumaran Street,<br />Kesavarthimi, Valasaravakkam, Chennai,<br />Tamilnadu - 6000087</span>
                            </div>
                        </div>

                        <div className="map-container mt-4" style={{ marginTop: '2.5rem' }}>
                            <iframe
                                src="https://maps.google.com/maps?q=Cloud9%20Soft%20Technologies%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="220"
                                style={{ border: 0, borderRadius: '16px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                            ></iframe>
                            <a
                                href="https://maps.app.goo.gl/cTcevky25UL3huBN9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{ width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center' }}
                            >
                                Get Directions
                            </a>
                        </div>

                        <div className="contact-deco-orb"></div>
                    </div>

                    <form className="contact-form glass-panel animate-fade-in delay-200">
                        <div className="form-group row">
                            <div className="input-field">
                                <label>First Name</label>
                                <input type="text" placeholder="John" />
                            </div>
                            <div className="input-field">
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="input-field">
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="input-field">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="button" className="btn btn-primary submit-btn">
                            Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
