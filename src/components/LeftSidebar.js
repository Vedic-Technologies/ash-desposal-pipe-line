// src/components/LeftSidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navImage from '../assets/images/1707979004PowerLogos.png'
import ControlImg from '../assets/images/control.png'
const LeftSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-slate-100">
      <div
        className={` ${open ? "w-60" : "w-24"
          } h-screem p-5  pt-8 relative duration-300`}
      >
        <img
          src={ControlImg}
          className={`absolute  bg-gray-300 cursor-pointer -right-3 top-9 w-7 
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={navImage}
            className={`cursor-pointer duration-500 ${open && "rot"
              }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
          </h1>
        </div>

        <div className='mt-5'>
          <NavLink

            to="dashboard"
            className={({ isActive }) =>
              `flex rounded-2xl items-center p-4 hover:bg-gray-300 ${isActive ? 'bg-gray-700 text-white' : 'text-black'}`
            }
          >
            <i className="fa-brands fa-slack text-lg mr-3"></i>
            <div className={` ${!open && "md:hidden"}`}>Dashbord</div>
          </NavLink>

          <NavLink
            to="manage_report"
            className={({ isActive }) =>
              `flex rounded-2xl items-center p-4 hover:bg-gray-200 ${isActive ? 'bg-gray-700 text-white' : 'text-black'}`
            }
          >
            <i class="fa-regular fa-pen-to-square mr-3"></i>
            <div className={` ${!open && "md:hidden"}`}>Manage Report</div>
          </NavLink>

          <NavLink
            to="daily_report"
            className={({ isActive }) =>
              `flex  rounded-2xl items-center p-4 hover:bg-gray-200 ${isActive ? 'bg-gray-700 text-white' : 'text-black'}`
            }
          >
            <i class="fa-solid fa-code mr-3"></i>
            <div className={` ${!open && "md:hidden"}`}>Daily Report</div>
          </NavLink>

          <NavLink
            to="monthly_report"
            className={({ isActive }) =>
              `flex rounded-2xl items-center p-4 hover:bg-gray-200 ${isActive ? 'bg-gray-700 text-white' : 'text-black'}`
            }
          >
            <i class="fa-solid fa-sliders mr-3"></i>
            <div className={` ${!open && "md:hidden"}`}>Monthly Report</div>
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex  rounded-2xl items-center p-4 hover:bg-gray-200  ${isActive ? 'bg-gray-700 text-white' : 'text-black'}`
            }
          >
            <i class="fa-solid fa-arrow-right-from-bracket mr-3"></i>
            <div className={` ${!open && "md:hidden"}`}>Logout</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
