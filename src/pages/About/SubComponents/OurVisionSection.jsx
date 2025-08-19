import React from 'react';

const OurVisionSection = ({ heading1, image, heading2, subheading2, description2 }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 py-8 lg:justify-between gap-8 md:gap-12">
      {/* Left Section */}
      <div className="flex flex-col items-start justify-start text-left lg:w-[25%]">
        <div className="flex items-center justify-center lg:justify-start mb-4">
          <span className="text-blue-500 text-2xl mr-2">
            <img src="/Images/Vector.png" alt="" />
          </span>

          <span className="text-neutral-800 text-sm font-medium font-['Montserrat'] tracking-tight">
            BUILDING A ANALYSEMENT ORG.
          </span>
        </div>
        <div className="text-neutral-800 text-3xl font-bold font-['Poppins'] leading-tight sm:leading-tight md:leading-tight">
          {heading1}
          <span className="relative -top-4">
            <img src="/Images/lightmuvector.svg fill.png" alt="" />
          </span>
        </div>
      </div>

      {/* Middle Image */}
      <div className="w-full lg:w-[25%] flex justify-center items-center">
        <div
          className="w-full max-w-[300px] h-96 bg-no-repeat bg-cover bg-center rounded-3xl shadow-lg border border-gray-100"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>

      {/* Right Content Card */}
      <div className="flex flex-col w-full lg:w-[50%] items-start lg:items-end lg:justify-end">
        <div className="bg-[#E8EFEF] p-6 rounded-lg shadow-lg relative w-full h-56">
          <div className="absolute -top-5 right-8 text-gray-300 text-[10em] font-bold font-['Poppins']">
            ”
          </div>
          <div className="text-black text-xl sm:text-2xl md:text-2xl font-bold font-['Poppins'] leading-8 mb-4">
            {heading2}
          </div>
          <div className="text-[#5B5B5B] text-base sm:text-lg lg:text-lg font-medium font-['Montserrat'] leading-relaxed tracking-wide mb-4">
            {subheading2}
          </div>
          <div className="text-[#5B5B5B] text-base sm:text-lg lg:text-sm font-medium font-['Montserrat'] tracking-tight mb-6">
            {description2}{' '}
            {/* <button className="flex items-center justify-end px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              Explore <span className="ml-2">→</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVisionSection;
