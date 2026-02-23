"use client";
import React from 'react';

export default function Hero() {
    return (
        <section className="hero" style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            padding: '0 2rem',
            backgroundColor: '#011124',
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            {/* Removed artificial ambient lights and rays to let the image shine */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(1, 17, 36, 0.4)', // Dark overlay for text readability
                zIndex: 1
            }} />

            <div style={{ zIndex: 10, maxWidth: '800px' }} className="animate-fade-up">
                <h1 className="heading-xl" style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                    Living Waters
                </h1>
                <p className="text-lead" style={{ marginBottom: '2.5rem', color: '#e0f2fe' }}>
                    A place of healing, faith, and transformation. A home where hearts are refreshed and lives are renewed through the power of God.
                </p>
                <a href="#events" style={{
                    display: 'inline-block',
                    padding: '1rem 2.5rem',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#011124',
                    background: 'var(--color-sunlight)',
                    borderRadius: '50px',
                    boxShadow: '0 4px 15px rgba(254,241,196,0.3)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(254,241,196,0.5)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(254,241,196,0.3)';
                    }}
                >
                    Join Our Services
                </a>
            </div>

            {/* Scroll indicator */}
            <div className="animate-float" style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '2rem',
                zIndex: 10
            }}>
                ↓
            </div>
        </section>
    );
}
