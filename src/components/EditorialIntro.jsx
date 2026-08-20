import React from 'react';

/**
 * Section 02 — Editorial Introduction Component
 * Asymmetric layout framing Novante's core representation philosophy.
 */
export default function EditorialIntro() {
  return (
    <section
      id="philosophy"
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
        
        {/* ASYMMETRIC GRID LAYOUT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.35fr) minmax(0, 1.65fr)',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start'
          }}
          className="editorial-intro-grid"
        >
          
          {/* LEFT: SECTION LABEL */}
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
                gap: '8px'
              }}
            >
              <span style={{ width: '6px', height: '6px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
              01 / OUR PHILOSOPHY
            </span>
          </div>

          {/* RIGHT: MANIFESTO DISPLAY HEADLINE & SUPPORTING COPY */}
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(2.5rem, 5.5vw, 5.25rem)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                color: '#0B0B0C',
                marginBottom: '2.5rem',
                textTransform: 'uppercase'
              }}
            >
              TALENT IS EVERYWHERE.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#0B0B0C' }}>
                DIRECTION IS NOT.
              </span>
            </h2>

            {/* Hair-line Divider */}
            <div 
              style={{ 
                width: '100%', 
                height: '1px', 
                backgroundColor: 'rgba(11, 11, 12, 0.12)', 
                marginBottom: '2.5rem' 
              }} 
            />

            {/* Body Copy Column Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem'
              }}
            >
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                  color: '#4A4D52',
                  lineHeight: 1.75
                }}
              >
                Novante Talent exists to discover, develop and represent people with the potential to build meaningful careers across fashion, entertainment, advertising and digital media.
              </p>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                  color: '#4A4D52',
                  lineHeight: 1.75
                }}
              >
                We believe representation is not simply about placing a name on a roster. It is about understanding the person behind the talent, developing their strengths and creating the right opportunities at the right stage of their career.
              </p>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .editorial-intro-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
