"use client"
import Link from 'next/link';
import React,{useState} from 'react';
import NavLink from './NavLink';
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';

const navLink = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Project",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {

    const [navbarOpen,setNavbarOpen] = useState(false);
  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className="flex flex-wrap lg:py-4 items-center justify-between mx-auto px-6 py-2">
        {/* Logo Section */}
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold hover:text-gray-300">
          PORTFOLIO
        </Link>
        <div className='mobile-menu block md:hidden'>
            {
                navbarOpen?(
                    <button onClick ={()=>setNavbarOpen(true)}className='text-slate-200 flex items-center px-3 py-2 border-slate-200 hover:text-white hover:border-white'>
                        <Bars3Icon className='h-5 w-5'/>
                    </button>
                ):(
                    <button  onClick ={()=>setNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border-slate-200 hover:text-white hover:border-white'>
                    <XMarkIcon className='h-5 w-5'/>
                </button>
                )
            }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0'>
            {
              navLink.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
          </ul>
        </div>
      </div>
      {navbarOpen?<MenuOverlay links={navLink}/>:null}
    </nav>
  );
}

export default Navbar;
