import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10'>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <motion.div 
            className='w-28 h-28 bg-tertiary rounded-full flex items-center justify-center p-4' 
            key={technology.name}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img 
              src={technology.icon} 
              alt={technology.name}
              className="w-16 h-16 object-contain"
            />
          </motion.div>
        ))}
      </div>
      
      <div className='w-full lg:w-1/3 h-[350px]'>
        <BallCanvas icon={technologies[0]?.icon} />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
