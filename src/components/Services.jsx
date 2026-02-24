import React from 'react';
import { Layers, Shield, Zap, Smartphone, Cloud, LineChart, Database, Server, Code } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        icon: <Database size={40} className="service-icon" />,
        title: 'TallyPrime Implementation',
        description: 'Comprehensive business management software setup tailored to your accounting, inventory, payroll, and taxation needs.'
    },
    {
        icon: <Server size={40} className="service-icon" />,
        title: 'TallyPrime Server',
        description: 'Advanced server-based solutions designed to support multi-user environments with large volumes of transactional data.'
    },
    {
        icon: <Code size={40} className="service-icon" />,
        title: 'TallyPrime Developer (TDL)',
        description: 'Customizing, extending, and developing tailored solutions, reports, and integrations using Tally Definition Language.'
    },
    {
        icon: <Cloud size={40} className="service-icon" />,
        title: 'TallyPrime on AWS',
        description: 'Deploying Tally Prime on Amazon Web Services for secure, scalable, and real-time cloud-based accounting from anywhere.'
    },
    {
        icon: <Smartphone size={40} className="service-icon" />,
        title: 'Tally Shoper 9',
        description: 'Robust business management for retail and distribution, managing multi-location inventory and point-of-sale activities.'
    },
    {
        icon: <Shield size={40} className="service-icon" />,
        title: 'Tally Software Service',
        description: 'Ongoing support, configuration, training, and troubleshooting to ensure your Tally software performs optimally.'
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header text-center animate-fade-in">
                    <div className="badge glass-panel">What We Do</div>
                    <h2 className="section-title">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <div className="services-intro glass-panel mt-4 animate-fade-in delay-100" style={{ padding: '2rem', borderRadius: '16px', marginBottom: '3rem', textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
                            At <strong>CLOUD9 SOFT Technologies</strong>, we specialize in providing comprehensive Tally solutions that empower businesses to streamline their operations. Our team of experts is dedicated to delivering tailored services that meet your unique needs, from installation and support to advanced customizations and integrations.
                        </p>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
                            We empower organizations by integrating Tally with advanced tools and features, such as GST compliance, inventory management, payroll processing, and financial reporting. Whether you're a small business or a large enterprise, our solutions are designed to optimize your accounting workflows, enhance accuracy, and provide real-time insights for better decision-making.
                        </p>
                        <p style={{ color: 'var(--text-primary)', lineHeight: '1.8' }}>
                            Experience unmatched service quality, timely assistance, and a commitment to driving your business growth with Tally's robust capabilities. CLOUD9 SOFT Technologies positions itself as a one-stop solution for all Tally accounting software needs.
                        </p>
                    </div>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            className={`service-card glass-panel animate-fade-in delay-${(index % 3 + 1) * 100}`}
                            key={index}
                        >
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
