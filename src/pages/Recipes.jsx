import React from "react";
import { Link } from "react-router";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  return (
    <div className="w-full">
      <Link
        className=" absolute right-5 px-6 py-3 bg-gray-50 text-black font-semibold border border-black rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-green-400/50 active:scale-95 focus:outline-none"
        to="/recipes/create-recipe"
      >
        Create Recipe
      </Link>

        <div className="p-5 mt-15 bg-red-50">
          <RecipeCard/>
        </div>

    </div>
  );
};

export default Recipes;
