/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import "remixicon/fonts/remixicon.css";
import { recipecontext } from "../context/RecipeContext";

const Recipe = () => {
  const navigate = useNavigate();
  const { data, setdata, favroite, setfavroite } = useContext(recipecontext);
  const { id } = useParams();
  console.log(id);

  const recipe = data.find((r) => r.id === id);
  console.log(recipe);

  const favoriteHandler = () => {
    let copyfavroite = [...favroite];
    copyfavroite.push(recipe);
    setfavroite(copyfavroite);
    window.localStorage.setItem("favroite", JSON.stringify(copyfavroite));
    toast.done("Added to favorite");
  };
  const unfavoriteHandler = () => {
    const filteredfavorite = favroite.filter((f) => f.id != id);
    setfavroite(filteredfavorite);
    window.localStorage.setItem("favroite", JSON.stringify(filteredfavorite));
    toast.dismiss("Remove from favorite");
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
    toast.success("Recipe Deleted!");
    navigate(-1);
  };
  console.log(favroite);

  return recipe ? (
    <div className="mt-5 w-full h-screen overflow-auto flex justify-around gap-1 ">
      <div className="left w-1/2 p-5">
        <h1 className="text-5xl mb-3 ">{recipe?.title}</h1>
        <div className="flex justify-between items-start">
          <img
            className="w-1/2 h-[40vh] object-cover object-center rounded shadow-xl"
            src={recipe?.image}
            alt="network error"
          />
          {/* {favroite.find((r) => r.id === recipe.id) ? */}
          {favroite.some((r) => r.id === recipe.id) ? (
            <i
              onClick={unfavoriteHandler}
              className="ri-heart-add-line px-2 py-1 text-xl shadow-2xl rounded-full  bg-red-500 hover:bg-black hover:text-white "
            ></i>
          ) : (
            <i
              onClick={favoriteHandler}
              className="ri-heart-add-line px-2 py-1 text-xl shadow-2xl rounded-full  bg-black text-white hover:bg-red-500 hover:text-white "
            ></i>
          )}
        </div>
        <p className="mt-3">{recipe?.desc}</p>

        <span className="text-white mr-5  inline-block mt-2 bg-red-400 rounded p-2">
          {recipe?.chef}
        </span>
        <span className="text-white inline-block mt-2 bg-green-400 rounded p-2">
          {recipe?.category}
        </span>

        <h1 className="mt-3 text-xl font-medium">Ingredients</h1>
        <p>{recipe?.ingr}</p>
        <h1 className="mt-3 text-xl font-medium">Instructions</h1>
        <p>{recipe?.inst}</p>
      </div>
      <div className="right w-1/3">
        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className="right mt-8 p-5 shadow text-xl rounded-2xl  "
        >
          <input
            className="text-xl w-full block mb-5 px-5 py-1 border-b-1 rounded outline-0"
            type="url"
            {...register("image")}
            placeholder="Image url"
          />
          <input
            className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
            type="text"
            {...register("title")}
            placeholder="Title"
          />
          <input
            className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
            type="text"
            {...register("chef")}
            placeholder="Chef"
          />
          <textarea
            className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
            {...register("desc")}
            placeholder="recipe description..."
          ></textarea>
          <textarea
            className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
            {...register("ingr")}
            placeholder="recipe ingredients..."
          ></textarea>
          <select
            className="block w-42 mb-5 px-2 font-sans rounded-lg border border-gray-300 bg-white text-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-500 transition duration-200"
            {...register("category")}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Supper">Supper</option>
            <option value="Dinner">Dinner</option>
          </select>

          <button
            type="submit"
            className="px-3 mr-4 py-2 bg-gradient-to-b from-black via-green-600 to-black text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            Update Recipe
          </button>

          <button
            onClick={DeleteHandler}
            type="buttton"
            className="px-3 mt-3  py-2 bg-gradient-to-b from-black via-red-500 to-black text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    "loading Not any Recipe!"
  );
};

export default Recipe;
