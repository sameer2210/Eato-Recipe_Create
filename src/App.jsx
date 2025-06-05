import React from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 via-white to-green-50 py-2 px-3 sm:py-4 sm:px-5 lg:px-8 flex flex-col items-center overflow-x-hidden rounded-xl">
      <div className="w-full max-w-7xl flex flex-col">
        <Navbar />
        <Mainroutes />
      </div>
    </div>
  );
};

export default App;
