import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header text-center animate-fade-in">
                    <div className="badge glass-panel">Our Story</div>
                    <h2 className="section-title">
                        <span className="text-gradient">Cloud 9 Soft Technologies</span>
                    </h2>
                </div>

                <div className="about-content glass-panel animate-fade-in delay-100">
                    <div className="about-text">
                        <p>
                            Completed Commerce graduates with CA Intermediate from ICAI course during the Year 2002, worked as Senior Accounts Manager in Sri Lanka Based leading South Asia Largest Manufacturer of Furniture items. Damro Furniture Pvt Limited & Damro Exports Pvt Ltd.
                        </p>
                        <p>
                            After we started Tally Software distributions business during 2005. Established in the year 2005, CLOUD9 SOFT Technologies has been growing towards maturity in offering comprehensive solutions in Accounting, Auditing, Credentialing, and Documentation and Information systems.
                        </p>
                        <p>
                            CLOUD9 SOFT Technologies is a forward-thinking IT solutions company specializing in business automation and financial management software. As a key player in the domain of Tally Accounts Software implementation, Cloud9 Soft Technologies provides cutting-edge solutions tailored to streamline and enhance business accounting processes.
                        </p>

                        <div className="about-features">
                            <div className="feature-item">
                                <div className="feature-marker"></div>
                                <div className="feature-text">
                                    <strong>Customization & Integration</strong> offers advanced customization of Tally software to suit the unique requirements of businesses. They ensure seamless integration with existing systems for better functionality and scalability.
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-marker"></div>
                                <div className="feature-text">
                                    <strong>End-to-End Solutions</strong> from implementation to support, Cloud9 delivers comprehensive Tally ERP 9 and Tally Prime services, ensuring businesses achieve accurate financial management and compliance.
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-marker"></div>
                                <div className="feature-text">
                                    <strong>User Training & Support</strong> the company emphasizes empowering users through hands-on training and dedicated support to maximize the potential of Tally Accounts Software.
                                </div>
                            </div>
                        </div>

                        <p className="about-conclusion">
                            With a strong focus on innovation, quality, and customer satisfaction, CLOUD9 SOFT Technologies has become a trusted partner for businesses looking to enhance their accounting systems. Their expertise in Tally Accounts Software positions them as a go-to provider for efficient, cost-effective, and reliable accounting solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
