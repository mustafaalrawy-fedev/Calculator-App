import { useState, useEffect } from 'react';
import useTheme from '../hooks/useTheme';
import appStyles from '../data/styles';

const useAction = () => {
  const [themeOption, setThemeOption] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme.replace('mode', '') : '1';
  });

  const [theme, toggleTheme, AVAILABLE_THEMES] = useTheme();
  const {
    textColor,
    bgKeyColor,
    bgKeyToggleColor,
    resultColor,
    bgResultColor,
    bgNumbersBtnColor,
    numbersBtnColor,
    delAndResetColor,
    equalBtnColor,
    getReadyBtnColor,
  } = appStyles(theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      toggleTheme(savedTheme);
    }
  }, [toggleTheme]);

  const handleThemeChange = (selectedTheme) => {
    setThemeOption(selectedTheme);
    localStorage.setItem('theme', `mode${selectedTheme}`);
    toggleTheme(`mode${selectedTheme}`);
  };

  return {
    themeOption,
    handleThemeChange,
    AVAILABLE_THEMES,
    textColor,
    bgKeyColor,
    bgKeyToggleColor,
    resultColor,
    bgResultColor,
    bgNumbersBtnColor,
    numbersBtnColor,
    delAndResetColor,
    equalBtnColor,
    getReadyBtnColor,
  };
};

export default useAction;
