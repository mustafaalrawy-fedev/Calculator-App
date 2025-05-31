import numbers from '../data/numbers';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

const CalcInputs = ({
  bgResultColor,
  resultColor,
  bgNumbersBtnColor,
  delAndResetColor,
  equalBtnColor,
  numbersBtnColor,
}) => {
  const resultRef = useRef(null);
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNewNumber, setWaitingForNewNumber] = useState(false);
  //   const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    resultRef.current.value = currentValue;
  }, [currentValue]);

  const calculate = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result;

    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case 'x':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    return result.toString();
  };

  const handleNumberClicked = (value) => {
    if (typeof value === 'number' || value === '.') {
      if (waitingForNewNumber) {
        setCurrentValue(value.toString());
        setWaitingForNewNumber(false);
        // setDisplayValue(previousValue);
      } else {
        setCurrentValue(
          currentValue === '0'
            ? value.toString()
            : currentValue + value.toString()
        );
      }
    } else if (['+', '-', 'x', '/'].includes(value)) {
      setPreviousValue(currentValue);
      setOperator(value);
      setWaitingForNewNumber(true);
    } else if (value === '=') {
      if (operator && previousValue) {
        const result = calculate();
        setCurrentValue(result);
        setPreviousValue(null);
        setOperator(null);
        setWaitingForNewNumber(true);
      }
    } else if (value === 'DEL') {
      setCurrentValue(currentValue.slice(0, -1) || '0');
    } else if (value === 'RESET') {
      setCurrentValue('0');
      setPreviousValue(null);
      setOperator(null);
      setWaitingForNewNumber(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className='container'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.5, ease: 'easeInOut' },
        }}
        className={`text-right ${bgResultColor} p-6 rounded-md mb-5 main-transition`}
      >
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            ref={resultRef}
            readOnly
            className={`${resultColor} text-4xl font-bold text-right w-full main-transition focus:outline-none focus:ring-0 focus:border-none`}
          />
        </form>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
        className={`grid grid-cols-4 gap-4 ${bgNumbersBtnColor} p-6 rounded-md main-transition`}
      >
        {numbers.map((number, idx) => (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: idx * 0.1,
                ease: 'easeInOut',
              },
            }}
            key={number}
            className={`${
              number === 'RESET' || number === '=' ? 'col-span-2' : ''
            } w-full h-full text-2xl text-center font-bold main-transition`}
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
              type='button'
              onClick={() => handleNumberClicked(number)}
              className={`${
                number === 'RESET' || number === 'DEL'
                  ? `${delAndResetColor}`
                  : number === '='
                  ? `${equalBtnColor}`
                  : `${numbersBtnColor} `
              } w-full h-full py-2 px-2 rounded-t-md rounded-b-sm text-2xl sm:text-3xl`}
            >
              {number}
            </motion.button>
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
};

export default CalcInputs;
