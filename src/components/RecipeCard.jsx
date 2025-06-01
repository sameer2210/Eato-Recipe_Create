import { Link } from "react-router";
import "remixicon/fonts/remixicon.css";

const RecipeCard = (props) => {
  const { id, image, title, chef, desc } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className=" relative w-[22vw] block shadow rounded-2xl overflow-hidden"
    >
      <div>
        <i className="ri-heart-add-line absolute px-2 py-1 text-xl ml-60 mt-1  shadow-2xl rounded-full bg-red-500 hover:text-white  "></i>
      </div>
      <img
        className=" w-full h-[30vh] object-cover"
        src={image}
        alt="network error"
      />
      <h1 className="text-3xl font-bold font-mono pl-2 mt-2">{title}</h1>
      <small className="pl-2 text-red-400 text-xl mt-3">{chef}</small>
      <p className="pl-2 mt-3 pb-10">
        {/* {desc} */}
        {desc.slice(0, 100)}... <span className="text-blue-400">more</span>
      </p>
    </Link>
  );
};

export default RecipeCard;

// import React, { useContext, useState } from "react";
// import { Link } from "react-router"; // or react-router-dom if you're using v6+
// import 'remixicon/fonts/remixicon.css';
// import { recipecontext } from "../context/RecipeContext";

// const RecipeCard = (props) => {
//   const { favroite, setfavroite } = useContext(recipecontext);
//   const { id, image, title, chef, desc } = props.recipe;

//   const [isPopping, setIsPopping] = useState(false);

//   const favroiteHandler = (e) => {
//     e.stopPropagation(); // Stop the click from bubbling to the Link
//     e.preventDefault(); // Stop navigation

//     // Optional: avoid duplicates
//     if (!favroite.some(item => item.id === id)) {
//       setfavroite([...favroite, props.recipe]);
//     }

//     setIsPopping(true);
//     setTimeout(() => setIsPopping(false), 300);
//   };

//   return (
//     <div className="relative w-[22vw] shadow rounded-2xl overflow-hidden bg-white">
//       {/* Heart Icon Button (OUTSIDE Link) */}
//       <button
//         onClick={favroiteHandler}
//         className={`absolute right-2 top-2 z-10 p-2 text-xl shadow-2xl rounded-full bg-red-500 text-white
//         transition-transform duration-300 ease-out
//         ${isPopping ? "scale-125" : "scale-100"}`}
//       >
//         <i className="ri-heart-add-line"></i>
//       </button>

//       {/* Card content is clickable */}
//       <Link
//         to={`/recipes/details/${id}`}
//         className="block"
//       >
//         <img
//           className="w-full h-[30vh] object-cover"
//           src={image}
//           alt="network error"
//         />
//         <h1 className="text-3xl font-bold font-mono pl-2 mt-2">{title}</h1>
//         <small className="pl-2 text-red-400 text-xl mt-1 block">{chef}</small>
//         <p className="pl-2 mt-2 pb-10 text-gray-700">
//           {desc.slice(0, 100)}...{" "}
//           <span className="text-blue-400">more</span>
//         </p>
//       </Link>
//     </div>
//   );
// };

// export default RecipeCard;
