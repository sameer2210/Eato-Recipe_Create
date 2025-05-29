/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router";

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
    setdata([...data, recipe]);
    toast.success("New Recipe Created!");
    reset();
    navigate(-1);
  };
  console.log(data);

  return (
    <div className="w-full h-max p-5 ">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className=" mt-5 p-5 shadow w-1/3 rounded-2xl ml-5 "
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
          {...register("Chef")}
          placeholder="Chef"
        />
        <textarea
          className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
          {...register("Desc")}
          placeholder="recipe description..."
        ></textarea>
        <textarea
          className="text-xl w-full block mb-5 px-5 py-2 border-b-1 rounded outline-0"
          {...register("ingr")}
          placeholder="recipe ingredients..."
        ></textarea>
        <select
          className="block w-1/2 mb-5 px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700  shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-500 transition duration-200"
          {...register("category")}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Supper">Supper</option>
          <option value="Dinner">Dinner</option>
        </select>

        <button className="px-5 py-2 bg-gradient-to-r from-black via-pink-500 to-black text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-200">
          ✨ Create Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
