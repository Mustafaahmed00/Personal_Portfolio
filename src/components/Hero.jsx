import React from 'react';
import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';
import { styles } from '../styles';
import { Download } from 'lucide-react';
import resume from '../assets/Mohammad_Mustafa_SoftwareEngineer.pdf';

const Hero = () => {
  const techStack = [
    'React', 
    'Next.js', 
    'TypeScript',
    'Shadcn/UI',
    'TailwindCSS',
    'Node.js',
    'MongoDB',
    'Three.js',
    'Framer Motion'
  ];

  const handleDownload = () => {
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Mohammad_Mustafa_SoftwareEngineer.pdf'; // Name the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

              {/* Resume Button */}
              <motion.div
                className="pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <button 
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3D Computer Model */}
      <ComputersCanvas />

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
    </section>
  );
};

export default Hero;