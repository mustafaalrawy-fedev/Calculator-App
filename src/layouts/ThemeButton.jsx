import useAction from '../hooks/useAction';
import { motion } from 'framer-motion';

const ThemeButton = ({
  position,
  onClick,
  className,
  themeOption,
  //   bgKeyColor,
  //   bgKeyToggleColor,
}) => {
  const { bgKeyColor, bgKeyToggleColor } = useAction();
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${bgKeyToggleColor} relative w-1/3 h-6 py-4 cursor-pointer ${className} main-transition`}
      onClick={onClick}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: themeOption ? 1 : 0,
          scale: themeOption ? 1 : 0,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
        className={`${bgKeyColor} absolute top-1/2 ${position} -translate-1/2 w-5 h-5 rounded-full`}
      ></motion.span>
    </motion.button>
  );
};
export default ThemeButton;
