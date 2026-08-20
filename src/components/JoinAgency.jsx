import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

/**
 * Section 09 — Join The Agency Component
 * Warm off-white section framing talent representation applications & ethical disclaimer.
 */
export default function JoinAgency() {
  return (
    <section
      id="join"
      style={{
        backgroundColor: '#FAF8F5',
        color: '#0B0B0C',
        padding: 'clamp(6rem, 12vh, 10rem) clamp(1.5rem, 5vw, 5rem)',
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
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center'
          }}
          className="join-grid"
        >
          
          {/* LEFT: DISPLAY HEADLINE & SUBTEXT (7 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
            className="join-title-col"
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
                marginBottom: '1.75rem'
              }}
            >
              <span style={{ width: '6px', height: '6px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
              08 / JOIN NOVANTE
            </span>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(3rem, 6.5vw, 6.5rem)',
                lineHeight: 0.94,
                letterSpacing: '-0.03em',
                color: '#0B0B0C',
                marginBottom: '2.5rem',
                textTransform: 'uppercase'
              }}
            >
              YOUR NEXT<br />
              CHAPTER<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#0B0B0C' }}>
                STARTS HERE.
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
                color: '#4A4D52',
                lineHeight: 1.65,
                marginBottom: '2.5rem',
                maxWidth: '560px'
              }}
            >
              We represent people with potential, ambition and the discipline to build a career. If you believe you have something worth developing, we want to hear from you.
            </p>

            <a
              href="mailto:novantetalent@gmail.com?subject=Novante%20Talent%20Representation%20Application"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                padding: '1.25rem 2.75rem',
                backgroundColor: '#0B0B0C',
                color: '#FAF8F5',
                borderRadius: '2px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.22em',
                textDecoration: 'none',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 8px 30px rgba(11, 11, 12, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#274FFF';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0B0B0C';
                e.currentTarget.style.color = '#FAF8F5';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>JOIN THE AGENCY</span>
              <ArrowRight size={16} />
            </a>

          </div>

          {/* RIGHT: ETHICAL REPRESENTATION DISCLAIMER CARD (5 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 5',
              backgroundColor: '#0B0B0C',
              color: '#FAF8F5',
              borderRadius: '2px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderLeft: '4px solid #274FFF',
              boxShadow: '0 20px 40px rgba(11, 11, 12, 0.08)'
            }}
            className="join-card-col"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <ShieldCheck size={20} style={{ color: '#274FFF' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.22em', color: '#FAF8F5', fontWeight: 600 }}>
                REPRESENTATION COMMITMENT
              </span>
            </div>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.95rem',
                color: '#C7C9CC',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              Representation does not guarantee jobs or bookings. Our focus is development, representation, strategic direction and genuine industry opportunities.
            </p>

            <div style={{ borderTop: '1px solid rgba(199, 201, 204, 0.15)', marginTop: '1.75rem', paddingTop: '1.25rem' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 600 }}>
                NO UPFRONT REGISTRATION FEES
              </span>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .join-title-col {
            grid-column: span 12 !important;
          }
          .join-card-col {
            grid-column: span 12 !important;
            margin-top: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
