import ThemeButton from './ThemeButton';
import { motion } from 'motion/react';

const CalcHeader = ({
  textColor,
  themeOption,
  handleThemeChange,
  AVAILABLE_THEMES,
}) => {
  return (
    <header className='flex justify-between items-center container py-10'>
      <motion.main
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className={`${textColor} text-4xl font-bold main-transition`}>
          Calc
        </h1>
      </motion.main>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: 'easeOut' }}
        className={`${textColor} self-end ml-auto mr-4 text-sm font-semibold main-transition`}
      >
        THEME
      </motion.h1>
      <aside>
        <motion.ul
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
          className={`${textColor} flex justify-between items-center gap-2 w-24 px-2 main-transition`}
        >
          {AVAILABLE_THEMES.join('')
            .split('mode')
            .slice(1)
            .map((option, index) => (
              <motion.li
                key={option}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2 + index * 0.2,
                  duration: 0.3,
                  ease: 'easeOut',
                }}
              >
                <button
                  onClick={() => handleThemeChange(option)}
                  className={`cursor-pointer main-transition hover:scale-110 ${
                    themeOption === option ? 'font-bold' : ''
                  }`}
                >
                  {option}
                </button>
              </motion.li>
            ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
          className='flex w-24 '
        >
          <ThemeButton
            position='left-4'
            className='rounded-l-full'
            themeOption={themeOption === '1'}
            onClick={() => handleThemeChange('1')}
          />
          <ThemeButton
            position='left-1/2'
            themeOption={themeOption === '2'}
            onClick={() => handleThemeChange('2')}
          />
          <ThemeButton
            position='-right-1'
            className='rounded-r-full'
            themeOption={themeOption === '3'}
            onClick={() => handleThemeChange('3')}
          />
        </motion.div>
      </aside>
    </header>
  );
};

export default CalcHeader;
