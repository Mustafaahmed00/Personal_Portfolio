import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { certifications } from '../constants';

const CertificationCard = ({ pdf, name, preview }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="w-96 h-[500px] mx-6" // Increased size
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full bg-tertiary rounded-2xl overflow-hidden group 
                      border border-gray-700 hover:border-primary transition-colors duration-300
                      shadow-lg hover:shadow-primary/20 hover:shadow-2xl">
        {/* Glass effect background */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        
        <div className="relative w-full h-full p-6 flex flex-col items-center justify-between">
          {/* Preview Container */}
          <div className="w-full h-[80%] overflow-hidden rounded-xl relative
                          border-2 border-gray-800 hover:border-primary/50 transition-colors duration-300">
            <motion.img 
              src={preview} 
              alt={`${name} preview`}
              className="w-full h-full object-contain bg-black/20"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
            {/* Hover Overlay */}
            <motion.div 
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-white text-base px-6 py-3 rounded-lg bg-primary/90
                          border border-white/20 shadow-lg backdrop-blur-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Click to view full certificate
              </motion.span>
            </motion.div>
          </div>
          
          <div className="w-full mt-6 flex flex-col items-center">
            <motion.h3 
              className="text-white text-xl font-medium mb-4 text-center"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {name}
            </motion.h3>
            
            <motion.button 
              onClick={() => window.open(pdf, '_blank')}
              className="px-8 py-3 bg-primary text-white rounded-lg 
                        hover:bg-primary/90 transition-all duration-300
                        border border-primary/50 hover:border-primary
                        shadow-lg hover:shadow-primary/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate
            </motion.button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Calculate total width for proper scrolling
  const cardWidth = 384; // w-96 = 24rem = 384px
  const cardMargin = 48; // mx-6 = 1.5rem = 24px * 2 = 48px
  const totalCardWidth = cardWidth + cardMargin;
  const totalWidth = totalCardWidth * certifications.length;

  return (
    <>
      <div className="border-t border-gray-700 mb-12"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16" // Increased bottom margin
      >
        <p className={`${styles.sectionSubText} text-gray-400`}>
          My Achievements
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Certifications.
        </h2>
      </motion.div>

      <AnimatePresence>
        {isVisible && (
          <div className="relative overflow-hidden">
            {/* Gradient overlay for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0B1120] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0B1120] to-transparent z-10"></div>
            
            <div className="mt-4 overflow-hidden relative">
              <motion.div 
                className="flex"
                style={{
                  width: `${totalWidth * 2}px`, // Double width for seamless loop
                }}
                initial={{ x: 0 }}
                animate={{ 
                  x: -totalWidth,
                  transition: {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20, // Slower, smoother animation
                      ease: "linear",
                    }
                  }
                }}
              >
                {/* Double the certifications for seamless loop */}
                {[...certifications, ...certifications].map((cert, index) => (
                  <CertificationCard
                    key={`certification-${index}`}
                    {...cert}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;