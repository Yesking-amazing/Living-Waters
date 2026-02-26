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
        }}>
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    minWidth: '100%',
                    minHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                }}
            >
                <source src="/hero-video.mp4" type="video/mp4" />
                {/* Fallback if video fails to load */}
                <img src="/hero-bg.jpg" alt="Living Waters" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
            </video>

            {/* Gradient overlay for text readability and smooth transition to next section */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(1, 17, 36, 0.3) 0%, rgba(1, 17, 36, 0.5) 75%, #011124 100%)',
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
