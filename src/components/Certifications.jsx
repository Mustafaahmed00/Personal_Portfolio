import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { certifications } from '../constants';

const CertificationCard = ({ pdf, name, preview }) => {
  return (
    <div className="w-72 h-96 mx-4">
      <div className="relative w-full h-full bg-tertiary rounded-2xl p-4 overflow-hidden group">
        <div className="w-full h-full flex flex-col items-center justify-between">
          {/* Preview Container */}
          <div className="w-full h-[75%] overflow-hidden rounded-xl relative">
            <img 
              src={preview} 
              alt={`${name} preview`}
              className="w-full h-full object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm">Click to view full certificate</span>
            </div>
          </div>
          
          <div className="w-full mt-4 flex flex-col items-center">
            <h3 className="text-white text-lg font-medium mb-2">
              {name}
            </h3>
            
            <button 
              onClick={() => window.open(pdf, '_blank')}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <>
      <div className="border-t border-gray-700 mb-8"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className={`${styles.sectionSubText} text-gray-400`}>
          My Achievements
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Certifications.
        </h2>
      </motion.div>

      <div className="mt-12 overflow-hidden">
        <motion.div 
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 15,
            ease: "linear"
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
    </>
  );
};

export default Certifications;