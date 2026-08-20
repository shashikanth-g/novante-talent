import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

/**
 * Novante Talent Responsive Navigation Bar Component
 * Supports client-side router navigation across /, /talent, /services, /casting, /join, /about and section anchors.
 */
export default function Navbar({ isIntroFinished = true, currentRoute = '/', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'ABOUT', route: '/about' },
    { label: 'TALENT', route: '/talent' },
    { label: 'SERVICES', route: '/services' },
    { label: 'CASTING', route: '/casting' }
  ];

  const handleLinkClick = (e, route) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(route);
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? '1rem clamp(1.5rem, 5vw, 4rem)' : '1.75rem clamp(1.5rem, 5vw, 4rem)',
          backgroundColor: isScrolled ? 'rgba(11, 11, 12, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(199, 201, 204, 0.12)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: isIntroFinished ? 1 : 0,
          transform: isIntroFinished ? 'translateY(0)' : 'translateY(-10px)'
        }}
      >
        <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* LEFT: NOVANTE TALENT LOGO */}
          <a href="/" onClick={(e) => handleLinkClick(e, '/')} aria-label="Novante Talent Homepage" style={{ textDecoration: 'none' }}>
            <Logo variant="light" size="md" />
          </a>

          {/* CENTER: DESKTOP NAVIGATION LINKS */}
          <nav 
            className="hidden-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem'
            }}
          >
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route || 
                (currentRoute === '/about' && link.route === '/about') ||
                (currentRoute === '/talent' && link.route === '/talent') || 
                (currentRoute === '/services' && link.route === '/services') ||
                (currentRoute === '/casting' && link.route === '/casting');

              return (
                <a
                  key={link.label}
                  href={link.route}
                  onClick={(e) => handleLinkClick(e, link.route)}
                  className="nav-link-item"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '12px',
                    letterSpacing: '0.2em',
                    color: isActive ? '#FFFFFF' : '#FAF8F5',
                    opacity: isActive ? 1 : 0.82,
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '4px 0',
                    borderBottom: isActive ? '2px solid #274FFF' : '2px solid transparent',
                    transition: 'opacity 0.25s ease, color 0.25s ease'
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: JOIN THE AGENCY CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              href="/join"
              onClick={(e) => handleLinkClick(e, '/join')}
              className="hidden-mobile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.6rem 1.4rem',
                border: '1px solid rgba(250, 248, 245, 0.3)',
                borderRadius: '2px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.18em',
                color: '#FAF8F5',
                backgroundColor: currentRoute === '/join' ? 'rgba(39, 79, 255, 0.15)' : 'transparent',
                borderColor: currentRoute === '/join' ? '#274FFF' : 'rgba(250, 248, 245, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#274FFF';
                e.currentTarget.style.backgroundColor = 'rgba(39, 79, 255, 0.1)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = currentRoute === '/join' ? '#274FFF' : 'rgba(250, 248, 245, 0.3)';
                e.currentTarget.style.backgroundColor = currentRoute === '/join' ? 'rgba(39, 79, 255, 0.15)' : 'transparent';
                e.currentTarget.style.color = '#FAF8F5';
              }}
            >
              <span>JOIN THE AGENCY</span>
              <span style={{ color: '#274FFF', fontSize: '12px' }}>✦</span>
            </a>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="show-mobile-only"
              aria-label="Toggle Navigation Menu"
              style={{
                background: 'none',
                border: '1px solid rgba(199, 201, 204, 0.3)',
                borderRadius: '2px',
                color: '#FAF8F5',
                padding: '8px 12px',
                cursor: 'pointer',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '11px',
                letterSpacing: '0.15em'
              }}
            >
              <span>MENU</span>
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN EDITORIAL MOBILE MENU DRAWER */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0B0B0C',
          zIndex: 2000,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2.5rem 1.75rem 3rem 1.75rem',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease'
        }}
      >
        {/* Drawer Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo variant="light" size="sm" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
            style={{
              background: 'none',
              border: '1px solid rgba(199, 201, 204, 0.25)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: '#FAF8F5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#274FFF', fontWeight: 600 }}>NAVIGATION</span>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.route}
              onClick={(e) => handleLinkClick(e, link.route)}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '2.25rem',
                fontWeight: 400,
                color: '#FAF8F5',
                textDecoration: 'none',
                lineHeight: 1.1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(199, 201, 204, 0.1)',
                paddingBottom: '0.5rem'
              }}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={22} style={{ color: '#274FFF' }} />
            </a>
          ))}
          
          <a
            href="/join"
            onClick={(e) => handleLinkClick(e, '/join')}
            style={{
              marginTop: '0.75rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '1rem',
              backgroundColor: '#274FFF',
              color: '#FFFFFF',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '12px',
              letterSpacing: '0.2em',
              textDecoration: 'none',
              borderRadius: '2px'
            }}
          >
            JOIN THE AGENCY
          </a>
        </div>

        {/* Drawer Footer info */}
        <div style={{ borderTop: '1px solid rgba(199, 201, 204, 0.15)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#A0A4AB' }}>NOVANTE TALENT © 2026</span>
          <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#274FFF' }}>PAN-INDIA TALENT MANAGEMENT</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile-only { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
