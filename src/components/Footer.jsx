import React from 'react';
import Logo from './Logo';

/**
 * Editorial Footer Component
 * Dark #0B0B0C background with Novante mark, manifesto closing statement,
 * navigation links, and pan-India talent management declaration.
 */
export default function Footer({ onNavigate }) {
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#0B0B0C',
        color: '#FAF8F5',
        borderTop: '1px solid rgba(199, 201, 204, 0.15)',
        padding: '5rem clamp(1.5rem, 5vw, 5rem) 3rem clamp(1.5rem, 5vw, 5rem)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            marginBottom: '4rem',
            alignItems: 'start'
          }}
          className="footer-grid"
        >
          {/* BRAND COLUMN (6 COLUMNS) */}
          <div style={{ gridColumn: 'span 6' }} className="footer-brand">
            <div style={{ marginBottom: '2rem' }}>
              <Logo variant="light" size="lg" />
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: '#FAF8F5',
                margin: '0 0 1.25rem 0',
                textTransform: 'uppercase'
              }}
            >
              THE NEXT<br />
              GENERATION <span style={{ fontStyle: 'italic' }}>OF TALENT.</span>
            </h2>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.95rem',
                color: '#C7C9CC',
                lineHeight: 1.7,
                maxWidth: '460px',
                fontWeight: 300,
                margin: 0
              }}
            >
              Talent, developed with intention. Represented with discipline. Placed with purpose.
            </p>
          </div>

          {/* NAVIGATION LINKS (3 COLUMNS) */}
          <div style={{ gridColumn: 'span 3' }} className="footer-nav">
            <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#274FFF', fontWeight: 600, display: 'block', marginBottom: '1.5rem' }}>
              NAVIGATION
            </span>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { label: 'TALENT DIRECTORY', path: '/talent' },
                { label: 'AGENCY SERVICES', path: '/services' },
                { label: 'PRIVATE CASTING', path: '/casting' },
                { label: 'ABOUT NOVANTE', path: '/about' },
                { label: 'JOIN THE AGENCY', path: '/join' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '12px',
                      letterSpacing: '0.18em',
                      color: '#C7C9CC',
                      textDecoration: 'none',
                      transition: 'color 0.25s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.target.style.color = '#C7C9CC')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ETHICAL STANDARDS & PAN-INDIA (3 COLUMNS) */}
          <div style={{ gridColumn: 'span 3' }} className="footer-info">
            <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#274FFF', fontWeight: 600, display: 'block', marginBottom: '1.5rem' }}>
              PAN-INDIA REPRESENTATION
            </span>

            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.9rem', color: '#A0A4AB', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.5rem' }}>
              Connecting talent and opportunities across India's evolving fashion, advertising, and creative sectors.
            </p>

            <div style={{ padding: '12px 14px', backgroundColor: 'rgba(250, 248, 245, 0.03)', border: '1px solid rgba(199, 201, 204, 0.15)', borderRadius: '2px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#274FFF', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                ETHICAL REPRESENTATION
              </span>
              <span style={{ fontSize: '11px', color: '#C7C9CC', lineHeight: 1.4, display: 'block', fontWeight: 300 }}>
                Representation is not a guarantee of work. No hidden registration fees.
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL & COPYRIGHT STRIP */}
        <div
          style={{
            borderTop: '1px solid rgba(199, 201, 204, 0.12)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11px', letterSpacing: '0.15em', color: '#A0A4AB' }}>
            © {new Date().getFullYear()} NOVANTE TALENT. ALL RIGHTS RESERVED.
          </span>

          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11px', letterSpacing: '0.15em', color: '#274FFF', fontWeight: 600 }}>
            PAN-INDIA TALENT MANAGEMENT
          </span>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-brand, .footer-nav, .footer-info { grid-column: span 12 !important; }
        }
      `}</style>
    </footer>
  );
}
