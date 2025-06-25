import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const skills = [
  {
    name: "React/Next.js",
    level: 90,
    color: "#61DAFB"
  },
  {
    name: "TypeScript/JavaScript",
    level: 85,
    color: "#3178C6"
  },
  {
    name: "Node.js/Express",
    level: 80,
    color: "#339933"
  },
  {
    name: "Python",
    level: 75,
    color: "#3776AB"
  },
  {
    name: "MongoDB/PostgreSQL",
    level: 80,
    color: "#47A248"
  },
  {
    name: "Docker/Kubernetes",
    level: 70,
    color: "#2496ED"
  },
  {
    name: "AWS/Azure",
    level: 75,
    color: "#FF9900"
  },
  {
    name: "Git/GitHub",
    level: 85,
    color: "#F05032"
  },
  {
    name: "Tailwind CSS",
    level: 90,
    color: "#06B6D4"
  },
  {
    name: "AI/ML (TensorFlow)",
    level: 70,
    color: "#FF6F00"
  }
];

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium text-sm sm:text-base">
          {skill.name}
        </span>
        <span className="text-white font-bold text-sm sm:text-base">
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-3 relative overflow-hidden">
        <motion.div
          className="h-3 rounded-full relative"
          style={{ 
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
            width: `${skill.level}%`
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technical Proficiency</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Frontend & Backend</h3>
          {skills.slice(0, 5).map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
        
        <div>
          <h3 className="text-white text-xl font-bold mb-6">DevOps & Tools</h3>
          {skills.slice(5).map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index + 5} />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-gray-400 text-sm">
          Skills are rated based on my experience and confidence level in each technology
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills"); 