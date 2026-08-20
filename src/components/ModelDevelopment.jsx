import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Section 05 — Model Development Component
 * Warm off-white section framing talent preparation and portfolio direction.
 */
export default function ModelDevelopment() {
  return (
    <section
      id="development"
      style={{
        backgroundColor: '#FAF8F5',
        color: '#0B0B0C',
        padding: 'clamp(5rem, 10vh, 8.5rem) clamp(1.5rem, 5vw, 5rem)',
        position: 'relative',
        borderTop: '1px solid rgba(11, 11, 12, 0.08)',
        borderBottom: '1px solid rgba(11, 11, 12, 0.08)'
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center'
          }}
          className="development-grid"
        >
          
          {/* LEFT: TEXT & HEADLINE (6 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 6',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
            className="development-text-col"
          >
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
              04 / DEVELOPMENT
            </span>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                color: '#0B0B0C',
                marginBottom: '2rem',
                textTransform: 'uppercase'
              }}
            >
              POTENTIAL<br />
              BECOMES<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#0B0B0C' }}>
                PROFESSIONAL.
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: '1.15rem',
                color: '#0B0B0C',
                lineHeight: 1.6,
                marginBottom: '0.75rem'
              }}
            >
              Great talent is not simply discovered. It is developed.
            </p>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                color: '#4A4D52',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
                maxWidth: '520px'
              }}
            >
              From presentation and portfolio direction to camera confidence, communication and professional readiness, we help talent understand what they bring to the industry and how to present it.
            </p>

            <a
              href="#join"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '1rem 2.2rem',
                backgroundColor: '#0B0B0C',
                color: '#FAF8F5',
                borderRadius: '2px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.2em',
                textDecoration: 'none',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#274FFF';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0B0B0C';
                e.currentTarget.style.color = '#FAF8F5';
              }}
            >
              <span>EXPLORE DEVELOPMENT</span>
              <ArrowRight size={15} />
            </a>

          </div>

          {/* RIGHT: OVERLAPPING EDITORIAL VISUAL COMPOSITION (6 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 6',
              position: 'relative',
              height: '560px'
            }}
            className="development-image-col"
          >
            {/* Primary Background Image */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '85%',
                height: '85%',
                borderRadius: '2px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(11, 11, 12, 0.08)'
              }}
            >
              <img
                src="/talent-01.png"
                alt="Novante Model Development Portfolio"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.05) brightness(0.95)'
                }}
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '55%',
                height: '55%',
                borderRadius: '2px',
                overflow: 'hidden',
                border: '4px solid #FAF8F5',
                boxShadow: '0 24px 48px rgba(11, 11, 12, 0.15)'
              }}
            >
              <img
                src="/hero-editorial.png"
                alt="Novante Camera & Portfolio Direction"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.08)'
                }}
              />
            </div>

            {/* Numerical Overlay Accent */}
            <div
              style={{
                position: 'absolute',
                top: '-1.5rem',
                left: '-1rem',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '6rem',
                fontWeight: 300,
                color: 'rgba(39, 79, 255, 0.15)',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            >
              04
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .development-grid {
            grid-template-columns: 1fr !important;
          }
          .development-text-col {
            grid-column: span 12 !important;
          }
          .development-image-col {
            grid-column: span 12 !important;
            height: 420px !important;
            margin-top: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
