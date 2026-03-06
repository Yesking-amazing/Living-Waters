"use client";
import React, { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formsubmit.co/ajax/tijero90@gmail.com', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatus('sent');
                form.reset();
                // Reset status after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="section-padding" style={{
            background: 'var(--color-deep-ocean)',
            color: 'var(--color-text-primary)',
            position: 'relative',
        }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--color-sunlight)' }}>
                    Get in Touch
                </h2>
                <p className="text-lead" style={{ textAlign: 'center', marginBottom: '4rem', color: '#e0f2fe' }}>
                    Have a question, need prayer, or looking for more information? We'd love to hear from you.
                </p>

                <div className="glass-panel">
                    <form
                        onSubmit={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        {/* FormSubmit Configurations */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="New Message from Living Waters Website" />
                        <input type="text" name="_honey" style={{ display: 'none' }} />

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="name" style={{ fontWeight: 500, color: 'var(--color-sunlight)', fontSize: '0.95rem' }}>Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    style={{
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: '#ffffff',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--color-sunlight)';
                                        e.target.style.background = 'rgba(255,255,255,0.08)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                        e.target.style.background = 'rgba(255,255,255,0.05)';
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="email" style={{ fontWeight: 500, color: 'var(--color-sunlight)', fontSize: '0.95rem' }}>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    required
                                    style={{
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: '#ffffff',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--color-sunlight)';
                                        e.target.style.background = 'rgba(255,255,255,0.08)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                        e.target.style.background = 'rgba(255,255,255,0.05)';
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="message" style={{ fontWeight: 500, color: 'var(--color-sunlight)', fontSize: '0.95rem' }}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="How can we help you or pray for you?"
                                required
                                style={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#ffffff',
                                    fontFamily: 'inherit',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    resize: 'vertical',
                                    transition: 'all 0.3s ease'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--color-sunlight)';
                                    e.target.style.background = 'rgba(255,255,255,0.08)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                    e.target.style.background = 'rgba(255,255,255,0.05)';
                                }}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            style={{
                                marginTop: '1rem',
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                color: '#011124',
                                background: status === 'sending'
                                    ? 'linear-gradient(135deg, #999 0%, #ccc 100%)'
                                    : 'linear-gradient(135deg, var(--color-sunlight) 0%, #ffffff 100%)',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 5px 15px rgba(254,241,196,0.2)',
                                width: '100%',
                                letterSpacing: '0.5px'
                            }}
                            onMouseOver={(e) => {
                                if (status !== 'sending') {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(254,241,196,0.4)';
                                }
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(254,241,196,0.2)';
                            }}
                            onMouseDown={(e) => {
                                if (status !== 'sending') e.currentTarget.style.transform = 'translateY(1px)';
                            }}
                        >
                            {status === 'sending' ? 'Sending...' : 
                             status === 'sent' ? '✓ Message Sent!' : 
                             status === 'error' ? 'Failed — Try Again' : 
                             'Send Message'}
                        </button>

                        {status === 'sent' && (
                            <p style={{ 
                                textAlign: 'center', 
                                color: '#4ade80', 
                                fontWeight: 500,
                                animation: 'fadeIn 0.3s ease'
                            }}>
                                Thank you! We'll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p style={{ 
                                textAlign: 'center', 
                                color: '#f87171', 
                                fontWeight: 500,
                                animation: 'fadeIn 0.3s ease'
                            }}>
                                Something went wrong. Please try again or email us directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
