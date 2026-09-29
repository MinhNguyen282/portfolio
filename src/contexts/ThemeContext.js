import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Day window: 06:00–17:59  (light)
// Night window: 18:00–05:59 (dark)
const DAY_START_HOUR = 6;
const NIGHT_START_HOUR = 18;

const isNightHour = (hour) => hour >= NIGHT_START_HOUR || hour < DAY_START_HOUR;

const getTimeBasedDarkMode = () => {
  if (typeof window === 'undefined') return false; // SSR / test fallback
  return isNightHour(new Date().getHours());
};

export const ThemeProvider = ({ children }) => {
  // null = auto (follow wall clock); boolean = session-only manual override
  const [override, setOverride] = useState(null);
  const [timeBasedDark, setTimeBasedDark] = useState(getTimeBasedDarkMode);
  const [loading, setLoading] = useState(false);

  const isDarkMode = override !== null ? override : timeBasedDark;
  const isAutoMode = override === null;

  // Apply theme class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Watch the wall clock — flip mode at 6 AM / 6 PM and clear any override
  useEffect(() => {
    const sync = () => {
      const next = getTimeBasedDarkMode();
      setTimeBasedDark((prev) => {
        if (prev !== next) {
          // Boundary crossed (6 AM ↔ 6 PM) — drop manual override so auto resumes
          setOverride(null);
          return next;
        }
        return prev;
      });
    };

    const interval = setInterval(sync, 60 * 1000);

    // Re-sync when the tab regains focus (e.g. laptop slept across a boundary)
    const onVisibility = () => {
      if (document.visibilityState === 'visible') sync();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  // Manual toggle = session-only override; auto resumes at next boundary cross
  const toggleTheme = () => {
    setOverride(!isDarkMode);
  };

  const value = {
    isDarkMode,
    toggleTheme,
    isAutoMode,
    loading,
    setLoading,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
