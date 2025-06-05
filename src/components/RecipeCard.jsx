// /* eslint-disable no-unused-vars */
// import { Link } from "react-router";
// import "remixicon/fonts/remixicon.css";

// const RecipeCard = (props) => {
//   const { id, image, title, chef, desc } = props.recipe;

//   return (
//     <Link
//       to={`/recipes/details/${id}`}
//       className=" relative w-[22vw] block shadow rounded-2xl overflow-hidden"
//     >
//       <div>
//         <i className="ri-heart-add-line absolute px-2 py-1 text-xl ml-60 mt-1  shadow-2xl rounded-full bg-red-500 hover:text-white  "></i>
//       </div>
//       <img
//         className=" w-full h-[30vh] object-cover"
//         src={image}
//         alt="network error"
//       />
//       <h1 className="text-3xl font-bold font-mono pl-2 mt-2">{title}</h1>
//       <small className="pl-2 text-red-400 text-xl mt-3">{chef}</small>
//       <p className="pl-2 mt-3 pb-10">
//         {/* {desc} */}
//         {desc.slice(0, 100)}... <span className="text-blue-400">more</span>
//       </p>
//     </Link>
//   );
// };

// export default RecipeCard;

//________________________________________________________________________________________________________________

import React, { useContext, useState } from "react";
import { Link } from "react-router"; // or react-router-dom if you're using v6+
import "remixicon/fonts/remixicon.css";
import { recipecontext } from "../context/RecipeContext";

const RecipeCard = (props) => {
  const { favorite, setfavorite } = useContext(recipecontext);
  const { id, image, title, chef, desc } = props.recipe;

  const [isPopping, setIsPopping] = useState(false);

  // Check if current recipe is already in favorites
  const isFavorite = favorite.some((item) => item.id === id);

  const favroiteHandler = (e) => {
    e.stopPropagation(); // Stop the click from bubbling to the Link
    e.preventDefault(); // Stop navigation

    let updatedFavorites;

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favorite.filter((item) => item.id !== id);
    } else {
      // Add to favorites
      updatedFavorites = [...favorite, props.recipe];
    }

    // Update state
    setfavorite(updatedFavorites);

    // Save to localStorage
    localStorage.setItem("favorite", JSON.stringify(updatedFavorites));

    // Animation effect
    setIsPopping(true);
    setTimeout(() => setIsPopping(false), 300);
  };

  return (
    <div className="relative w-full  max-w-sm mx-auto sm:max-w-none sm:w-full md:w-[90%] lg:w-full xl:w-full shadow-lg rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Heart Icon Button (OUTSIDE Link) */}
      <button
        onClick={favroiteHandler}
        className={`absolute right-3 top-3 z-10 px-2 py-1 text-lg sm:text-xl shadow-lg rounded-full transition-all duration-300 ease-out
        ${
          isFavorite
            ? "bg-red-500 text-white"
            : "bg-white/80 text-red-500 hover:bg-red-500 hover:text-white"
        }
        ${isPopping ? "scale-125" : "scale-100"}
        hover:scale-110`}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <i className={isFavorite ? "ri-heart-fill" : "ri-heart-line"}></i>
      </button>

      {/* Card content is clickable */}
      <Link
        to={`/recipes/details/${id}`}
        className="block hover:opacity-95 transition-opacity duration-200"
      >
        <div className="relative">
          <img
            className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
            src={image}
            alt={title || "Recipe image"}
            loading="lazy"
          />
        </div>

        <div className="p-3 sm:p-4 ">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono mb-1 sm:mb-2 line-clamp-2">
            {title && title.length > 10 ? <>{title.slice(0, 20)}... </> : title}
          </h1>
          <small className="text-red-400 text-base sm:text-lg lg:text-xl block mb-2">
            {chef && chef.length > 5 ? <>{chef.slice(0, 20)}... </> : chef}
          </small>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {desc && desc.length > 90 ? (
              <>
                {desc.slice(0, 90)}...{" "}
                <span className="text-blue-400 hover:text-blue-600 font-medium">
                  read more
                </span>
              </>
            ) : (
              desc
            )}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
