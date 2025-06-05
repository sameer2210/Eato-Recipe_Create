// import { NavLink } from "react-router";

// const Navbar = () => {
//   return (
//     <div className=" flex justify-around text-xl items-center gap-x-10 p-6">
//       <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/">
//         Home
//       </NavLink>
//       <NavLink
//         className={(e) => (e.isActive ? "text-red-400" : "")}
//         to="/recipes"
//       >
//         Recipes
//       </NavLink>
//       <NavLink
//         className={(e) => (e.isActive ? "text-red-400" : "")}
//         to="/about"
//       >
//         About
//       </NavLink>
//       <NavLink
//         className={(e) => (e.isActive ? "text-red-400" : "")}
//         to="/favorite"
//       >
//         favorite
//       </NavLink>
//     </div>
//   );
// };

// export default Navbar;
//------------------------------------------------------------me----------------------------------------------------------------

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="flex xl:min-w-full px-2.5 xl:px-5 py-6 pb-10 xl:pb-6 mb-6 justify-between relative items-center">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

      <div className="flex-1 flex items-center text-4xl mask-b-from-neutral-200 font-normal tex">
        Eato
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-[2] justify-between items-center">
        <div className="flex gap-8">
          <NavLink
            className={({ isActive }) =>
              `text-gray-500 text-xl font-light tracking-widest hover:text-gray-800 transition-colors duration-300 ${
                isActive ? "text-red-400" : ""
              }`
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-gray-500 text-xl font-light tracking-widest hover:text-gray-800 transition-colors duration-300 ${
                isActive ? "text-red-400" : ""
              }`
            }
            to="/recipes"
          >
            RECIPES
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-gray-500 text-xl font-light tracking-widest hover:text-gray-800 transition-colors duration-300 ${
                isActive ? "text-red-400" : ""
              }`
            }
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-gray-500 text-xl font-light tracking-widest hover:text-gray-800 transition-colors duration-300 ${
                isActive ? "text-red-400" : ""
              }`
            }
            to="/favorite"
          >
            FAVORITE
          </NavLink>
        </div>
        <NavLink
          className="px-4 py-2 text-black bg-transparent border border-gray-800 rounded-full text-base hover:text-white hover:shadow-2xl hover:shadow-green-500 hover:bg-gray-800 transition-all duration-300"
          to="/recipes/create-recipe"
        >
          let's go
        </NavLink>
      </div>

      {/* Mobile Navigation - Fixed positioning and visibility */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          show ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col gap-4 p-6 text-center">
          <NavLink
            className={({ isActive }) =>
              `text-gray-500 text-xl font-light tracking-widest hover:text-gray-800 transition-colors duration-300 py-2 ${
                isActive ? "text-red-400" : ""
              }`
            }
            to="/"
            onClick={() => setShow(false)}
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-gray-500 text-xl font-light tracking-widest hover:text-gray-800 transition-colors duration-300 py-2 ${
                isActive ? "text-red-400" : ""
              }`
            }
            to="/recipes"
            onClick={() => setShow(false)}
          >
            RECIPES
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-gray-500 text-xl font-light tracking-widest hover:text-gray-800 transition-colors duration-300 py-2 ${
                isActive ? "text-red-400" : ""
              }`
            }
            to="/about"
            onClick={() => setShow(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-gray-500 text-xl font-light tracking-widest hover:text-gray-800 transition-colors duration-300 py-2 ${
                isActive ? "text-red-400" : ""
              }`
            }
            to="/favorite"
            onClick={() => setShow(false)}
          >
            FAVORITE
          </NavLink>
          <NavLink
            className=" w-1/2 ml-24 px-5 py-2 text-black bg-transparent border border-gray-800 rounded-full text-base hover:text-white hover:bg-gray-800 transition-all duration-300 mt-2"
            to="/recipes/create-recipe"
            onClick={() => setShow(false)}
          >
            let's go
          </NavLink>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="lg:hidden flex items-center justify-center text-2xl p-2 z-50"
        onClick={() => setShow(!show)}
      >
        {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
