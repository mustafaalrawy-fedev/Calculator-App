import useAction from '../hooks/useAction';
// import numbers from '../data/numbers';
import CalcHeader from './CalcHeader';
import CalcInputs from './CalcInputs';

const CalcApp = () => {
  const {
    themeOption,
    handleThemeChange,
    bgResultColor,
    resultColor,
    bgNumbersBtnColor,
    numbersBtnColor,
    delAndResetColor,
    equalBtnColor,
    textColor,
    AVAILABLE_THEMES,
  } = useAction();

  return (
    <>
      <CalcHeader
        textColor={textColor}
        themeOption={themeOption}
        handleThemeChange={handleThemeChange}
        AVAILABLE_THEMES={AVAILABLE_THEMES}
      />
      {/* Calculator */}
      <CalcInputs
        bgResultColor={bgResultColor}
        resultColor={resultColor}
        bgNumbersBtnColor={bgNumbersBtnColor}
        delAndResetColor={delAndResetColor}
        equalBtnColor={equalBtnColor}
        numbersBtnColor={numbersBtnColor}
      />
    </>
  );
};

export default CalcApp;
