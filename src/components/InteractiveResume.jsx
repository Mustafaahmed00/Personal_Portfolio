import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { Download, ChevronDown, ChevronUp, ExternalLink, Calendar, MapPin, Building } from 'lucide-react';

const resumeData = {
  personalInfo: {
    name: "Mohammad Mustafa Ahmed",
    title: "Full Stack Developer",
    email: "mohammad.m@jobstechmails.com",
    location: "Boston, MA",
    phone: "+1 (312) 375-5058",
    website: "mustafaahmed.me"
  },
  summary: "Passionate Full Stack Developer with expertise in building scalable applications and implementing AI solutions. Specialized in React, Next.js, Node.js, and Python with experience in healthcare systems and educational technology.",
  
  experience: [
    {
      id: 1,
      title: "Software Developer",
      company: "Freelancer (Remote)",
      location: "Remote",
      period: "January 2024 – February 2025",
      type: "Full-time",
      description: "Developed healthcare applications and patient management systems using modern technologies.",
      achievements: [
        "Developed patient management systems using Java and Spring Boot, processing 50,000+ patient records daily",
        "Enhanced healthcare applications with React/JavaScript, reducing patient navigation steps by 40%",
        "Applied JUnit and Postman for systematic testing, reducing clinical system incidents by 25%",
        "Participated in Agile SDLC practices using Git/GitHub for version control",
        "Assisted in developing RESTful APIs integrating electronic health record services"
      ],
      technologies: ["Java", "Spring Boot", "React", "JavaScript", "MySQL", "JUnit", "Postman", "Git"]
    },
    {
      id: 2,
      title: "Software Developer",
      company: "Freelancer (Remote)",
      location: "Remote",
      period: "January 2023 – December 2023",
      type: "Full-time",
      description: "Built responsive web applications and microservices using modern tech stack.",
      achievements: [
        "Developed responsive web applications using React (TypeScript) and Spring Boot",
        "Designed secure authentication systems utilizing Node.js and Express.js",
        "Created interactive data visualization dashboards using MongoDB",
        "Implemented microservices architecture using Docker and Kubernetes",
        "Conducted comprehensive software testing using Jest and Postman"
      ],
      technologies: ["React", "TypeScript", "Spring Boot", "Node.js", "Express.js", "MongoDB", "Docker", "Kubernetes", "Jest"]
    },
    {
      id: 3,
      title: "Technology Specialist",
      company: "UMass Boston",
      location: "Boston, MA",
      period: "February 2023 - May 2025",
      type: "Part-time",
      description: "Led technology initiatives and developed applications for university systems.",
      achievements: [
        "Developed responsive website for Technovator, boosting department engagement by 40%",
        "Led team in creating Zoom SDK and React-based app for 16,000+ students",
        "Engineered AI-powered chatbot for Canvas LMS, reducing response times by 60%",
        "Implemented cybersecurity protocols aligned with NIST standards",
        "Built Beacon Pathway app with Next.js, TypeScript, and GraphQL"
      ],
      technologies: ["React", "Next.js", "TypeScript", "GraphQL", "TensorFlow.js", "Zoom SDK", "Canvas LMS"]
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "University of Massachusetts Boston",
      period: "2021 - 2025",
      gpa: "3.8/4.0",
      relevantCourses: ["Web Development", "Database Management", "Software Engineering", "AI/ML", "Cybersecurity"]
    }
  ],
  
  skills: {
    technical: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Python", "Java", "Spring Boot"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    cloud: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    tools: ["Git", "GitHub", "Jest", "Postman", "Figma", "Jira"],
    ai: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn"]
  },
  
  certifications: [
    {
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-123456"
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "AZ-900-123456"
    }
  ]
};

const ResumeSection = ({ title, children, isOpen, onToggle }) => {
  return (
    <motion.div
      className="bg-black-100 p-6 rounded-2xl mb-6 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        {isOpen ? <ChevronUp size={24} className="text-white" /> : <ChevronDown size={24} className="text-white" />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      className="bg-tertiary p-6 rounded-xl mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-white text-lg font-bold">{experience.title}</h4>
          <div className="flex items-center gap-2 text-gray-300 text-sm mt-1">
            <Building size={16} />
            <span>{experience.company}</span>
            <span>•</span>
            <MapPin size={16} />
            <span>{experience.location}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Calendar size={16} />
            <span>{experience.period}</span>
          </div>
          <span className="text-purple-400 text-xs bg-purple-900/30 px-2 py-1 rounded-full">
            {experience.type}
          </span>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-4">{experience.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors"
      >
        {isExpanded ? "Show less" : "Show achievements"}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const InteractiveResume = () => {
  const [openSections, setOpenSections] = useState({
    personalInfo: true,
    experience: true,
    education: false,
    skills: false,
    certifications: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Mohammad_Mustafa_Ahmed_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className={styles.sectionSubText}>Interactive Resume</p>
        <h2 className={styles.sectionHeadText}>Professional Experience</h2>
      </motion.div>

      <div className="flex justify-center mb-8">
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
        >
          <Download size={20} />
          Download PDF Resume
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Personal Info Section */}
        <ResumeSection
          title="Personal Information"
          isOpen={openSections.personalInfo}
          onToggle={() => toggleSection('personalInfo')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p><strong>Name:</strong> {resumeData.personalInfo.name}</p>
              <p><strong>Title:</strong> {resumeData.personalInfo.title}</p>
              <p><strong>Email:</strong> {resumeData.personalInfo.email}</p>
            </div>
            <div>
              <p><strong>Location:</strong> {resumeData.personalInfo.location}</p>
              <p><strong>Phone:</strong> {resumeData.personalInfo.phone}</p>
              <p><strong>Website:</strong> {resumeData.personalInfo.website}</p>
            </div>
          </div>
          <p className="text-gray-300 mt-4 leading-relaxed">{resumeData.summary}</p>
        </ResumeSection>

        {/* Experience Section */}
        <ResumeSection
          title="Professional Experience"
          isOpen={openSections.experience}
          onToggle={() => toggleSection('experience')}
        >
          <div className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </ResumeSection>

        {/* Education Section */}
        <ResumeSection
          title="Education"
          isOpen={openSections.education}
          onToggle={() => toggleSection('education')}
        >
          {resumeData.education.map((edu, index) => (
            <div key={index} className="bg-tertiary p-6 rounded-xl">
              <h4 className="text-white text-lg font-bold">{edu.degree}</h4>
              <p className="text-gray-300 mt-2">{edu.school}</p>
              <p className="text-gray-300 text-sm">{edu.period} • GPA: {edu.gpa}</p>
              <div className="mt-4">
                <p className="text-gray-300 text-sm font-medium mb-2">Relevant Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, idx) => (
                    <span key={idx} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </ResumeSection>

        {/* Skills Section */}
        <ResumeSection
          title="Technical Skills"
          isOpen={openSections.skills}
          onToggle={() => toggleSection('skills')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <div key={category} className="bg-tertiary p-4 rounded-xl">
                <h4 className="text-white font-bold mb-3 capitalize">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Certifications Section */}
        <ResumeSection
          title="Certifications"
          isOpen={openSections.certifications}
          onToggle={() => toggleSection('certifications')}
        >
          <div className="space-y-4">
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="bg-tertiary p-4 rounded-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-bold">{cert.name}</h4>
                    <p className="text-gray-300 text-sm">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs">ID: {cert.credentialId}</p>
                  </div>
                  <span className="text-purple-400 text-sm">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>
      </div>
    </div>
  );
};

export default SectionWrapper(InteractiveResume, "resume"); 