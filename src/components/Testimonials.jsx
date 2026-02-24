import React from 'react';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
    {
        author: "Nigeria Transports",
        title: "Highly Skilled and Professional Team",
        text: "We had a challenging task of integrating Tally with multiple third-party applications. Their expertise in Tally integration, especially with APIs, made all the difference. Their team is professional, knowledgeable, and always available when we need them. They've been a vital partner in our digital transformation.",
    },
    {
        author: "Habeeb Tanning Industries",
        title: "Tailored Solutions That Fit Our Needs",
        text: "We were struggling with some specific reporting requirements, and their team created a perfect solution using TDL. The software is now tailored to our business processes, and it works flawlessly.",
    },
    {
        author: "Prasad Studios",
        title: "Best Decision for Our Business",
        text: "From installation to customization and integration with other tools, they've been with us every step of the way. Their solutions have made a big impact on our productivity and efficiency. We couldn't ask for a better team to work with.",
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="section-header text-center animate-fade-in">
                    <div className="badge glass-panel">Client Testimonials</div>
                    <h2 className="section-title">
                        What Our Clients <span className="text-gradient">Say</span>
                    </h2>
                    <p className="section-subtitle">
                        We helped 4000+ customers in managing accounting for their firm.
                    </p>
                </div>

                <div className="testimonials-intro glass-panel animate-fade-in delay-100">
                    <p>
                        "Our experience with Cloud9 Soft Technologies and their Tally Accounts Software has been exceptional. Their team provided us with comprehensive training and support, ensuring that our staff could efficiently use the software to manage our accounts seamlessly. The software’s user-friendly interface and robust features, such as inventory management, GST compliance, and financial reporting, have significantly streamlined our operations."
                    </p>
                    <p className="mt-2">
                        <strong>CLOUD9 SOFT Technologies</strong> expertise and dedication to customer service were evident throughout the process, making it easier for us to integrate Tally into our workflow. We highly recommend “CLOUD9 SOFT Technologies” for businesses looking for reliable and effective accounting solutions.
                    </p>
                </div>

                <div className="testimonials-grid mt-4 animate-fade-in delay-200">
                    {testimonialsData.map((testimonial, idx) => (
                        <div key={idx} className="testimonial-card glass-panel">
                            <Quote className="quote-icon" size={40} />
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-secondary)" color="var(--accent-secondary)" />)}
                            </div>
                            <h4 className="testimonial-title">{testimonial.title}</h4>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <strong>{testimonial.author}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
