import React, { useState, useMemo } from 'react';
import { talentData } from '../data/talentData';
import { ArrowRight, ArrowUpRight, Search, SlidersHorizontal } from 'lucide-react';

/**
 * Talent Directory Component (/talent)
 * Category filter navigation, live search, and asymmetric editorial talent cards.
 */
export default function TalentDirectory({ onSelectTalent, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'ALL',
    'FEMALE',
    'MALE',
    'COMMERCIAL',
    'FASHION',
    'ACTORS',
    'DIGITAL'
  ];

  // Filter talent roster based on category & search query
  const filteredTalent = useMemo(() => {
    return talentData.filter((item) => {
      // Category check
      const matchesCategory =
        selectedCategory === 'ALL' ||
        item.categories.includes(selectedCategory);

      // Search check
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.primaryCategory.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.skills.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div style={{ backgroundColor: '#0B0B0C', color: '#FAF8F5', minHeight: '100vh', paddingTop: '7rem' }}>
      
      {/* DIRECTORY HERO */}
      <section
        style={{
          padding: '2rem clamp(1.5rem, 5vw, 5rem) 4rem clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '1440px',
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
          <span style={{ width: '6px', height: '6px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 600 }}>
            01 / TALENT DIRECTORY
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'end',
            marginBottom: '3rem'
          }}
        >
          <div style={{ gridColumn: 'span 8' }} className="directory-hero-title">
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                lineHeight: 0.94,
                letterSpacing: '-0.03em',
                color: '#FAF8F5',
                margin: 0,
                textTransform: 'uppercase'
              }}
            >
              PEOPLE <span style={{ fontStyle: 'italic', color: '#FFFFFF' }}>WITH</span> PRESENCE.
            </h1>
          </div>

          <div style={{ gridColumn: 'span 4' }} className="directory-hero-copy">
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                color: '#C7C9CC',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              A curated showcase of talent across fashion, commercial, entertainment and digital media representation.
            </p>
          </div>
        </div>

        {/* CATEGORY FILTER BAR & SEARCH BAR */}
        <div
          style={{
            borderTop: '1px solid rgba(199, 201, 204, 0.15)',
            borderBottom: '1px solid rgba(199, 201, 204, 0.15)',
            padding: '1.25rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          {/* CATEGORIES BUTTON STRIP */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: isActive ? '2px solid #274FFF' : '2px solid transparent',
                    padding: '6px 2px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#FFFFFF' : '#A0A4AB',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* SEARCH INPUT */}
          <div style={{ position: 'relative', width: '260px' }} className="directory-search-container">
            <Search
              size={14}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#A0A4AB'
              }}
            />
            <input
              type="text"
              placeholder="SEARCH TALENT"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'rgba(250, 248, 245, 0.05)',
                border: '1px solid rgba(199, 201, 204, 0.2)',
                borderRadius: '2px',
                padding: '8px 12px 8px 34px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#FAF8F5',
                outline: 'none'
              }}
            />
          </div>
        </div>

      </section>

      {/* ASYMMETRIC TALENT GRID */}
      <section
        style={{
          padding: '0 clamp(1.5rem, 5vw, 5rem) 6rem clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '1440px',
          margin: '0 auto'
        }}
      >
        {filteredTalent.length === 0 ? (
          <div
            style={{
              padding: '6rem 2rem',
              textAlign: 'center',
              border: '1px border-dashed rgba(199, 201, 204, 0.2)',
              borderRadius: '2px'
            }}
          >
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#A0A4AB', display: 'block', marginBottom: '1rem' }}>
              NO TALENT MATCHED YOUR SEARCH
            </span>
            <button
              onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
              style={{
                backgroundColor: '#274FFF',
                color: '#FFFFFF',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '2px',
                fontSize: '11px',
                letterSpacing: '0.18em',
                cursor: 'pointer'
              }}
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(1.25rem, 2.5vw, 2.5rem)'
            }}
          >
            {filteredTalent.map((item, idx) => {
              // Asymmetric spans
              let colSpan = 'span 4';
              let heightPx = '480px';
              if (idx % 5 === 0) { colSpan = 'span 7'; heightPx = '520px'; }
              else if (idx % 5 === 1) { colSpan = 'span 5'; heightPx = '520px'; }

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectTalent(item.id)}
                  style={{
                    gridColumn: colSpan,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '2px',
                    backgroundColor: '#141416',
                    height: heightPx,
                    cursor: 'pointer',
                    border: '1px solid rgba(199, 201, 204, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="talent-directory-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(39, 79, 255, 0.4)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(199, 201, 204, 0.1)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1)';
                  }}
                >
                  {/* Portrait Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      filter: 'contrast(1.06) brightness(0.9)',
                      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 50%, rgba(11, 11, 12, 0.88) 100%)'
                    }}
                  />

                  {/* Demo Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      backgroundColor: 'rgba(11, 11, 12, 0.75)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                      border: '1px solid rgba(199, 201, 204, 0.2)',
                      fontSize: '9px',
                      letterSpacing: '0.2em',
                      color: '#274FFF',
                      fontWeight: 700
                    }}
                  >
                    DEMO ROSTER
                  </div>

                  {/* Card Info Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '1.75rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                        <span style={{ fontSize: '9px', letterSpacing: '0.25em', color: '#274FFF', fontWeight: 700 }}>
                          {item.primaryCategory}
                        </span>
                        <span style={{ fontSize: '9px', color: '#A0A4AB' }}>•</span>
                        <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: '#C7C9CC' }}>
                          {item.location}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: '1.85rem',
                          fontWeight: 400,
                          color: '#FAF8F5',
                          margin: 0,
                          lineHeight: 1.1
                        }}
                      >
                        {item.name}
                      </h3>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '10px',
                        letterSpacing: '0.18em',
                        color: '#FAF8F5',
                        fontWeight: 600
                      }}
                    >
                      <span>VIEW PROFILE</span>
                      <ArrowUpRight size={14} style={{ color: '#274FFF' }} />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* FOOTER CASTING ENQUIRY STRIP */}
      <section
        style={{
          backgroundColor: '#141416',
          borderTop: '1px solid rgba(199, 201, 204, 0.15)',
          padding: '4rem clamp(1.5rem, 5vw, 5rem)'
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 300,
                color: '#FAF8F5',
                margin: '0 0 8px 0',
                textTransform: 'uppercase'
              }}
            >
              CAN'T FIND WHAT YOU'RE LOOKING FOR?
            </h3>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', color: '#C7C9CC', margin: 0, fontWeight: 300 }}>
              Tell us what your project needs and our team will help identify the right talent.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/services')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
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
            <span>START A CASTING ENQUIRY</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* Directory Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .directory-hero-title { grid-column: span 12 !important; }
          .directory-hero-copy { grid-column: span 12 !important; }
          .talent-directory-card { grid-column: span 6 !important; height: 400px !important; }
        }
        @media (max-width: 640px) {
          .directory-search-container { width: 100% !important; }
          .talent-directory-card { grid-column: span 12 !important; height: 380px !important; }
        }
      `}</style>
    </div>
  );
}
