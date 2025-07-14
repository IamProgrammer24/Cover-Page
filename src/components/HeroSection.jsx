import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-18">
        {/* Left: Text + Buttons */}
        <div className="max-w-lg text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-7xl font-bold mb-6 text-gray-900">
            YOUR FEET DESERVER THE BEST
          </h1>
          <p className="text-gray-700 mb-6">
            Find your perfect style with our curated collections of fashion,
            accessories, and more Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ex a sapiente minus nemo, quos quod illum dolorem
            porro ducimus officia nisi accusantium ea quam ut blanditiis autem.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-2 bg-red-800 text-white">
              Shop Now
            </button>
            <button className="px-6 py-2 border border-gray-500 text-gray-500 font-bold">
              Category
            </button>
          </div>
          <div className="mt-3">
            <p className="text-sm text-gray-500">Also Available On</p>
            <div className="flex justify-items-center pt-2">
              <img
                className="h-6 w-auto mr-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxggIt5CPQqUxKi3eW4QhNIKv5eH5LdhRwMA&s"
                alt="flipkart"
              />
              <img
                className="h-6 w-auto"
                src="https://cdn.freelogovectors.net/wp-content/uploads/2023/03/amazon_logo-freelogovectors.net_.png"
                alt="amazone"
              />
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://pngate.com/wp-content/uploads/2023/09/Red-Nike-sport-sneakers.png" // Replace with your image path
            alt="Product"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
