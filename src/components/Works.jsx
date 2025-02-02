import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ExternalLink } from 'lucide-react';

const IconButton = ({ onClick, className, children, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`w-10 h-10 rounded-full flex justify-center items-center cursor-pointer 
        transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 ${className}`}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
        bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
          {tooltip}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full 
        hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-300'
      >
        <div className='relative w-full h-[230px] group'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl transition-transform duration-300 
            group-hover:scale-[1.02]'
          />

          <div className='absolute inset-0 flex justify-end m-3 gap-3 card-img_hover'>
            {source_code_link && (
              <IconButton
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient"
                tooltip="View Code"
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </IconButton>
            )}
            
            {live_demo_link && (
              <IconButton
                onClick={() => window.open(live_demo_link, "_blank")}
                className="bg-gradient-to-br from-purple-600 to-blue-600 
                hover:from-purple-500 hover:to-blue-500"
                tooltip="Live Demo"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </IconButton>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] transition-colors 
          duration-300 hover:text-primary cursor-pointer'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] min-h-[85px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} px-2 py-1 rounded-full 
              bg-black/20 transition-colors duration-300 hover:bg-black/40`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");