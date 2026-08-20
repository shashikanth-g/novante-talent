import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Section 06 — Casting Component
 * Dark editorial section framing Novante's casting services for brands & agencies.
 */
export default function CastingSection() {
  const categories = [
    'FASHION',
    'ADVERTISING',
    'COMMERCIAL',
    'ENTERTAINMENT',
    'DIGITAL'
  ];

  return (
    <section
      id="casting"
      style={{
        backgroundColor: '#0B0B0C',
        color: '#FAF8F5',
        padding: 'clamp(5rem, 10vh, 8.5rem) clamp(1.5rem, 5vw, 5rem)',
        position: 'relative',
        borderTop: '1px solid rgba(199, 201, 204, 0.12)'
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* HEADER & DISPLAY HEADLINE */}
        <div style={{ marginBottom: '3.5rem' }}>
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
              marginBottom: '1.5rem'
            }}
          >
            <span style={{ width: '6px', height: '6px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
            05 / CASTING
          </span>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(2.6rem, 5.8vw, 5.5rem)',
              lineHeight: 0.96,
              letterSpacing: '-0.025em',
              color: '#FAF8F5',
              margin: 0,
              textTransform: 'uppercase'
            }}
          >
            THE RIGHT TALENT <span style={{ fontStyle: 'italic', color: '#FFFFFF' }}>CHANGES</span> THE CAMPAIGN.
          </h2>
        </div>

        {/* CAMPAIGN VISUAL & DETAIL GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center'
          }}
          className="casting-grid"
        >
          {/* LEFT: CINEMATIC CAMPAIGN STILL (7 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 7',
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              height: '520px',
              border: '1px solid rgba(199, 201, 204, 0.15)'
            }}
            className="casting-visual-col"
          >
            <img
              src="/hero-editorial.png"
              alt="Novante Casting & Creative Direction"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 30%',
                filter: 'contrast(1.1) brightness(0.88)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 50%, rgba(11, 11, 12, 0.9) 100%)'
              }}
            />
            
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                backgroundColor: 'rgba(11, 11, 12, 0.82)',
                backdropFilter: 'blur(12px)',
                padding: '12px 18px',
                border: '1px solid rgba(199, 201, 204, 0.2)',
                borderRadius: '2px'
              }}
            >
              <span style={{ fontSize: '9px', letterSpacing: '0.24em', color: '#274FFF', fontWeight: 700 }}>
                CAMPAIGN CASTING — DEMO
              </span>
            </div>
          </div>

          {/* RIGHT: SUPPORTING COPY & DISCIPLINE TAGS (5 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
            className="casting-copy-col"
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '1.1rem',
                color: '#C7C9CC',
                lineHeight: 1.7,
                marginBottom: '2.5rem'
              }}
            >
              For brands, agencies and production teams looking for people who fit the vision — not simply the brief.
            </p>

            {/* Discipline Categories List */}
            <div style={{ width: '100%', marginBottom: '2.5rem' }}>
              <span
                style={{
                  display: 'block',
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  color: '#274FFF',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}
              >
                CASTING DISCIPLINES
              </span>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {categories.map((cat) => (
                  <span
                    key={cat}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '10px',
                      letterSpacing: '0.18em',
                      fontWeight: 600,
                      color: '#FAF8F5',
                      padding: '6px 14px',
                      border: '1px solid rgba(199, 201, 204, 0.2)',
                      borderRadius: '2px',
                      backgroundColor: 'rgba(250, 248, 245, 0.03)'
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#join"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '1rem 2.2rem',
                backgroundColor: '#FAF8F5',
                color: '#0B0B0C',
                borderRadius: '2px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.2em',
                textDecoration: 'none',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FAF8F5';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>EXPLORE CASTING</span>
              <ArrowRight size={15} style={{ color: '#274FFF' }} />
            </a>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .casting-grid {
            grid-template-columns: 1fr !important;
          }
          .casting-visual-col {
            grid-column: span 12 !important;
            height: 400px !important;
          }
          .casting-copy-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
