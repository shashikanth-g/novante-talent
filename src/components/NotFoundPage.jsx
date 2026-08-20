import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Premium 404 Page Component
 * Dark #0B0B0C background with editorial title & return home CTA.
 */
export default function NotFoundPage({ onNavigate }) {
  return (
    <div
      style={{
        backgroundColor: '#0B0B0C',
        color: '#FAF8F5',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '640px' }}>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(6rem, 15vw, 12rem)',
            fontWeight: 300,
            color: 'rgba(39, 79, 255, 0.25)',
            lineHeight: 1,
            display: 'block',
            userSelect: 'none'
          }}
        >
          404
        </span>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 300,
            margin: '0 0 1rem 0',
            textTransform: 'uppercase'
          }}
        >
          THIS PAGE DOESN'T EXIST.
        </h1>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '1rem',
            color: '#C7C9CC',
            fontWeight: 300,
            marginBottom: '2.5rem'
          }}
        >
          But there is plenty more to discover across our talent roster and representation services.
        </p>

        <button
          onClick={() => onNavigate('/')}
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
          <span>RETURN HOME</span>
          <ArrowRight size={15} style={{ color: '#274FFF' }} />
        </button>
      </div>
    </div>
  );
}
