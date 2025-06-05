/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useContext } from "react";
// import { Link } from "react-router";
// import RecipeCard from "../components/RecipeCard";
// import { motion } from "framer-motion";
// import { recipecontext } from "../context/RecipeContext";

// const Recipes = () => {
//   const { data } = useContext(recipecontext);
//   const reciperender = data.map((recipe) => (
//     <RecipeCard key={recipe.id} recipe={recipe} />
//   ));
//   return (
//     <div className="w-full bg-amber-500">
//       <Link
//         className=" absolute right-5 px-6 py-3 bg-gray-50 text-black font-semibold border border-black rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-green-400/50 active:scale-95 focus:outline-none"
//         to="/recipes/create-recipe"
//       >
//         Create Recipe
//       </Link>

//       <motion.div
//         className="p-3 mt-15 flex flex-wrap items-center justify-items-start gap-6"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {data.length > 0 ? reciperender : "No Recipe found!"}
//       </motion.div>
//     </div>
//   );
// };

// export default Recipes;

//---------------------------------------------------------------------------------------------------

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
    <div className="w-full  min-h-screen bg-gradient-to-br from-red-100 via-orange-50 to-green-50 rounded-xl">
      <div className="relative p-4 sm:p-6 ">
        <Link
          className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-2 sm:px-6 sm:py-3  text-black font-semibold border border-black rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-green-400/50 active:scale-95 focus:outline-none text-sm sm:text-base"
          to="/recipes/create-recipe"
        >
          <span className="hidden sm:inline">Create Recipe</span>
          <span className="sm:hidden">Create</span>
        </Link>

        <motion.div
          className="pt-16 sm:pt-20 pb-6 px-2 sm:px-4 flex flex-wrap justify-center sm:justify-start items-start gap-4 sm:gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.length > 0 ? (
            <div className="w-full grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 shadow-2xl hover:shadow-3xl">
              {reciperender}
            </div>
          ) : (
            <div className="w-full text-center py-8 sm:py-12">
              <span className="text-gray-800 text-lg sm:text-xl font-medium">
                No Recipe found!
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Recipes;