"use client";
import React, { useEffect, useRef } from 'react';

const events = [
    {
        title: "Sunday Service",
        time: "Every Sunday, 4:00 PM",
        location: "Klimentská 1443/50, Praha 1",
        description: "Join us for our main weekly service of worship and the Word."
    },
    {
        title: "Sunday Bible Study",
        time: "Every Sunday, 4:00 PM - 6:00 PM",
        location: "Klimentská 1443/50, Praha 1",
        description: "Deep dive into scripture before our main evening service."
    },
    {
        title: "Wednesday Bible Study",
        time: "Every Wednesday, 6:00 PM - 8:00 PM",
        location: "Location varies",
        description: "Midweek gathering for spiritual growth and fellowship."
    },
    {
        title: "Prayer Night",
        time: "Every Friday, 9:00 PM - 11:00 PM",
        location: "IHOP Prague, Jungmannova square 19, Praha 1",
        description: "Dedicated time for intercession and seeking God's face together."
    },
    {
        title: "Worship Night",
        time: "Every Last Saturday of the Month",
        location: "Jungmannova square 19, Praha 1",
        description: "Extended times of passionate worship and encountering the Holy Spirit."
    },
    {
        title: "Heart's Desire",
        time: "Every Quarter",
        location: "Venue communicated per event",
        description: "Special quarterly gathering. Stay tuned for dates and locations!"
    }
];

export default function Events() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% visible
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="events" ref={sectionRef} className="section-padding" style={{
            position: 'relative',
            background: 'var(--color-abyss)',
            zIndex: 1
        }}>

            <div className="container">
                <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--color-sunlight)' }}>
                    Gather With Us
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {events.map((event, index) => (
                        <div key={index} className="animate-on-scroll fade-up" style={{
                            transitionDelay: `${index * 0.15}s`,
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '2.5rem',
                            background: 'rgba(255,255,255,0.02)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: '16px',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            cursor: 'default',
                            overflow: 'hidden'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                e.currentTarget.style.borderColor = 'rgba(254,241,196,0.2)';
                                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.5), 0 0 20px rgba(254,241,196,0.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            {/* Accent Line */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, var(--color-sunlight), transparent)',
                                opacity: 0.5
                            }} />

                            <h3 className="heading-md" style={{ color: '#ffffff', fontSize: '1.75rem', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>{event.title}</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <svg style={{ minWidth: '20px', width: '20px', height: '20px', marginTop: '2px', color: 'var(--color-sun-glow)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p style={{ fontWeight: 400, color: '#e0f2fe', fontSize: '0.95rem', letterSpacing: '0.5px' }}>{event.time}</p>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <svg style={{ minWidth: '20px', width: '20px', height: '20px', marginTop: '2px', color: 'var(--color-shallow-water)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>{event.location}</p>
                                </div>
                            </div>

                            <p style={{
                                marginTop: 'auto',
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1.6,
                                fontSize: '1.05rem',
                                borderTop: '1px solid rgba(255,255,255,0.05)',
                                paddingTop: '1.5rem'
                            }}>
                                {event.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
