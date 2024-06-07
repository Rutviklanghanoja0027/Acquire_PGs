import React from 'react';
import background from '../../src/assets/bg.jpg';

const Intro = () => {
  return (
    <header className="relative flex flex-col items-center justify-center overflow-hidden min-h-[600px] min-w-screen bg-gradient-to-b from-black to-black">
      
      <div className="absolute inset-0">
        <img src={background} alt="" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="heading-container mb-8">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4">Redefining PG Spaces of Ahmedabad</h1>
        </div>

        <div className="properties-container mb-8">
          <div className="slide-in">
            <h5 className="text-lg md:text-xl font-semibold mb-2">A great Platform to get PGs and stay comfortably</h5>
            <p className="text-sm md:text-base animate-fadeIn mb-6">Properties all across Ahmedabad in all major areas</p>
          </div>

          <div className="button-container space-y-4 md:space-y-0 md:flex md:space-x-4">
  <a href="Navrangpura-properties.html" className="button-link">
    <button className="w-full md:w-auto px-4 py-2 mb-4 md:mb-0 bg-yellow-500 bg-opacity-50 text-white text-opacity-100 font-semibold rounded hover:bg-yellow-600 focus:outline-none focus:bg-green-600 cursor-pointer">
      <div className='font-semibold'>Navrangpura</div>
    </button>
  </a>
  <a href="Shyamal-properties.html" className="button-link">
    <button className="w-full md:w-auto px-4 py-2 mb-4 md:mb-0 bg-yellow-500 bg-opacity-50 text-white text-opacity-100 font-semibold rounded hover:bg-yellow-600 focus:outline-none focus:bg-green-600 cursor-pointer">
      <div className='font-semibold'>Shyamal</div>
    </button>
  </a>
  <a href="Vastrapur-properties.html" className="button-link">
    <button className="w-full md:w-auto px-4 py-2 mb-4 md:mb-0 bg-yellow-500 bg-opacity-50 text-white text-opacity-100 font-semibold rounded hover:bg-yellow-600 focus:outline-none focus:bg-green-600 cursor-pointer">
      <div className='font-semibold'>Vastrapur</div>
    </button>
  </a>
  <a href="Satellite-properties.html" className="button-link">
    <button className="w-full md:w-auto px-4 py-2 mb-4 md:mb-0 bg-yellow-500 bg-opacity-50 text-white text-opacity-100 font-semibold rounded hover:bg-yellow-600 focus:outline-none focus:bg-green-600 cursor-pointer">
      <div className='font-semibold'>Satellite</div>
    </button>
  </a>
</div>

        </div>
      </div>
    </header>
  );
};

export default Intro;
