"use client";
import React from 'react';

const events = [
    {
        title: "Sunday Service",
        time: "Every Sunday, 6:00 PM",
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
    return (
        <section id="events" className="section-padding" style={{
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2rem'
                }}>
                    {events.map((event, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '2.5rem',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '24px',
                            transition: 'all 0.4s ease',
                            cursor: 'default',
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.border = '1px solid rgba(254,241,196,0.3)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(20,160,232,0.1)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            <div style={{
                                fontFamily: 'var(--font-h)',
                                fontSize: '4.5rem',
                                fontWeight: 800,
                                color: 'rgba(255,255,255,0.04)',
                                lineHeight: 1,
                                marginBottom: '0.5rem',
                                letterSpacing: '-2px'
                            }}>
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <h3 className="heading-md" style={{ color: '#ffffff', fontSize: '1.75rem', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>{event.title}</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-sun-glow)', boxShadow: '0 0 10px var(--color-sun-glow)' }}></div>
                                    <p style={{ fontWeight: 500, color: '#e0f2fe', fontSize: '0.90rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{event.time}</p>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-shallow-water)', boxShadow: '0 0 10px var(--color-shallow-water)' }}></div>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>{event.location}</p>
                                </div>
                            </div>

                            <p style={{
                                marginTop: 'auto',
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1.6,
                                fontSize: '1.05rem'
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
