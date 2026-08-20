import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Section 08 — For Brands Component
 * High-conversion dark section framing casting collaborations for agencies & production houses.
 */
export default function ForBrands() {
  const brandAudiences = [
    'BRANDS',
    'ADVERTISING AGENCIES',
    'PRODUCTION HOUSES',
    'CASTING DIRECTORS',
    'FASHION PRODUCTIONS',
    'OTT NETWORKS',
    'DIGITAL CAMPAIGNS'
  ];

  return (
    <section
      id="brands"
      style={{
        backgroundColor: '#0B0B0C',
        color: '#FAF8F5',
        padding: 'clamp(5rem, 10vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        position: 'relative',
        borderTop: '1px solid rgba(199, 201, 204, 0.12)'
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* TOP LABEL */}
        <div style={{ marginBottom: '2rem' }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '11px',
              letterSpacing: '0.28em',
              color: '#274FFF',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span style={{ width: '6px', height: '6px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
            07 / FOR BRANDS & PRODUCTION
          </span>
        </div>

        {/* MAIN DISPLAY HEADLINE & CTA CONTAINER */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'end',
            marginBottom: '4rem'
          }}
          className="brands-header-grid"
        >
          {/* DISPLAY HEADLINE (8 COLUMNS) */}
          <div style={{ gridColumn: 'span 8' }} className="brands-title-col">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(2.8rem, 6vw, 6.25rem)',
                lineHeight: 0.94,
                letterSpacing: '-0.03em',
                color: '#FAF8F5',
                margin: 0,
                textTransform: 'uppercase'
              }}
            >
              ALIGNING TALENT<br />
              WITH YOUR <span style={{ fontStyle: 'italic', color: '#FFFFFF' }}>CREATIVE VISION.</span>
            </h2>
          </div>

          {/* SUPPORTING TEXT & ACTION (4 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
            className="brands-action-col"
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                color: '#C7C9CC',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              From first shortlist to final selection, Novante helps brands and production teams find talent aligned with the creative direction, audience and purpose of the project.
            </p>

            <a
              href="#join"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '1.1rem 2.4rem',
                backgroundColor: '#274FFF',
                color: '#FFFFFF',
                borderRadius: '2px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.22em',
                textDecoration: 'none',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 8px 24px rgba(39, 79, 255, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(39, 79, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(39, 79, 255, 0.25)';
              }}
            >
              <span>START A CONVERSATION</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* AUDIENCE TAGS STRIP */}
        <div
          style={{
            borderTop: '1px solid rgba(199, 201, 204, 0.12)',
            paddingTop: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.25em',
              color: '#A0A4AB',
              fontWeight: 600
            }}
          >
            WHO WE COLLABORATE WITH
          </span>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            {brandAudiences.map((aud) => (
              <div
                key={aud}
                style={{
                  padding: '10px 20px',
                  border: '1px solid rgba(199, 201, 204, 0.18)',
                  backgroundColor: 'rgba(250, 248, 245, 0.02)',
                  borderRadius: '2px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  fontWeight: 600,
                  color: '#FAF8F5'
                }}
              >
                {aud}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .brands-title-col {
            grid-column: span 12 !important;
          }
          .brands-action-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
