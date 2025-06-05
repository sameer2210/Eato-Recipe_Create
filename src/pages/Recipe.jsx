// /* eslint-disable no-unused-vars */
// import { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate, useParams } from "react-router";
// import { toast } from "react-toastify";
// import "remixicon/fonts/remixicon.css";
// import { recipecontext } from "../context/RecipeContext";

// const Recipe = () => {
//   const navigate = useNavigate();
//   const { data, setdata, favorite, setfavorite } = useContext(recipecontext);
//   const { id } = useParams();
//   console.log(id);

//   const recipe = data.find((r) => r.id === id);
//   console.log(recipe);

//   const favoriteHandler = () => {
//     let copyfavorite = [...favorite];
//     copyfavorite.push(recipe);
//     setfavorite(copyfavorite);
//     window.localStorage.setItem("favorite", JSON.stringify(copyfavorite));
//     toast.done("Added to favorite");
//   };
//   const unfavoriteHandler = () => {
//     const filteredfavorite = favorite.filter((f) => f.id != id);
//     setfavorite(filteredfavorite);
//     window.localStorage.setItem("favorite", JSON.stringify(filteredfavorite));
//     toast.dismiss("Remove from favorite");
//   };

//   const [category, setCategory] = useState("breakfast");
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm({
//     defaultValues: {
//       title: recipe?.title,
//       image: recipe?.image,
//       chef: recipe?.chef,
//       desc: recipe?.desc,
//       ingr: recipe?.ingr,
//       inst: recipe?.inst,
//       category: recipe?.category
//     }
//   });

//   const SubmitHandler = (updatedRecipe) => {
//     const i = data.findIndex((r) => r.id === id);
//     console.log(data[i]);
//     const copydata = [...data];
//     copydata[i] = { ...recipe, ...updatedRecipe };
//     setdata(copydata);
//     window.localStorage.setItem("recipes", JSON.stringify(copydata));
//     toast.success("Recipe Updated!");
//     reset();
//   };

//   const DeleteHandler = () => {
//     const filterData = data.filter((r) => r.id != id);
//     setdata(filterData);
//     window.localStorage.setItem("recipes", JSON.stringify(filterData));
//     // if recipe not exist remove also from favorite
//     toast.success("Recipe Deleted!");
//     navigate(-1);
//   };
//   console.log(favorite);

//   return recipe ? (
//     <div className="mt-5 w-full h-screen overflow-auto flex justify-around gap-1 ">
//       <div className="left w-1/2 p-5">
//         <h1 className="text-5xl mb-3 ">{recipe?.title}</h1>
//         <div className="flex justify-between items-start">
//           <img
//             className="w-1/2 h-[40vh] object-cover object-center rounded shadow-xl"
//             src={recipe?.image}
//             alt="network error"
//           />
//           {/* {favorite.find((r) => r.id === recipe.id) ? */}
//           {favorite.some((r) => r.id === recipe.id) ? (
//             <i
//               onClick={unfavoriteHandler}
//               className="ri-heart-add-line px-2 py-1 text-xl shadow-2xl rounded-full  bg-red-500 hover:bg-black hover:text-white "
//             ></i>
//           ) : (
//             <i
//               onClick={favoriteHandler}
//               className="ri-heart-add-line px-2 py-1 text-xl shadow-2xl rounded-full  bg-black text-white hover:bg-red-500 hover:text-white "
//             ></i>
//           )}
//         </div>
//         <p className="mt-3">{recipe?.desc}</p>

//         <span className="text-white mr-5  inline-block mt-2 bg-red-400 rounded p-2">
//           {recipe?.chef}
//         </span>
//         <span className="text-white inline-block mt-2 bg-green-400 rounded p-2">
//           {recipe?.category}
//         </span>

//         <h1 className="mt-3 text-xl font-medium">Ingredients</h1>
//         <p>{recipe?.ingr}</p>
//         <h1 className="mt-3 text-xl font-medium">Instructions</h1>
//         <p>{recipe?.inst}</p>
//       </div>
//       <div className="right w-1/3">
//         <form
//           onSubmit={handleSubmit(SubmitHandler)}
//           className="right mt-8 p-5 shadow text-xl rounded-2xl  "
//         >
//           <input
//             className="text-xl w-full block mb-5 px-5 py-1 border-b-1 rounded outline-0"
//             type="url"
//             {...register("image")}
//             placeholder="Image url"
//           />
//           <input
//             className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
//             type="text"
//             {...register("title")}
//             placeholder="Title"
//           />
//           <input
//             className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
//             type="text"
//             {...register("chef")}
//             placeholder="Chef"
//           />
//           <textarea
//             className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
//             {...register("desc")}
//             placeholder="recipe description..."
//           ></textarea>
//           <textarea
//             className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
//             {...register("ingr")}
//             placeholder="recipe ingredients..."
//           ></textarea>
//           <select
//             className="block w-42 mb-5 px-2 font-sans rounded-lg border border-gray-300 bg-white text-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-500 transition duration-200"
//             {...register("category")}
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="Breakfast">Breakfast</option>
//             <option value="Lunch">Lunch</option>
//             <option value="Supper">Supper</option>
//             <option value="Dinner">Dinner</option>
//           </select>

//           <button
//             type="submit"
//             className="px-3 mr-4 py-2 bg-gradient-to-b from-black via-green-600 to-black text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-200"
//           >
//             Update Recipe
//           </button>

//           <button
//             onClick={DeleteHandler}
//             type="buttton"
//             className="px-3 mt-3  py-2 bg-gradient-to-b from-black via-red-500 to-black text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-200"
//           >
//             Delete Recipe
//           </button>
//         </form>
//       </div>
//     </div>
//   ) : (
//     "loading Not any Recipe!"
//   );
// };

// export default Recipe;

//----------------------------------------------------------------------------------------------------------------------

/* eslint-disable no-unused-vars */
import "remixicon/fonts/remixicon.css";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { recipecontext } from "../context/RecipeContext";

const Recipe = () => {
  const navigate = useNavigate();
  const { data, setdata, favorite, setfavorite } = useContext(recipecontext);
  const { id } = useParams();
  console.log(id);
  console.log("recipecontext", recipecontext);
  const recipe = data.find((r) => r.id === id);
  console.log(recipe);

  const favoriteHandler = () => {
    const alreadyFav = favorite.some((f) => f.id === recipe.id);
    if (!alreadyFav) {
      const updatedFavorites = [...favorite, { ...recipe }];
      setfavorite(updatedFavorites);
      window.localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
      toast("Added to favorite");
    }
  };

  const unfavoriteHandler = () => {
    const updatedFavorites = favorite.filter((f) => f.id !== recipe.id);
    setfavorite(updatedFavorites);
    window.localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
    toast("Removed from favorite");
  };

  const [category, setCategory] = useState("breakfast");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      chef: recipe?.chef,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      inst: recipe?.inst,
      category: recipe?.category
    }
  });

  const SubmitHandler = (updatedRecipe) => {
    const i = data.findIndex((r) => r.id === id);
    console.log(data[i]);
    const copydata = [...data];
    copydata[i] = { ...recipe, ...updatedRecipe };
    setdata(copydata);
    window.localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated!");
    reset();
  };

  const DeleteHandler = () => {
    const filterData = data.filter((r) => r.id != id);
    setdata(filterData);
    window.localStorage.setItem("recipes", JSON.stringify(filterData));
    // if recipe not exist remove also from favorite
    const updatedFavorites = favorite.filter((f) => f.id !== id);
    setfavorite(updatedFavorites);
    localStorage.setItem("favorite", JSON.stringify(updatedFavorites));

    toast.success("Recipe Deleted!");
    navigate(-1);
  };

  // console.log(favorite);

  return recipe ? (
    <div className="min-h-screen  py-8 ">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side - Recipe Display */}
          <div className=" w-1/2 flex-1 rounded-xl shadow-xl p-4 backdrop-blur-sm ">
            {/* Header with Title and Favorite Button */}
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl lg:text-5xl font-bold bg-gray-800 bg-clip-text text-transparent leading-tight">
                {recipe?.title}
              </h1>

              {favorite.some((r) => r.id === recipe.id) ? (
                <button
                  onClick={unfavoriteHandler}
                  className="px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
                >
                  <i className="ri-heart-fill text-2xl group-hover:animate-pulse"></i>
                </button>
              ) : (
                <button
                  onClick={favoriteHandler}
                  className="px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transform hover:scale-110 transition-all duration-300 group"
                >
                  <i className="ri-heart-add-line text-2xl group-hover:animate-bounce"></i>
                </button>
              )}
            </div>

            {/* Recipe Image */}
            <div className=" w-1/2 relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                className="relative w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                src={recipe?.image}
                alt={recipe?.title || "Recipe"}
              />
            </div>

            {/* Description */}
            <div className="mb-8 overflow-x-scroll ">
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                {recipe?.desc}
              </p>
            </div>

            {/* Chef and Category Tags */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-300 to-red-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200">
                <i className="ri-user-3-fill mr-2 text-lg"></i>
                {recipe?.chef}
              </span>
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-300 to-emerald-900 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200">
                <i className="ri-restaurant-fill mr-2 text-lg"></i>
                {recipe?.category}
              </span>
            </div>

            {/* Ingredients Section */}
            <div className="mb-8 overflow-x-scroll">
              <div className="flex items-center mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <i className="ri-bowl-fill mr-3 text-orange-500 text-3xl"></i>
                  Ingredients
                </h2>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-orange-500 shadow-inner">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {recipe?.ingr}
                </p>
              </div>
            </div>

            {/* Instructions Section */}
            <div className="mb-6 overflow-x-scroll">
              <div className="flex items-center mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <i className="ri-file-list-3-fill mr-3 text-green-500 text-3xl"></i>
                  Instructions
                </h2>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500 shadow-inner">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {recipe?.inst}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Edit Form */}
          <div className="w-1/2 lg:w-96 ">
            <div className=" rounded-xl shadow-xl p-4 backdrop-blur-sm sticky top-8">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  <i className="ri-edit-2-fill mr-3 text-blue-500 text-2xl"></i>
                  Edit Recipe
                </h3>
              </div>

              <form
                onSubmit={handleSubmit(SubmitHandler)}
                className="space-y-4"
              >
                {/* Image URL Input */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="ri-image-fill mr-2 text-purple-500"></i>
                    Image URL
                  </label>
                  <input
                    className="w-full px-4 py-2 bg-gray-50 border-2 border-gray-200 rounded-xl text-lg transition-all duration-200 focus:border-purple-500 focus:bg-white focus:shadow-lg focus:outline-none group-hover:border-gray-300"
                    type="url"
                    {...register("image")}
                    placeholder="Enter image URL..."
                  />
                </div>

                {/* Title Input */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="ri-text mr-2 text-orange-500"></i>
                    Recipe Title
                  </label>
                  <input
                    className="w-full px-4 py-2 bg-gray-50 border-2 border-gray-200 rounded-xl text-lg transition-all duration-200 focus:border-orange-500 focus:bg-white focus:shadow-lg focus:outline-none group-hover:border-gray-300"
                    type="text"
                    {...register("title")}
                    placeholder="Enter recipe title..."
                  />
                </div>

                {/* Chef Input */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="ri-user-3-fill mr-2 text-red-500"></i>
                    Chef Name
                  </label>
                  <input
                    className="w-full px-4 py-2 bg-gray-50 border-2 border-gray-200 rounded-xl text-lg transition-all duration-200 focus:border-red-500 focus:bg-white focus:shadow-lg focus:outline-none group-hover:border-gray-300"
                    type="text"
                    {...register("chef")}
                    placeholder="Enter chef name..."
                  />
                </div>

                {/* Description Textarea */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="ri-file-text-fill mr-2 text-green-500"></i>
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 bg-gray-50 border-2 border-gray-200 rounded-xl text-lg h-24 resize-none transition-all duration-200 focus:border-green-500 focus:bg-white focus:shadow-lg focus:outline-none group-hover:border-gray-300"
                    {...register("desc")}
                    placeholder="Describe your recipe..."
                  ></textarea>
                </div>

                {/* Ingredients Textarea */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="ri-bowl-fill mr-2 text-blue-500"></i>
                    Ingredients
                  </label>
                  <textarea
                    className="w-full px-4 py-2 bg-gray-50 border-2 border-gray-200 rounded-xl text-lg h-32 resize-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:outline-none group-hover:border-gray-300"
                    {...register("ingr")}
                    placeholder="List your ingredients..."
                  ></textarea>
                </div>

                {/* Instructions Textarea */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="ri-file-list-3-fill mr-2 text-indigo-500"></i>
                    Instructions
                  </label>
                  <textarea
                    className="w-full px-4 py-2 bg-gray-50 border-2 border-gray-200 rounded-xl text-lg h-32 resize-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:shadow-lg focus:outline-none group-hover:border-gray-300"
                    {...register("inst")}
                    placeholder="Write cooking instructions..."
                  ></textarea>
                </div>

                {/* Category Select */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="ri-restaurant-fill mr-2 text-teal-500"></i>
                    Category
                  </label>
                  <select
                    className="w-full px-4 py-2 bg-gray-50 border-2 border-gray-200 rounded-xl text-lg transition-all duration-200 focus:border-teal-500 focus:bg-white focus:shadow-lg focus:outline-none group-hover:border-gray-300 cursor-pointer"
                    {...register("category")}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Breakfast"> Breakfast</option>
                    <option value="Lunch"> Lunch</option>
                    <option value="Supper"> Supper</option>
                    <option value="Dinner"> Dinner</option>
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 pt-4 flex flex-col justify-center items-center">
                  <button
                    type="submit"
                    className="  px-6 py-3  bg-gradient-to-r from-emerald-200 via-emerald-500 to-green-900 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-200 flex items-center justify-center group"
                  >
                    <i className="ri-refresh-line mr-3 text-xl group-hover:animate-spin"></i>
                    Update Recipe
                  </button>

                  <button
                    onClick={DeleteHandler}
                    type="button"
                    className=" px-6 py-3 bg-gradient-to-r from-red-200 via-red-400 to-red-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:from-red-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-200 flex items-center justify-center group"
                  >
                    <i className="ri-delete-bin-fill mr-3 text-xl group-hover:animate-bounce"></i>
                    Delete Recipe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
        <div className="animate-spin w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Loading Recipe...
        </h2>
        <p className="text-gray-600">
          Please wait while we fetch your delicious recipe!
        </p>
      </div>
    </div>
  );
};

export default Recipe;
