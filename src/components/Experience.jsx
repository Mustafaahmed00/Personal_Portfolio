import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const cardHoverStyle = `
.experience-card:hover .vertical-timeline-element-content {
    box-shadow: 0 10px 40px rgba(153, 51, 255, 0.5), 0 0 20px rgba(197, 163, 255, 0.3);
    border-color: #C5A3FF;
    transform: translateY(-5px);
}

.experience-card .vertical-timeline-element-content {
    transition: all 0.3s ease-in-out;
}
`;

const ExperienceCard = ({ experience }) => {
  return (
      <VerticalTimelineElement
          contentStyle={{
              background: "linear-gradient(135deg, #1C1821 0%, #151030 100%)",
              color: "#EEE8EF",
              boxShadow: "0 5px 20px rgba(0, 0, 0, 0.4)",
              border: "2px solid #915EFF",
              borderRadius: "16px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #915EFF" }}
          date={experience.date}
          iconStyle={{
              background: experience.iconBg,
              color: "#fff",
              borderRadius: "50%",
              boxShadow: "0 0 0 4px #1C1821, 0 0 20px rgba(145, 94, 255, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
          }}
          icon={
              <div className='flex justify-center items-center w-full h-full' style={{ backgroundColor: '#C5A3FF' }}>
                  <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[80%] h-[80%] object-contain'
                      style={{ borderRadius: "50%" }}
                  />
              </div>
          }
            className="experience-card"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div>
                <h3 className='text-white font-bold text-2xl mb-1' style={{ color: '#E6CCFF' }}>{experience.title}</h3>
                <p
                    className='text-gray-400 text-lg font-semibold'
                    style={{ margin: 0, color: '#D09CFA' }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-3'>
                {experience.points.map((point, index) => (
                    <motion.li
                        key={`experience-point-${index}`}
                        className='text-gray-300 text-[15px] pl-1 tracking-wide leading-relaxed'
                        style={{ color: '#C5A3FF' }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {point}
                    </motion.li>
                ))}
            </ul>
          </motion.div>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <div style={{ borderTop: "1px solid #374151", marginBottom: '2rem' }}></div>

            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center uppercase tracking-widest`} style={{ color: '#FFFFFF' }}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center text-white`} style={{ color: '#FFFFFF'}}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-16 flex flex-col overflow-hidden'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <VerticalTimeline lineColor="#CE93D8">
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                </motion.div>
            </div>

             <style>
                {cardHoverStyle}
            </style>
        </>
    );
};

export default SectionWrapper(Experience, "work");
