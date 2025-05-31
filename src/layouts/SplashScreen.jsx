import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useAction from '../hooks/useAction';
import CalcApp from './CalcApp';
import ProgressBar from '../components/ProgressBar';

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const [getReady, setGetReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const { textColor, getReadyBtnColor, bgKeyToggleColor } = useAction();

  return (
    <>
      {loading ? (
        <div
          className={`w-screen h-screen flex flex-col justify-center items-center`}
        >
          <motion.main
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
            className={`${textColor} text-4xl font-bold mb-5`}
          >
            <h1>Calculator App</h1>
          </motion.main>
          {/* Progress Bar */}
          <ProgressBar
            progress={100}
            progressContainerColor={bgKeyToggleColor}
            progressColor={getReadyBtnColor}
          />
        </div>
      ) : !loading && !getReady ? (
        <div
          className={`w-screen h-screen flex flex-col justify-center items-center`}
        >
          <main className={`${textColor} text-4xl font-bold`}>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeInOut' }}
            >
              Calculator App
            </motion.h1>
          </main>
          {/* Progress Bar */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.1 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeInOut' }}
            onClick={() => setGetReady(true)}
            className={`${getReadyBtnColor} px-5 py-2 rounded-md my-5`}
          >
            Get Ready
          </motion.button>
        </div>
      ) : (
        <CalcApp />
      )}
    </>
  );
};

export default SplashScreen;
