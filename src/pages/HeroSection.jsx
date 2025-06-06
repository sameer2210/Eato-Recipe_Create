import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
            transform: `translate(-50%, -50%) rotate(${mousePosition.x * 0.1}deg)`
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-violet-200/20 to-pink-200/20 rounded-full blur-2xl transition-all duration-700 ease-out"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
            transform: `translate(50%, 50%) rotate(-${mousePosition.y * 0.1}deg)`
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-pink-600 to-orange-300 rounded-full opacity-40 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full p-4 sm:p-6 lg:p-8 ">
        {/* Desktop Layout - Asymmetrical Masonry Style */}
        <div className=" md:flex p-4 ">
          {/* Left Column - 30% */}
          <div className="lg:w-3/10  flex flex-col  space-y-6 pr-6 ">
            {/* Create Title */}
            <div className="flex-1 flex items-start justify-start pt-12">
              <h1
                className={`text-4xl lg:text-6xl xl:text-7xl font-thin tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 leading-none transform transition-all duration-1000 hover:scale-105 transition-transform duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              >
                Create
              </h1>
            </div>

            {/* AI Logo */}
            <div className="flex-none flex items-center justify-center">
              <div
                className={`transform transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <div className="group relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 " />
                  <div className="relative w-28 h-28 lg:w-32 lg:h-32 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-sm font-light text-gray-500 tracking-widest mb-1">
                        Ai
                      </div>
                      <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                        F
                      </div>
                      <div className="text-sm font-light text-gray-500 tracking-widest mt-1">
                        EST
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Title */}
            <div className="flex-1 flex items-end justify-start pb-12">
              <h1
                className={`text-4xl lg:text-6xl xl:text-7xl font-thin tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 leading-none transform transition-all duration-700 delay-1000 hover:scale-105 transition-transform duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                Share
              </h1>
            </div>
          </div>

          {/* Center Column - 40% */}
          <div className="lg:w-2/5 flex flex-col items-center justify-center px-4">
            <div
              className={`relative group transform transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-pink-300 to-orange-300 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1574727979094-5478260286dd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Stack of pancakes with syrup"
                className="relative w-full max-w-md h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 border border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </div>
          </div>

          {/* Right Column - 30% */}
          <div className="lg:w-3/10  flex flex-col space-y-6 pl-6">
            {/* Cook Title */}
            <div className="flex-1 flex items-start justify-end pt-12">
              <h1
                className={`text-4xl lg:text-6xl xl:text-7xl font-thin tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 leading-none transform transition-all duration-700 delay-500 hover:scale-105 transition-transform duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                Cook
              </h1>
            </div>

            {/* Burger Image */}
            <div className="flex-none flex items-center justify-between">
              <div
                className={`relative group transform transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-300 to-pink-300 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1605709303019-109aaf636e32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Gourmet burger with purple cabbage"
                  className="relative w-full max-w-xs h-64 lg:h-56 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500 border border-white/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>

            {/* Bottom Image */}
            <div className="flex-1 flex items-end justify-end ">
              <div
                className={`transform transition-all duration-700 delay-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-violet-300 to-pink-300 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative w-96 h-72 lg:h-36 overflow-hidden rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500 border border-white/20">
                    <img
                      src="https://images.unsplash.com/photo-1608579528402-8b494d52269d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Food in bowl"
                      className="w-full h-full  object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Cooking made Easy
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div
              className="absolute top-8 right-8 opacity-20 animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full" />
            </div>
            <div
              className="absolute bottom-8 right-12 opacity-20 animate-bounce"
              style={{ animationDelay: "2s" }}
            >
              <div className="w-4 h-4 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
