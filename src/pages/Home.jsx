import React from "react";
import About from "./About";
import HeroSection from "./HeroSection";
import Recipes from "./Recipes";
import Create from './Create';
import Recipe from './Recipe';
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Recipes/>
      {/* <Recipe/> */}
      {/* <Create/> */}
      <About />
      <Footer/>
    </div>
  );
};

export default Home;
