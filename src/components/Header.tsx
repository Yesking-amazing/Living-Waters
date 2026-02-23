import React from 'react';

export default function Header() {
    return (
        <header className="header glass-panel" style={{
            position: 'fixed',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 2rem)',
            maxWidth: '1200px',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            borderRadius: '50px'
        }}>
            <div className="logo" style={{
                fontFamily: 'var(--font-h)',
                fontWeight: 700,
                fontSize: '1.5rem',
                letterSpacing: '1px',
                color: 'var(--color-sunlight)'
            }}>
                LIVING WATERS
            </div>
            <nav className="nav-links" style={{
                display: 'flex',
                gap: '2rem'
            }}>
                <a href="#about" style={{ fontWeight: 500 }}>ABOUT</a>
                <a href="#events" style={{ fontWeight: 500 }}>SERVICES</a>
                <a href="#contact" style={{ fontWeight: 500 }}>CONTACT</a>
            </nav>
        </header>
    );
}
