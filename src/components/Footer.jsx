import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 md:space-x-10">
        
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center md:justify-start">
          <h2 className="ml-2 font-bold text-2xl">autodrone</h2>
          </div>
          <p className="mt-4 text-gray-400">Look up the sky and beautiful world easily.</p>
        </motion.div>

        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            {['Our Services', 'Specification', 'Refund', 'Playlist'].map((item, index) => (
              <motion.li 
                key={index}
                className="hover:text-gray-300 cursor-pointer transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-semibold mb-4">Account</h3>
          <ul className="space-y-2">
            {['My Account', 'Top Benefit', 'How-to Tutorials', 'Moment'].map((item, index) => (
              <motion.li 
                key={index}
                className="hover:text-gray-300 cursor-pointer transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="font-semibold mb-4">Office</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start">
              <FiPhone className="mr-2" /> +021 2208 1996
            </li>
            <li className="text-gray-400">SCBD, Jakarta</li>
            <li className="text-gray-400">No.2 (Autodrone)</li>
            <li className="flex items-center justify-center md:justify-start">
              <FiMail className="mr-2" /> support@autodrone.id
            </li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
