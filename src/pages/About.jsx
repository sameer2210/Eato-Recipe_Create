
import React from "react";

const About = () => {
  return (
    <section className="about py-16 lg:py-24 bg-gradient-to-br from-pink-50 via-white to-green-50 py-2 px-3 sm:py-4 sm:px-5 lg:px-8" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="banner order-2 lg:order-1">
            <div className="top mb-8">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Our Story
                </span>
              </div>
              <h1 className="heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                ABOUT US
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light italic">
                The only thing we're serious about is food.
              </p>
            </div>
            
            <div className="mid mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident possimus optio adipisci dolores impedit illum iusto
                perferendis, laudantium quod accusamus consequuntur consectetur,
                tempore nulla error iure reiciendis dolorem assumenda.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Necessitatibus fugit asperiores totam rem esse exercitationem
                iusto ipsum qui dolore ex, accusantium repellat mollitia
                repellendus. Our passion for culinary excellence drives everything we do.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span className="mr-2">Explore Menu</span>
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-black hover:bg-red-100 hover:text-black font-semibold rounded-full transition-all duration-300">
                Our Story
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="banner order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1708335583165-57aa131a4969?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Delicious food presentation showcasing our culinary expertise" 
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay decoration */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className=" font-semibold text-sm">Est. 2020</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full blur-xl opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-200 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold  mb-2 transition-transform duration-300 group-hover:scale-110">500+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold  mb-2 transition-transform duration-300 group-hover:scale-110">50+</div>
              <div className="text-gray-600 font-medium">Menu Items</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold  mb-2 transition-transform duration-300 group-hover:scale-110">5</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold  mb-2 transition-transform duration-300 group-hover:scale-110">24/7</div>
              <div className="text-gray-600 font-medium">Service</div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-24">
            <div className="text-center p-6 bg-black hover:bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Service</h3>
              <p className="text-gray-600">Quick delivery without compromising on quality</p>
            </div>

            <div className="text-center p-6 bg-black hover:bg-amber-50  rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Made with Love</h3>
              <p className="text-gray-600">Every dish crafted with passion and care</p>
            </div>

            <div className="text-center p-6 bg-black hover:bg-amber-50  rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the finest ingredients in every meal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;