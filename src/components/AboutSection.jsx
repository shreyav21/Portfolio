"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Java</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>React</li>
        <li>Version Control</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Bachelor of Technology</li>
        <p>Computer Science Engineering</p>
        <li>D Y Patil College of Engineering and Technology , Kolhapur</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-2'>
        <li>Android Developer Internship <p>Revolution IT Solution ,Kolhapur</p></li>
        <li>AICTE Virtual Android Developer Internship</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills"); // Default to 'skills' tab
  const [isPending, startTransition] = useTransition(); // startTransition with isPending

  const handleTabChange = (id) => {
    // Using startTransition to handle tab change state updates
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className='text-white  id="about"'>
      {/* Section animation: Fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/images/about-img.png"
            alt="About Image"
            width={500}
            height={500}
          />
        </motion.div>

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-700'>
            About Me
          </h2>
          <p className='text-base lg:text-lg'>
            👋 Hello, I&apos;m Shreya Vedpathak, an aspiring Web Developer passionate about learning and mastering new skills in the field. Currently, I&apos;m diving deep into React to enhance my frontend development expertise. I thrive on crafting intuitive user interfaces and leveraging the latest technologies to create seamless digital experiences. Eager to collaborate on innovative projects and contribute my skills to impactful solutions, I&apos;m continuously expanding my knowledge base to stay ahead in this fast-paced industry. Let&apos;s connect and explore opportunities to collaborate and create remarkable digital experiences together! 🚀
          </p>

          {/* Tab buttons with hover effects */}
          <div className='flex mt-4'>
            {TAB_DATA.map(tabItem => (
              <motion.div
                key={tabItem.id}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: tab === tabItem.id ? 1 : 0.7 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <TabButton selectTab={() => handleTabChange(tabItem.id)} active={tab === tabItem.id}>
                  {tabItem.title}
                </TabButton>
              </motion.div>
            ))}
          </div>

          {/* Content animation when switching tabs */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='mt-8'
          >
            {
              TAB_DATA.find((t) => t.id === tab)
                ? TAB_DATA.find((t) => t.id === tab).content
                : null
            }
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
