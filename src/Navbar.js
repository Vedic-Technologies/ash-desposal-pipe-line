import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-md w-screen flex justify-between items-center">
      <div className="text-white text-xl font-bold">Ash Disposal Pipe Line</div>
      <ul className="flex space-x-4">
        <li className="text-gray-300 hover:text-white transition duration-300">Home</li>
        <li className="text-gray-300 hover:text-white transition duration-300">Projects</li>
        <li className="text-gray-300 hover:text-white transition duration-300">Reports</li>
      </ul>
      <div className="relative">
        <div
          className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center cursor-pointer"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-white font-bold">A</span>
        </div>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20"
            >
              <ul>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">More Info</li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
