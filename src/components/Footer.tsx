import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '3rem 1rem',
            background: 'var(--color-abyss)',
            color: 'var(--color-text-secondary)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            fontFamily: 'var(--font-p)'
        }}>
            <div className="container">
                <h2 style={{
                    fontFamily: 'var(--font-h)',
                    color: 'var(--color-sunlight)',
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    letterSpacing: '1px'
                }}>
                    THE LIVING-WATERS CHURCH
                </h2>
                <p style={{ marginBottom: '2rem', opacity: 0.7 }}>
                    A place of healing, faith, and transformation.
                </p>
                <p style={{ fontSize: '0.9rem', opacity: 0.5 }}>
                    © {new Date().getFullYear()} The Living-Waters Church. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
