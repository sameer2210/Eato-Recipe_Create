// /* eslint-disable no-unused-vars */
// import React, { useContext } from "react";
// import RecipeCard from "../components/RecipeCard";
// import { motion } from "framer-motion";
// import { recipecontext } from "../context/RecipeContext";

// const Favorite = () => {
//   const { favorite } = useContext(recipecontext);
//   const reciperender = favorite.map((recipe) => (
//     <RecipeCard key={recipe.id} recipe={recipe} />
//   ));
//   return (
//     <div className="w-full flex ">
//       <motion.div
//         className="p-3 mt-15 flex flex-wrap items-center justify-items-start gap-6"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {favorite.length > 0 ? reciperender : "No Recipe found!"}
//       </motion.div>
//     </div>
//   );
// };

// export default Favorite;

//----------------------------------------------------------------------------------------------------------------

/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { motion } from "framer-motion";
import { recipecontext } from "../context/RecipeContext";

const Favorite = () => {
  const { favorite } = useContext(recipecontext);
  const reciperender = favorite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-red-50 via-orange-50 to-green-50 rounded-xl">
      <motion.div
        className="p-3 sm:p-4 md:p-6 lg:p-8 mt-4 sm:mt-6 md:mt-8 lg:mt-15 
                   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
                   gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8
                   max-w-7xl mx-auto justify-items-center lg:justify-items-start"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {favorite.length > 0 ? (
          reciperender
        ) : (
          <div className="w-full text-center py-8 sm:py-12 md:py-16 lg:py-20">
              <img src="notFound.svg" alt="newtwork error"/>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-medium">
              No Recipe found!
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Favorite;
