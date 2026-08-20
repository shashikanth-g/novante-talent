import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

/**
 * Section 03 — Talent Showcase Component
 * Asymmetric editorial fashion gallery framing 6 demo talent cards.
 */
export default function TalentShowcase() {
  const talentCards = [
    {
      id: '01',
      name: 'DEMO TALENT 01',
      category: 'EDITORIAL / FASHION',
      image: '/talent-01.png',
      aspect: 'portrait-tall'
    },
    {
      id: '02',
      name: 'DEMO TALENT 02',
      category: 'RUNWAY / COMMERCIAL',
      image: '/talent-02.png',
      aspect: 'portrait-medium'
    },
    {
      id: '03',
      name: 'DEMO TALENT 03',
      category: 'FILM / ADVERTISING',
      image: '/hero-editorial.png',
      aspect: 'portrait-medium'
    },
    {
      id: '04',
      name: 'DEMO TALENT 04',
      category: 'HIGH FASHION / EDITORIAL',
      image: '/talent-01.png',
      aspect: 'portrait-square'
    },
    {
      id: '05',
      name: 'DEMO TALENT 05',
      category: 'COMMERCIAL / DIGITAL',
      image: '/talent-02.png',
      aspect: 'portrait-tall'
    },
    {
      id: '06',
      name: 'DEMO TALENT 06',
      category: 'TALENT / PRESENCE',
      image: '/hero-editorial.png',
      aspect: 'portrait-square'
    }
  ];

  return (
    <section
      id="talent"
      style={{
        backgroundColor: '#0B0B0C',
        color: '#FAF8F5',
        padding: 'clamp(5rem, 10vh, 8.5rem) clamp(1.5rem, 5vw, 5rem)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* HEADER SECTION */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '4rem',
            borderBottom: '1px solid rgba(199, 201, 204, 0.12)',
            paddingBottom: '2.5rem'
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.28em',
                color: '#274FFF',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '1rem'
              }}
            >
              <span style={{ width: '6px', height: '6px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
              02 / TALENT
            </span>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                color: '#FAF8F5',
                margin: 0,
                textTransform: 'uppercase'
              }}
            >
              PEOPLE <span style={{ fontStyle: 'italic', color: '#FFFFFF' }}>WITH</span> PRESENCE.
            </h2>
          </div>

          <div style={{ maxWidth: '420px' }}>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.95rem',
                color: '#C7C9CC',
                lineHeight: 1.6,
                marginBottom: '1.25rem'
              }}
            >
              Faces, personalities and perspectives with the potential to move culture forward.
            </p>

            <a
              href="#join"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: '#FAF8F5',
                textDecoration: 'none',
                transition: 'color 0.25s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#274FFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FAF8F5'}
            >
              <span>VIEW ALL TALENT</span>
              <ArrowRight size={14} style={{ color: '#274FFF' }} />
            </a>
          </div>
        </div>

        {/* ASYMMETRIC EDITORIAL TALENT GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.25rem, 2.5vw, 2.5rem)'
          }}
          className="talent-grid-container"
        >
          {talentCards.map((card, idx) => {
            // Asymmetric column spans
            let colSpan = 'span 4';
            let heightPx = '480px';
            if (idx === 0) { colSpan = 'span 7'; heightPx = '560px'; }
            if (idx === 1) { colSpan = 'span 5'; heightPx = '560px'; }
            if (idx === 2) { colSpan = 'span 4'; heightPx = '460px'; }
            if (idx === 3) { colSpan = 'span 4'; heightPx = '460px'; }
            if (idx === 4) { colSpan = 'span 4'; heightPx = '460px'; }
            if (idx === 5) { colSpan = 'span 12'; heightPx = '420px'; }

            return (
              <div
                key={card.id}
                style={{
                  gridColumn: colSpan,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  backgroundColor: '#141416',
                  height: heightPx,
                  cursor: 'pointer',
                  border: '1px solid rgba(199, 201, 204, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="talent-card-item"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(39, 79, 255, 0.4)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.04)';
                  const info = e.currentTarget.querySelector('.talent-card-overlay');
                  if (info) info.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(199, 201, 204, 0.08)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                  const info = e.currentTarget.querySelector('.talent-card-overlay');
                  if (info) info.style.opacity = '0.9';
                }}
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: idx % 2 === 0 ? 'center 15%' : 'center 30%',
                    filter: 'brightness(0.9) contrast(1.05)',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(11, 11, 12, 0.85) 100%)'
                  }}
                />

                {/* DEMO Tag Badge (Upper Right) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    backgroundColor: 'rgba(11, 11, 12, 0.75)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: '2px',
                    border: '1px solid rgba(199, 201, 204, 0.2)',
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    color: '#274FFF',
                    fontWeight: 700
                  }}
                >
                  DEMO ROSTER
                </div>

                {/* Bottom Overlay Info */}
                <div
                  className="talent-card-overlay"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    opacity: 0.9,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '9px',
                        letterSpacing: '0.25em',
                        color: '#274FFF',
                        fontWeight: 700,
                        marginBottom: '4px'
                      }}
                    >
                      {card.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '1.75rem',
                        fontWeight: 400,
                        color: '#FAF8F5',
                        margin: 0,
                        lineHeight: 1.1
                      }}
                    >
                      {card.name}
                    </h3>
                  </div>

                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(250, 248, 245, 0.1)',
                      backdropFilter: 'blur(6px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FAF8F5',
                      border: '1px solid rgba(250, 248, 245, 0.2)'
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Grid Responsive Rules */}
      <style>{`
        @media (max-width: 1024px) {
          .talent-card-item {
            grid-column: span 6 !important;
            height: 420px !important;
          }
        }
        @media (max-width: 640px) {
          .talent-card-item {
            grid-column: span 12 !important;
            height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
