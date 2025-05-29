import React from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-200  py-4 px-5 flex flex-col items-center ">

      <Navbar />
      <Mainroutes />

    </div>
  );
};

export default App;
