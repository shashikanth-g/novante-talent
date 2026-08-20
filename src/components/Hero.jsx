import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

/**
 * Novante Talent Editorial Homepage Hero Component
 * Phase 1 Primary Focus: High-impact editorial layout, strong negative space,
 * line-broken headlines, refined micro-interactions, subtle grain overlay.
 */
export default function Hero({ isIntroFinished = true }) {
  const [animatedIn, setAnimatedIn] = useState(false);

  useEffect(() => {
    if (isIntroFinished) {
      const timer = setTimeout(() => setAnimatedIn(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isIntroFinished]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#0B0B0C',
        color: '#FAF8F5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(6rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem) 4rem clamp(1.5rem, 5vw, 5rem)',
        overflow: 'hidden'
      }}
    >
      {/* BACKGROUND EDITORIAL PHOTOGRAPHY WITH SUBTLE SCALE & DARK GRADIENT OVERLAY */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '58%',
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden',
          opacity: animatedIn ? 0.92 : 0,
          transform: animatedIn ? 'scale(1)' : 'scale(1.06)',
          transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className="hero-image-container"
      >
        {/* Main Fashion Editorial Image */}
        <img
          src="/hero-editorial.png"
          alt="Novante Editorial Representation"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            filter: 'contrast(1.08) brightness(0.88)'
          }}
        />

        {/* Subtle Dark Gradient Overlay for optimal left text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #0B0B0C 0%, rgba(11, 11, 12, 0.85) 30%, rgba(11, 11, 12, 0.3) 65%, transparent 100%), linear-gradient(180deg, rgba(11, 11, 12, 0.6) 0%, transparent 25%, rgba(11, 11, 12, 0.8) 100%)'
          }}
        />
      </div>

      {/* CONTENT CONTAINER (Strong Negative Space Grid) */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.75fr)',
          gap: '3rem',
          alignItems: 'end'
        }}
        className="hero-content-grid"
      >
        {/* LEFT COLUMN: EYEBROW + DISPLAY HEADLINE + CTAS */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          
          {/* Eyebrow Label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '1.75rem',
              opacity: animatedIn ? 1 : 0,
              transform: animatedIn ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <span style={{ width: '7px', height: '7px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.28em',
                color: '#C7C9CC',
                textTransform: 'uppercase'
              }}
            >
              PAN-INDIA TALENT MANAGEMENT
            </span>
          </div>

          {/* Display Headline with Line Breaks */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(3rem, 7.5vw, 7.25rem)',
              lineHeight: 0.94,
              letterSpacing: '-0.03em',
              color: '#FAF8F5',
              margin: '0 0 2rem 0',
              textTransform: 'uppercase'
            }}
          >
            <span
              style={{
                display: 'block',
                opacity: animatedIn ? 1 : 0,
                transform: animatedIn ? 'translateY(0)' : 'translateY(28px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s'
              }}
            >
              THE NEXT
            </span>
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#FFFFFF',
                opacity: animatedIn ? 1 : 0,
                transform: animatedIn ? 'translateY(0)' : 'translateY(28px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
              }}
            >
              GENERATION
            </span>
            <span
              style={{
                display: 'block',
                opacity: animatedIn ? 1 : 0,
                transform: animatedIn ? 'translateY(0)' : 'translateY(28px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.65s'
              }}
            >
              OF TALENT.
            </span>
          </h1>

          {/* Supporting Statement (Mobile & Desktop) */}
          <div
            style={{
              marginBottom: '2.5rem',
              maxWidth: '480px',
              opacity: animatedIn ? 1 : 0,
              transform: animatedIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s'
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
                color: '#C7C9CC',
                lineHeight: 1.65,
                letterSpacing: '0.01em'
              }}
            >
              Talent, developed with intention.<br />
              Represented with discipline.<br />
              Placed with purpose.
            </p>
          </div>

          {/* Action Buttons Container */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1.25rem',
              opacity: animatedIn ? 1 : 0,
              transform: animatedIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.95s'
            }}
          >
            {/* Primary CTA */}
            <a
              href="#talent"
              className="hero-primary-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '1.1rem 2.2rem',
                backgroundColor: '#FAF8F5',
                color: '#0B0B0C',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.22em',
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(39, 79, 255, 0.25)';
                const arrow = e.currentTarget.querySelector('.cta-arrow');
                if (arrow) arrow.style.transform = 'translateX(6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FAF8F5';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                const arrow = e.currentTarget.querySelector('.cta-arrow');
                if (arrow) arrow.style.transform = 'translateX(0)';
              }}
            >
              <span>EXPLORE TALENT</span>
              <ArrowRight className="cta-arrow" size={16} style={{ transition: 'transform 0.3s ease', color: '#274FFF' }} />
            </a>

            {/* Secondary CTA */}
            <a
              href="#join"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '1.1rem 2rem',
                backgroundColor: 'transparent',
                color: '#FAF8F5',
                border: '1px solid rgba(199, 201, 204, 0.3)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: '12px',
                letterSpacing: '0.2em',
                textDecoration: 'none',
                borderRadius: '2px',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#274FFF';
                e.currentTarget.style.backgroundColor = 'rgba(39, 79, 255, 0.08)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(199, 201, 204, 0.3)';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#FAF8F5';
              }}
            >
              <span>JOIN THE AGENCY</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: EDITORIAL METADATA & QUICK STAT BADGE (DEMO CONTENT) */}
        <div
          className="hero-right-meta"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            textAlign: 'right',
            opacity: animatedIn ? 1 : 0,
            transform: animatedIn ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1.1s'
          }}
        >
          {/* Subtle Editorial Tag */}
          <div
            style={{
              padding: '1.25rem 1.75rem',
              borderLeft: '2px solid #274FFF',
              backgroundColor: 'rgba(11, 11, 12, 0.65)',
              backdropFilter: 'blur(12px)',
              maxWidth: '320px',
              textAlign: 'left'
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '10px',
                letterSpacing: '0.24em',
                color: '#274FFF',
                fontWeight: 700,
                marginBottom: '6px'
              }}
            >
              EDITORIAL ROSTER — DEMO
            </span>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '12px',
                color: '#C7C9CC',
                lineHeight: 1.5,
                fontWeight: 300
              }}
            >
              Curating high-caliber talent across fashion, runway, film, and commercial representation.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: 'clamp(1.5rem, 5vw, 5rem)',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          opacity: animatedIn ? 0.75 : 0,
          transition: 'opacity 1s ease 1.3s'
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.3em',
            color: '#C7C9CC',
            fontWeight: 600
          }}
        >
          SCROLL
        </span>
        <ChevronDown 
          size={14} 
          style={{ 
            color: '#274FFF', 
            animation: 'floatSlow 2s ease-in-out infinite' 
          }} 
        />
      </div>

      {/* Hero Responsive Rules */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-image-container {
            maxWidth: 100% !important;
            opacity: 0.35 !important;
          }
          .hero-content-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-right-meta {
            align-items: flex-start !important;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
