/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { recipecontext } from "../context/RecipeContext";

const Recipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { id } = useParams();
  console.log(id);

  const recipe = data.find((r) => r.id === id);
  console.log(recipe);

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
    toast.success("Recipe Updated!");
    reset();
  };

  const DeleteHandler = () => {
    const filterData = data.filter((r) => r.id != id);
    setdata(filterData);
    toast.success("Recipe Deleted!");
    navigate(-1);
  };

  return recipe ? (
    <div className="mt-5 w-full h-screen overflow-auto flex justify-around gap-1 ">
      <div className="left w-1/2 p-5">
        <h1 className="text-5xl mb-3 ">{recipe?.title}</h1>
        <img
          className="w-1/2 h-[40vh] object-cover object-center rounded shadow-xl"
          src={recipe?.image}
          alt="network error"
        />
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

// const Recipe = () => {
//     const { id } = useParams();
//     const { data, setdata } = useContext(recipecontext);
//     const recipe = data.find((r) => r.id == id);

//     const navigate = useNavigate();
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm({
//
//     });

//     const UpdateHandler = (recipe) => {
//         const index = data.findIndex((r) => r.id == id);
//         const copydata = [...data];
//         copydata[index] = { ...copydata[index], ...recipe };
//         setdata(copydata);
//         toast.success("recipe updated!");
//     };

//     const deletehandler = () => {
//         const filtererecipe = data.filter((r) => r.id != id);
//         setdata(filtererecipe);
//         toast.success("recipe deleted!");
//         navigate("/recipes");
//     };

//     return recipe ? (
//         <div className="w-full flex p-2">
// </div>

//             <form
//                 className="right w-1/2 p-2 text-xl "
//                 onSubmit={handleSubmit(UpdateHandler)}
//             >
//                 <input
//                     {...register("image")}
//                     className="w-full block mb-3 outline-0 border-b p-2 "
//                     type="url"
//                     placeholder="Recipe Image URL"
//                 />
//                 <input
//                     {...register("title")}
//                     className="w-full block mb-3 outline-0 border-b p-2 "
//                     type="text"
//                     placeholder="Recipe Title"
//                 />
//                 <input
//                     {...register("chef")}
//                     className="w-full block mb-3 outline-0 border-b p-2 "
//                     type="text"
//                     placeholder="Chef Name"
//                 />
//                 <textarea
//                     {...register("desc")}
//                     className="w-full block mb-3 outline-0 border-b p-2 "
//                     placeholder="recipe descriotion here..."
//                 ></textarea>
//                 <textarea
//                     {...register("ingr")}
//                     className="w-full block mb-3 outline-0 border-b p-2 "
//                     placeholder="recipe ingredients here (seperated by comma)..."
//                 ></textarea>
//                 <textarea
//                     {...register("inst")}
//                     className="w-full block mb-3 outline-0 border-b p-2 "
//                     placeholder="recipe instructions here (seperated by comma)..."
//                 ></textarea>
//                 <select
//                     {...register("category")}
//                     className="w-full block mb-3 outline-0 border-b p-2 "
//                 >
//                     <option value="breakfast">Breakfast</option>
//                     <option value="lunch">Lunch</option>
//                     <option value="supper">Supper</option>
//                     <option value="dinner">Dinner</option>
//                 </select>
//                 <button
//                     type="submit"
//                     className="mt-5 px-4 py-2 mr-10 bg-blue-400 rounded"
//                 >
//                     Update Recipe
//                 </button>
//                 <button
//                     onClick={deletehandler}
//                     type="button"
//                     className="mt-5 px-4 py-2 bg-red-400 rounded"
//                 >
//                     Delete Recipe
//                 </button>
//             </form>
//         </div>
//     ) : (
//         "loading..."
//     );
// };

// export default Recipe;
