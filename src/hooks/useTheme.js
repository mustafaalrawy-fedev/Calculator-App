import { useState, useEffect } from 'react';

const AVAILABLE_THEMES = ['mode1', 'mode2', 'mode3']; // Define available themes
const DEFAULT_THEME = 'mode1';

const useTheme = () => {
  // Get theme from localStorage or use default, validate against available themes
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return AVAILABLE_THEMES.includes(savedTheme) ? savedTheme : DEFAULT_THEME;
  });

  const toggleTheme = (themeMode) => {
    // Validate theme before setting
    if (AVAILABLE_THEMES.includes(themeMode)) {
      setTheme(themeMode);
    } else {
      console.warn(`Invalid theme: ${themeMode}. Using default theme.`);
      setTheme(DEFAULT_THEME);
    }
  };

  // Apply theme to document and save to localStorage
  useEffect(() => {
    // document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, toggleTheme, AVAILABLE_THEMES];
};

export default useTheme;
