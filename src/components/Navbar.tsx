import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { GrProjects } from "react-icons/gr";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-violet-800 to-yellow-300 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <a href="#hero">
          <div className="text-white text-xl font-bold">Andrew</div>
        </a>

        {/* Make sure buttons are visible on all screen sizes */}
        <div className="flex space-x-2">
          <a
            href="#projects"
            className="group text-black hover:bg-violet-500 px-3 py-2 rounded-md flex items-center text-xl hover:text-white transition-colors duration-200"
          >
            <GrProjects className="text-black group-hover:text-white" />
          </a>
          <a
            href="#contact"
            className="hover:bg-violet-500 px-3 py-2 rounded-md flex items-center text-xl transition-colors duration-200 text-black hover:text-white"
          >
            <FaUserFriends className="text-black group-hover:text-white" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
