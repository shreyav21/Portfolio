import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#33353F] text-white border-t border-[#33353F] py-6 w-full">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <span>Portfolio</span>
        <span>&copy; {new Date().getFullYear()} Shreya Vedpathak</span>
      </div>
    </footer>
  );
}

export default Footer;
