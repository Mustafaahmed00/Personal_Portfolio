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
import diidii from "../assets/diidii.jpeg";
import MyDocs from "../assets/MyDocs.png";
import CareerAI from "../assets/careerai1.png";
import Certificate1 from "../assets/certificates/Award of Excellence.pdf"; 
import preview1 from "../assets/certificates/preview1.png";
import Certificate2 from "../assets/certificates/LinkedIn.pdf";
import preview2 from "../assets/certificates/preview2.png";
import Certificate3 from "../assets/certificates/Appreciation.pdf";
import preview3 from "../assets/certificates/preview3.png";
import pdfai from "../assets/pdf-ai.jpg";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const techStack = [
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

const resumeSummary = "Software developer with 2+ years of experience delivering high-performance web applications and enterprise solutions. Proven track record of optimizing system performance, reducing transaction times, and enhancing user experiences through innovative technology implementations. Expertise in full-stack development, microservices architecture, and agile methodologies, consistently driving operational efficiency and implementing robust, scalable software solutions that directly contribute to business growth.";

const educationDetails = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Massachusetts",
    icon: umb, // Using the umb icon for UMass
    iconBg: "#E6DEDD", // Consistent with other UMass styling if applicable
    date: "", // You can add graduation date here if you like
    points: [
      // You can add any specific achievements or relevant coursework here later
    ],
  },
];

const skillsDetails = {
  methodologies: ["SDLC", "Agile", "Waterfall"],
  programmingLanguages: ["Python", "SQL", "Java"],
  frontendDevelopment: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Redux", "jQuery"],
  backendDevelopment: ["Spring Boot", "Spring MVC", "Hibernate", "Django", "Node.js", "Flask", "REST APIs"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  cloudPlatforms: ["AWS (EC2, S3)"],
  containerizationAndVirtualization: ["Docker", "Kubernetes"],
  developmentToolsAndIDEs: ["Visual Studio Code", "IntelliJ", "Eclipse"],
  testingTools: ["Jest", "Pytest", "Postman"],
  versionControl: ["Git", "GitHub"],
  softSkills: ["Problem-solving", "Communication Skills", "Time Management", "Attention to detail", "Collaborate with cross-functional team"],
};

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
    company_name: "Freelancer (Remote)",
    icon: creator,
    iconBg: "#383E56",
    date: "January 2024 – February 2025",
    points: [
      "Developed and implemented new features for patient management systems using Java and Spring Boot, collaborating with cross-functional healthcare teams to translate medical requirements into functional code that processed over 50,000 patient records daily.",
      "Enhanced customer-facing healthcare applications using React and JavaScript, improving UI/UX with responsive HTML5/CSS3 designs that reduced patient navigation steps by 40% and increased mobile patient engagement metrics.",
      "Applied JUnit and Postman for systematic testing and debugging of Java backend services, contributing to a 25% reduction in clinical system incidents while ensuring compliance with HIPAA medical security protocols.",
      "Participated in Agile SDLC practices using Git/GitHub for version control, consistently meeting sprint commitments by delivering quality code while maintaining detailed documentation for knowledge sharing in medical software development.",
      "Assisted in developing RESTful APIs that integrated electronic health record services with MySQL databases, working within the Spring Boot framework to ensure system performance during peak patient admission periods.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Freelancer (Remote)",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "January 2023 – December 2023",
    points: [
      "Developed responsive web applications using React (TypeScript) and Spring Boot, implementing modular e-commerce platform features with Redux state management to enhance user engagement and application performance.",
      "Designed secure authentication systems utilizing Node.js and Express.js, implementing role-based access control and deploying services on AWS EC2 to strengthen application security and access management.",
      "Created interactive data visualization dashboards using MongoDB aggregation framework and Node.js, optimizing MongoDB database queries to reduce report generation time by 35% and facilitate real-time data communication.",
      "Implemented microservices architecture using Docker and Kubernetes, streamlining deployment processes through GitHub Actions and collaborating with cross-functional teams to improve continuous integration workflows.",
      "Conducted comprehensive software testing using Jest and Postman, actively participating in Agile methodologies to maintain sprint commitments and develop automated test scripts that significantly improved code quality and reduced manual testing efforts.",
    ],
  },
  {
    title: "Technology Specialist",
    company_name: "Umass Boston",
    icon: umb,
    iconBg: "#E6DEDD",
    date: "February 2023 - May 2025",
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
    name: "Model Extraction Attack",
    description:
      "A machine learning project demonstrating model extraction attacks using knowledge distillation techniques. Uses a pre-trained CIFAR-10 model as the target (teacher) and attempts to extract its knowledge using the STL-10 dataset, simulating real-world black-box attack scenarios. Achieved 7.02% improvement in accuracy through knowledge distillation.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Keras",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "red-text-gradient",
      },
      {
        name: "Knowledge Distillation",
        color: "indigo-text-gradient",
      },
      {
        name: "STL-10 Dataset",
        color: "yellow-text-gradient",
      },
      {
        name: "CIFAR-10",
        color: "teal-text-gradient",
      },
      {
        name: "Jupyter",
        color: "purple-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
    source_code_link: "https://github.com/Mustafaahmed00/model-extraction-attack",
  },
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
    live_demo_link: "https://github.com/Mustafaahmed00/Beacon_Pathway",
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
      },
      {
        name: "Clerk",
        color: "red-text-gradient"
      }
    ],
    image: MyDocs,
    source_code_link: "https://github.com/Mustafaahmed00/MyDocs",
    live_demo_link: "https://my-word-docs.vercel.app/"
  },
  {
    name: "CareerAI",
    description:
      "CareerAI is your all-in-one career companion, powered by AI to help you take your professional journey to the next level. From crafting standout resumes to nailing interviews, I have built the tools you'd actually want to use.",
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
        name: "Inngest",
        color: "pink-text-gradient",
      },
      {
        name: "Neon",
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
      },
      {
        name: "Google Cloud Speech-to-text",
        color: "blue-text-gradient"
      },
      {
        name: "Clerk",
        color: "red-text-gradient"
      }
    ],
    image: CareerAI,
    source_code_link: "https://github.com/Mustafaahmed00/CareerAI",
    live_demo_link: "https://career-ai-bay.vercel.app/"
  },
  {
    name: "Smart PDF Summarizer",
    description:
      "Smart PDF Summarizer is a Streamlit web application that lets you upload PDF documents and generate summaries using Google's advanced generative AI. It extracts text from your PDF and provides summaries in various formats, including concise, bullet points, detailed, or executive style, all while allowing you to control the maximum word count.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "PyPDF2",
        color: "pink-text-gradient",
      },
      {
        name: "LangChain",
        color: "red-text-gradient",
      },
      {
        name: "GoogleGenerativeAI",
        color: "indigo-text-gradient",
      },
      {
        name: "CSS",
        color: "yellow-text-gradient",
      },
    ],
    image: pdfai,
    source_code_link: "https://github.com/Mustafaahmed00/pdf_summarizer/",
    live_demo_link: "https://pdfsummarizer-adcffa43m5lyffvqvzwrf9.streamlit.app/"
  }
];

const certifications = [
  {
    name: "Certificate 1",
    pdf: Certificate1, // Replace with actual image import
    preview: preview1,
  },
  {
    name: "Certificate 2",
    pdf: Certificate2,// Replace with actual image import
    preview: preview2,
  },
  {
    name: "Certificate 3",
    pdf: Certificate3,
    preview: preview3,
  },
];


export { services, technologies, experiences, testimonials, projects, certifications, resumeSummary, educationDetails, skillsDetails };