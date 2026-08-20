import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * Section 07 — The Novante Talent Journey Component
 * Interactive 7-step process timeline framing talent development from discovery to career growth.
 */
export default function TalentJourney() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'DISCOVERY',
      desc: 'Identifying raw potential, unique personality, natural camera presence, and long-term career direction.'
    },
    {
      num: '02',
      title: 'ASSESSMENT',
      desc: 'Understanding core strengths, market positioning, editorial fit, and customized development requirements.'
    },
    {
      num: '03',
      title: 'TRAINING',
      desc: 'Building camera confidence, movement, runway discipline, communication, and professional industry readiness.'
    },
    {
      num: '04',
      title: 'PORTFOLIO',
      desc: 'Curating high-impact visual test shoots, comp cards, and editorial portfolio assets with leading creative teams.'
    },
    {
      num: '05',
      title: 'SUBMISSIONS',
      desc: 'Targeted casting placements with premier fashion houses, advertising directors, and production agencies.'
    },
    {
      num: '06',
      title: 'BOOKING',
      desc: 'Negotiating contract terms, fee structures, usage rights, and providing full on-set representation.'
    },
    {
      num: '07',
      title: 'CAREER GROWTH',
      desc: 'Strategic brand expansion, international placement, longevity planning, and multi-industry transition.'
    }
  ];

  return (
    <section
      id="process"
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
        
        {/* HEADER SECTION */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '4rem',
            borderBottom: '1px solid rgba(11, 11, 12, 0.12)',
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
              06 / THE PROCESS
            </span>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                color: '#0B0B0C',
                margin: 0,
                textTransform: 'uppercase'
              }}
            >
              FROM POTENTIAL <span style={{ fontStyle: 'italic' }}>TO</span> POSSIBILITY.
            </h2>
          </div>

          <div style={{ maxWidth: '380px' }}>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.95rem',
                color: '#4A4D52',
                lineHeight: 1.6
              }}
            >
              A structured, 7-stage approach to developing talent with intention and representation with discipline.
            </p>
          </div>
        </div>

        {/* INTERACTIVE 7-STEP EDITORIAL TIMELINE */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'start'
          }}
          className="journey-grid"
        >
          {/* LEFT: STEP SELECTOR LIST (5 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
            className="journey-list-col"
          >
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(index)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.1rem 1.5rem',
                    borderLeft: isActive ? '3px solid #274FFF' : '3px solid transparent',
                    backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                    boxShadow: isActive ? '0 10px 30px rgba(11, 11, 12, 0.04)' : 'none',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="journey-step-button"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: '13px',
                        letterSpacing: '0.1em',
                        color: isActive ? '#274FFF' : '#A0A4AB',
                        transition: 'color 0.25s ease'
                      }}
                    >
                      {step.num}
                    </span>

                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: isActive ? 600 : 500,
                        fontSize: '12px',
                        letterSpacing: '0.18em',
                        color: isActive ? '#0B0B0C' : '#4A4D52',
                        transition: 'color 0.25s ease'
                      }}
                    >
                      {step.title}
                    </span>
                  </div>

                  <span
                    style={{
                      color: isActive ? '#274FFF' : 'transparent',
                      fontSize: '12px',
                      fontWeight: 700,
                      transition: 'color 0.25s ease'
                    }}
                  >
                    →
                  </span>
                </div>
              );
            })}
          </div>

          {/* RIGHT: FEATURED STEP DISPLAY CARD (7 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: '#0B0B0C',
              color: '#FAF8F5',
              borderRadius: '2px',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              minHeight: '440px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(11, 11, 12, 0.12)'
            }}
            className="journey-display-col"
          >
            {/* Background Watermark Number */}
            <div
              style={{
                position: 'absolute',
                top: '-2rem',
                right: '1rem',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '14rem',
                fontWeight: 300,
                color: 'rgba(250, 248, 245, 0.03)',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            >
              {steps[activeStep].num}
            </div>

            {/* Top Stage Marker */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
                <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#274FFF', fontWeight: 700 }}>
                  STAGE {steps[activeStep].num} OF 07
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 300,
                  fontSize: 'clamp(2.2rem, 4vw, 3.75rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  color: '#FAF8F5',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase'
                }}
              >
                {steps[activeStep].title}
              </h3>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                  color: '#C7C9CC',
                  lineHeight: 1.7,
                  maxWidth: '540px'
                }}
              >
                {steps[activeStep].desc}
              </p>
            </div>

            {/* Step Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(199, 201, 204, 0.12)',
                paddingTop: '2rem',
                marginTop: '3rem'
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                {steps.map((s, idx) => (
                  <button
                    key={s.num}
                    onClick={() => setActiveStep(idx)}
                    aria-label={`Jump to stage ${s.num}`}
                    style={{
                      width: idx === activeStep ? '28px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: idx === activeStep ? '#274FFF' : 'rgba(199, 201, 204, 0.25)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(199, 201, 204, 0.25)',
                    color: activeStep === 0 ? 'rgba(199, 201, 204, 0.3)' : '#FAF8F5',
                    padding: '8px 16px',
                    borderRadius: '2px',
                    cursor: activeStep === 0 ? 'default' : 'pointer',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '10px',
                    letterSpacing: '0.18em'
                  }}
                >
                  PREV
                </button>

                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  style={{
                    backgroundColor: activeStep === steps.length - 1 ? 'transparent' : '#274FFF',
                    border: '1px solid #274FFF',
                    color: '#FFFFFF',
                    padding: '8px 16px',
                    borderRadius: '2px',
                    cursor: activeStep === steps.length - 1 ? 'default' : 'pointer',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '10px',
                    letterSpacing: '0.18em'
                  }}
                >
                  NEXT
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .journey-grid {
            grid-template-columns: 1fr !important;
          }
          .journey-list-col {
            grid-column: span 12 !important;
          }
          .journey-display-col {
            grid-column: span 12 !important;
            min-height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
