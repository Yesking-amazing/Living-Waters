"use client";
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className={`header ${isMobileMenuOpen ? '' : 'glass-panel'}`} style={{
                position: 'fixed',
                top: isMobileMenuOpen ? '0' : '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: isMobileMenuOpen ? '100%' : 'calc(100% - 2rem)',
                maxWidth: isMobileMenuOpen ? '100%' : '1200px',
                zIndex: 100,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: isMobileMenuOpen ? '1.5rem clamp(1rem, 4vw, 2rem)' : '1rem clamp(1rem, 4vw, 2rem)',
                borderRadius: isMobileMenuOpen ? '0' : '50px',
                background: isMobileMenuOpen ? 'transparent' : (isScrolled ? 'rgba(1, 17, 36, 0.8)' : 'var(--glass-bg)'),
                transition: 'all 0.3s ease'
            }}>
                <div className="logo" style={{
                    fontFamily: 'var(--font-h)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                    letterSpacing: '1px',
                    color: 'var(--color-sunlight)',
                    zIndex: 101 // stay above mobile menu
                }}>
                    LIVING WATERS
                </div>

                {/* Desktop Nav */}
                <nav className="nav-links desktop-nav" style={{
                    display: 'flex',
                    gap: '2rem'
                }}>
                    <a href="#about" style={{ fontWeight: 500 }}>ABOUT</a>
                    <a href="#events" style={{ fontWeight: 500 }}>SERVICES</a>
                    <a href="#contact" style={{ fontWeight: 500 }}>CONTACT</a>
                </nav>

                {/* Mobile Hamburger Icon */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-sunlight)',
                        cursor: 'pointer',
                        zIndex: 101,
                        padding: '0.5rem'
                    }}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </header>

            {/* Mobile Nav Menu Overlay */}
            <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(1, 17, 36, 0.98)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isMobileMenuOpen ? 1 : 0,
                visibility: isMobileMenuOpen ? 'visible' : 'hidden',
                zIndex: 99
            }}>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-sunlight)' }}>ABOUT</a>
                <a href="#events" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-sunlight)' }}>SERVICES</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-sunlight)' }}>CONTACT</a>
            </div>
        </>
    );
}
