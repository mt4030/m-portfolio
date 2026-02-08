import type React from "react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
   SiExpress,
  SiMongodb,
  SiTypescript,
  SiNextdotjs

} from "react-icons/si";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaNodeJs,
} from "react-icons/fa";


export type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number;
};

export type AdvantageSkill = {
  name: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

export type SocialLink = {
  name: "GitHub" | "LinkedIn" | "Email" | "Phone";
  url: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

export type Project = {
  id: number;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  coverImage: string;
  shortDescription: string;
  fullDescription: string;
  liveUrl: string;
  githubUrl: string;
};



export const skills: Skill[] = [
  { name: "HTML", icon: <SiHtml5 size={40} />, level: 80 },
  { name: "CSS", icon: <SiCss3 size={40} />, level: 70 },
  { name: "JavaScript", icon: <SiJavascript size={40} />, level: 50 },
  { name: "React", icon: <SiReact size={40} />, level: 65 },
  { name: "Redux Toolkit", icon: <SiRedux size={40} />, level: 50 },
  { name: "TanStack Query", icon: <SiReactquery size={40} />, level: 50 },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, level: 70 },
  { name: "TypeScript",icon:<SiTypescript size={40}/> ,level: 15 },
  { name: "Next.js",icon:<SiNextdotjs size={40}/>, level: 10 },
   { name: "Node.js", icon: <FaNodeJs size={40} />, level: 20 },
  { name: "Express", icon: <SiExpress size={40} />, level: 20 },
  { name: "MongoDB", icon: <SiMongodb size={40} />, level: 15 },
   { name: "GitHub", icon: <FaGithub size={40} />, level: 60 },
];




export const projects: Project[] = [
  {
    id: 1,
    title: "CinamaView",
    slug: "cinamaview",
    category: "Web App",
    tags: ["React", "Tailwind", "TanStack Query", "shadcn/ui","TypeScript"],
    coverImage: "/img/movie.jpg",
    shortDescription: "Responsive React web app integrated with a movie API.",
    fullDescription:
      "CinamaView is a responsive React application that fetches and displays movie data from an external API. The project focuses on clean UI, fast data fetching, and a smooth browsing experience.",
    liveUrl: "https://cinema-view.netlify.app/",
    githubUrl: "https://github.com/mt4030/moviehub2",
  },
  {
    id: 2,
    title: "TaskNest",
    slug: "tasknest",
    category: "Web App",
    tags: ["React", "shadcn/ui", "Chart.js",'tailwind',"TypeScript"],
    coverImage: "/img/task.png",
    shortDescription: "A simple and clean task manager and to-do app.",
    fullDescription:
      "TaskNest is a task management web application built with React.",
    liveUrl: "https://tasknest-tracker.netlify.app",
    githubUrl: "https://github.com/mt4030/task-tracker",
  },
  {
    id: 3,
    title: "Omnifood",
    slug: "omnifood",
    category: "Landing Page",
    tags: ["HTML", "CSS", "JavaScript"],
    coverImage: "/img/omni.png",
    shortDescription: "Responsive landing page for a food delivery service.",
    fullDescription:
      "Omnifood is a fully responsive landing page built with vanilla HTML, CSS, and JavaScript.",
    liveUrl: "https://zippy-cat-6064f2.netlify.app",
    githubUrl: "https://github.com/mt4030/Ofood-Project",
  },
  {
    id: 4,
    title: "D&D Food Ordering",
    slug: "dnd-food-ordering",
    category: "Web App",
    tags: ["React", "Tailwind"],
    coverImage: "/img/Food.jpg",
    shortDescription: "A simple food ordering application built with React.",
    fullDescription:
      "D&D is a lightweight food ordering application created with React and Tailwind CSS.",
    liveUrl: "https://foodorderingdandd.netlify.app",
    githubUrl: "https://github.com/mt4030/food-ordering",
  },
  {
  id: 5,
  title: "Mohsen's Portfolio",
  slug: "mohsen-portfolio",
  category: "Portfolio Website",
  tags: ["React", "Tailwind", "GSAP"],
  coverImage: "/img/port.jpg",
  shortDescription:
    "A modern personal portfolio showcasing projects, skills, and animations.",
  fullDescription:
    "A modern personal portfolio website built with React, TypeScript, and Tailwind CSS. It features smooth GSAP scroll-triggered animations, interactive skill cards, and a clean dark-themed, fully responsive design.",
  liveUrl: "https://cheery-rolypoly-22bdfc.netlify.app", 
  githubUrl: "https://github.com/mt4030/m-portfolio", 
}

];



export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/mt4030",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohsen-tebi-92aa00249/",
    Icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:mohsen.t4030@gmail.com",
    Icon: FaEnvelope,
  },
  {
    name: "Phone",
    url: "tel:+989399219660",
    Icon: FaPhone,
  },
];
