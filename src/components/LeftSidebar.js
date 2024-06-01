
// src/components/LeftSidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navImage from '../assets/images/1707979004PowerLogos.png'
import ControlImg from '../assets/images/control.png'
const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
        className={` ${isOpen ? "w-60" : "w-24"
          } h-screen p-5 bg-gray-300  text-white pt-8 relative duration-300`}
      >
        <img
          src={ControlImg}
          className={`absolute  bg-gray-300 cursor-pointer -right-3 top-9 w-7 
           border-2 rounded-full  ${!isOpen && "rotate-180"}`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={navImage}
            className={`cursor-pointer duration-500 ${isOpen && ""}`}
          />
        </div>
        
       <div className='mt-5'>
       <NavLink 
          to="dashboard" 
          className={({ isActive }) => 
            `flex rounded-2xl items-center p-4 ${isActive ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-300 '}`
          }
        >
          <i className="fa-brands fa-slack text-lg mr-3"></i>
          <div className={` ${!isOpen && "md:hidden"}`} >Dashboard</div>
        </NavLink>

        <NavLink 
          to="manage_report" 
          className={({ isActive }) => 
            `flex rounded-2xl items-center p-4  ${isActive ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-300 '}`
          }
        >
          <i class="fa-regular fa-pen-to-square mr-3"></i>
          <div className={` ${!isOpen && "md:hidden"}`} >Manage Report</div>
        </NavLink>

        <NavLink 
          to="daily_report" 
          className={({ isActive }) => 
            `flex rounded-2xl items-center p-4 ${isActive ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-300 '}`
          }
        >
          <i class="fa-solid fa-code mr-3"></i>
          <div  className={` ${!isOpen && "md:hidden"}`}>Datly Report</div>
        </NavLink>

        <NavLink 
          to="monthly_report" 
          className={({ isActive }) => 
            `flex rounded-2xl items-center p-4  ${isActive ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-300'}`
          }
        >
         <i class="fa-solid fa-sliders mr-3"></i>
          <div className={` ${!isOpen && "md:hidden"}`}>Monthly Report</div>
        </NavLink>

        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex rounded-2xl items-center p-4   ${isActive ? 'bg-gray-700 text-white' : 'text-black hover:bg-gray-300'}`
          }
        >
         <i class="fa-solid fa-arrow-right-from-bracket mr-3"></i>
          <div className={` ${!isOpen && "md:hidden"}`}>Logout</div>
        </NavLink>
       </div>
      </div>

  );
}

export default LeftSidebar;