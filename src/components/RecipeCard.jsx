import React from "react";
import { Link } from "react-router";

const RecipeCard = (props) => {
  const { id, image, title, chef, desc } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="w-[22vw] block shadow rounded-2xl overflow-hidden"
    >
      <img
        className="w-full h-[30vh] object-cover"
        src={image}
        alt="network error"
      />
      <h1 className="text-3xl font-bold font-mono pl-2 mt-2">{title}</h1>
      <small className="pl-2 text-red-400 text-xl mt-3">{chef}</small>
      <p className="pl-2 mt-3 pb-10">
        {/* {desc} */}
        {desc.slice(0, 100)}...{" "}
        <span className="text-blue-400">more</span>
      </p>
    </Link>
  );
};

export default RecipeCard;
