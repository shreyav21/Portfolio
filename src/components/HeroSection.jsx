"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className='py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12'>
        
        {/* Motion effects on the text section */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className='col-span-7 flex flex-col justify-center sm:text-left'>
          
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold sm:text-5xl'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-700'>
              Hello I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Shreya', 
                2000, 
                'Frontend Developer',
                2000,
                'React Developer', 
                2000, 
                'UI / UX Designer', 
                2000
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            Crafting intuitive, user-friendly interfaces that bring ideas to life. Passionate about building seamless web experiences with modern technologies.
          </p>
          
          {/* Button Section */}
          <div className='mb-6'>
            <button className='px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
              Hire Me
            </button>
            <a href="https://drive.google.com/file/d/1ochqtzx2pienSgmqYj7eRui2aezDNrSS/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
                My Resume
              </button>
            </a>
          </div>

          {/* Social Media Icons Section */}
          <div className='flex space-x-4'>
            <a href="https://www.linkedin.com/in/shreya-vedpathak-40894422b/" target="_blank" rel="noopener noreferrer" className='hover:opacity-80'>
              <div className="w-8 h-8 rounded-full relative">
                <Image
                  src="/images/linkedin.jpg" 
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  style={{ objectFit: 'contain' }} // Use CSS objectFit instead
                />
              </div>
            </a>
            <a href="https://github.com/shreyav21" target="_blank" rel="noopener noreferrer" className='hover:opacity-80'>
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/github.png" 
                  alt="GitHub"
                  width={30}
                  height={30}
                  style={{ objectFit: 'contain' }} // Use CSS objectFit instead
                />
              </div>
            </a>
            <a href="https://twitter.com/shreya" target="_blank" rel="noopener noreferrer" className='hover:opacity-80'>
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/png-transparent-twit.png" 
                  alt="Twitter"
                  width={30}
                  height={30}
                  style={{ objectFit: 'contain' }} // Use CSS objectFit instead
                />
              </div>
            </a>
          </div>
          
        </motion.div>

        {/* Motion effects on the image section */}
        <motion.div 
          className='col-span-5 flex justify-center lg:justify-start'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className='mt-7 rounded-full bg-[#181818] w-[150px] h-[150px] relative lg:w-[400px] lg:h-[400px]'>
            <Image
              src="/images/6547023.png"
              alt="hero-image"
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
