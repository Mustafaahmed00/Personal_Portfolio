import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            onLoadingComplete();
          }, 300);
          return 100;
        }
        return prevProgress + Math.random() * 25;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
        >
          {/* Animated Logo/Name */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.h1
              className="text-6xl font-black text-white mb-2"
              animate={{
                background: [
                  'linear-gradient(to right, #915EFF, #915EFF)',
                  'linear-gradient(to right, #915EFF, #C5A3FF)',
                  'linear-gradient(to right, #C5A3FF, #915EFF)',
                  'linear-gradient(to right, #915EFF, #915EFF)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 bg-clip-text text-transparent">
                MA
              </span>
            </motion.h1>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden relative">
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />

            {/* Progress Fill */}
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </div>

          {/* Progress Percentage */}
          <motion.p
            className="mt-4 text-purple-400 font-semibold text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.floor(progress)}%
          </motion.p>

          {/* Loading Text */}
          <motion.div
            className="mt-2 flex space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-gray-400 text-sm">Loading</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-400 text-sm"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="text-gray-400 text-sm"
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className="text-gray-400 text-sm"
            >
              .
            </motion.span>
          </motion.div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-500 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 10,
                  opacity: 0,
                }}
                animate={{
                  y: -10,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
