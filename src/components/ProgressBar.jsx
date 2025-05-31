import { motion, AnimatePresence } from 'motion/react';

const ProgressBar = ({ progress, progressContainerColor, progressColor }) => {
  return (
    <div
      className={`w-40 h-2 rounded-full overflow-hidden ${progressContainerColor}`}
    >
      <AnimatePresence>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          exit={{ width: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className={`h-2 rounded-full ${progressColor}`}
        />
      </AnimatePresence>
    </div>
  );
};

export default ProgressBar;
