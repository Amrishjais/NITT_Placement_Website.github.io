import React from 'react'
import {Menu, X} from "lucide-react";
import { useState } from 'react';
import logo from "../assets/logo.png"
const navItems = [
  { label: "Overview", href: "#" },
  { label: "Why Recruit", href: "#why" },
  { label: "Statistics", href: "#stat" },
  { label: "Contact Us", href: "#cont" },
];

const Navbar = () => {
  const [mobdrawer,setmobdrawer]=useState(false);
  const toggleNavbar=()=>{
    setmobdrawer(!mobdrawer);
  }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
          <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
          <span className='text-xl tracking-tight'>Placement Cell-NITT</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item,index)=>(
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>{mobdrawer?<X/>:<Menu/>}</button>
          </div>
        </div>
      </div>
      {mobdrawer && (
        <div className="fixed right-0 z-20 bg-neutral-200 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            {navItems.map((item,index)=>(
              <li key={index} className='py-4'>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar
