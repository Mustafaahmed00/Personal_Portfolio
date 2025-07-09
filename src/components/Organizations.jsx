import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { Users, Calendar, MapPin, ExternalLink } from 'lucide-react';

const organizations = [
  {
    name: "Google Developer Groups (GDG) Boston",
    role: "Community Member",
    duration: "Mar 2024 - Present",
    description: "Started going to their meetups last year and really enjoy the Boston tech community. Met some cool developers and learned about new frameworks I wouldn't have discovered otherwise. Their hackathons are fun and I've picked up some solid networking connections. Always something new to learn at their events.",
    logo: "https://developers.google.com/static/community/images/gdg-logo.png",
    link: "https://gdg.community.dev/gdg-boston/",
    location: "Boston, MA",
    tags: ["Community", "Networking", "Hackathons", "Tech Meetups"]
  },
  {
    name: "IEEE Computer Society",
    role: "Member",
    duration: "Sep 2023 - Present",
    description: "Member since my junior year at UMass. Really helpful for staying updated on new tech trends and connecting with other developers. I use their research papers for project inspiration and attend their webinars when I can. Great resource for learning about what's actually happening in the industry beyond just coding tutorials.",
    logo: "https://www.computer.org/themes/custom/ieee_cs/images/logo.png",
    link: "https://www.computer.org/",
    location: "Global",
    tags: ["Research", "Webinars", "Industry Trends", "Professional Development"]
  },
  {
    name: "Association for Computing Machinery (ACM)",
    role: "Member",
    duration: "May 2023 - Present",
    description: "Joined during college and kept my membership active. Love having access to their digital library - saved me countless hours when working on my capstone project. Their Special Interest Groups have been super useful, especially the ones focused on web dev and AI.",
    logo: "https://www.acm.org/images/logo/acm-logo.png",
    link: "https://www.acm.org/",
    location: "Global",
    tags: ["Digital Library", "SIGs", "Research Papers", "Web Development", "AI"]
  }
];

const OrganizationCard = ({ organization, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-tertiary rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 p-6"
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
            <Users className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-xl font-bold text-white hover:text-purple-400 transition-colors cursor-pointer">
              {organization.name}
            </h3>
            <p className="text-purple-300 font-medium">{organization.role}</p>
          </div>

          {/* Duration and Location */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{organization.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{organization.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">
            {organization.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {organization.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 text-xs bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* External Link */}
          <div className="pt-2">
            <a
              href={organization.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
            >
              <span>Visit Organization</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Organizations = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional Involvement</p>
        <h2 className={styles.sectionHeadText}>Organizations & Communities.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Active participation in professional organizations and tech communities helps me stay connected with industry trends, 
        expand my network, and contribute to the broader developer ecosystem.
      </motion.p>

      <div className='mt-20 flex flex-col gap-8'>
        {organizations.map((organization, index) => (
          <OrganizationCard 
            key={organization.name} 
            organization={organization} 
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Organizations, "organizations"); 