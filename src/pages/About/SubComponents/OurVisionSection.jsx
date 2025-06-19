import React from 'react';

const OurVisionSection = ({ heading1, image, heading2, subheading2, description2 }) => {
  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 py-8">
      {/* Section Heading */}
      <div className="flex bg-black w-full h-16 sm:h-20 md:h-[80px] justify-center items-center mb-6 sm:mb-8 md:mb-12 rounded-xl shadow-lg">
        <div className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-['Poppins'] px-4 sm:px-8 md:px-[89px] py-3 sm:py-4 md:py-[28px]">
          Our Vision
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-12">
        {/* Left Heading */}
        <div className="order-1 lg:order-1 flex flex-col max-w-full lg:max-w-[285px] mb-4 lg:mb-0 justify-start lg:mt-24 p-6">
          <div className="text-neutral-800 text-2xl sm:text-3xl font-bold font-['Montserrat'] leading-[36px] sm:leading-[48px] tracking-tight">
            {heading1}
          </div>
        </div>
        {/* Image */}
        <div className="order-2 lg:order-2 w-full lg:w-[400px] flex justify-center items-center">
          <div
            className="w-full max-w-[400px] h-48 sm:h-64 md:h-80 lg:h-[500px] bg-no-repeat bg-cover bg-center rounded-3xl shadow-lg border border-gray-100"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        {/* Right Content */}
        <div className="order-3 lg:order-3 flex w-full lg:w-[407px] items-end">
          <div className="flex flex-col w-full lg:w-[407px] p-6">
            <div className="text-black text-xl sm:text-2xl md:text-3xl font-bold font-['Poppins'] leading-8 sm:leading-10 mb-3 sm:mb-6">
              {heading2}
            </div>
            <div className="text-black text-base sm:text-lg lg:text-lg font-medium font-['Montserrat'] leading-relaxed tracking-wide mb-4 sm:mb-6">
              {subheading2}
            </div>
            <div className="text-neutral-800 text-base sm:text-lg lg:text-lg font-medium font-['Montserrat'] leading-tight md:leading-9 tracking-tight">
              {description2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVisionSection;
