"use client"
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: "Amazon Clone",
    description: "Project 1 description",
    image: "/images/amazon.png", // Ensure this path is correct
    gitUrl: "https://github.com/yourusername/amazon-clone",
    previewUrl: "https://amazon-clone-preview.com",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Project 2 description",
    image: "/images/gemini.png",
    gitUrl: "https://github.com/yourusername/ecommerce-app",
    previewUrl: "https://ecommerce-app-preview.com",
  },
  {
    id: 3,
    title: "E-commerce App",
    description: "Project 2 description",
    image: "/images/food.png",
    gitUrl: "https://github.com/yourusername/ecommerce-app",
    previewUrl: "https://ecommerce-app-preview.com",
  },
  {
    id: 4,
    title: "E-commerce App",
    description: "Project 2 description",
    image: "/images/amazon.png",
    gitUrl: "https://github.com/yourusername/ecommerce-app",
    previewUrl: "https://ecommerce-app-preview.com",
  },
  {
    id: 5,
    title: "E-commerce App",
    description: "Project 2 description",
    image: "/images/amazon.png",
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
    <section>
      <h2 className="text-3xl font-semibold mb-6 text-center">My Projects</h2>

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
