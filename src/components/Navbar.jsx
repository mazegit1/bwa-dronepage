import React, { useState } from 'react';
import { RiSearch2Line } from "react-icons/ri";
import { GiDeliveryDrone } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi"; 
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [showSearch, setShowSearch] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="header fixed top-0 w-full flex items-center justify-between px-6 py-4 bg-white shadow-2xl z-50">
      <motion.a
      href='/' 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-4xl text-black"
      >
        <GiDeliveryDrone />
      </motion.a>

      <div className="hidden md:flex space-x-8 text-xl">
        <a href="/" className="link uppercase text-black hover:text-gray-500 transition duration-300">Home</a>
        <a href="/" className="link uppercase text-black hover:text-gray-500 transition duration-300">Gallery</a>
        <a href="/" className="link uppercase text-black hover:text-gray-500 transition duration-300">Products</a>
        <a href="/" className="link uppercase text-black hover:text-gray-500 transition duration-300">Review</a>
        <a href="/" className="link uppercase text-black hover:text-gray-500 transition duration-300">Support</a>
      </div>

      <div className="flex items-center">
        {showSearch && (
          <motion.input 
            initial={{ width: 0, opacity: 0 }} 
            animate={{ width: "200px", opacity: 1 }} 
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-2 py-1 mr-2 outline-none"
          />
        )}

        <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-3xl text-black cursor-pointer"
          onClick={toggleSearch}
        >
          <RiSearch2Line />
        </motion.div>
      </div>

      <div className="md:hidden text-3xl" onClick={toggleMenu}>
        {isOpen ? <HiX /> : <HiMenu />}
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }} 
          animate={{ height: "auto", opacity: 1 }} 
          exit={{ height: 0, opacity: 0 }}
          className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4"
        >
          <a href="/" className="link uppercase text-black hover:text-gray-500 transition duration-300">Home</a>
          <a href="/" className="link uppercase text-black hover:text-gray-500 transition duration-300">Gallery</a>
          <a href="/" className="link uppercase text-black hover:text-gray-500 transition duration-300">Products</a>
          <a href="/" className="link uppercase text-black hover:text-gray-500 transition duration-300">Review</a>
          <a href="/" className="link uppercase text-black hover:text-gray-500 transition duration-300">Support</a>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
