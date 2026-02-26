"use client";
import React from 'react';

export default function About() {
    return (
        <section id="about" className="section-padding" style={{
            position: 'relative',
            background: 'var(--color-abyss)',
            zIndex: 1
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Image / Graphic Side */}
                    <div className="about-visual animate-fade-up" style={{
                        position: 'relative',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        aspectRatio: '4/5',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, var(--color-deep-ocean), var(--color-shallow-water))',
                            opacity: 0.8,
                            zIndex: 1
                        }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: "url('https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            mixBlendMode: 'overlay',
                            zIndex: 0
                        }} />

                        {/* Decorative elements */}
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            right: '2rem',
                            zIndex: 2,
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}>
                            <h4 style={{ color: 'var(--color-sunlight)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Pastor Leslie Etijoro</h4>
                            <p style={{ color: '#e0f2fe', fontSize: '0.9rem', margin: 0 }}>Senior Pastor</p>
                        </div>
                    </div>

                    {/* Text Content Side */}
                    <div className="about-content animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="heading-lg" style={{ marginBottom: '2rem', color: 'var(--color-sunlight)' }}>
                            About The Living-Water Church
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                                The name <strong>The Living-Water Church</strong> carries a deep and powerful meaning. "Living water" is a biblical symbol of eternal life, renewal, and the presence of the Holy Spirit. In the Bible, Jesus speaks of living water as a source that satisfies spiritual thirst forever - a well that never runs dry.
                            </p>

                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                                The Living-Water Church is built on this promise: that in Christ we find true life, restoration, hope, and peace. Just as water sustains physical life, God's living water sustains our souls.
                            </p>

                            <div className="glass-panel" style={{ margin: '1rem 0', padding: '1.5rem', borderLeft: '4px solid var(--color-shallow-water)' }}>
                                <p style={{ color: '#ffffff', fontSize: '1.15rem', fontStyle: 'italic', fontWeight: 500, margin: 0 }}>
                                    "Our main message is simple yet life-changing: everyone is invited to come and drink freely. No matter your past, your struggles, or your doubts, there is grace, love, and a new beginning available for you."
                                </p>
                            </div>

                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                                The Living-Water Church is a place of healing, faith, and transformation - a home where hearts are refreshed and lives are renewed through the power of Jesus Christ.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
