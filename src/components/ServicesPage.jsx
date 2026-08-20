import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * Agency Services Page Component (/services)
 * Editorial overview of Talent Management, Model Development, and Casting Services.
 */
export default function ServicesPage({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('mgmt');

  // Smooth scroll handler for subnav
  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#0B0B0C', color: '#FAF8F5', minHeight: '100vh', paddingTop: '7rem' }}>
      
      {/* SERVICES HERO */}
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
            02 / SERVICES OVERVIEW
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
          <div style={{ gridColumn: 'span 8' }} className="services-hero-title">
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
              WE DON'T JUST REPRESENT TALENT.<br />
              <span style={{ fontStyle: 'italic', color: '#FFFFFF' }}>
                WE BUILD CAREERS AROUND IT.
              </span>
            </h1>
          </div>

          <div style={{ gridColumn: 'span 4' }} className="services-hero-copy">
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
              Novante Talent combines representation, development and casting to create stronger connections between talent and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* STICKY SERVICES SUB-NAVIGATION */}
      <div
        style={{
          position: 'sticky',
          top: '72px',
          zIndex: 800,
          backgroundColor: 'rgba(11, 11, 12, 0.94)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(199, 201, 204, 0.15)',
          borderBottom: '1px solid rgba(199, 201, 204, 0.15)',
          padding: '0.85rem clamp(1.5rem, 5vw, 5rem)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {[
            { id: 'mgmt', label: '01 / MANAGEMENT' },
            { id: 'dev', label: '02 / DEVELOPMENT' },
            { id: 'cast', label: '03 / CASTING' }
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #274FFF' : '2px solid transparent',
                  padding: '4px 0',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#FFFFFF' : '#A0A4AB',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 01 TALENT MANAGEMENT SERVICE */}
      <section
        id="mgmt"
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
          className="service-block-grid"
        >
          {/* LEFT: VISUAL (6 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 6',
              height: '540px',
              borderRadius: '2px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid rgba(199, 201, 204, 0.15)'
            }}
            className="service-block-img"
          >
            <img
              src="/talent-02.png"
              alt="Novante Talent Management Representation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9) contrast(1.05)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(11,11,12,0.85) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', borderLeft: '2px solid #274FFF', paddingLeft: '1rem' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.22em', color: '#274FFF', fontWeight: 700 }}>SERVICE 01</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', fontWeight: 400, margin: 0 }}>TALENT MANAGEMENT</h3>
            </div>
          </div>

          {/* RIGHT: TEXT & LIST (6 COLUMNS) */}
          <div style={{ gridColumn: 'span 6' }} className="service-block-info">
            <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              01 / TALENT MANAGEMENT
            </span>

            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)', fontWeight: 300, lineHeight: 1.02, margin: '0 0 1.5rem 0' }}>
              REPRESENTATION BUILT AROUND LONG-TERM CAREERS.
            </h2>

            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1rem', color: '#C7C9CC', lineHeight: 1.7, marginBottom: '2rem', fontWeight: 300 }}>
              We work beyond the booking. Our approach focuses on positioning, relationships, submissions, negotiation, professional guidance and long-term career direction across fashion, film and commercial media.
            </p>

            {/* List of Scope */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                'REPRESENTATION',
                'POSITIONING',
                'SUBMISSIONS',
                'RELATIONSHIPS',
                'NEGOTIATION',
                'CAREER DIRECTION'
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '5px', height: '5px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
                  <span style={{ fontSize: '11px', letterSpacing: '0.18em', fontWeight: 600, color: '#FAF8F5' }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('/#join')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '1rem 2rem',
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
              <span>APPLY FOR REPRESENTATION</span>
              <ArrowRight size={15} style={{ color: '#274FFF' }} />
            </button>
          </div>
        </div>
      </section>

      {/* 02 MODEL DEVELOPMENT SERVICE (LIGHT WARM SECTION) */}
      <section
        id="dev"
        style={{
          backgroundColor: '#FAF8F5',
          color: '#0B0B0C',
          padding: '6rem clamp(1.5rem, 5vw, 5rem)',
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
            className="service-block-grid"
          >
            {/* LEFT: TEXT & LIST (6 COLUMNS) */}
            <div style={{ gridColumn: 'span 6' }} className="service-block-info">
              <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
                02 / MODEL DEVELOPMENT
              </span>

              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)', fontWeight: 300, lineHeight: 1.02, margin: '0 0 1.5rem 0', color: '#0B0B0C' }}>
                POTENTIAL BECOMES PROFESSIONAL.
              </h2>

              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1rem', color: '#4A4D52', lineHeight: 1.7, marginBottom: '2rem', fontWeight: 300 }}>
                Development gives talent the tools to understand their strengths, improve their presentation and become ready for professional opportunities across runway, editorial and commercial sets.
              </p>

              {/* List of Scope */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  'CAMERA CONFIDENCE',
                  'PRESENTATION',
                  'PORTFOLIO DIRECTION',
                  'PROFESSIONAL ETIQUETTE',
                  'COMMUNICATION',
                  'INDUSTRY READINESS'
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '5px', height: '5px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
                    <span style={{ fontSize: '11px', letterSpacing: '0.18em', fontWeight: 600, color: '#0B0B0C' }}>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('/#join')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '1rem 2rem',
                  backgroundColor: '#0B0B0C',
                  color: '#FAF8F5',
                  border: 'none',
                  borderRadius: '2px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  cursor: 'pointer'
                }}
              >
                <span>EXPLORE DEVELOPMENT</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* RIGHT: OVERLAPPING EDITORIAL IMAGE (6 COLUMNS) */}
            <div
              style={{
                gridColumn: 'span 6',
                height: '520px',
                position: 'relative'
              }}
              className="service-block-img"
            >
              <div style={{ width: '85%', height: '85%', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(11,11,12,0.08)' }}>
                <img src="/talent-01.png" alt="Model Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '55%', height: '55%', borderRadius: '2px', overflow: 'hidden', border: '4px solid #FAF8F5', boxShadow: '0 24px 48px rgba(11,11,12,0.15)' }}>
                <img src="/hero-editorial.png" alt="Portfolio Direction" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 CASTING SERVICE */}
      <section
        id="cast"
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
          className="service-block-grid"
        >
          {/* LEFT: VISUAL (6 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 6',
              height: '520px',
              borderRadius: '2px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid rgba(199, 201, 204, 0.15)'
            }}
            className="service-block-img"
          >
            <img src="/hero-editorial.png" alt="Casting Services" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(11,11,12,0.85) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', borderLeft: '2px solid #274FFF', paddingLeft: '1rem' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.22em', color: '#274FFF', fontWeight: 700 }}>SERVICE 03</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', fontWeight: 400, margin: 0 }}>CASTING & SELECTION</h3>
            </div>
          </div>

          {/* RIGHT: TEXT & CATEGORIES (6 COLUMNS) */}
          <div style={{ gridColumn: 'span 6' }} className="service-block-info">
            <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              03 / CASTING SERVICE
            </span>

            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.4rem, 4.5vw, 4.25rem)', fontWeight: 300, lineHeight: 1.02, margin: '0 0 1.5rem 0' }}>
              THE RIGHT TALENT CHANGES THE CAMPAIGN.
            </h2>

            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1rem', color: '#C7C9CC', lineHeight: 1.7, marginBottom: '2rem', fontWeight: 300 }}>
              For brands, advertising agencies, production houses and creative directors looking for talent aligned with the specific vision, tone and audience of the project.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#274FFF', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>
                CASTING DISCIPLINES
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['FASHION', 'ADVERTISING', 'COMMERCIAL', 'ENTERTAINMENT', 'DIGITAL', 'PRODUCTION'].map((cat) => (
                  <span key={cat} style={{ fontSize: '10px', letterSpacing: '0.18em', fontWeight: 600, color: '#FAF8F5', padding: '6px 14px', border: '1px solid rgba(199, 201, 204, 0.2)', borderRadius: '2px', backgroundColor: 'rgba(250, 248, 245, 0.03)' }}>
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate('/#join')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '1.1rem 2.4rem',
                backgroundColor: '#274FFF',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '2px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.22em',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(39, 79, 255, 0.25)'
              }}
            >
              <span>START A CASTING ENQUIRY</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* DUAL ACTION BOTTOM STRIP */}
      <section
        style={{
          padding: '6rem clamp(1.5rem, 5vw, 5rem)',
          backgroundColor: '#141416'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
            WHAT'S NEXT
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, margin: '0 0 2.5rem 0', textTransform: 'uppercase' }}>
            READY TO BUILD WHAT'S NEXT?
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('/#join')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
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
              <span>FOR TALENT: JOIN THE AGENCY</span>
              <ArrowRight size={15} style={{ color: '#274FFF' }} />
            </button>

            <button
              onClick={() => onNavigate('/#join')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
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
              <span>FOR BRANDS: CASTING ENQUIRY</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .services-hero-title { grid-column: span 12 !important; }
          .services-hero-copy { grid-column: span 12 !important; }
          .service-block-grid { grid-template-columns: 1fr !important; }
          .service-block-img { grid-column: span 12 !important; height: 380px !important; }
          .service-block-info { grid-column: span 12 !important; }
        }
      `}</style>
    </div>
  );
}
