/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { motion } from "framer-motion";
import { recipecontext } from "../context/RecipeContext";

const Favroite = () => {
  const { favroite } = useContext(recipecontext);
  const reciperender = favroite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="w-full">
      <motion.div
        className="p-3 mt-15 flex flex-wrap items-center justify-items-start gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {favroite.length > 0 ? reciperender : "No Recipe found!"}
      </motion.div>
    </div>
  );
};

export default Favroite;
