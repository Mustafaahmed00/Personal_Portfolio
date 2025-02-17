import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { certifications } from '../constants';

const CertificationCard = ({ pdf, name, preview }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="w-80 h-[450px] mx-4 flex-shrink-0" 
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full bg-tertiary rounded-2xl overflow-hidden 
                    border border-gray-700 hover:border-primary transition-colors duration-300
                    shadow-lg hover:shadow-primary/20 hover:shadow-2xl">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        
        <div className="relative w-full h-full p-4 flex flex-col items-center justify-between">
          <div className="w-full h-[75%] overflow-hidden rounded-xl relative
                        border-2 border-gray-800 hover:border-primary/50 transition-colors duration-300">
            <motion.img 
              src={preview} 
              alt={`${name} preview`}
              className="w-full h-full object-contain bg-black/20"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div 
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="text-white text-sm px-4 py-2 rounded-lg bg-primary/90
                        border border-white/20 shadow-lg backdrop-blur-sm text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Click to view full certificate
              </motion.span>
            </motion.div>
          </div>
          
          <div className="w-full mt-4 flex flex-col items-center">
            <motion.h3 
              className="text-white text-lg font-medium mb-3 text-center px-2 truncate w-full"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
              title={name}
            >
              {name}
            </motion.h3>
            
            <motion.button 
              onClick={() => window.open(pdf, '_blank')}
              className="px-6 py-2 bg-primary text-white rounded-lg 
                      hover:bg-primary/90 transition-all duration-300
                      border border-primary/50 hover:border-primary
                      shadow-lg hover:shadow-primary/30 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardWidth = 320; // w-80 = 20rem = 320px
  const cardMargin = 32; // mx-4 = 1rem * 2 = 32px
  const totalCardWidth = cardWidth + cardMargin;
  const totalWidth = totalCardWidth * certifications.length;

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="border-t border-gray-700 mb-8"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12"
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
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B1120] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B1120] to-transparent z-10"></div>
            
            <div className="overflow-hidden relative">
              <motion.div 
                className="flex"
                style={{
                  width: `${totalWidth * 2}px`,
                }}
                initial={{ x: 0 }}
                animate={{ 
                  x: -totalWidth,
                  transition: {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    }
                  }
                }}
              >
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
    </section>
  );
};

export default Certifications;