import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-14 h-14 focus:outline-none group
        ${className}
      `}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      role="switch"
      aria-checked={isDarkMode}
      style={{
        perspective: '1000px',
      }}
    >
      {/* Outer glow ring */}
      <div
        className={`
          absolute inset-0 rounded-full transition-all duration-700 ease-out
          ${isDarkMode
            ? 'bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl scale-110'
            : 'bg-gradient-to-br from-amber-400/30 via-orange-400/30 to-yellow-400/30 blur-xl scale-110'
          }
        `}
        style={{
          animation: isDarkMode
            ? 'pulse-glow 3s ease-in-out infinite'
            : 'pulse-glow 2s ease-in-out infinite',
        }}
      />

      {/* Main orb container */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-700"
        style={{
          transform: isDarkMode ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Sun face */}
        <div
          className={`
            absolute inset-0 rounded-full overflow-hidden
            transition-all duration-700 ease-out
            ${isDarkMode ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}
          `}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg) translateZ(20px)',
          }}
        >
          {/* Sun gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-orange-400 to-yellow-500 animate-gradient-shift" />

          {/* Sun rays (rotating) */}
          <div
            className="absolute inset-0"
            style={{
              animation: 'spin-slow 20s linear infinite',
            }}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-6 -ml-0.5 origin-bottom"
                style={{
                  background: 'linear-gradient(to top, rgba(255,255,255,0.9), transparent)',
                  transform: `rotate(${i * 45}deg) translateY(-120%)`,
                }}
              />
            ))}
          </div>

          {/* Sun core */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 shadow-inner" />

          {/* Sun highlight */}
          <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white/60 blur-sm" />

          {/* Sparkle particles */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${20 + i * 20}%`,
                left: `${30 + i * 15}%`,
                animation: `sparkle ${1 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Moon face */}
        <div
          className={`
            absolute inset-0 rounded-full overflow-hidden
            transition-all duration-700 ease-out
            ${isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
          `}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(20px)',
          }}
        >
          {/* Moon gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-500 to-blue-600" />

          {/* Stars (twinkling) */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${1.5 + Math.random()}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Moon surface */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 shadow-inner" />

          {/* Moon craters */}
          <div className="absolute top-4 right-3 w-2 h-2 rounded-full bg-slate-400/40" />
          <div className="absolute bottom-5 left-3 w-1.5 h-1.5 rounded-full bg-slate-400/30" />
          <div className="absolute top-6 left-5 w-1 h-1 rounded-full bg-slate-400/50" />

          {/* Moon highlight */}
          <div className="absolute top-2 left-3 w-5 h-5 rounded-full bg-white/40 blur-md" />

          {/* Crescent shadow effect */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 70% 30%, transparent 30%, rgba(71, 85, 105, 0.3) 60%)',
            }}
          />
        </div>
      </div>

      {/* Interactive hover ring */}
      <div
        className={`
          absolute inset-0 rounded-full border-2 opacity-0
          group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300
          ${isDarkMode
            ? 'border-purple-400/50'
            : 'border-amber-400/50'
          }
        `}
        style={{
          animation: 'pulse-ring 1.5s ease-in-out infinite',
        }}
      />

      {/* Add required CSS animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.5);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;
