import React, { useEffect, useState } from 'react';
import Logo from './Logo';

/**
 * 2-Second Opening Experience Component
 * 0.0s -> Full screen #0B0B0C
 * 0.2s -> Visual mark subtly appears
 * 0.5s -> NOVANTE appears
 * 0.9s -> TALENT appears
 * 1.3s -> Full logo visibility
 * 1.6s -> Curtain begins sliding/fading away
 * 2.0s -> Complete & Hero revealed
 */
export default function IntroSequence({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: init black, 1: mark, 2: novante, 3: talent, 4: full, 5: exit, 6: done

  useEffect(() => {
    // 0.2s mark appears
    const t1 = setTimeout(() => setStage(1), 200);
    // 0.5s NOVANTE appears
    const t2 = setTimeout(() => setStage(2), 500);
    // 0.9s TALENT appears
    const t3 = setTimeout(() => setStage(3), 900);
    // 1.3s full clarity
    const t4 = setTimeout(() => setStage(4), 1300);
    // 1.6s start slide/fade exit
    const t5 = setTimeout(() => setStage(5), 1600);
    // 2.0s complete
    const t6 = setTimeout(() => {
      setStage(6);
      if (onComplete) onComplete();
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  if (stage === 6) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto select-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: '#0B0B0C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.45s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.4s ease',
        transform: stage >= 5 ? 'translateY(-100%)' : 'translateY(0)',
        opacity: stage >= 5 ? 0.95 : 1
      }}
    >
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          transform: stage >= 5 ? 'scale(0.98)' : 'scale(1)',
          transition: 'transform 0.4s ease'
        }}
      >
        {/* Animated Mark & Text Container */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Ascending bar mark */}
          <div 
            style={{
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(10px)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
              <rect x="4" y="22" width="5.5" height="14" rx="1.5" fill="#FFFFFF" opacity="0.4" />
              <rect x="13.5" y="14" width="5.5" height="22" rx="1.5" fill="#FFFFFF" opacity="0.85" />
              <rect x="23" y="6" width="5.5" height="30" rx="1.5" fill="#274FFF" />
              <path d="M 24 3 L 34 3 L 34 13 M 34 3 L 26 11" stroke="#274FFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Typography reveal */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span 
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '28px',
                letterSpacing: stage >= 2 ? '0.22em' : '0.4em',
                color: '#FAF8F5',
                lineHeight: 1,
                opacity: stage >= 2 ? 1 : 0,
                transform: stage >= 2 ? 'translateY(0)' : 'translateY(8px)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              NOVANTE
            </span>
            <span 
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: stage >= 3 ? '0.45em' : '0.6em',
                color: '#274FFF',
                lineHeight: 1,
                marginTop: '6px',
                opacity: stage >= 3 ? 1 : 0,
                transform: stage >= 3 ? 'translateY(0)' : 'translateY(6px)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              TALENT
            </span>
          </div>
        </div>

        {/* Minimal Progress Indicator line at bottom of mark */}
        <div 
          style={{
            width: '120px',
            height: '1.5px',
            backgroundColor: 'rgba(199, 201, 204, 0.15)',
            marginTop: '2rem',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '1px'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              backgroundColor: '#274FFF',
              width: stage === 0 ? '0%' : stage === 1 ? '25%' : stage === 2 ? '50%' : stage === 3 ? '75%' : '100%',
              transition: 'width 0.35s ease'
            }}
          />
        </div>
      </div>
    </div>
  );
}
