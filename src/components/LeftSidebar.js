// src/components/LeftSidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navImage from '../assets/images/1707979004PowerLogos.png'
const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-red-500'>
      <button 
        className="md:hidden p-4 bg-gray-800 text-white" 
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
     
      <div className={`bg-gray-200 mt-[72px] h-screen w-64 fixed top-0 left-0 flex flex-col transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:translate-x-0`}>
        <div className="">
          <img src={navImage} alt="" className='h-20 m-8' />
        </div>
        
        <NavLink 
          to="dashboard" 
          className={({ isActive }) => 
            `flex items-center p-4 ${isActive ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-300 '}`
          }
        >
          <i className="fa-brands fa-slack text-lg mr-3"></i>
          Dashbord
        </NavLink>

        <NavLink 
          to="manage_report" 
          className={({ isActive }) => 
            `flex items-center p-4  ${isActive ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-300 '}`
          }
        >
          <i class="fa-regular fa-pen-to-square mr-3"></i>
          Manage Report
        </NavLink>

        <NavLink 
          to="daily_report" 
          className={({ isActive }) => 
            `flex items-center p-4 ${isActive ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-300 '}`
          }
        >
          <i class="fa-solid fa-code mr-3"></i>
          Daily Report
        </NavLink>

        <NavLink 
          to="monthly_report" 
          className={({ isActive }) => 
            `flex items-center p-4  ${isActive ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-300'}`
          }
        >
         <i class="fa-solid fa-sliders mr-3"></i>
          Monthly Report
        </NavLink>

        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center p-4   ${isActive ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-300'}`
          }
        >
         <i class="fa-solid fa-arrow-right-from-bracket mr-3"></i>
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default LeftSidebar;
