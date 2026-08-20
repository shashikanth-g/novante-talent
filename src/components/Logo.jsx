import React from 'react';

/**
 * Novante Talent Brand Logo Component
 * Visual Mark: Minimal ascending-bar symbol with upward directional element.
 * Wordmark: NOVANTE + TALENT supporting wordmark.
 */
export default function Logo({ 
  variant = 'dark', // 'dark' (for light bg), 'light' (for dark bg), 'cobalt'
  size = 'md',       // 'sm', 'md', 'lg', 'xl'
  showText = true,
  className = ''
}) {
  // Color configuration
  const isLightMode = variant === 'dark'; // Dark logo text on light background
  const textColor = isLightMode ? '#0B0B0C' : '#FAF8F5';
  const subtextColor = isLightMode ? 'rgba(11, 11, 12, 0.65)' : 'rgba(250, 248, 245, 0.7)';
  const cobaltColor = '#274FFF';
  const secondaryBarColor = isLightMode ? '#0B0B0C' : '#FFFFFF';

  // Size scale
  const sizeMap = {
    sm: { height: 26, markSize: 22, textMain: '14px', textSub: '8px', spacing: '8px' },
    md: { height: 34, markSize: 28, textMain: '18px', textSub: '9.5px', spacing: '12px' },
    lg: { height: 44, markSize: 36, textMain: '24px', textSub: '12px', spacing: '16px' },
    xl: { height: 60, markSize: 52, textMain: '32px', textSub: '15px', spacing: '20px' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div 
      className={`novante-logo inline-flex items-center select-none ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: currentSize.spacing,
        cursor: 'pointer'
      }}
    >
      {/* Ascending-bar geometric visual mark with upward directional element */}
      <svg 
        width={currentSize.markSize} 
        height={currentSize.markSize} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
        style={{ flexShrink: 0 }}
      >
        {/* Bar 1 (Short left bar) */}
        <rect x="4" y="22" width="5.5" height="14" rx="1.5" fill={secondaryBarColor} opacity="0.4" />
        
        {/* Bar 2 (Medium middle bar) */}
        <rect x="13.5" y="14" width="5.5" height="22" rx="1.5" fill={secondaryBarColor} opacity="0.8" />
        
        {/* Bar 3 (Tall right bar - ascending) */}
        <rect x="23" y="6" width="5.5" height="30" rx="1.5" fill={cobaltColor} />
        
        {/* Upward Directional Element (45-degree arrow / diagonal accent floating above top right) */}
        <path 
          d="M 24 3 L 34 3 L 34 13 M 34 3 L 26 11" 
          stroke={cobaltColor} 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>

      {/* Wordmark */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span 
            style={{ 
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: currentSize.textMain,
              letterSpacing: '0.2em',
              color: textColor,
              lineHeight: 1,
              textTransform: 'uppercase'
            }}
          >
            NOVANTE
          </span>
          <span 
            style={{ 
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: currentSize.textSub,
              letterSpacing: '0.42em',
              color: cobaltColor,
              lineHeight: 1,
              marginTop: '3px',
              textTransform: 'uppercase'
            }}
          >
            TALENT
          </span>
        </div>
      )}
    </div>
  );
}
