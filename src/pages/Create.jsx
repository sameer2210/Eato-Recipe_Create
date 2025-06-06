// /* eslint-disable no-unused-vars */
// import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { nanoid } from "nanoid";
// import { toast } from "react-toastify";

// import { recipecontext } from "../context/RecipeContext";
// import { useNavigate } from "react-router";
// import Recipe from "./Recipe";

// const Create = () => {
//   const navigate = useNavigate();
//   const { data, setdata } = useContext(recipecontext);
//   const [category, setCategory] = useState("breakfast");
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm();

//   const SubmitHandler = (recipe) => {
//     recipe.id = nanoid();

//     // setdata([...data, recipe]);                  //or
//     let copydata = [...data];
//     copydata.push(recipe);
//     setdata(copydata);
//     window.localStorage.setItem("recipes", JSON.stringify(copydata));

//     toast.success("New Recipe Created!");
//     reset();
//     navigate(-1);
//   };
//   console.log(data);

//   return (
//     <div className="w-full h-max flex flex-col justify-center items-center p-5 bg-gradient-to-r from-red-50 via-15% to-pink-50 rounded-xl ">
//       <h1 className="text-4xl font-mono">Create your Recipe</h1>
//       <form
//         onSubmit={handleSubmit(SubmitHandler)}
//         className=" mt-5 p-5 shadow-2xl w-1/3 rounded-2xl  "
//       >
//         <input
//           className="text-xl w-full block mb-5 px-5 py-1 border-b-1 rounded outline-0"
//           type="url"
//           required
//           {...register("image")}
//           placeholder="Image url"
//         />
//         <input
//           className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
//           type="text"
//           required
//           {...register("title")}
//           placeholder="Title"
//         />
//         <input
//           className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
//           type="text"
//           required
//           {...register("chef")}
//           placeholder="Chef"
//         />
//         <textarea
//           className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
//           {...register("desc")}
//           placeholder="recipe description..."
//         ></textarea>
//         <textarea
//           className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
//           {...register("ingr")}
//           placeholder="recipe ingredients..."
//         ></textarea>
//         <select
//           className="block w-1/2 mb-5 px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-500 transition duration-200"
//           {...register("category")}
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="Breakfast">Breakfast</option>
//           <option value="Lunch">Lunch</option>
//           <option value="Supper">Supper</option>
//           <option value="Dinner">Dinner</option>
//         </select>

//         <button className="px-5 py-2 bg-gradient-to-r from-black via-pink-500 to-black text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-200">
//           ✨ Create Recipe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Create;

//_________________________________________________________________________________________________________________________________________________________________________________________

/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router";
import Recipe from "./Recipe";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const [category, setCategory] = useState("breakfast");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    // setdata([...data, recipe]);                  //or
    let copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    window.localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("New Recipe Created!");
    reset();
    navigate(-1);
  };
  console.log(data);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-3 sm:p-5 bg-gradient-to-r from-red-50 via-15% to-pink-50 rounded-xl animate-fade-in">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono text-center mb-5 animate-slide-down">
        Create your Recipe
      </h1>
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="mt-2 sm:mt-5 p-4 sm:p-5 shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl rounded-2xl bg-white/80 backdrop-blur-sm animate-slide-up"
      >
        <input
          className="text-base sm:text-lg md:text-xl w-full block mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-5 py-2 border-b-1 rounded outline-0 transition-all duration-300 focus:scale-105 focus:shadow-lg"
          type="url"
          required
          {...register("image")}
          placeholder="Image url"
        />
        <input
          className="text-base sm:text-lg md:text-xl w-full block mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-5 py-2 border-b-1 rounded outline-0 transition-all duration-300 focus:scale-105 focus:shadow-lg"
          type="text"
          required
          {...register("title")}
          placeholder="Title"
        />
        <input
          className="text-base sm:text-lg md:text-xl w-full block mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-5 py-2 border-b-1 rounded outline-0 transition-all duration-300 focus:scale-105 focus:shadow-lg"
          type="text"
          required
          {...register("chef")}
          placeholder="Chef"
        />
        <textarea
          className="text-base sm:text-lg md:text-xl w-full block mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-5 py-2 border-b-1 rounded outline-0 min-h-[80px] sm:min-h-[100px] transition-all duration-300 focus:scale-105 focus:shadow-lg resize-vertical"
          {...register("desc")}
          placeholder="Write Recipe description..."
        ></textarea>
        <textarea
          className="text-base sm:text-lg md:text-xl w-full block mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-5 py-2 border-b-1 rounded outline-0 min-h-[80px] sm:min-h-[100px] transition-all duration-300 focus:scale-105 focus:shadow-lg resize-vertical"
          {...register("ingr")}
          placeholder="Write Recipe ingredients..."
        ></textarea>

        <textarea
          className="text-base sm:text-lg md:text-xl w-full block mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-5 py-2 border-b-1 rounded outline-0 min-h-[80px] sm:min-h-[100px] transition-all duration-300 focus:scale-105 focus:shadow-lg resize-vertical"
          {...register("inst")}
          placeholder="Write Recipe instructions..."
        ></textarea>

        <select
          className="block w-full sm:w-3/4 md:w-1/2 mb-3 sm:mb-4 md:mb-5 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-500 transition-all duration-300 focus:scale-105"
          {...register("category")}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Supper">Supper</option>
          <option value="Dinner">Dinner</option>
        </select>

        <button className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-black via-pink-500 to-black text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-200 animate-pulse hover:animate-none">
          ✨ Create Recipe
        </button>
      </form>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default Create;
