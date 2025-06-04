import React from "react";
import About from "./About";
import HeroSection from "./HeroSection";
import Create from './Create';
import Recipe from './Recipe';
import Recipes from "./Recipes";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Recipes/>
      {/* <Recipe/> */}
      {/* <Create/> */}
      <About />
    </div>
  );
};

export default Home;
