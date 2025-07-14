import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-xl font-bold">
        <img
          className="h-15 w-auto"
          src="https://thumbs.dreamstime.com/b/nike-logo-white-background-editorial-illustration-company-168841205.jpg"
          alt="logo"
        />
      </div>

      {/* Center: Menu */}
      <div className="space-x-6 hidden md:flex">
        <a href="#" className="hover:text-gray-300 font-bold">
          MENU
        </a>
        <a href="#" className="hover:text-gray-300 font-bold">
          LOCATION
        </a>
        <a href="#" className="hover:text-gray-300 font-bold">
          ABOUT
        </a>
        <a href="#" className="hover:text-gray-300 font-bold">
          CONTACT
        </a>
      </div>

      {/* Right: Login & Signup */}
      <div className="space-x-4">
        <button className="px-4 py-2 bg-red-700 text-white font-bold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
