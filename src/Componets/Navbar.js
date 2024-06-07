import React, { useState } from "react";
import back from '../../src/assets/1716900646290.png'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex justify-between items-center top-0 left-0 w-full h-20 px-4 bg-yellow-500 shadow-md">
      <div className="flex items-center space-x-4">
        <a href="/" className="flex items-center">
          <img src={back} alt="Logo" className="h-24 cursor-pointer" />
        </a>
        <div className="hidden md:flex items-left space-x-4">
          <a href="/" className="text-white font-semibold hover:text-gray-200">Home</a>
          <a href="/explore" className="text-white font-semibold hover:text-gray-200">Explore</a>
          <a href="/About" className="text-white font-semibold hover:text-gray-200">About us</a>
          <a href="/contact" className="text-white font-semibold hover:text-gray-200">Contact us</a>
          <a href="/reviews" className="text-white font-semibold hover:text-gray-200">Reviews</a>
        </div>
      </div>
     
      <div className="hidden md:flex items-right space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
          onClick={() => (window.location.href = "Booking-form.html")}
        >
          Enquire now!
        </button>
      </div>

    
      <div className="flex items-center md:hidden gap-4">
      <button
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
          onClick={() => (window.location.href = "Booking-form.html")}
        >
          Enquire now!
        </button>
        <button className="focus:outline-none" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div
        className={
          isSidebarOpen
            ? "md:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex items-center justify-center"
            : "hidden"
        }
      >
        
        
      
        <div className="bg-yellow-400 opacity-60 rounded p-4 w-64 relative" onClick={e => e.stopPropagation()}> 
          <button className="absolute top-2 right-2 focus:outline-none" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col space-y-4 mt-8">
            <a href="/" className="text-gray-800 font-semibold hover:text-gray-600">Home</a>
            <a href="/explore" className="text-gray-800 font-semibold hover:text-gray-600">Explore</a>
            <a href="/about" className="text-gray-800 font-semibold hover:text-gray-600">About us</a>
            <a href="/contact" className="text-gray-800 font-semibold hover:text-gray-600">Contact us</a>
            <a href="/reviews" className="text-gray-800 font-semibold hover:text-gray-600">Reviews</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
