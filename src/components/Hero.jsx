import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Download, Github, Linkedin } from 'lucide-react';
import { techStack } from '../constants';
import { github } from '../assets';
import { StarsCanvas, ComputersCanvas } from './canvas';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Mustafaahmed00', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/mustafa-ahmed002/', '_blank');
  };

  return (
    <section className="relative w-full h-screen bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-purple-500/30 rounded-full"
              style={{
                transform: `translate(-50%, -50%) scale(${1 + i * 0.1})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="z-10">
          {/* Main Heading */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Mustafa</span>
            </h1>

            <div className="space-y-4">
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                FullStack <br className='sm:block hidden' />
                Software <br className='sm:block hidden' />
                Developer
              </p>

              {/* Tech Stack Pills */}
              <motion.div 
                className="flex flex-wrap gap-2 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 text-sm text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/30"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Resume Button and Social Links */}
              <motion.div
                className="pt-6 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <button 
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </button>
                
                <button 
                  onClick={handleGitHubClick}
                  className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
                >
                  <Github size={20} />
                  View GitHub
                </button>

                <button 
                  onClick={handleLinkedInClick}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  View LinkedIn
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      <StarsCanvas />
      
      {/* 3D Computer Model */}
      <div className='absolute inset-0 top-0 left-0 w-full h-full overflow-hidden'>
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;