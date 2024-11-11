"use client";
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: "Amazon Clone",
    description: "First project build with HTML AND CSS.Learned basic concepts of HTML and CSS styling.Studied structure of HTML,CSS files",
    image: "/images/amazon.png", // Ensure this path is correct
    gitUrl: "https://github.com/yourusername/amazon-clone",
    previewUrl: "https://amazon-clone-preview.com",
  },
  {
    id: 2,
    title: "Gemini Clone",
    description: "Integrating Google Gemini’s AI capabilities with a React JS frontend, creating a highly interactive and intelligent application.",
    image: "/images/gemini.png",
    gitUrl: "https://github.com/yourusername/ecommerce-app",
    previewUrl: "https://ecommerce-app-preview.com",
  },
  {
    id: 3,
    title: "Food Delivery Website",
    description: "Website built with the MERN stack.The app allows users to browse restaurants,view menus, place orders, and track deliveries in real time.",
    image: "/images/food.png",
    gitUrl: "https://github.com/yourusername/ecommerce-app",
    previewUrl: "https://ecommerce-app-preview.com",
  },
  {
    id: 4,
    title: "Travlog - Figma Design",
    description: "Designed to help users discover destinations, plan trips.The goal is to create a visually appealing, user-friendly platform that enhances the travel booking experience.",
    image: "/images/travlog.png",
    gitUrl: "https://www.figma.com/proto/TPahfdFILGtT2un80pFmmw/Travlog?node-id=0-1&t=6HudgSv33CwClg3K-1",
    previewUrl: "https://www.figma.com/proto/TPahfdFILGtT2un80pFmmw/Travlog?node-id=9-2&t=d5dCSZTslA3MKBsT-1",
  },
  {
    id: 5,
    title: "AR-VR Web Design",
    description: "An AR/VR website is a platform designed to showcase and provide access experiences,products,and services.Designed using 3D illustration,visually appealing for users",
    image: "/images/ARVR.png",
    gitUrl: "https://github.com/yourusername/ecommerce-app",
    previewUrl: "https://ecommerce-app-preview.com",
  },
  // Add other projects...
];

const ProjectSection = () => {
  const ref = useRef(null);
  
  // Adding `useInView` to check visibility of the entire project section
  const isInView = useInView(ref, { triggerOnce: false, margin: "0px 0px -50px 0px" });

  // Define animation variants for each card
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className='id="project"'>
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-700 text-center">My Projects</h2>

      {/* New text below the heading */}
      <p className="text-center text-lg text-gray-400 mb-6">
        Check out my latest projects, built with passion and precision.🎯
      </p>

      {/* Grid container for the project cards */}
      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{
              duration: 0.6,
              delay: index * 0.3, // Stagger animation delay
              ease: "easeOut",
            }}
          >
            <ProjectCard
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
