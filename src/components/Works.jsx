import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ExternalLink } from 'lucide-react';
import IconButton from './IconButton';

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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            layout
        >
            <Tilt
                options={{
                    max: 25,
                    scale: 1.01,
                    speed: 400,
                }}
                className='bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-5 rounded-2xl sm:w-[360px] w-full border border-gray-700
                hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:border-purple-500/50 cursor-pointer'
            >
                <div className='relative w-full h-[230px] group'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-2xl transition-transform duration-300
                        group-hover:scale-[1.05] group-hover:opacity-95' 
                    />

                    <div className='absolute inset-0 flex justify-end m-3 gap-3 card-img_hover'>
                        {source_code_link && (
                            <IconButton
                                onClick={() => window.open(source_code_link, "_blank")}
                                className="bg-gray-800 hover:bg-gray-700" 
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
                                className="bg-gradient-to-br from-purple-700 to-purple-500
                                hover:from-purple-600 hover:to-purple-400" 
                                tooltip="Live Demo"
                            >
                                <ExternalLink className="w-5 h-5 text-white" />
                            </IconButton>
                        )}
                    </div>
                </div>

                <div className='mt-5'>
                    <motion.h3
                        className='text-white font-bold text-[24px] transition-colors duration-300 hover:text-purple-400 cursor-pointer'
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        {name}
                    </motion.h3>
                    <p className='mt-2 text-gray-400 text-[14px] min-h-[85px] leading-relaxed'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <span
                            key={`${name}-${tag.name}`}
                            className={`text-[13px] ${tag.color} px-3 py-1 rounded-full bg-purple-900/30 text-gray-300 transition-all duration-200 hover:bg-purple-900/60 hover:text-gray-100 cursor-pointer border border-transparent hover:border-purple-500/30 hover:scale-105`}
                        >
                            #{tag.name}
                        </span>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Extract unique technologies from all projects
  const allTechnologies = React.useMemo(() => {
    const techs = ['All', ...new Set(
      projects.flatMap(project => project.tags.map(tag => tag.name))
    )];
    return techs.slice(0, 12); // Show top 12 technologies
  }, []);

  // Filter projects based on selected filter
  const filteredProjects = React.useMemo(() => {
    if (selectedFilter === 'All') {
      return projects;
    }
    return projects.filter(project =>
      project.tags.some(tag => tag.name === selectedFilter)
    );
  }, [selectedFilter]);

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      <div style={{ borderTop: "1px solid #374151", marginBottom: '2rem' }}></div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-gray-400`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-gray-400 text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='mt-12 flex flex-wrap gap-3 justify-center'
      >
        {allTechnologies.map((tech, index) => (
          <motion.button
            key={tech}
            onClick={() => handleFilter(tech)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
              selectedFilter === tech
                ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-transparent border-gray-600 text-gray-400 hover:border-purple-500 hover:text-purple-400'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {tech}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Count */}
      <motion.p
        className='text-center mt-6 text-gray-500 text-sm'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={filteredProjects.length}
      >
        Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
      </motion.p>

      {/* Projects Grid */}
      <div className='mt-12 flex flex-wrap gap-7 justify-center'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={project.name} index={index} {...project} />
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-gray-400 text-lg mt-8'
          >
            No projects found for this filter.
          </motion.p>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");