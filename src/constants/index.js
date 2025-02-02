import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  ibs,
  headstarter,
  urwealth,
} from "../assets";

import zackImage from '../assets/zack.jpg'; 
import beaconpathway from "../assets/beaconpathway.jpeg";
import chatbot from "../assets/chatbot.webp";
import umb from "../assets/umb.png";
import diidii from "../assets/diidii.jpeg"
import MyDocs from "../assets/MyDocs.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "diidii",
    icon: diidii,
    iconBg: "#383E56",
    date: "October 2024 - January 2025",
    points: [
      "Developed Web and mobile Application with various features for patients with dementia",
      "Led weekly stand-ups and sprint planning meetings as part of an agile development team",
      "Collaborated with healthcare professionals to implement user-friendly features tailored for dementia patients",
      "Utilized JavaScript, React, and Node.js to create responsive interfaces focused on accessibility",
      "Optimized application performance resulting in 40% faster load times"
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "IBS Software",
    icon: ibs,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Developed and optimized web and mobile applications for airline and travel management systems.",
      "Utilized JavaScript, HTML, CSS, and React to create responsive UIs, enhancing user experience for clients.",
      "Built back-end services using Node.js and integrated Restful APIs",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineering Fellow",
    company_name: "Headstarter AI",
    icon: headstarter,
    iconBg: "#E6DEDD",
    date: "July 2024 - September 2024",
    points: [
      "Developed and deployed multiple projects, including a Gemini-integrated chatbot for company inquiries, a secure payment system using Stripe, and a MongoDB database for transaction management",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "UrWealth",
    icon: urwealth,
    iconBg: "#383E56",
    date: "August 2024 - December 2024",
    points: [
      "Developed secure user authentication for MongoDB using SCRAM-SHA-256 and built RESTful API en points for a financial advisory platform",
      "Implemented JWT for managing user sessions and APIcaccess control",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technology Specialist",
    company_name: "Umass Boston",
    icon: umb,
    iconBg: "#E6DEDD",
    date: "February 2023 - Present",
    points: [
      "Developed responsive website for the Technovator, boosting engagement of our department by 40%",
      "Led team in creating a Zoom SDK and React-based app, improving online meeting efficiency for 16,000+ students",
      "Engineered an AI-powered chatbot for Canvas LMS, reducing student support response times by 60%",
      "Implemented cybersecurity protocols aligned with NIST standards, enhancing data protection across university platforms",
      "Building Beacon Pathway, a hackathon-winning app built with Next.js, TypeScript, and GraphQL. Implemented serverless architecture using Vercel for deployment, Prisma for database ORM, and NextAuth for authentication. Integrated machine learning with TensorFlow.js to provide personalized campus resource recommendations, increasing student engagement with university services by 25%"
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Mustafa's proficiency in Information Technology is commendable, particularly in his work on the UMass Boston BeaconFlex Zoom App. His ability to grasp complex technical concepts and apply them to practical solutions has been a key factor in the success of our projects.",
    name: "Zack Ronald",
    designation: "Manager of IT Services",
    company: "UMass Boston",
    image: zackImage, // Reference the imported image
  },

];

const projects = [
  {
    name: "BeaconPathway",
    description:
      "Hackathon winning web app, Beacon Pathway is an AI-driven, user-centered platform designed to empower students. By taking a brief, personalized quiz, students receive customized opportunities and resources that perfectly align with their individual interests and goals.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Next.js",
        color: "purple-text-gradient",
      },
      {
        name: "GraphQL",
        color: "orange-text-gradient",
      },
    ],
    image: beaconpathway,
    source_code_link: "https://github.com/Mustafaahmed00/Beacon_Pathway",
  },
  {
    name: "BeaconFlex",
    description:
      "Web application that enables Umass Boston students to join and create meetings with additional features such as dual camera functionality.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind.css",
        color: "pink-text-gradient",
      },
      {
        name: "getStream.io",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "teal-text-gradient",
      },
    ],
    image: umb,
    source_code_link: "https://github.com/Mustafaahmed00/BeaconFlex",
  },
  {
    name: "Chatbot",
    description:
      "An AI-powered chatbot for Canvas LMS, integrated with Gemini AI model and Cloud Translation API, offering multilingual support, real-time text-to-speech (TTS), and speech-to-text (STT). It features a feedback-driven ranking system, where users can vote on answers, and the most upvoted responses are prioritized.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "AI",
        color: "red-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "indigo-text-gradient",
      },
      {
        name: "Gemini",
        color: "yellow-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/Mustafaahmed00/chatbot",
  },
  {
    name: "MyDocs",
    description:
      "MyDocs is a real-time collaborative document editing application built with Next.js, Liveblocks, and Tailwind CSS. It replicates core features of Google Docs, enabling multiple users to collaborate in real-time on shared documents. This project demonstrates expertise in real-time applications and modern web development.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "LiveBlocks",
        color: "pink-text-gradient",
      },
      {
        name: "Lexical Editor",
        color: "red-text-gradient",
      },
      {
        name: "ShadCN",
        color: "indigo-text-gradient",
      },
      {
        name: "Gemini",
        color: "yellow-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "teal-text-gradient"
      }
    ],
    image: MyDocs,
    source_code_link: "https://github.com/Mustafaahmed00/MyDocs",
    live_demo_link: "https://my-word-docs.vercel.app/"
  }
];

export { services, technologies, experiences, testimonials, projects };
