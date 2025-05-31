const appStyles = (theme) => {
  const styles = {
    // appBgColor:
    //   theme === 'mode1'
    //     ? 'bg-bg-main-theme-one'
    //     : theme === 'mode2'
    //     ? 'bg-bg-main-theme-two'
    //     : 'bg-bg-main-theme-three',
    bgKeyColor:
      theme === 'mode1'
        ? 'bg-key-toggle-bg-theme-one hover:bg-key-toggle-bg-theme-one/85'
        : theme === 'mode2'
        ? 'bg-key-toggle-bg-theme-two hover:bg-key-toggle-bg-theme-two/85'
        : 'bg-key-toggle-bg-theme-three hover:bg-key-toggle-bg-theme-three/85',
    bgKeyToggleColor:
      theme === 'mode1'
        ? 'bg-bg-keypad-theme-one'
        : theme === 'mode2'
        ? 'bg-bg-keypad-theme-two'
        : 'bg-bg-keypad-theme-three',
    bgResultColor:
      theme === 'mode1'
        ? 'bg-bg-screen-theme-one'
        : theme === 'mode2'
        ? 'bg-bg-screen-theme-two'
        : 'bg-bg-keypad-theme-three',
    resultColor:
      theme === 'mode1'
        ? 'text-primary-color-theme-one'
        : theme === 'mode2'
        ? 'text-secondary-color-theme-two'
        : 'text-secondary-color-theme-three',
    numbersBtnColor:
      theme === 'mode1'
        ? 'text-secondary-color-theme-one bg-key-alt-bg-theme-one main-shadow shadow-key-alt-shadow-theme-one'
        : theme === 'mode2'
        ? 'text-secondary-color-theme-two bg-key-alt-bg-theme-two main-shadow shadow-key-alt-shadow-theme-two'
        : 'text-secondary-color-theme-three bg-key-alt-bg-theme-three main-shadow shadow-key-alt-shadow-theme-three',
    bgNumbersBtnColor:
      theme === 'mode1'
        ? 'bg-bg-keypad-theme-one'
        : theme === 'mode2'
        ? 'bg-bg-keypad-theme-two'
        : 'bg-bg-keypad-theme-three',
    textColor:
      theme === 'mode1'
        ? 'text-primary-color-theme-one'
        : theme === 'mode2'
        ? 'text-secondary-color-theme-two'
        : 'text-secondary-color-theme-three',
    delAndResetColor:
      theme === 'mode1'
        ? 'bg-key-bg-theme-one main-shadow shadow-key-shadow-theme-one text-primary-color-theme-one'
        : theme === 'mode2'
        ? 'text-primary-color-theme-two bg-key-bg-theme-two main-shadow shadow-key-shadow-theme-two'
        : 'text-primary-color-theme-three bg-key-bg-theme-three main-shadow shadow-key-shadow-theme-three',
    equalBtnColor:
      theme === 'mode1'
        ? 'bg-key-toggle-bg-theme-one hover:bg-key-toggle-bg-theme-one/85 main-transition text-primary-color-theme-one main-shadow shadow-key-toggle-shadow-theme-one'
        : theme === 'mode2'
        ? 'bg-key-toggle-bg-theme-two hover:bg-key-toggle-bg-theme-two/85 main-transition text-primary-color-theme-two main-shadow shadow-key-toggle-shadow-theme-two'
        : 'bg-key-toggle-bg-theme-three hover:bg-key-toggle-bg-theme-three/85 main-transition text-tertiary-color-theme-three main-shadow shadow-key-toggle-shadow-theme-three',
    getReadyBtnColor:
      theme === 'mode1'
        ? 'bg-key-toggle-bg-theme-one text-primary-color-theme-one'
        : theme === 'mode2'
        ? 'bg-key-toggle-bg-theme-two text-primary-color-theme-two'
        : 'bg-key-toggle-bg-theme-three text-primary-color-theme-three',
  };
  return { ...styles };
};

export default appStyles;
