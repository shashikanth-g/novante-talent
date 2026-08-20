import React, { useState, useEffect } from 'react';
import { talentData } from '../data/talentData';
import { ArrowRight, ArrowLeft, ArrowUpRight, X, ChevronLeft, ChevronRight, Play, ShieldAlert } from 'lucide-react';

/**
 * Individual Talent Profile Component (/talent/:id)
 * High-end editorial portfolio, skills list, Lightbox gallery modal, and related recommendations.
 */
export default function TalentProfile({ talentId, onNavigate, onSelectTalent }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Find target talent object
  const talent = talentData.find((item) => item.id === talentId) || talentData[0];

  // Find related talent (same categories, excluding current)
  const relatedTalent = talentData
    .filter((item) => item.id !== talent.id)
    .slice(0, 3);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % talent.galleryImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + talent.galleryImages.length) % talent.galleryImages.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, talent.galleryImages.length]);

  return (
    <div style={{ backgroundColor: '#0B0B0C', color: '#FAF8F5', minHeight: '100vh', paddingTop: '7rem' }}>
      
      {/* TOP NAVIGATION BACK LINK */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '1rem clamp(1.5rem, 5vw, 5rem)' }}>
        <button
          onClick={() => onNavigate('/talent')}
          style={{
            background: 'none',
            border: 'none',
            color: '#A0A4AB',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.2em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            padding: 0
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#274FFF'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#A0A4AB'}
        >
          <ArrowLeft size={14} />
          <span>BACK TO TALENT DIRECTORY</span>
        </button>
      </div>

      {/* PROFILE HERO SECTION */}
      <section
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '1rem clamp(1.5rem, 5vw, 5rem) 5rem clamp(1.5rem, 5vw, 5rem)'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'start'
          }}
          className="profile-hero-grid"
        >
          {/* LEFT: HERO MAIN PORTRAIT IMAGE (6 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 6',
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              height: '620px',
              border: '1px solid rgba(199, 201, 204, 0.15)',
              cursor: 'pointer'
            }}
            className="profile-hero-image-col"
            onClick={() => setLightboxIndex(0)}
          >
            <img
              src={talent.image}
              alt={talent.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                filter: 'contrast(1.06) brightness(0.92)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'rgba(11, 11, 12, 0.75)',
                backdropFilter: 'blur(8px)',
                padding: '6px 12px',
                borderRadius: '2px',
                fontSize: '10px',
                letterSpacing: '0.18em',
                color: '#FAF8F5'
              }}
            >
              CLICK TO ENLARGE ✦
            </div>
          </div>

          {/* RIGHT: PROFILE DETAILS & BIO (6 COLUMNS) */}
          <div
            style={{
              gridColumn: 'span 6',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
            className="profile-hero-info-col"
          >
            {/* Authentic Demo Disclaimer Notice */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                backgroundColor: 'rgba(39, 79, 255, 0.1)',
                border: '1px solid rgba(39, 79, 255, 0.3)',
                borderRadius: '2px',
                marginBottom: '1.5rem'
              }}
            >
              <ShieldAlert size={14} style={{ color: '#274FFF' }} />
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700 }}>
                DEMO PROFILE — VERIFIED CONTENT COMING SOON
              </span>
            </div>

            {/* Name & Primary Category */}
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.28em',
                color: '#274FFF',
                fontWeight: 700,
                marginBottom: '6px'
              }}
            >
              {talent.primaryCategory}
            </span>

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(2.75rem, 5.5vw, 5.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.025em',
                color: '#FAF8F5',
                margin: '0 0 1.25rem 0',
                textTransform: 'uppercase'
              }}
            >
              {talent.name}
            </h1>

            {/* Location & Key Meta */}
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', borderBottom: '1px solid rgba(199, 201, 204, 0.15)', paddingBottom: '1.25rem', width: '100%' }}>
              <div>
                <span style={{ display: 'block', fontSize: '9px', letterSpacing: '0.25em', color: '#A0A4AB' }}>LOCATION</span>
                <span style={{ fontSize: '12px', letterSpacing: '0.15em', color: '#FAF8F5', fontWeight: 600 }}>{talent.location}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '9px', letterSpacing: '0.25em', color: '#A0A4AB' }}>REPRESENTATION</span>
                <span style={{ fontSize: '12px', letterSpacing: '0.15em', color: '#274FFF', fontWeight: 600 }}>PAN-INDIA / GLOBAL</span>
              </div>
            </div>

            {/* ABOUT / BIO */}
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ display: 'block', fontSize: '10px', letterSpacing: '0.25em', color: '#274FFF', fontWeight: 700, marginBottom: '0.75rem' }}>
                ABOUT
              </span>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '1rem',
                  color: '#C7C9CC',
                  lineHeight: 1.7
                }}
              >
                {talent.bio}
              </p>
            </div>

            {/* SKILLS TAG LIST */}
            <div style={{ marginBottom: '2.5rem', width: '100%' }}>
              <span style={{ display: 'block', fontSize: '10px', letterSpacing: '0.25em', color: '#274FFF', fontWeight: 700, marginBottom: '1rem' }}>
                SKILLS & CAPABILITIES
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {talent.skills.map((skill) => (
                  <span
                    key={skill}
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
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* ENQUIRE CTA BUTTON */}
            <button
              onClick={() => onNavigate('/services')}
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
              <span>ENQUIRE ABOUT THIS TALENT</span>
              <ArrowRight size={15} />
            </button>

          </div>
        </div>
      </section>

      {/* CREDITS, EXPERIENCE & VIDEO PLACEHOLDERS */}
      <section
        style={{
          borderTop: '1px solid rgba(199, 201, 204, 0.15)',
          padding: '4rem clamp(1.5rem, 5vw, 5rem)',
          backgroundColor: '#141416'
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3rem'
          }}
          className="profile-placeholders-grid"
        >
          {/* EXPERIENCE */}
          <div style={{ borderLeft: '2px solid rgba(199, 201, 204, 0.2)', paddingLeft: '1.5rem' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
              EXPERIENCE
            </span>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', color: '#A0A4AB', fontWeight: 300, margin: 0 }}>
              Information coming soon.
            </p>
          </div>

          {/* CREDITS */}
          <div style={{ borderLeft: '2px solid rgba(199, 201, 204, 0.2)', paddingLeft: '1.5rem' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
              CREDITS
            </span>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', color: '#A0A4AB', fontWeight: 300, margin: 0 }}>
              Verified credits will appear here.
            </p>
          </div>

          {/* VIDEO PORTFOLIO PLACEHOLDER */}
          <div style={{ borderLeft: '2px solid rgba(199, 201, 204, 0.2)', paddingLeft: '1.5rem' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
              VIDEO PORTFOLIO
            </span>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#C7C9CC',
                marginTop: '4px'
              }}
            >
              <Play size={14} style={{ color: '#274FFF' }} />
              <span>REEL COMING SOON</span>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO EDITORIAL GALLERY */}
      <section
        style={{
          padding: '5rem clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '1440px',
          margin: '0 auto'
        }}
      >
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
            PORTFOLIO GALLERY
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.5rem', fontWeight: 300, color: '#FAF8F5', margin: 0 }}>
            EDITORIAL COMPOSITION
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem'
          }}
        >
          {talent.galleryImages.map((imgUrl, idx) => {
            let colSpan = 'span 6';
            if (idx === 0) colSpan = 'span 8';
            if (idx === 1) colSpan = 'span 4';
            if (idx === 2) colSpan = 'span 4';
            if (idx === 3) colSpan = 'span 8';

            return (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                style={{
                  gridColumn: colSpan,
                  height: '380px',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  border: '1px solid rgba(199, 201, 204, 0.12)'
                }}
                className="gallery-item-card"
              >
                <img
                  src={imgUrl}
                  alt={`${talent.name} gallery ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.05) brightness(0.9)',
                    transition: 'transform 0.5s ease'
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* RELATED TALENT RECOMMENDATIONS ("YOU MAY ALSO LIKE") */}
      <section
        style={{
          borderTop: '1px solid rgba(199, 201, 204, 0.15)',
          padding: '5rem clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '1440px',
          margin: '0 auto'
        }}
      >
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
            RECOMMENDED ROSTER
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.5rem', fontWeight: 300, color: '#FAF8F5', margin: 0 }}>
            YOU MAY ALSO LIKE
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {relatedTalent.map((rel) => (
            <div
              key={rel.id}
              onClick={() => onSelectTalent(rel.id)}
              style={{
                position: 'relative',
                borderRadius: '2px',
                overflow: 'hidden',
                height: '380px',
                backgroundColor: '#141416',
                cursor: 'pointer',
                border: '1px solid rgba(199, 201, 204, 0.1)'
              }}
            >
              <img
                src={rel.image}
                alt={rel.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(11,11,12,0.85) 100%)' }} />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700, display: 'block' }}>{rel.primaryCategory}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 400, color: '#FAF8F5', margin: 0 }}>{rel.name}</h3>
                </div>
                <ArrowUpRight size={16} style={{ color: '#274FFF' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 11, 12, 0.96)',
            backdropFilter: 'blur(16px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'none',
              border: '1px solid rgba(199, 201, 204, 0.3)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#FAF8F5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={22} />
          </button>

          {/* Prev button */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev - 1 + talent.galleryImages.length) % talent.galleryImages.length)}
            style={{
              position: 'absolute',
              left: '2rem',
              background: 'none',
              border: '1px solid rgba(199, 201, 204, 0.3)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#FAF8F5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Main Image */}
          <img
            src={talent.galleryImages[lightboxIndex]}
            alt={`${talent.name} enlarged view`}
            style={{
              maxWidth: '85vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '2px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)'
            }}
          />

          {/* Next button */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % talent.galleryImages.length)}
            style={{
              position: 'absolute',
              right: '2rem',
              background: 'none',
              border: '1px solid rgba(199, 201, 204, 0.3)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#FAF8F5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Bottom Counter */}
          <div style={{ position: 'absolute', bottom: '2rem', color: '#C7C9CC', fontSize: '11px', letterSpacing: '0.2em' }}>
            {lightboxIndex + 1} / {talent.galleryImages.length}
          </div>
        </div>
      )}

      {/* Responsive Profile Rules */}
      <style>{`
        @media (max-width: 1024px) {
          .profile-hero-image-col { grid-column: span 12 !important; height: 420px !important; }
          .profile-hero-info-col { grid-column: span 12 !important; }
          .profile-placeholders-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
