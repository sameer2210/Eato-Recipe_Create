/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router";
import RecipeCard from "../components/RecipeCard";
import { motion } from "framer-motion";
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
  const { data } = useContext(recipecontext);
  const reciperender = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="w-full">
      <Link
        className=" absolute right-5 px-6 py-3 bg-gray-50 text-black font-semibold border border-black rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-green-400/50 active:scale-95 focus:outline-none"
        to="/recipes/create-recipe"
      >
        Create Recipe
      </Link>

      <motion.div
        className="p-3 mt-15 flex flex-wrap items-center justify-items-start gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {data.length > 0 ? reciperender : "No Recipe found!"}
      </motion.div>
    </div>
  );
};

export default Recipes;
