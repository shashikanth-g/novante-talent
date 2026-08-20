import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Section 04 — Talent Management Component
 * Full-width dark editorial section framing Novante's career representation model.
 */
export default function TalentManagement() {
  return (
    <section
      id="management"
      style={{
        backgroundColor: '#0B0B0C',
        color: '#FAF8F5',
        padding: 'clamp(5rem, 10vh, 8.5rem) clamp(1.5rem, 5vw, 5rem)',
        position: 'relative',
        borderTop: '1px solid rgba(199, 201, 204, 0.12)'
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
          className="management-grid"
        >
          {/* LEFT: EDITORIAL VISUAL (45-55% SPACE) */}
          <div
            style={{
              gridColumn: 'span 6',
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              height: '580px',
              border: '1px solid rgba(199, 201, 204, 0.15)'
            }}
            className="management-image-col"
          >
            <img
              src="/talent-02.png"
              alt="Novante Talent Management Representation"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                filter: 'contrast(1.06) brightness(0.92)'
              }}
            />
            {/* Subtle Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(11, 11, 12, 0.75) 100%)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                padding: '1rem 1.5rem',
                backgroundColor: 'rgba(11, 11, 12, 0.8)',
                backdropFilter: 'blur(10px)',
                borderLeft: '2px solid #274FFF',
                maxWidth: '280px'
              }}
            >
              <span style={{ fontSize: '9px', letterSpacing: '0.22em', color: '#274FFF', fontWeight: 700 }}>
                STRATEGIC DIRECTION
              </span>
              <p style={{ fontSize: '12px', color: '#C7C9CC', marginTop: '4px', margin: 0, fontWeight: 300 }}>
                Sustainable career management beyond individual bookings.
              </p>
            </div>
          </div>

          {/* RIGHT: TEXT & COPY (6 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 6',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
            className="management-text-col"
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
              03 / TALENT MANAGEMENT
            </span>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                color: '#FAF8F5',
                marginBottom: '2rem',
                textTransform: 'uppercase'
              }}
            >
              REPRESENTATION<br />
              BUILT AROUND<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#FFFFFF' }}>
                LONG-TERM CAREERS.
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: '1.15rem',
                color: '#FAF8F5',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}
            >
              We work beyond the booking.
            </p>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                color: '#C7C9CC',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
                maxWidth: '520px'
              }}
            >
              Our approach combines representation, strategic direction, relationship building and career development to help talent build sustainable professional paths across fashion, advertising, film and digital media.
            </p>

            <a
              href="#join"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '1rem 2rem',
                backgroundColor: 'transparent',
                color: '#FAF8F5',
                border: '1px solid rgba(199, 201, 204, 0.3)',
                borderRadius: '2px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.2em',
                textDecoration: 'none',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#274FFF';
                e.currentTarget.style.backgroundColor = 'rgba(39, 79, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(199, 201, 204, 0.3)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span>DISCOVER MANAGEMENT</span>
              <ArrowRight size={15} style={{ color: '#274FFF' }} />
            </a>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .management-image-col {
            grid-column: span 12 !important;
            height: 440px !important;
          }
          .management-text-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
