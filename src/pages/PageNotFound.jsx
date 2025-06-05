import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <>
      <section
        className="flex min-h-screen justify-center items-center px-5 sm:px-8 py-8 bg-cover bg-no-repeat bg-right"
        style={{ backgroundImage: "url(/background.svg)" }}
      >
        <div className="max-w-6xl text-center">
          <img
            src="/notFound.svg"
            alt="notFound"
            className="mb-8 w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-2">
            LOOKS LIKE YOU'RE LOST
          </h1>
          <p className="text-base sm:text-lg font-light text-gray-600 mb-6">
            We can't seem to find you the page you're looking for
          </p>
          <Link
            className="inline-flex items-center justify-center border border-gray-900 px-7 py-2 rounded-full text-sm text-gray-900 no-underline hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out group"
            to="/"
          >
            Back to Home
            <span className="ml-4 p-1.5 bg-gray-900 rounded-full text-white group-hover:bg-white group-hover:text-gray-900 transition-all duration-300 ease-in-out">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
