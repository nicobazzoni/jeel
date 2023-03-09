import React from "react";


import { FaBars, FaTimes, FaHome, FaRobot, FaArchive, FaMusic, FaPen, FaPenFancy, FaTimesCircle } from "react-icons/fa";
import { GrAttraction, GrMusic} from "react-icons/gr";
import { GiMeditation } from "react-icons/gi";
import {BsPeopleFill} from "react-icons/bs";
import { Link, Button } from "react-scroll";

const Navbar = ({  }) => {
  

  
  return (
    <>
      <div className=" sticky top-0 flex pt-4 flex-wrap items-center justify-between px-2 py-3 z-99 bg-stone-900 mb-3   ">
        <div className="container  px-4 mx-auto flex flex-wrap items-center justify-between">
          <Link to="home"spy={true}smooth={true}offset={50}duration={500}ignoreCancelEvents={false}spyThrottle={500}>
            <FaHome className="text-4xl h-5 mb-1 w-6  cursor-pointer hover:animate-pulse  text-stone-100" />
          
          </Link>
        <Link to="openai"spy={true}smooth={true}offset={50}duration={500}ignoreCancelEvents={false}spyThrottle={500}>
        <FaRobot className="text-4xl h-5 mb-1 w-6 cursor-pointer  text-blue-200" />
        
    
        </Link> 
        
      
        
        {/* <Link to='contact'spy={true}smooth={true}offset={50}duration={500}ignoreCancelEvents={false}spyThrottle={500}>
          <FaPen className="text-4xl h-5  mb-1 w-6 cursor-pointer  text-cyan-200" />
          
        </Link>  */}
        
        <Link to='audio'spy={true}smooth={true}offset={50}duration={500}ignoreCancelEvents={false}spyThrottle={500}>
        <FaMusic className="text-4xl  mb-1 h-5 w-6 cursor-pointer  text-rose-300" />
        <h1 className="text-xs text-gray-300 "> </h1>
        
        </Link>
        
        {/* <Link to='event'spy={true}smooth={true}offset={50}duration={500}ignoreCancelEvents={false}spyThrottle={500}>
        <BsPeopleFill className="text-4xl w-6  mb-1 h-5 cursor-pointer ml-1 text-pink-400" />
        
        </Link> */}
      </div>
    </div>

    </>
  );
};

export default Navbar;
