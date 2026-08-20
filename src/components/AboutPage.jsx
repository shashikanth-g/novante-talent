import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

/**
 * About Page Component (/about)
 * Brand manifesto, philosophy, 4 pillars, pan-India positioning, 7-step journey framework,
 * trust standards, and conversion CTAs.
 */
export default function AboutPage({ onNavigate }) {
  const pillars = [
    {
      num: '01',
      title: 'DISCOVERY',
      desc: 'Finding raw potential, unique personality, and camera presence worth developing.'
    },
    {
      num: '02',
      title: 'DEVELOPMENT',
      desc: 'Turning raw potential into professional readiness, confidence, and portfolio clarity.'
    },
    {
      num: '03',
      title: 'REPRESENTATION',
      desc: 'Creating intentional direction, positioning, submissions, and targeted career placement.'
    },
    {
      num: '04',
      title: 'RELATIONSHIPS',
      desc: 'Building meaningful, sustainable connections between talent and leading industry directors.'
    }
  ];

  const journeySteps = [
    { num: '01', title: 'DISCOVERY', desc: 'Identify potential, personality and direction.' },
    { num: '02', title: 'ASSESSMENT', desc: 'Understand strengths, positioning and development needs.' },
    { num: '03', title: 'TRAINING', desc: 'Build confidence, professionalism and industry readiness.' },
    { num: '04', title: 'PORTFOLIO', desc: 'Develop the visual material required to present talent professionally.' },
    { num: '05', title: 'SUBMISSIONS', desc: 'Introduce relevant talent to suitable opportunities.' },
    { num: '06', title: 'BOOKING', desc: 'Support the professional process when opportunities align.' },
    { num: '07', title: 'CAREER GROWTH', desc: 'Build toward stronger positioning, relationships and long-term development.' }
  ];

  const standards = [
    { num: '01', title: 'TRANSPARENT COMMISSIONS' },
    { num: '02', title: 'WRITTEN AGREEMENTS' },
    { num: '03', title: 'REAL CASTING OPPORTUNITIES' },
    { num: '04', title: 'NO GUARANTEED JOBS' },
    { num: '05', title: 'NO UNNECESSARY REGISTRATION FEES' },
    { num: '06', title: 'NO HIDDEN CHARGES' },
    { num: '07', title: 'PROFESSIONAL PORTFOLIOS' },
    { num: '08', title: 'RESPECT FOR TALENT' },
    { num: '09', title: 'TIMELY PAYMENTS' },
    { num: '10', title: 'LONG-TERM RELATIONSHIPS' }
  ];

  return (
    <div style={{ backgroundColor: '#0B0B0C', color: '#FAF8F5', minHeight: '100vh', paddingTop: '7rem' }}>
      
      {/* 01 / ABOUT HERO */}
      <section
        style={{
          padding: '2rem clamp(1.5rem, 5vw, 5rem) 5rem clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '1440px',
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
          <span style={{ width: '6px', height: '6px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 600 }}>
            01 / ABOUT NOVANTE
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'end'
          }}
        >
          <div style={{ gridColumn: 'span 8' }} className="about-hero-title">
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(2.75rem, 6vw, 6rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: '#FAF8F5',
                margin: 0,
                textTransform: 'uppercase'
              }}
            >
              BUILDING INDIA'S<br />
              NEXT GENERATION <span style={{ fontStyle: 'italic', color: '#FFFFFF' }}>OF TALENT.</span>
            </h1>
          </div>

          <div style={{ gridColumn: 'span 4' }} className="about-hero-copy">
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                color: '#C7C9CC',
                lineHeight: 1.65,
                margin: 0
              }}
            >
              Novante Talent is built around a simple belief: Potential deserves direction. We discover, develop and represent people with the ambition and discipline to build meaningful careers across fashion, entertainment, advertising and digital media.
            </p>
          </div>
        </div>
      </section>

      {/* 02 / OUR PHILOSOPHY (LIGHT WARM SECTION) */}
      <section
        style={{
          backgroundColor: '#FAF8F5',
          color: '#0B0B0C',
          padding: '6rem clamp(1.5rem, 5vw, 5rem)',
          borderTop: '1px solid rgba(11, 11, 12, 0.08)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              02 / OUR PHILOSOPHY
            </span>

            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5.5vw, 5.25rem)', fontWeight: 300, lineHeight: 1.02, margin: '0 0 1.5rem 0', color: '#0B0B0C', textTransform: 'uppercase' }}>
              REPRESENTATION IS MORE THAN A NAME ON A ROSTER.
            </h2>

            <div style={{ borderLeft: '4px solid #274FFF', paddingLeft: '1.5rem', margin: '2rem 0' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, fontStyle: 'italic', color: '#0B0B0C', display: 'block', lineHeight: 1.1 }}>
                IT IS THE WORK BEHIND THE NAME.
              </span>
            </div>

            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.1rem', color: '#4A4D52', lineHeight: 1.7, maxWidth: '780px', fontWeight: 300 }}>
              Representation should create direction. It should help talent understand their strengths, build professional readiness, find relevant opportunities and develop relationships that can support a long-term career.
            </p>
          </div>

          {/* FOUR BRAND PILLARS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              borderTop: '1px solid rgba(11, 11, 12, 0.12)',
              paddingTop: '3rem'
            }}
            className="about-pillars-grid"
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                style={{
                  padding: '1.75rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(11, 11, 12, 0.08)',
                  borderRadius: '2px'
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '12px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
                  {pillar.num} — {pillar.title}
                </span>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', color: '#4A4D52', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PAN-INDIA POSITIONING & CINEMATIC VISUAL */}
      <section
        style={{
          padding: '6rem clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '1440px',
          margin: '0 auto',
          borderBottom: '1px solid rgba(199, 201, 204, 0.12)'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center'
          }}
          className="about-positioning-grid"
        >
          <div style={{ gridColumn: 'span 6' }} className="about-positioning-text">
            <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              PAN-INDIA TALENT MANAGEMENT
            </span>

            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)', fontWeight: 300, lineHeight: 1.02, margin: '0 0 1.5rem 0', textTransform: 'uppercase' }}>
              TALENT IS NOT LIMITED BY GEOGRAPHY.
            </h2>

            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.05rem', color: '#C7C9CC', lineHeight: 1.7, fontWeight: 300, marginBottom: '2rem' }}>
              Novante is built to connect talent and opportunity across India's evolving creative landscape. From fashion capitals and production hubs to emerging regional talent pools, our focus is pan-India representation with international standards.
            </p>
          </div>

          <div
            style={{
              gridColumn: 'span 6',
              height: '480px',
              borderRadius: '2px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid rgba(199, 201, 204, 0.15)'
            }}
            className="about-positioning-img"
          >
            <img
              src="/hero-editorial.png"
              alt="Novante Editorial Representation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.88) contrast(1.06)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(11,11,12,0.85) 100%)' }} />
          </div>
        </div>
      </section>

      {/* 03 / THE JOURNEY FRAMEWORK */}
      <section
        style={{
          backgroundColor: '#FAF8F5',
          color: '#0B0B0C',
          padding: '6rem clamp(1.5rem, 5vw, 5rem)',
          borderBottom: '1px solid rgba(11, 11, 12, 0.08)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              03 / THE JOURNEY
            </span>

            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1, margin: '0 0 1rem 0', textTransform: 'uppercase' }}>
              FROM POTENTIAL TO POSSIBILITY.
            </h2>

            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1rem', color: '#4A4D52', fontWeight: 300, margin: 0 }}>
              A structured approach to helping talent move from discovery toward sustainable professional growth.
            </p>
          </div>

          {/* 7-STEP TIMELINE LIST */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {journeySteps.map((step) => (
              <div
                key={step.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 220px 1fr',
                  gap: '1.5rem',
                  alignItems: 'center',
                  padding: '1.5rem 2rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(11, 11, 12, 0.08)',
                  borderRadius: '2px'
                }}
                className="journey-item-row"
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', letterSpacing: '0.1em', color: '#274FFF', fontWeight: 700 }}>
                  {step.num}
                </span>

                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', letterSpacing: '0.18em', color: '#0B0B0C', fontWeight: 600 }}>
                  {step.title}
                </span>

                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', color: '#4A4D52', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 04 / OUR STANDARDS & TRUST */}
      <section
        style={{
          padding: '6rem clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '1440px',
          margin: '0 auto',
          borderBottom: '1px solid rgba(199, 201, 204, 0.12)'
        }}
      >
        <div style={{ marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
            04 / OUR STANDARDS
          </span>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1, margin: '0 0 1.5rem 0', textTransform: 'uppercase' }}>
            PROFESSIONALISM SHOULD NEVER BE OPTIONAL.
          </h2>

          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1rem', color: '#C7C9CC', fontWeight: 300, margin: 0 }}>
            Talent relationships should be built on clarity, professionalism and respect.
          </p>
        </div>

        {/* 10 STANDARDS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
          {standards.map((st) => (
            <div
              key={st.num}
              style={{
                padding: '1.5rem',
                backgroundColor: 'rgba(250, 248, 245, 0.02)',
                border: '1px solid rgba(199, 201, 204, 0.15)',
                borderLeft: '3px solid #274FFF',
                borderRadius: '2px'
              }}
            >
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                {st.num}
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11px', letterSpacing: '0.18em', color: '#FAF8F5', fontWeight: 600 }}>
                {st.title}
              </span>
            </div>
          ))}
        </div>

        {/* PROMINENT TRANSPARENCY STATEMENT */}
        <div
          style={{
            backgroundColor: 'rgba(250, 248, 245, 0.03)',
            border: '1px solid rgba(199, 201, 204, 0.2)',
            padding: '2rem',
            borderRadius: '2px'
          }}
        >
          <span style={{ fontSize: '11px', letterSpacing: '0.22em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
            NOVANTE TALENT DOES NOT GUARANTEE JOBS, BOOKINGS OR REPRESENTATION.
          </span>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', color: '#C7C9CC', margin: 0, fontWeight: 300, lineHeight: 1.6 }}>
            Opportunities depend on project requirements, talent suitability, availability and other professional factors.
          </p>
        </div>
      </section>

      {/* FINAL ABOUT CONVERSION CTA */}
      <section
        style={{
          padding: '6rem clamp(1.5rem, 5vw, 5rem)',
          textAlign: 'center',
          backgroundColor: '#141416'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
            GET IN TOUCH
          </span>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, margin: '0 0 1.5rem 0', textTransform: 'uppercase' }}>
            READY TO BUILD WHAT'S NEXT?
          </h2>

          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1rem', color: '#C7C9CC', fontWeight: 300, marginBottom: '2.5rem' }}>
            For talent with ambition. For brands with a vision. For projects that need the right people.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('/join')}
              style={{
                padding: '1.1rem 2.2rem',
                backgroundColor: '#FAF8F5',
                color: '#0B0B0C',
                border: 'none',
                borderRadius: '2px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.2em',
                cursor: 'pointer'
              }}
            >
              JOIN THE AGENCY →
            </button>

            <button
              onClick={() => onNavigate('/casting')}
              style={{
                padding: '1.1rem 2.2rem',
                backgroundColor: '#274FFF',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '2px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.2em',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(39, 79, 255, 0.25)'
              }}
            >
              START A CASTING ENQUIRY →
            </button>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .about-hero-title { grid-column: span 12 !important; }
          .about-hero-copy { grid-column: span 12 !important; }
          .about-pillars-grid { grid-template-columns: 1fr 1fr !important; }
          .about-positioning-grid { grid-template-columns: 1fr !important; }
          .about-positioning-text { grid-column: span 12 !important; }
          .about-positioning-img { grid-column: span 12 !important; height: 380px !important; }
          .journey-item-row { grid-template-columns: 60px 1fr !important; }
        }
        @media (max-width: 640px) {
          .about-pillars-grid { grid-template-columns: 1fr !important; }
          .journey-item-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </div>
  );
}
