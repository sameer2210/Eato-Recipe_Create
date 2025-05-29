import React from "react";
import { Route, Routes } from "react-router";
import Home from "./../pages/Home";
import Recipes from "./../pages/Recipes";
import Create from "./../pages/Create";
import Update from "./../pages/Update";
import Favroite from "./../pages/Favroite";
import About from "./../pages/About";
import PageNotFound from "../pages/PageNotFound";
import Recipe from "../pages/Recipe";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/create-recipe" element={<Create />} />
      <Route path="/recipes/details/:id" element={<Recipe />} />
      <Route path="/recipes/update-recipes/:id" element={<Update />} />

      <Route path="/favroite" element={<Favroite />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
