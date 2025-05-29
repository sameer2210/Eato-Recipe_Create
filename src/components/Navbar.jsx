import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center gap-x-10 p-3">
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/">
        Home
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/recipes">
        Recipes
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/about">
        About
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/favroite">
        Favroite
      </NavLink>
    </div>
  );
};

export default Navbar;
